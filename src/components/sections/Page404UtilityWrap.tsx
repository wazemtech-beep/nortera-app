"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function Page404UtilityWrap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.page404UtilityWrap;
  return (
    <div className="w-layout-vflex rt-utility-wrap" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-404-row">
          <div className="rt-404-left rt-overflow-hidden rt-radius-md">
            <div
              image-appear="page-load"
              className="rt-card-image-wrap rt-radius-md"
            >
              <Image
                src={
                  content.leatherCardholderWalletWithACardRestingOnAKnitSweaterImage
                }
                alt={
                  content.leatherCardholderWalletWithACardRestingOnAKnitSweaterAlt
                }
                className="rt-404-image"
                decoding="async"
                width={1416}
                height={1600}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="w-layout-vflex rt-404-right rt-radius-md">
            <h1
              {...{ appear: "heading" }}
              className="rt-text-style-h1 rt-404-big-text"
            >
              {content.title}
            </h1>
            <div className="w-layout-vflex rt-404-text">
              <div className="w-layout-vflex rt-404-text-inner">
                <h2
                  {...{ appear: "heading" }}
                  className="rt-text-style-h2 rt-text-center"
                >
                  {content.heading}
                </h2>
                <p data-animate="text" className="rt-text-center">
                  {content.description}
                </p>
              </div>
              <div data-animate="text">
                <Link
                  {...{ hover: "button" }}
                  href={content.backToHomebackToHomeHref}
                  className="rt-button w-inline-block"
                >
                  <div className="rt-button-text-wrap rt-overflow-hidden">
                    <div {...{ button: "text-one" }} className="rt-button-text">
                      {content.backToHome}
                    </div>
                    <div
                      {...{ button: "text-two" }}
                      className="rt-button-text rt-2"
                    >
                      {content.backToHome}
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
      </div>
    </div>
  );
}
