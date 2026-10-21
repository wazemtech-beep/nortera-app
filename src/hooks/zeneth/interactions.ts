import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { scrolling as lenis } from "@/hooks/scrollController";

export function mountZenethInteractions(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const q = <T extends HTMLElement = HTMLElement>(s: string): T[] =>
    Array.from(root.querySelectorAll<T>(s));
  const cleanups: (() => void)[] = [];
  let disposed = false;
  const listen = (
    target: EventTarget,
    event: string,
    handler: EventListener,
  ) => {
    target.addEventListener(event, handler);
    cleanups.push(() => target.removeEventListener(event, handler));
  };
  const media = gsap.matchMedia();
  media.add(
    {
      desktop: "(min-width:992px)",
      tablet: "(min-width:768px) and (max-width:991px)",
      small: "(min-width:480px) and (max-width:767px)",
      tiny: "(max-width:479px)",
      reduced: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const reduced = !!context.conditions?.reduced;
      const desktop = !!context.conditions?.desktop;
      const breakpoint = desktop
        ? "main"
        : context.conditions?.tablet
          ? "medium"
          : context.conditions?.small
            ? "small"
            : "tiny";
      const listeners: (() => void)[] = [];
      const splits: SplitText[] = [];
      const splitCache = new Map<HTMLElement, SplitText>();
      const on = (
        element: EventTarget,
        name: string,
        callback: EventListener,
      ) => {
        const handler: EventListener = (event) =>
          context.add(() => callback(event));
        element.addEventListener(name, handler);
        listeners.push(() => element.removeEventListener(name, handler));
      };
      const split = (
        element: HTMLElement,
        type: string,
        mask?: "lines" | "words" | "chars",
      ) => {
        let instance = splitCache.get(element);
        if (!instance) {
          try {
            instance = SplitText.create(element, { type, mask, aria: "auto" });
          } catch {
            return [];
          }
          if (!instance) return [];
          splitCache.set(element, instance);
          splits.push(instance);
        }
        const result =
          type === "lines"
            ? instance.lines
            : type === "words"
              ? instance.words
              : instance.chars;
        return result ?? [];
      };
      if (!reduced) {
        q('[appear="heading"]').forEach((heading) => {
          const count = heading.textContent?.length || 0;
          const chars = split(heading, "words,chars");
          if (!chars.length) return;
          gsap.fromTo(
            chars,
            { opacity: 0, filter: "blur(20px)" },
            {
              opacity: 1,
              filter: "blur(0px)",
              duration: count > 60 ? 0.35 : 0.5,
              stagger: count > 60 ? 0.015 : 0.025,
              ease: "power2.out",
              scrollTrigger: { trigger: heading, start: "top 80%", once: true },
            },
          );
        });
        q('[appear="paragraph"]').forEach((paragraph) => {
          const instance = SplitText.create(paragraph, {
            type: "lines",
            autoSplit: true,
            aria: "auto",
            onSplit: (self) =>
              gsap.fromTo(
                self.lines,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                  ease: "power2.out",
                  stagger: 0.12,
                  scrollTrigger: {
                    trigger: paragraph,
                    start: "top 80%",
                    once: true,
                  },
                },
              ),
          });
          splits.push(instance);
        });
        q('[data-animate="text"],[data="hero-appear"]').forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 85%", once: true },
            },
          );
        });
        q('[image-appear="page-load"]').forEach((image, index) => {
          gsap.fromTo(
            image,
            { opacity: 0, scale: 1.2 },
            {
              opacity: 1,
              scale: 1,
              duration: 2,
              delay: index * 0.05,
              ease: "power3.out",
              scrollTrigger: { trigger: image, start: "top 85%", once: true },
            },
          );
        });
        q("[data-counter]").forEach((element) => {
          const text = element.getAttribute("data-counter") || "0";
          const number = parseFloat(text.replace(/[^0-9.]/g, ""));
          const decimals = text.includes(".") ? 1 : 0;
          const prefix = text.match(/^[^0-9]*/)?.[0] || "";
          const suffix = text.match(/[^0-9.]+$/)?.[0] || "";
          const counter = { value: 0 };
          const original = element.textContent;
          listeners.push(() => {
            element.textContent = original;
          });
          gsap.to(counter, {
            value: number,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: { trigger: element, start: "top 85%", once: true },
            onUpdate: () => {
              element.textContent = `${prefix}${counter.value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
            },
          });
        });
        q('[data="image"]').forEach((image) => {
          const overlay =
            image.parentElement?.querySelector('[data="overlay"]');
          if (!overlay) return;
          // Reset the CSS translateY(-100%) as well as GSAP's percentage offset.
          gsap.set(overlay, { y: 0, yPercent: 0, autoAlpha: 1 });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top 85%",
              once: true,
            },
          });
          timeline
            .to(
              overlay,
              { yPercent: 100, duration: 0.8, ease: "power2.inOut" },
              0,
            )
            .fromTo(
              image,
              { scale: 1.4 },
              { scale: 1, duration: 1.5, ease: "power2.out" },
              0,
            )
            .set(overlay, { autoAlpha: 0 }, 0.8);
        });
      } else {
        gsap.set(q('[data="overlay"]'), { y: 0, yPercent: 100, autoAlpha: 0 });
      }

      const cards = q('[approach-v1^="card-"]');
      const images = q('[approach-v1^="image-"]');
      if (cards.length && images.length) {
        let current = 0;
        let busy = false;
        gsap.set(cards, { autoAlpha: 0, y: 30, scale: 0.98 });
        gsap.set(images, { autoAlpha: 0, scale: 1.05 });
        gsap.set([cards[0], images[0]], { autoAlpha: 1, y: 0, scale: 1 });
        const show = (direction: number) => {
          if (busy) return;
          busy = true;
          const next = (current + direction + cards.length) % cards.length;
          gsap.set(cards[next], {
            autoAlpha: 0,
            y: 30 * direction,
            scale: 0.98,
          });
          gsap.set(images[next], {
            autoAlpha: 0,
            scale: 1.06,
            rotation: 2 * direction,
          });
          gsap
            .timeline({
              onComplete: () => {
                current = next;
                busy = false;
              },
            })
            .to(
              cards[current],
              {
                autoAlpha: 0,
                y: -30 * direction,
                scale: 0.98,
                duration: reduced ? 0 : 0.38,
                ease: "power3.inOut",
              },
              0,
            )
            .to(
              cards[next],
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: reduced ? 0 : 0.55,
                ease: "power3.out",
              },
              reduced ? 0 : 0.12,
            )
            .to(
              images[current],
              {
                autoAlpha: 0,
                scale: 0.96,
                rotation: -2 * direction,
                duration: reduced ? 0 : 0.32,
                ease: "power2.inOut",
              },
              0,
            )
            .to(
              images[next],
              {
                autoAlpha: 1,
                scale: 1,
                rotation: 0,
                duration: reduced ? 0 : 0.45,
                ease: "power3.out",
              },
              reduced ? 0 : 0.03,
            );
        };
        for (const [name, direction] of [
          ["previous", -1],
          ["next", 1],
        ] as const) {
          q(`[click="approach-v1-button-${name}"]`).forEach((button) => {
            button.setAttribute("role", "button");
            button.tabIndex = 0;
            button.setAttribute("aria-label", `${name} financial strategy`);
            on(button, "click", () => show(direction));
            on(button, "keydown", (event) => {
              if (["Enter", " "].includes((event as KeyboardEvent).key)) {
                event.preventDefault();
                show(direction);
              }
            });
          });
        }
      }

      const benefits = q('[hover^="why-choose-us-v1-card-"]');
      const updateBenefit = (active: number, animate: boolean) =>
        benefits.forEach((card, index) => {
          const answer = card.querySelector(
            ".rt-why-choose-us-v1-card-answer-wrap",
          );
          const text = card.querySelectorAll(
            ".rt-text-style-h4,.rt-why-choose-us-v1-card-answer",
          );
          card.setAttribute("aria-expanded", String(index === active));
          gsap.to(card, {
            backgroundColor: index === active ? "#143f37" : "#ffffff",
            duration: animate && !reduced ? 0.5 : 0,
            overwrite: true,
            ease: "power2.inOut",
          });
          gsap.to(text, {
            color: index === active ? "#ffffff" : "#143f37",
            duration: animate && !reduced ? 0.5 : 0,
            overwrite: true,
          });
          if (answer)
            gsap.to(answer, {
              height: index === active ? "auto" : 0,
              duration: animate && !reduced ? 0.5 : 0,
              ease: "power2.inOut",
              overwrite: true,
            });
        });
      updateBenefit(0, false);
      benefits.forEach((card, index) => {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        on(card, "mouseenter", () => updateBenefit(index, true));
        on(card, "focus", () => updateBenefit(index, true));
        on(card, "click", () => updateBenefit(index, true));
        on(card, "keydown", (event) => {
          if (["Enter", " "].includes((event as KeyboardEvent).key)) {
            event.preventDefault();
            updateBenefit(index, true);
          }
        });
      });

      q(".rt-mobile-slider").forEach((processSlider) => {
        if (desktop) return;
        const slides = Array.from(
          processSlider.querySelectorAll<HTMLElement>(".w-slide"),
        );
        const nav = processSlider.querySelector(".w-slider-nav");
        const saved = nav ? Array.from(nav.childNodes) : [];
        let index = 0;
        let startX = 0;
        let paused = false;
        const dots: HTMLButtonElement[] = [];
        const show = (next: number) => {
          index = (next + slides.length) % slides.length;
          gsap.to(slides, {
            xPercent: -100 * index,
            duration: reduced ? 0 : 0.5,
            ease: "power1.inOut",
            overwrite: true,
          });
          slides.forEach((slide, i) => {
            slide.setAttribute("aria-hidden", String(i !== index));
            slide.inert = i !== index;
          });
          dots.forEach((dot, i) => {
            dot.classList.toggle("w-active", i === index);
            dot.setAttribute("aria-current", String(i === index));
          });
        };
        if (nav) {
          nav.replaceChildren();
          slides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = "w-slider-dot";
            dot.type = "button";
            dot.setAttribute("aria-label", `Show slide ${i + 1}`);
            nav.append(dot);
            dots.push(dot);
            on(dot, "click", () => show(i));
          });
        }
        show(0);
        const auto = processSlider.getAttribute("data-autoplay") === "true";
        const delay = Number(processSlider.getAttribute("data-delay")) || 3000;
        const interval =
          reduced || !auto
            ? undefined
            : window.setInterval(() => {
                if (!paused && !document.hidden)
                  context.add(() => show(index + 1));
              }, delay);
        on(processSlider, "mouseenter", () => {
          paused = true;
        });
        on(processSlider, "mouseleave", () => {
          paused = false;
        });
        on(processSlider, "focusin", () => {
          paused = true;
        });
        on(processSlider, "focusout", () => {
          paused = false;
        });
        on(processSlider, "touchstart", (event) => {
          startX = (event as TouchEvent).touches[0].clientX;
        });
        on(processSlider, "touchend", (event) => {
          const delta =
            (event as TouchEvent).changedTouches[0].clientX - startX;
          if (Math.abs(delta) > 45) show(index + (delta < 0 ? 1 : -1));
        });
        on(processSlider, "keydown", (event) => {
          const key = (event as KeyboardEvent).key;
          if (["ArrowLeft", "ArrowRight"].includes(key)) {
            event.preventDefault();
            show(index + (key === "ArrowRight" ? 1 : -1));
          }
        });
        processSlider
          .querySelector(".w-slider-arrow-left")
          ?.addEventListener("click", previous);
        processSlider
          .querySelector(".w-slider-arrow-right")
          ?.addEventListener("click", next);
        function previous() {
          context.add(() => show(index - 1));
        }
        function next() {
          context.add(() => show(index + 1));
        }
        listeners.push(() => {
          processSlider
            .querySelector(".w-slider-arrow-left")
            ?.removeEventListener("click", previous);
          processSlider
            .querySelector(".w-slider-arrow-right")
            ?.removeEventListener("click", next);
        });
        listeners.push(() => {
          if (interval) clearInterval(interval);
          if (nav) nav.replaceChildren(...saved);
          slides.forEach((slide) => {
            slide.inert = false;
            slide.removeAttribute("aria-hidden");
          });
        });
      });
      return () => {
        listeners.forEach((cleanup) => cleanup());
        splits.forEach((instance) => instance.revert());
      };
    },
  );

  const nav = root.querySelector<HTMLElement>("header");
  const dropdown = root.querySelector<HTMLElement>(".w-dropdown");
  const toggle = dropdown?.querySelector<HTMLElement>(".w-dropdown-toggle");
  const list = dropdown?.querySelector<HTMLElement>(".w-dropdown-list");
  const mobile = root.querySelector<HTMLElement>('[hamburger="menu"]');
  const overlay = root.querySelector<HTMLElement>('[hamburger="overlay"]');
  const openButton = root.querySelector<HTMLElement>('[hamburger="open"]');
  const closeButton = root.querySelector<HTMLElement>('[hamburger="close"]');
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let menuOpen = false;
  const dropdownMenu =
    dropdown?.querySelector<HTMLElement>('[dropdown="menu"]');
  const dropdownIcon =
    dropdown?.querySelector<HTMLElement>('[dropdown="icon"]');
  const navContext = gsap.context(() => {
    if (mobile) gsap.set(mobile, { x: 0, xPercent: 100 });
    if (dropdownMenu) gsap.set(dropdownMenu, { height: 0, opacity: 0 });
  }, root);
  const setDropdown = (open: boolean) =>
    navContext.add(() => {
      if (open) list?.classList.add("w--open");
      toggle?.classList.toggle("w--open", open);
      toggle?.setAttribute("aria-expanded", String(open));
      if (dropdownIcon)
        gsap.to(dropdownIcon, {
          rotation: open ? 180 : 0,
          duration: reduced ? 0 : 0.3,
          overwrite: true,
        });
      if (dropdownMenu)
        gsap.to(dropdownMenu, {
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          duration: reduced ? 0 : 0.3,
          ease: "none",
          overwrite: true,
          onComplete: () => {
            if (toggle?.getAttribute("aria-expanded") !== "true")
              list?.classList.remove("w--open");
          },
        });
      else list?.classList.toggle("w--open", open);
    });
  if (toggle) {
    toggle.tabIndex = 0;
    toggle.setAttribute("role", "button");
    toggle.setAttribute("aria-expanded", "false");
    listen(toggle, "click", () =>
      setDropdown(toggle.getAttribute("aria-expanded") !== "true"),
    );
    listen(toggle, "keydown", (event) => {
      if (["Enter", " "].includes((event as KeyboardEvent).key)) {
        event.preventDefault();
        setDropdown(toggle.getAttribute("aria-expanded") !== "true");
      }
    });
  }
  if (dropdown) {
    listen(dropdown, "mouseenter", () => setDropdown(true));
    listen(dropdown, "mouseleave", () => setDropdown(false));
    listen(dropdown, "focusout", (event) => {
      if (!dropdown.contains((event as FocusEvent).relatedTarget as Node))
        setDropdown(false);
    });
  }
  q(".w-tabs").forEach((group, groupIndex) => {
    const tabs = Array.from(
      group.querySelectorAll<HTMLElement>(".w-tab-link"),
    ).filter((tab) => tab.closest(".w-tabs") === group);
    const panes = Array.from(
      group.querySelectorAll<HTMLElement>(".w-tab-pane"),
    ).filter((pane) => pane.closest(".w-tabs") === group);
    const tablist = group.querySelector(".w-tab-menu");
    tablist?.setAttribute("role", "tablist");
    const menuTabs = !!group.closest("header");
    const syncTab = (tab: HTMLElement, index: number) => {
      const name = tab.getAttribute("data-w-tab");
      const pane = panes.find(
        (item) => item.getAttribute("data-w-tab") === name,
      );
      const active = tab.classList.contains("w--current");
      tab.id ||= `zeneth-tabs-${groupIndex}-${index}`;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (pane) {
        pane.id ||= `zeneth-pane-${groupIndex}-${index}`;
        tab.setAttribute("aria-controls", pane.id);
        pane.setAttribute("role", "tabpanel");
        pane.setAttribute("aria-labelledby", tab.id);
        pane.setAttribute("aria-hidden", String(!active));
        pane.inert = !active;
        if (active) pane.dispatchEvent(new Event("template:tab-visible"));
      }
    };
    tabs.forEach(syncTab);
    const activate = (tab: HTMLElement) =>
      navContext.add(() => {
        const name = tab.getAttribute("data-w-tab");
        const wasActive = tab.classList.contains("w--current");
        tabs.forEach((item) =>
          item.classList.toggle("w--current", item === tab),
        );
        panes.forEach((pane) =>
          pane.classList.toggle(
            "w--tab-active",
            pane.getAttribute("data-w-tab") === name,
          ),
        );
        tabs.forEach(syncTab);
        const pane = panes.find((item) =>
          item.classList.contains("w--tab-active"),
        );
        if (pane && !menuTabs && !wasActive) {
          // Hidden FAQ panels cannot fire their scroll reveals until selected.
          const cards = pane.querySelectorAll('[data="card-v1"]');
          gsap.killTweensOf(cards);
          gsap.fromTo(
            cards,
            { opacity: 0, yPercent: 30 },
            {
              opacity: 1,
              yPercent: 0,
              duration: reduced ? 0 : 0.5,
              stagger: reduced ? 0 : 0.2,
              overwrite: true,
            },
          );
        }
        lenis.resize();
        ScrollTrigger.refresh();
      });
    tabs.forEach((tab, index) => {
      listen(tab, "click", (event) => {
        event.preventDefault();
        activate(tab);
      });
      if (menuTabs) listen(tab, "mouseenter", () => activate(tab));
      listen(tab, "keydown", (event) => {
        const key = (event as KeyboardEvent).key;
        if (["Enter", " "].includes(key)) {
          event.preventDefault();
          activate(tab);
        } else if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) {
          event.preventDefault();
          const next =
            key === "Home"
              ? 0
              : key === "End"
                ? tabs.length - 1
                : (index + (key === "ArrowRight" ? 1 : -1) + tabs.length) %
                  tabs.length;
          activate(tabs[next]);
          tabs[next].focus();
        }
      });
    });
  });
  const setMenu = (open: boolean) =>
    navContext.add(() => {
      menuOpen = open;
      if (open) nav?.classList.add("zeneth-menu-open");
      openButton?.setAttribute("aria-expanded", String(open));
      if (mobile) {
        mobile.inert = !open;
        mobile.setAttribute("aria-hidden", String(!open));
        gsap.to(mobile, {
          xPercent: open ? 0 : 100,
          duration: reduced ? 0 : 0.3,
          ease: "power2.out",
          overwrite: true,
          onComplete: () => {
            if (!menuOpen) nav?.classList.remove("zeneth-menu-open");
          },
        });
      }
      if (overlay)
        gsap.to(overlay, {
          opacity: open ? 1 : 0,
          duration: reduced ? 0 : 0.2,
          overwrite: true,
        });
      if (open) {
        lenis.stop();
        closeButton?.focus();
      } else {
        lenis.start();
        openButton?.focus();
      }
    });
  if (mobile) {
    mobile.inert = true;
    mobile.setAttribute("aria-hidden", "true");
    mobile.setAttribute("data-lenis-prevent", "");
  }
  for (const [button, open, label] of [
    [openButton, true, "Open menu"],
    [closeButton, false, "Close menu"],
  ] as const) {
    if (!button) continue;
    button.tabIndex = 0;
    button.setAttribute("role", "button");
    button.setAttribute("aria-label", label);
    listen(button, "click", () => setMenu(open));
    listen(button, "keydown", (event) => {
      if (["Enter", " "].includes((event as KeyboardEvent).key)) {
        event.preventDefault();
        setMenu(open);
      }
    });
  }
  if (overlay) listen(overlay, "click", () => setMenu(false));
  q('[faq="item"]').forEach((item) => {
    const button = item.querySelector<HTMLElement>(".rt-faq-item-inner");
    const answer = item.querySelector<HTMLElement>('[faq="answer"]');
    const icon = item.querySelector<HTMLElement>('[faq="icon"]');
    if (!button || !answer) return;
    button.setAttribute("role", "button");
    button.tabIndex = 0;
    button.setAttribute("aria-expanded", "false");
    navContext.add(() => gsap.set(answer, { height: 0 }));
    const change = () =>
      navContext.add(() => {
        const open = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(open));
        answer.setAttribute("aria-hidden", String(!open));
        gsap.to(answer, {
          height: open ? "auto" : 0,
          duration: reduced ? 0 : 0.5,
          overwrite: true,
          onComplete: () => {
            lenis.resize();
            ScrollTrigger.refresh();
          },
        });
        if (icon)
          gsap.to(icon, {
            rotation: open ? 90 : 0,
            duration: reduced ? 0 : 0.5,
            overwrite: true,
          });
      });
    listen(button, "click", change);
    listen(button, "keydown", (event) => {
      if (["Enter", " "].includes((event as KeyboardEvent).key)) {
        event.preventDefault();
        change();
      }
    });
  });
  listen(document, "click", (event) => {
    if (dropdown && !dropdown.contains(event.target as Node))
      setDropdown(false);
  });
  listen(document, "keydown", (event) => {
    const key = (event as KeyboardEvent).key;
    if (key === "Escape") {
      setDropdown(false);
      if (menuOpen) setMenu(false);
    }
    if (key === "Tab" && menuOpen && mobile) {
      const controls = Array.from(
        mobile.querySelectorAll<HTMLElement>('a[href],button,[tabindex="0"]'),
      ).filter((el) => el.getClientRects().length);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (
        (event as KeyboardEvent).shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last?.focus();
      } else if (
        !(event as KeyboardEvent).shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first?.focus();
      }
    }
  });
  q<HTMLAnchorElement>('a[href^="#"]').forEach((link) =>
    listen(link, "click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      event.preventDefault();
      setDropdown(false);
      if (menuOpen) setMenu(false);
      lenis.scrollTo(target, {
        duration: reduced ? 0 : 1.2,
        immediate: reduced,
      });
      history.replaceState(null, "", href);
    }),
  );
  const refresh = () => {
    if (!disposed) {
      lenis.resize();
      ScrollTrigger.refresh();
    }
  };
  q<HTMLImageElement>("img").forEach((image) => {
    if (!image.complete) listen(image, "load", refresh);
  });
  listen(window, "resize", refresh);
  listen(window, "resize", () => {
    if (window.innerWidth >= 992 && menuOpen) setMenu(false);
  });
  refresh();
  return () => {
    disposed = true;
    cleanups.forEach((cleanup) => cleanup());
    media.revert();
    navContext.revert();
  };
}
