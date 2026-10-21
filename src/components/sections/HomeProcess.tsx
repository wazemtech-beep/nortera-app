"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeProcess;
  return (
    <section
      className="rt-section rt-mobile-gap-change"
      id="process"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-flex-center">
          <div className="w-layout-vflex rt-our-process-v1-heading-wrap rt-col-seven rt-gap-sm">
            <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
              {content.ourProcess}
            </div>
            <h2 {...{ appear: "heading" }} className="rt-text-center">
              {content.heading}
            </h2>
          </div>
          <div
            {...{ data: "card-wrap" }}
            {...{ "data-scroll": "our-process-v1-card-wrap" }}
            className="w-layout-grid rt-our-process-v1-card-wrap rt-mobile-display-none"
          >
            <div
              {...{ data: "card-v1" }}
              className="w-layout-vflex rt-process-v1-card-block rt-one"
            >
              <div className="w-layout-hflex rt-our-process-v1-card-tag rt-radius-xs">
                <div className="rt-sub-text">{content.eyebrow}</div>
              </div>
              <div className="w-layout-vflex rt-process-v1-card rt-radius-md">
                <div className="rt-text-style-h4 rt-desktop-text-center">
                  {content.understandYourFinancialGoals}
                </div>
                <div className="rt-process-v1-card-image">
                  <div className="rt-card-image-wrap rt-radius-xs">
                    <div {...{ data: "image" }} className="rt-card-image-wrap">
                      <Image
                        {...{ image: "parallalx" }}
                        alt={content.homeOneOurProcesssDiscoverImageAlt}
                        src={content.homeOneOurProcesssDiscoverImageImage}
                        decoding="async"
                        width={734}
                        height={428}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                  </div>
                </div>
                <p className="rt-text-center rt-process-text">
                  {content.description}
                </p>
              </div>
            </div>
            <div
              {...{ data: "card-v1" }}
              className="w-layout-vflex rt-process-v1-card-block rt-two"
            >
              <div className="w-layout-hflex rt-our-process-v1-card-tag rt-radius-xs">
                <div className="rt-sub-text">{content.eyebrow2}</div>
              </div>
              <div className="w-layout-vflex rt-process-v1-card rt-radius-md rt-middle">
                <div className="rt-text-style-h4 rt-desktop-text-center">
                  {content.createATailoredFinancialPlan}
                </div>
                <div className="rt-process-v1-card-image rt-overflow-hidden rt-radius-sm">
                  <div className="rt-card-image-wrap">
                    <div {...{ data: "image" }} className="rt-card-image-wrap">
                      <Image
                        {...{ image: "parallalx" }}
                        alt={content.homeOneOurProcesssStrategizeImageAlt}
                        src={content.homeOneOurProcesssStrategizeImageImage}
                        decoding="async"
                        width={734}
                        height={428}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                  </div>
                </div>
                <p className="rt-text-center rt-process-text">
                  {content.description2}
                </p>
              </div>
            </div>
            <div
              {...{ data: "card-v1" }}
              className="w-layout-vflex rt-process-v1-card-block"
            >
              <div className="w-layout-hflex rt-our-process-v1-card-tag rt-radius-xs">
                <div className="rt-sub-text">{content.eyebrow3}</div>
              </div>
              <div className="w-layout-vflex rt-process-v1-card rt-radius-md">
                <div className="rt-text-style-h4 rt-desktop-text-center">
                  {content.implementMonitorOptimize}
                </div>
                <div className="rt-process-v1-card-image rt-overflow-hidden rt-radius-sm">
                  <div className="rt-card-image-wrap">
                    <div {...{ data: "image" }} className="rt-card-image-wrap">
                      <Image
                        {...{ image: "parallalx" }}
                        alt={content.homeOneOurProcesssGrowImageAlt}
                        src={content.homeOneOurProcesssGrowImageImage}
                        decoding="async"
                        width={734}
                        height={428}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                  </div>
                </div>
                <p className="rt-text-center rt-process-text">
                  {content.description3}
                </p>
              </div>
            </div>
          </div>
          <div
            data-delay="3000"
            data-animation="slide"
            className="rt-mobile-slider w-slider"
            data-autoplay="true"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="w-slider-mask">
              {content.slides.map((item, index) => (
                <div className="w-slide" key={index}>
                  <div className={item.className}>
                    <div className="w-layout-hflex rt-our-process-v1-card-tag rt-radius-xs">
                      <div className="rt-sub-text">{item.label}</div>
                    </div>
                    <div className={item.className2}>
                      <div className="rt-text-style-h4 rt-desktop-text-center">
                        {item.title}
                      </div>
                      <div className="rt-process-v1-card-image rt-overflow-hidden rt-radius-sm">
                        <Image
                          src={content.homeOneOurProcesssDiscoverImageImage}
                          alt={content.homeOneOurProcesssDiscoverImageAlt}
                          decoding="async"
                          width={734}
                          height={428}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                      <p className="rt-desktop-text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rt-display-none w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="rt-display-none w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="rt-mobile-slider-nav w-slider-nav w-slider-nav-invert w-round"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
