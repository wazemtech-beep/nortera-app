"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeApproach;
  return (
    <section className="rt-section" id="approach" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-approach-v1-main">
          <div className="w-layout-vflex rt-approach-v1-text-wrap rt-position-relative">
            <div className="w-layout-vflex rt-approach-v1-text">
              <h2 {...{ appear: "heading" }} className="rt-gap-small">
                {content.heading}
              </h2>
              <p
                {...{ appear: "paragraph" }}
                className="rt-approach-v1-paragraph rt-gap-sm"
              >
                {content.description}
              </p>
              <div data-animate="text">
                <Link
                  {...{ hover: "button" }}
                  href={content.startTodaystartTodayHref}
                  className="rt-button w-inline-block"
                >
                  <div className="rt-button-text-wrap rt-overflow-hidden">
                    <div {...{ button: "text-one" }} className="rt-button-text">
                      {content.startToday}
                    </div>
                    <div
                      {...{ button: "text-two" }}
                      className="rt-button-text rt-2"
                    >
                      {content.startToday}
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
            <div className="rt-position-relative">
              <div
                {...{ data: "card" }}
                approach-v1="card-one"
                className="w-layout-vflex rt-approach-v1-card"
              >
                <div className="w-layout-hflex rt-approach-v1-card-top">
                  <div className="w-layout-hflex rt-approach-v1-card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.51032 11.9956H12.0086M15.3076 9.13533C14.7232 8.45178 13.9434 7.96381 13.0732 7.73717C12.2031 7.51053 11.2844 7.5561 10.441 7.86774C9.59754 8.17937 8.86981 8.74211 8.35583 9.48015C7.84184 10.2182 7.56629 11.0961 7.56629 11.9956C7.56629 12.8951 7.84184 13.773 8.35583 14.511C8.86981 15.2491 9.59754 15.8118 10.441 16.1234C11.2844 16.4351 12.2031 16.4806 13.0732 16.254C13.9434 16.0274 14.7232 15.5394 15.3076 14.8558M3.0464 8.27737C2.88589 7.55408 2.91054 6.80197 3.11805 6.09075C3.32556 5.37954 3.70922 4.73225 4.23345 4.20891C4.75768 3.68557 5.40552 3.30311 6.11688 3.09701C6.82825 2.89091 7.58012 2.86783 8.30278 3.02991C8.70054 2.40759 9.2485 1.89545 9.89614 1.5407C10.5438 1.18595 11.2703 1 12.0086 1C12.747 1 13.4735 1.18595 14.1211 1.5407C14.7688 1.89545 15.3167 2.40759 15.7145 3.02991C16.4383 2.86712 17.1914 2.8901 17.9039 3.0967C18.6164 3.30331 19.2651 3.68682 19.7897 4.21158C20.3142 4.73634 20.6976 5.3853 20.9041 6.09808C21.1106 6.81086 21.1336 7.56432 20.9709 8.28837C21.593 8.68628 22.1049 9.23445 22.4595 9.88235C22.8141 10.5302 23 11.257 23 11.9957C23 12.7343 22.8141 13.4611 22.4595 14.109C22.1049 14.7569 21.593 15.3051 20.9709 15.703C21.1329 16.426 21.1098 17.1781 20.9038 17.8898C20.6978 18.6014 20.3155 19.2495 19.7924 19.7739C19.2692 20.2984 18.6222 20.6822 17.9113 20.8898C17.2003 21.0974 16.4485 21.122 15.7255 20.9615C15.3283 21.5862 14.7799 22.1005 14.1311 22.4568C13.4824 22.8132 12.7542 23 12.0141 23C11.274 23 10.5459 22.8132 9.89715 22.4568C9.24841 22.1005 8.70002 21.5862 8.30278 20.9615C7.58012 21.1235 6.82825 21.1005 6.11688 20.8944C5.40552 20.6883 4.75768 20.3058 4.23345 19.7825C3.70922 19.2591 3.32556 18.6118 3.11805 17.9006C2.91054 17.1894 2.88589 16.4373 3.0464 15.714C2.41954 15.3171 1.90321 14.7681 1.54541 14.118C1.18762 13.4679 1 12.7378 1 11.9957C1 11.2536 1.18762 10.5235 1.54541 9.87337C1.90321 9.22326 2.41954 8.67423 3.0464 8.27737Z"
                        stroke="#362229"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-text-style-h4">
                    {content.strategicFinancialPlanning}
                  </div>
                </div>
                <div className="w-layout-hflex rt-approach-v1-card-bottom">
                  <p className="rt-gap-off rt-approach-v1-card-paragraph">
                    {content.description2}
                  </p>
                </div>
              </div>
              {content.items.map((item, index) => (
                <div
                  approach-v1={item.approachV1}
                  className="w-layout-vflex rt-approach-v1-card rt-position-change"
                  key={index}
                >
                  <div className="w-layout-hflex rt-approach-v1-card-top">
                    <div className="w-layout-hflex rt-approach-v1-card-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.51032 11.9956H12.0086M15.3076 9.13533C14.7232 8.45178 13.9434 7.96381 13.0732 7.73717C12.2031 7.51053 11.2844 7.5561 10.441 7.86774C9.59754 8.17937 8.86981 8.74211 8.35583 9.48015C7.84184 10.2182 7.56629 11.0961 7.56629 11.9956C7.56629 12.8951 7.84184 13.773 8.35583 14.511C8.86981 15.2491 9.59754 15.8118 10.441 16.1234C11.2844 16.4351 12.2031 16.4806 13.0732 16.254C13.9434 16.0274 14.7232 15.5394 15.3076 14.8558M3.0464 8.27737C2.88589 7.55408 2.91054 6.80197 3.11805 6.09075C3.32556 5.37954 3.70922 4.73225 4.23345 4.20891C4.75768 3.68557 5.40552 3.30311 6.11688 3.09701C6.82825 2.89091 7.58012 2.86783 8.30278 3.02991C8.70054 2.40759 9.2485 1.89545 9.89614 1.5407C10.5438 1.18595 11.2703 1 12.0086 1C12.747 1 13.4735 1.18595 14.1211 1.5407C14.7688 1.89545 15.3167 2.40759 15.7145 3.02991C16.4383 2.86712 17.1914 2.8901 17.9039 3.0967C18.6164 3.30331 19.2651 3.68682 19.7897 4.21158C20.3142 4.73634 20.6976 5.3853 20.9041 6.09808C21.1106 6.81086 21.1336 7.56432 20.9709 8.28837C21.593 8.68628 22.1049 9.23445 22.4595 9.88235C22.8141 10.5302 23 11.257 23 11.9957C23 12.7343 22.8141 13.4611 22.4595 14.109C22.1049 14.7569 21.593 15.3051 20.9709 15.703C21.1329 16.426 21.1098 17.1781 20.9038 17.8898C20.6978 18.6014 20.3155 19.2495 19.7924 19.7739C19.2692 20.2984 18.6222 20.6822 17.9113 20.8898C17.2003 21.0974 16.4485 21.122 15.7255 20.9615C15.3283 21.5862 14.7799 22.1005 14.1311 22.4568C13.4824 22.8132 12.7542 23 12.0141 23C11.274 23 10.5459 22.8132 9.89715 22.4568C9.24841 22.1005 8.70002 21.5862 8.30278 20.9615C7.58012 21.1235 6.82825 21.1005 6.11688 20.8944C5.40552 20.6883 4.75768 20.3058 4.23345 19.7825C3.70922 19.2591 3.32556 18.6118 3.11805 17.9006C2.91054 17.1894 2.88589 16.4373 3.0464 15.714C2.41954 15.3171 1.90321 14.7681 1.54541 14.118C1.18762 13.4679 1 12.7378 1 11.9957C1 11.2536 1.18762 10.5235 1.54541 9.87337C1.90321 9.22326 2.41954 8.67423 3.0464 8.27737Z"
                          stroke="#362229"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="rt-text-style-h4">{item.title}</div>
                  </div>
                  <div className="w-layout-hflex rt-approach-v1-card-bottom">
                    <p className="rt-gap-off rt-approach-v1-card-paragraph">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              data-animate="text"
              className="w-layout-hflex rt-approach-v1-button-wrap"
            >
              <div
                {...{ click: "approach-v1-button-previous" }}
                {...{ button: "approach-v1" }}
                className="w-layout-vflex rt-approach-v1-button"
              >
                <div className="w-layout-hflex rt-approach-v1-button-icon rt-rotate">
                  <Image
                    approach-v1="button-icon-dark"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                  <Image
                    approach-v1="button-icon-white"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    className="rt-approach-v1-button-icon-white"
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                </div>
              </div>
              <div
                {...{ click: "approach-v1-button-next" }}
                {...{ button: "approach-v1" }}
                className="w-layout-vflex rt-approach-v1-button"
              >
                <div className="w-layout-hflex rt-approach-v1-button-icon">
                  <Image
                    approach-v1="button-icon-dark"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                  <Image
                    approach-v1="button-icon-white"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    className="rt-approach-v1-button-icon-white"
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rt-approach-v1-image-wrap rt-radius-md rt-overflow-hidden">
            <Image
              approach-v1="image-one"
              {...{ data: "image" }}
              alt={content.homeOneApproachV1ImageAlt}
              src={content.homeOneApproachV1ImageImage}
              decoding="async"
              width={1416}
              height={1362}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
            <Image
              approach-v1="image-two"
              alt={content.homeOneApproachV1ImageTwoAlt}
              src={content.homeOneApproachV1ImageTwoImage}
              className="rt-approach-v1-image"
              decoding="async"
              width={1416}
              height={1362}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
            <Image
              approach-v1="image-three"
              alt={content.homeOneApproachV1ImageThreeAlt}
              src={content.homeOneApproachV1ImageThreeImage}
              className="rt-approach-v1-image"
              decoding="async"
              width={1416}
              height={1362}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
            <div className="rt-approach-v1-dashboard-wrap">
              <Image
                src={content.homeOneApproachDashboardImageImage}
                alt={content.homeOneApproachDashboardImageAlt}
                className="rt-radius-xs rt-zindex-2"
                decoding="async"
                width={509}
                height={244}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div className="rt-position-absolute">
                <Image
                  src={content.homeOneApproachDashboardBackgroundImageImage}
                  alt={content.homeOneApproachDashboardBackgroundImageAlt}
                  className="rt-financial-challenege-image"
                  decoding="async"
                  width={810}
                  height={422}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
            <div {...{ data: "overlay" }} className="rt-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
