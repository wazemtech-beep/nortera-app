"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeCaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeCaseStudies;
  return (
    <section className="rt-section" id="case-studies" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-sm w-container">
        <div className="w-layout-vflex rt-vertical-main">
          <div className="w-layout-vflex rt-heading-wrap rt-col-seven rt-right-padding">
            <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
              {content.caseStudies}
            </div>
            <h2 {...{ appear: "heading" }}>{content.heading}</h2>
          </div>
          <div
            case-study-wrap="scroll"
            className="w-layout-vflex rt-case-study-v1-card-wrap"
          >
            <div
              case-study-card="1"
              className="rt-case-study-sticky w-dyn-list"
            >
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div
                    card-hover="zoom"
                    className="rt-case-study-v1-card rt-radius-md rt-overflow-hidden"
                  >
                    <div className="rt-card-image-wrap">
                      <div image-hover="zoom" className="rt-card-image-wrap">
                        <Image
                          {...{ image: "parallalx" }}
                          alt={content.operationalExcellenceImprovementAlt}
                          src={content.operationalExcellenceImprovementImage}
                          decoding="async"
                          width={2880}
                          height={1252}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-case-study-v1-card-content">
                      <div className="w-layout-hflex rt-case-study-v1-dashboard-wrap rt-radius-sm rt-landscape-display-none">
                        <Image
                          src={content.operationalExcellenceImprovementImage2}
                          alt={content.operationalExcellenceImprovementAlt}
                          className="rt-radius-xs"
                          decoding="async"
                          width={490}
                          height={340}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                      <div className="w-layout-hflex rt-casestudy-v1-content-wrap">
                        <div className="w-layout-vflex rt-case-study-v1-card-text">
                          <div className="rt-text-style-h4 rt-text-color-tertiary">
                            {content.businessGrowthStrategy}
                          </div>
                          <p className="rt-text-color-tertiary">
                            {content.description}
                          </p>
                        </div>
                        <Link
                          {...{ hover: "button" }}
                          href={content.viewCaseStudyviewCaseStudyHref}
                          className="rt-button w-variant-5579dce6-2985-9311-3a00-673902a060bf w-inline-block"
                        >
                          <div className="rt-button-text-wrap rt-overflow-hidden">
                            <div
                              {...{ button: "text-one" }}
                              className="rt-button-text w-variant-5579dce6-2985-9311-3a00-673902a060bf"
                            >
                              {content.viewCaseStudy}
                            </div>
                            <div
                              {...{ button: "text-two" }}
                              className="rt-button-text w-variant-5579dce6-2985-9311-3a00-673902a060bf rt-2"
                            >
                              {content.viewCaseStudy}
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
                                className="rt-flex-center rt-icon-first-1 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                                className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                                className="rt-flex-center rt-icon-second-1 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                                className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                    <div className="rt-position-absolute rt-case-study-v1-card-overlay rt-event-none"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div
                    card-hover="zoom"
                    className="rt-case-study-v1-card rt-radius-md rt-overflow-hidden"
                  >
                    <div className="rt-card-image-wrap">
                      <div image-hover="zoom" className="rt-card-image-wrap">
                        <Image
                          {...{ image: "parallalx" }}
                          alt={content.operationalExcellenceImprovementAlt}
                          src={content.operationalExcellenceImprovementImage3}
                          className="rt-case-study-image"
                          decoding="async"
                          width={2880}
                          height={1252}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-case-study-v1-card-content">
                      <div className="w-layout-hflex rt-case-study-v1-dashboard-wrap rt-radius-sm rt-landscape-display-none">
                        <Image
                          src={content.operationalExcellenceImprovementImage4}
                          alt={content.operationalExcellenceImprovementAlt}
                          className="rt-radius-xs"
                          decoding="async"
                          width={292}
                          height={214}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                      <div className="w-layout-hflex rt-casestudy-v1-content-wrap">
                        <div className="w-layout-vflex rt-case-study-v1-card-text">
                          <div className="rt-text-style-h4 rt-text-color-tertiary">
                            {content.manufacturingFirmRetirementRollout}
                          </div>
                          <p className="rt-text-color-tertiary">
                            {content.description2}
                          </p>
                        </div>
                        <Link
                          {...{ hover: "button" }}
                          href={content.viewCaseStudyviewCaseStudyHref2}
                          className="rt-button w-variant-5579dce6-2985-9311-3a00-673902a060bf w-inline-block"
                        >
                          <div className="rt-button-text-wrap rt-overflow-hidden">
                            <div
                              {...{ button: "text-one" }}
                              className="rt-button-text w-variant-5579dce6-2985-9311-3a00-673902a060bf"
                            >
                              {content.viewCaseStudy}
                            </div>
                            <div
                              {...{ button: "text-two" }}
                              className="rt-button-text w-variant-5579dce6-2985-9311-3a00-673902a060bf rt-2"
                            >
                              {content.viewCaseStudy}
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
                                className="rt-flex-center rt-icon-first-1 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                                className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                                className="rt-flex-center rt-icon-second-1 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                                className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
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
                    <div className="rt-position-absolute rt-case-study-v1-card-overlay rt-event-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
