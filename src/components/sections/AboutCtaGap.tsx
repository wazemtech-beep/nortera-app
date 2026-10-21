"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutCtaGap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutCtaGap;
  return (
    <div className="rt-cta-gap" ref={sectionRef}>
      <section className="rt-cta-v1 rt-background-change" id="consultation">
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="w-layout-hflex rt-cta-v3-wrap rt-radius-md">
            <div className="rt-cta-v3-left">
              <div className="rt-card-image-wrap rt-radius-md">
                <div {...{ data: "image" }} className="rt-card-image-wrap">
                  <Image
                    {...{ image: "parallalx" }}
                    alt={
                      content.twoWomenSittingAtATableInAModernIndoorSettingSmilingAndAlt
                    }
                    src={
                      content.twoWomenSittingAtATableInAModernIndoorSettingSmilingAndLookingAtALaptopScreenTogetherWithDrinksAndASmallPlantOnTheTableImage
                    }
                    className="rt-cta-v3-image"
                    decoding="async"
                    width={1368}
                    height={820}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div
                  {...{ data: "overlay" }}
                  className="rt-image-overlay w-variant-954addf5-efff-d1e6-8a99-0f202097d58c"
                ></div>
              </div>
            </div>
            <div className="w-layout-vflex rt-cta-v3-right">
              <div className="w-layout-vflex rt-cta-v3-right-inner">
                <h2 className="rt-gap-xs">{content.heading}</h2>
                <div className="rt-dektop-right-gap">
                  <p className="rt-gap-sm">{content.description}</p>
                </div>
                <Link
                  {...{ hover: "button" }}
                  href={content.getInTouchgetInTouchHref}
                  className="rt-button w-inline-block"
                >
                  <div className="rt-button-text-wrap rt-overflow-hidden">
                    <div {...{ button: "text-one" }} className="rt-button-text">
                      {content.getInTouch}
                    </div>
                    <div
                      {...{ button: "text-two" }}
                      className="rt-button-text rt-2"
                    >
                      {content.getInTouch}
                    </div>
                  </div>
                  <div className="rt-position-relative rt-overflow-hidden">
                    <div
                      {...{ button: "icon-one" }}
                      className="w-layout-vflex rt-zindex-2"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="rt-flex-center rt-icon-first-1"
                      >
                        <path
                          d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="var(--_colors---accent-color--accent-900)"
                        ></path>
                      </svg>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="rt-flex-center rt-position-absolute rt-icon-first-2"
                      >
                        <path
                          d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="var(--_colors---neutral-color--neutral-100)"
                        ></path>
                      </svg>
                    </div>
                    <div
                      {...{ button: "icon-two" }}
                      className="rt-position-absolute"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="rt-flex-center rt-icon-second-1"
                      >
                        <path
                          d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="var(--_colors---accent-color--accent-900)"
                        ></path>
                      </svg>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="rt-flex-center rt-position-absolute rt-icon-second-2"
                      >
                        <path
                          d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="var(--_colors---neutral-color--neutral-100)"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
