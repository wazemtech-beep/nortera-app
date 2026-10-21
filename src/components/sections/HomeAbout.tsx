"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeAbout;
  return (
    <section
      className="rt-section-v2 rt-zindex-2 rt-bg-quinary"
      id="about"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-box-center rt-flex-card-gap">
          <div className="w-layout-vflex rt-col-eight rt-flex-center">
            <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
              {content.whoWeAre}
            </div>
            <h2 text-opacity="scroll" className="rt-text-center">
              {content.heading}
            </h2>
          </div>
          <div {...{ data: "card-wrap" }} className="rt-impact-v1">
            <div
              {...{ data: "card-v1" }}
              className="w-layout-vflex rt-impact-v1-item rt-radius-sm rt-impact-v1-one"
            >
              <div className="w-layout-vflex rt-impact-v1-item-left">
                <div className="w-layout-vflex rt-impact-v1-item-top">
                  <div className="w-layout-hflex">
                    <div className="rt-text-style-h3">{content.title}</div>
                    <div data-counter="4000+" className="rt-text-style-h3">
                      {content.value4000}
                    </div>
                  </div>
                  <div className="rt-text-style-h4">
                    {content.monthlyTransferHandledEfficiently}
                  </div>
                </div>
                <div className="w-layout-hflex rt-impact-v1-item-bottom">
                  <Link
                    {...{ hover: "button" }}
                    href={content.getInTouchgetInTouchHref}
                    className="rt-button w-inline-block"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text"
                      >
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
                  <div className="rt-impact-v1-item-box">
                    <div className="rt-impact-v1-box rt-mergine rt-color-1"></div>
                    <div className="rt-impact-v1-box rt-mergine rt-color-2"></div>
                    <div className="rt-impact-v1-box"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              {...{ data: "card-v1" }}
              className="w-layout-vflex rt-impact-v1-item rt-radius-sm rt-position-relative"
            >
              <div className="w-layout-vflex rt-impact-v1-item-top rt-zindex-2">
                <div
                  data-counter="20+"
                  className="rt-text-style-h3 rt-text-color-tertiary"
                >
                  {content.value20}
                </div>
                <div className="rt-text-style-h4 rt-text-color-tertiary">
                  {content.yearsOfIndustryExperience}
                </div>
              </div>
              <div className="rt-position-absolute rt-overflow-hidden rt-radius-sm">
                <div {...{ data: "image" }} className="rt-card-image-wrap">
                  <Image
                    {...{ image: "parallalx" }}
                    alt={content.whoWeAre1Alt}
                    src={content.whoWeAre1Image}
                    decoding="async"
                    width={684}
                    height={780}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-position-absolute rt-impact-overlay"></div>
              </div>
            </div>
            <div
              {...{ data: "card-v1" }}
              id="w-node-c70d0d3d-9319-3725-474c-1ca13702ffb3-3702ff90"
              className="w-layout-vflex rt-impact-v1-item rt-radius-sm rt-impact-v1-three"
            >
              <div className="w-layout-vflex rt-impact-v1-item-left">
                <div className="w-layout-vflex rt-impact-v1-item-top">
                  <div data-counter="850+" className="rt-text-style-h3">
                    {content.value850}
                  </div>
                  <div className="rt-text-style-h4">
                    {content.tailoredStrategiesCreated}
                  </div>
                </div>
                <div className="w-layout-hflex rt-impact-v1-item-bottom">
                  <Link
                    {...{ hover: "button" }}
                    href={content.exploreUsexploreUsHref}
                    className="rt-button w-inline-block"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text"
                      >
                        {content.exploreUs}
                      </div>
                      <div
                        {...{ button: "text-two" }}
                        className="rt-button-text rt-2"
                      >
                        {content.exploreUs}
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
                  <div className="rt-impact-v1-item-box">
                    <div className="rt-impact-v1-box rt-mergine rt-color-1 rt-impact-v1-shap"></div>
                    <div className="rt-impact-v1-box rt-mergine rt-color-2 rt-impact-v1-shap"></div>
                    <div className="rt-impact-v1-box rt-impact-v1-shap"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              {...{ data: "card-v1" }}
              className="w-layout-vflex rt-impact-v1-item rt-radius-sm rt-position-relative"
            >
              <div className="w-layout-vflex rt-impact-v1-item-top rt-zindex-2">
                <div
                  data-counter="450+"
                  className="rt-text-style-h3 rt-text-color-tertiary"
                >
                  {content.value450}
                </div>
                <div className="rt-text-style-h4 rt-text-color-tertiary">
                  {content.clientsEmpoweredGlobally}
                </div>
              </div>
              <div className="rt-position-absolute rt-overflow-hidden rt-radius-sm">
                <Image
                  {...{ image: "parallalx" }}
                  alt={content.whoWeAre2Alt}
                  src={content.whoWeAre2Image}
                  decoding="async"
                  width={684}
                  height={780}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
                <div className="rt-position-absolute rt-impact-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
