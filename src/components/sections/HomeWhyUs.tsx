"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeWhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeWhyUs;
  return (
    <section
      slide-side="scroll"
      className="rt-section"
      id="why-us"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-grid rt-why-choose-us-main">
          <div
            slide-side="left"
            className="rt-overflow-hidden rt-position-relative rt-radius-sm"
          >
            <Image
              {...{ image: "parallalx" }}
              alt={content.homeOneWhyChooseUsImageAlt}
              src={content.homeOneWhyChooseUsImageImage}
              decoding="async"
              width={1416}
              height={1574}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
            <div className="rt-why-choose-us-image-overlay"></div>
            <div className="w-layout-vflex rt-why-choose-us-heading-wrap">
              <div
                {...{ data: "subtext" }}
                className="rt-sub-text rt-sub-gap w-variant-25c8e0ec-cc93-f7e4-95c9-b13cc45f65c1"
              >
                {content.whyChooseUs}
              </div>
              <h2 {...{ appear: "heading" }} className="rt-text-color-tertiary">
                {content.heading}
              </h2>
            </div>
          </div>
          <div
            slide-side="right"
            className="w-layout-vflex rt-why-choose-us-v1-card-wrap rt-radius-sm"
          >
            <div className="w-layout-vflex rt-why-choose-us-card-block">
              {content.items.map((item, index) => (
                <div
                  {...{ hover: "why-choose-us-v1-card-one" }}
                  className={item.className}
                  key={index}
                >
                  <div className="w-layout-vflex rt-why-choose-us-v1-card-content">
                    <div className={item.className2}>{item.title}</div>
                    <div
                      {...{ hover: "answer-one" }}
                      className={item.className3}
                    >
                      <p className={item.className4}>{content.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
