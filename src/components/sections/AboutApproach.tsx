"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutApproach;
  return (
    <section
      className="rt-section-v2 rt-mobile-gap-change rt-bg-secondary"
      id="approach"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-flex-center rt-gap-lg">
          <div className="rt-col-five">
            <h2 className="rt-text-color-tertiary rt-text-center">
              {content.heading}
            </h2>
          </div>
        </div>
        <div
          {...{ data: "card-wrap" }}
          className="w-layout-grid rt-success-grid rt-mobile-display-none"
        >
          <div
            {...{ data: "card-v1" }}
            {...{ success: "card" }}
            card-hover="zoom"
            className="w-layout-vflex rt-success-card rt-radius-md"
          >
            <div className="w-layout-vflex rt-success-card-top">
              <div className="rt-text-style-h4">{content.discover}</div>
              <div className="rt-position-relative">
                <div
                  {...{ success: "image" }}
                  className="rt-card-image-wrap rt-transition rt-radius-xxxl"
                >
                  <div image-hover="zoom" className="rt-card-image-wrap">
                    <Image
                      {...{ image: "parallalx" }}
                      alt={
                        content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopAlt
                      }
                      src={
                        content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopImage
                      }
                      decoding="async"
                      width={379}
                      height={233}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
                <div
                  data-animate="text"
                  className="w-layout-vflex rt-approach-box rt-tab-display-none"
                >
                  <div data-counter="25+" className="rt-text-style-h4">
                    {content.value25}
                  </div>
                  <div className="rt-sub-text">{content.eyebrow}</div>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-success-card-bottom">
              <p>{content.description}</p>
              <a
                {...{ hover: "button" }}
                href={content.exploreMoreexploreMoreHref}
                className="rt-button w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 w-inline-block"
              >
                <div className="rt-button-text-wrap rt-overflow-hidden">
                  <div
                    {...{ button: "text-one" }}
                    className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
                  >
                    {content.exploreMore}
                  </div>
                  <div
                    {...{ button: "text-two" }}
                    className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 rt-2"
                  >
                    {content.exploreMore}
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
                      className="rt-flex-center rt-icon-first-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-icon-second-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
              </a>
            </div>
          </div>
          <div
            {...{ data: "card-v1" }}
            {...{ success: "card" }}
            card-hover="zoom"
            className="w-layout-vflex rt-success-card rt-bg-septenary rt-radius-md"
          >
            <div className="w-layout-vflex rt-success-card-top">
              <div className="rt-text-style-h4">{content.analyze}</div>
              <div className="rt-position-relative">
                <div
                  data-animate="text"
                  className="rt-approach-box rt-graph rt-tab-display-none"
                >
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                  <div>
                    <div className="w-embed">
                      <svg
                        viewBox="-4 -4 239 44"
                        fill="none"
                        style={{ display: "block" }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.2 39.9L32.2 25.9L86.7 39.9L119.2 21.9L173.7 42.9L230.7 0.4"
                          stroke="#362229"
                          stroke-dasharray="4 4"
                        ></path>
                        <circle cx="1" cy="39.9" r="3" fill="#362229"></circle>
                        <circle
                          cx="86.7"
                          cy="39.9"
                          r="3"
                          fill="#362229"
                        ></circle>
                        <circle
                          cx="173.7"
                          cy="42.9"
                          r="3"
                          fill="#362229"
                        ></circle>
                        <circle
                          cx="230.7"
                          cy="0.4"
                          r="3"
                          fill="#362229"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  {...{ success: "image" }}
                  className="rt-card-image-wrap rt-transition rt-radius-xxxl"
                >
                  <div image-hover="zoom" className="rt-card-image-wrap">
                    <Image
                      {...{ image: "parallalx" }}
                      alt={
                        content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopAlt
                      }
                      src={
                        content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopImage2
                      }
                      decoding="async"
                      width={379}
                      height={233}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-success-card-bottom">
              <p>{content.description2}</p>
              <a
                {...{ hover: "button" }}
                href={content.exploreMoreexploreMoreHref}
                className="rt-button w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 w-inline-block"
              >
                <div className="rt-button-text-wrap rt-overflow-hidden">
                  <div
                    {...{ button: "text-one" }}
                    className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
                  >
                    {content.exploreMore}
                  </div>
                  <div
                    {...{ button: "text-two" }}
                    className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 rt-2"
                  >
                    {content.exploreMore}
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
                      className="rt-flex-center rt-icon-first-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-icon-second-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
              </a>
            </div>
          </div>
          <div
            {...{ data: "card-v1" }}
            card-hover="zoom"
            {...{ success: "card" }}
            className="w-layout-vflex rt-success-card rt-radius-md"
          >
            <div className="w-layout-vflex rt-success-card-top">
              <div className="rt-text-style-h4">{content.optimize}</div>
              <div className="rt-position-relative">
                <div
                  {...{ success: "image" }}
                  className="rt-card-image-wrap rt-transition rt-radius-xxxl"
                >
                  <div image-hover="zoom" className="rt-card-image-wrap">
                    <Image
                      {...{ image: "parallalx" }}
                      alt={
                        content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopAlt
                      }
                      src={
                        content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopImage3
                      }
                      decoding="async"
                      width={379}
                      height={233}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-success-card-bottom">
              <p>{content.description3}</p>
              <a
                {...{ hover: "button" }}
                href={content.exploreMoreexploreMoreHref}
                className="rt-button w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 w-inline-block"
              >
                <div className="rt-button-text-wrap rt-overflow-hidden">
                  <div
                    {...{ button: "text-one" }}
                    className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
                  >
                    {content.exploreMore}
                  </div>
                  <div
                    {...{ button: "text-two" }}
                    className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 rt-2"
                  >
                    {content.exploreMore}
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
                      className="rt-flex-center rt-icon-first-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-icon-second-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                      className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
              </a>
            </div>
          </div>
        </div>
        <div
          data-delay="4000"
          data-animation="slide"
          className="rt-mobile-slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
        >
          <div className="w-slider-mask">
            <div className="w-slide">
              <div className="w-layout-vflex rt-success-card rt-radius-md">
                <div className="w-layout-vflex rt-success-card-top">
                  <div className="rt-text-style-h4">{content.discover}</div>
                  <div className="rt-position-relative">
                    <div
                      {...{ success: "image" }}
                      className="rt-card-image-wrap rt-transition rt-radius-xxxl"
                    >
                      <div image-hover="zoom" className="rt-card-image-wrap">
                        <Image
                          {...{ image: "parallalx" }}
                          alt={
                            content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopAlt
                          }
                          src={
                            content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopImage
                          }
                          decoding="async"
                          width={379}
                          height={233}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-approach-box rt-tab-display-none">
                      <div data-counter="25+" className="rt-text-style-h4">
                        {content.value25}
                      </div>
                      <div className="rt-sub-text">{content.eyebrow}</div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex rt-success-card-bottom">
                  <p>{content.description}</p>
                  <a
                    {...{ hover: "button" }}
                    href={content.exploreMoreexploreMoreHref}
                    className="rt-button w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 w-inline-block"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
                      >
                        {content.exploreMore}
                      </div>
                      <div
                        {...{ button: "text-two" }}
                        className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 rt-2"
                      >
                        {content.exploreMore}
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
                          className="rt-flex-center rt-icon-first-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-icon-second-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                  </a>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-layout-vflex rt-success-card rt-bg-septenary rt-radius-md">
                <div className="w-layout-vflex rt-success-card-top">
                  <div className="rt-text-style-h4">{content.analyze}</div>
                  <div className="rt-position-relative">
                    <div
                      {...{ success: "image" }}
                      className="rt-card-image-wrap rt-transition rt-radius-xxxl"
                    >
                      <div image-hover="zoom" className="rt-card-image-wrap">
                        <Image
                          {...{ image: "parallalx" }}
                          alt={
                            content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopAlt
                          }
                          src={
                            content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopImage2
                          }
                          decoding="async"
                          width={379}
                          height={233}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                    </div>
                    <div
                      data-animate="text"
                      className="rt-approach-box rt-graph rt-tab-display-none"
                    >
                      <div className="rt-sub-text">{content.eyebrow2}</div>
                      <div>
                        <div className="w-embed">
                          <svg
                            viewBox="-4 -4 239 44"
                            fill="none"
                            style={{ display: "block" }}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.2 39.9L32.2 25.9L86.7 39.9L119.2 21.9L173.7 42.9L230.7 0.4"
                              stroke="#362229"
                              stroke-dasharray="4 4"
                            ></path>
                            <circle
                              cx="1"
                              cy="39.9"
                              r="3"
                              fill="#362229"
                            ></circle>
                            <circle
                              cx="86.7"
                              cy="39.9"
                              r="3"
                              fill="#362229"
                            ></circle>
                            <circle
                              cx="173.7"
                              cy="42.9"
                              r="3"
                              fill="#362229"
                            ></circle>
                            <circle
                              cx="230.7"
                              cy="0.4"
                              r="3"
                              fill="#362229"
                            ></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex rt-success-card-bottom">
                  <p>{content.description2}</p>
                  <a
                    {...{ hover: "button" }}
                    href={content.exploreMoreexploreMoreHref}
                    className="rt-button w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 w-inline-block"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
                      >
                        {content.exploreMore}
                      </div>
                      <div
                        {...{ button: "text-two" }}
                        className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 rt-2"
                      >
                        {content.exploreMore}
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
                          className="rt-flex-center rt-icon-first-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-icon-second-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                  </a>
                </div>
                <div className="rt-approach-box rt-about-approach-badge-chart-v1 rt-display-none">
                  <p className="rt-about-approach-badge-growth-v1">
                    {content.eyebrow2}
                  </p>
                  <div className="rt-about-approach-chart-v1">
                    <div className="w-embed">
                      <svg
                        viewBox="-4 -4 239 44"
                        fill="none"
                        style={{ display: "block" }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.2 39.9L32.2 25.9L86.7 39.9L119.2 21.9L173.7 42.9L230.7 0.4"
                          stroke="#362229"
                          stroke-dasharray="4 4"
                        ></path>
                        <circle cx="1" cy="39.9" r="3" fill="#362229"></circle>
                        <circle
                          cx="86.7"
                          cy="39.9"
                          r="3"
                          fill="#362229"
                        ></circle>
                        <circle
                          cx="173.7"
                          cy="42.9"
                          r="3"
                          fill="#362229"
                        ></circle>
                        <circle
                          cx="230.7"
                          cy="0.4"
                          r="3"
                          fill="#362229"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-layout-vflex rt-success-card rt-radius-md">
                <div className="w-layout-vflex rt-success-card-top">
                  <div className="rt-text-style-h4">{content.optimize}</div>
                  <div className="rt-position-relative">
                    <div
                      {...{ success: "image" }}
                      className="rt-card-image-wrap rt-transition rt-radius-xxxl"
                    >
                      <div image-hover="zoom" className="rt-card-image-wrap">
                        <Image
                          {...{ image: "parallalx" }}
                          alt={
                            content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopAlt
                          }
                          src={
                            content.twoColleaguesReviewingFinancialGoalsTogetherOnALaptopImage3
                          }
                          decoding="async"
                          width={379}
                          height={233}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex rt-success-card-bottom">
                  <p>{content.description3}</p>
                  <a
                    {...{ hover: "button" }}
                    href={content.exploreMoreexploreMoreHref}
                    className="rt-button w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 w-inline-block"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
                      >
                        {content.exploreMore}
                      </div>
                      <div
                        {...{ button: "text-two" }}
                        className="rt-button-text w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1 rt-2"
                      >
                        {content.exploreMore}
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
                          className="rt-flex-center rt-icon-first-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-icon-second-1 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                          className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-50b396c4-0a9e-145f-aeb1-1049a5acc7c1"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-display-none w-slider-arrow-left">
            <div className="w-icon-slider-left"></div>
          </div>
          <div className="rt-display-none w-slider-arrow-right">
            <div className="w-icon-slider-right"></div>
          </div>
          <div className="rt-mobile-slider-nav w-slider-nav w-round"></div>
        </div>
      </div>
    </section>
  );
}
