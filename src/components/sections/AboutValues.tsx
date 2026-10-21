"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutValues;
  return (
    <section className="rt-section" id="values" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
          {content.whatDrivesUs}
        </div>
        <div className="w-layout-hflex rt-drive-main rt-gap-lg rt-dektop-gap">
          <div className="rt-drive-left rt-overflow-hidden">
            <div
              {...{ data: "image" }}
              className="rt-card-image-wrap rt-radius-md"
            >
              <Image
                src={content.womanInABookLinedRoomPortraitImage}
                alt={content.womanInABookLinedRoomPortraitAlt}
                {...{ image: "parallalx" }}
                decoding="async"
                width={3000}
                height={2260}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div {...{ data: "overlay" }} className="rt-image-overlay"></div>
            </div>
          </div>
          <div className="w-layout-vflex rt-drive-right">
            <h2 text-opacity="scroll">{content.heading}</h2>
            <div className="rt-col-five">
              <p {...{ appear: "paragraph" }}>{content.description}</p>
            </div>
          </div>
        </div>
        <div
          {...{ data: "card-wrap" }}
          className="w-layout-grid rt-drive-card-wrap"
        >
          {content.items.map((item, index) => (
            <div
              {...{ data: "card-v1" }}
              className="w-layout-hflex rt-drive-card"
              key={index}
            >
              <div className="rt-drive-line"></div>
              <div className="w-layout-vflex rt-drive-card-content">
                <p className="rt-sub-text">{item.description}</p>
                <div className="w-layout-vflex rt-drive-card-content-inner">
                  <div className="rt-text-style-h4">{item.title}</div>
                  <p>{item.description2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
