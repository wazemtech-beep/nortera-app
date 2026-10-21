import { gsap } from "gsap";
import type { AnimationScope } from "@/hooks/usePageAnimation";

export function aboutAnimation(scope: AnimationScope) {
  const { root, reduced } = scope;
  // Page load (t-8e8db15b)
  if (!scope.excluded([])) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = scope.split(
        [...scope.query('[data="hero-title-1"]', root)],
        "lines",
        "lines",
      );
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 100 });
        const to = scope.pose(target, { yPercent: 5 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.78,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.78,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.2 + offset,
        );
      });
      const targets2 = scope.split(
        [...scope.query('[data="hero-title-2"]', root)],
        "chars",
        null,
      );
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 40, opacity: 0 });
        const to = scope.pose(target, { yPercent: 0, opacity: 1 });
        scope.initial(target, from);
        const offset = index * 0.08;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.45,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.45,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.2 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-0fbc259c)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[page-load="marquee-reverse"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: -100 });
        const to = scope.pose(target, { xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 60,
              ease: "none",
              repeat: -1,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 60,
            repeat: reduced ? 0 : -1,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-38ec57eb)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[page-load="marquee"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 0 });
        const to = scope.pose(target, { xPercent: -100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 50,
              ease: "none",
              repeat: -1,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 50,
            repeat: reduced ? 0 : -1,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // [button="approach-v1"] (t-e327fdf8)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[button="approach-v1"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[approach-v1="button-icon-dark"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1 });
        const to = scope.pose(target, { opacity: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.3,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.3,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[approach-v1="button-icon-white"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0 });
        const to = scope.pose(target, { opacity: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.3,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.3,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }

  // [hover="button"] (t-91625926)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[hover="button"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[button="text-one"]', trigger || root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, yPercent: 0 });
        const to = scope.pose(target, { opacity: 0, yPercent: -100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[button="text-two"]', trigger || root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 100, opacity: 0 });
        const to = scope.pose(target, { yPercent: 0, opacity: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [...scope.query('[button="icon-one"]', trigger || root)];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, xPercent: 0 });
        const to = scope.pose(target, { opacity: 0, xPercent: 100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets4 = [...scope.query('[button="icon-two"]', trigger || root)];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, xPercent: -100 });
        const to = scope.pose(target, { opacity: 1, xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }

  // [data="card-wrap"] (t-af36b7c8)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[data="card-wrap"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[data="card-v1"]', trigger || root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 30 });
        const to = scope.pose(target, { opacity: 1, yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0.2;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 80%",
          end: "bottom 0%",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [data="subtext"] (t-dfa9c07f)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[data="subtext"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = scope.split(
        [...(trigger ? [trigger] : [])],
        "chars",
        "chars",
      );
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 100 });
        const to = scope.pose(target, { opacity: 1, yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0.03;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.3,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.3,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 80%",
          end: "bottom 0%",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // Page load (t-442edc51)
  if (!scope.excluded([])) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[pageload="button"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 100 });
        const to = scope.pose(target, { opacity: 1, yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // [text-opacity="scroll"] (t-c5e49094)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[text-opacity="scroll"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = scope.split(
        [...(trigger ? [trigger] : [])],
        "chars",
        "chars",
      );
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0.5 });
        const to = scope.pose(target, { opacity: 1 });
        scope.initial(target, from);
        const offset = index * 0.2;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      timeline.to({}, { duration: reduced ? 0 : 1, ease: "none" }, 0);
      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 2,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [image="parallalx"] (t-7370f557)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[image="parallalx"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: -5, scale: 1.05 });
        const to = scope.pose(target, { yPercent: 5, scale: 1.05 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      timeline.to({}, { duration: reduced ? 0 : 1, ease: "none" }, 0);
      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [card-hover="zoom"] (t-1ab7f890)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[card-hover="zoom"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[image-hover="zoom"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: 1 });
        const to = scope.pose(target, { scale: 1.1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }

  // [divider] (t-f39f7e0c)
  if (!scope.excluded([])) {
    for (const trigger of scope.query("[divider]", root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { width: "0%" });
        const to = scope.pose(target, { width: "100%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 70%",
          end: "bottom top",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // Page load (t-950c9532)
  if (!scope.excluded(["main"]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[solution="line-1"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { width: "0%" });
        const to = scope.pose(target, { width: "100%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[solution="image-1"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, {
          opacity: 1,
          scale: 1.1,
          rotation: 0,
        });
        const to = scope.pose(target, { opacity: 0, scale: 1, rotation: 5 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });
      const targets3 = [...scope.query('[solution="image-2"]', root)];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, scale: 1, rotation: 5 });
        const to = scope.pose(target, { opacity: 1, scale: 1.1, rotation: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });
      const targets4 = [...scope.query('[solution="text-1"]', root)];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, yPercent: 0 });
        const to = scope.pose(target, { opacity: 0, yPercent: 100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });
      const targets5 = [...scope.query('[solution="text-2"]', root)];
      targets5.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 100 });
        const to = scope.pose(target, { opacity: 1, yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });
      const targets6 = [...scope.query('[solution="icon-1"]', root)];
      targets6.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, scale: 1 });
        const to = scope.pose(target, { opacity: 0, scale: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });
      const targets7 = [...scope.query('[solution="icon-2"]', root)];
      targets7.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, scale: 0 });
        const to = scope.pose(target, { opacity: 1, scale: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });
      const targets8 = [...scope.query('[solution="line-2"]', root)];
      targets8.forEach((target, index) => {
        const from = scope.pose(target, { width: "0%" });
        const to = scope.pose(target, { width: "100%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 2.47 + offset,
        );
      });
      const targets9 = [...scope.query('[solution="image-2"]', root)];
      targets9.forEach((target, index) => {
        const from = scope.pose(target, {
          opacity: 1,
          scale: 1.1,
          rotation: 0,
        });
        const to = scope.pose(target, { opacity: 0, scale: 1, rotation: 5 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 4.47 + offset,
        );
      });
      const targets10 = [...scope.query('[solution="image-3"]', root)];
      targets10.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, scale: 1, rotation: 5 });
        const to = scope.pose(target, { opacity: 1, scale: 1.1, rotation: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 4.47 + offset,
        );
      });
      const targets11 = [...scope.query('[solution="text-2"]', root)];
      targets11.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, yPercent: 0 });
        const to = scope.pose(target, { opacity: 0, yPercent: 100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 4.47 + offset,
        );
      });
      const targets12 = [...scope.query('[solution="text-3"]', root)];
      targets12.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 100 });
        const to = scope.pose(target, { opacity: 1, yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 4.47 + offset,
        );
      });
      const targets13 = [...scope.query('[solution="icon-2"]', root)];
      targets13.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, scale: 1 });
        const to = scope.pose(target, { opacity: 0, scale: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 4.47 + offset,
        );
      });
      const targets14 = [...scope.query('[solution="icon-3"]', root)];
      targets14.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, scale: 0 });
        const to = scope.pose(target, { opacity: 1, scale: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 4.47 + offset,
        );
      });
      const targets15 = [...scope.query('[solution="line-3"]', root)];
      targets15.forEach((target, index) => {
        const from = scope.pose(target, { width: "0%" });
        const to = scope.pose(target, { width: "100%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 4.97 + offset,
        );
      });
      const targets16 = [...scope.query('[solution="image-3"]', root)];
      targets16.forEach((target, index) => {
        const from = scope.pose(target, {
          opacity: 1,
          scale: 1.1,
          rotation: 0,
        });
        const to = scope.pose(target, { opacity: 0, scale: 1, rotation: 5 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 6.96 + offset,
        );
      });
      const targets17 = [...scope.query('[solution="image-1"]', root)];
      targets17.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, scale: 1, rotation: 5 });
        const to = scope.pose(target, { opacity: 1, scale: 1.1, rotation: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 6.96 + offset,
        );
      });
      const targets18 = [...scope.query('[solution="text-3"]', root)];
      targets18.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, yPercent: 0 });
        const to = scope.pose(target, { opacity: 0, yPercent: 100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 6.96 + offset,
        );
      });
      const targets19 = [...scope.query('[solution="text-1"]', root)];
      targets19.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 100 });
        const to = scope.pose(target, { opacity: 1, yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 6.96 + offset,
        );
      });
      const targets20 = [...scope.query('[solution="icon-3"]', root)];
      targets20.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, scale: 1 });
        const to = scope.pose(target, { opacity: 0, scale: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 6.96 + offset,
        );
      });
      const targets21 = [...scope.query('[solution="icon-1"]', root)];
      targets21.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, scale: 0 });
        const to = scope.pose(target, { opacity: 1, scale: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 6.96 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // [common-banner="scroll"] (t-924981ff)
  if (!scope.excluded(["medium", "small", "tiny"])) {
    for (const trigger of scope.query('[common-banner="scroll"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[common-banner="image"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, scale: 1 });
        const to = scope.pose(target, { opacity: 0.5, scale: 1.4 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[common-banner="content"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, yPercent: 0 });
        const to = scope.pose(target, { opacity: 0, yPercent: 50 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.11,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.11,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [
        ...scope.query('[common-banner="content-v2"]', trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 1, yPercent: 0 });
        const to = scope.pose(target, { opacity: 0, yPercent: 100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      timeline.to({}, { duration: reduced ? 0 : 1, ease: "none" }, 0);
      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [success="card"] (t-a5343a94)
  if (!scope.excluded(["tiny", "small"])) {
    for (const trigger of scope.query('[success="card"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[success="image"]', trigger || root)];
      scope.preserveClasses(targets1);
      timeline.call(
        () =>
          targets1.forEach((target) => {
            target.classList.toggle("rt-radius-xxxl", false);
          }),
        [],
        0,
      );
      const targets2 = [...scope.query('[success="image"]', trigger || root)];
      scope.preserveClasses(targets2);
      timeline.call(
        () =>
          targets2.forEach((target) => {
            target.classList.toggle("rt-radius-md", true);
          }),
        [],
        0,
      );

      scope.hover(trigger!, timeline, false, false);
    }
  }

  // [success="card"] (t-b3d6b5d5)
  if (!scope.excluded(["small", "tiny"])) {
    for (const trigger of scope.query('[success="card"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[success="image"]', trigger || root)];
      scope.preserveClasses(targets1);
      timeline.call(
        () =>
          targets1.forEach((target) => {
            target.classList.toggle("rt-radius-xxxl", true);
          }),
        [],
        0,
      );
      const targets2 = [...scope.query('[success="image"]', trigger || root)];
      scope.preserveClasses(targets2);
      timeline.call(
        () =>
          targets2.forEach((target) => {
            target.classList.toggle("rt-radius-md", false);
          }),
        [],
        0,
      );

      scope.hover(trigger!, timeline, true, false);
    }
  }

  // [mega-link="hover"] (t-a79e6475)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[mega-link="hover"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[mega-link="bg"]', trigger || root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { backgroundColor: null });
        const to = scope.pose(target, {
          backgroundColor: "var(--_colors---accent-color--accent-800)",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.2,
              ease: "power1.inOut",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }
}
