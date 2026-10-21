"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeHome() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeHome;
  return (
    <section
      home-v1-hero="wrap"
      className="rt-hero-v1-main"
      id="home"
      ref={sectionRef}
    >
      <div className="w-layout-vflex rt-hero-v1 rt-overflow-hidden rt-radius-lg">
        <div className="rt-position-absolute">
          <Image
            image-appear="page-load"
            src={content.home1HeroBannerImageImage}
            alt={content.home1HeroBannerImageAlt}
            className="rt-hero-v1-image-main"
            decoding="async"
            width={3800}
            height={2010}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
          <div className="rt-position-absolute rt-hero-v1-image-overlay"></div>
        </div>
        <div className="w-layout-blockcontainer rt-container rt-height-full w-container">
          <div
            home-v1-hero="content"
            className="w-layout-vflex rt-hero-v1-wrap rt-zindex-2 rt-height-full"
          >
            <div className="rt-hero-v1-heading">
              <h1 {...{ appear: "heading" }} className="rt-text-color-tertiary">
                {content.title}
              </h1>
            </div>
            <div className="w-layout-hflex rt-hero-v1-bottom">
              <div
                data-animate="text"
                className="rt-col-three rt-hero-v1-bottom-left rt-overflow-hidden"
              >
                <Image
                  alt={content.homeOneBannerDashboardImageAlt}
                  src={content.homeOneBannerDashboardImageImage}
                  decoding="async"
                  width={684}
                  height={398}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div
                data-animate="text"
                id="w-node-_07aab021-3f28-224f-4ae0-fd81d9c04e8c-d9c04e7f"
                className="w-layout-vflex rt-hero-v1-bottom-right"
              >
                <p
                  {...{ appear: "paragraph" }}
                  className="rt-text-color-tertiary"
                >
                  {content.description}
                </p>
                <div>
                  <Link
                    {...{ hover: "button" }}
                    href={content.bookConsultationbookConsultationHref}
                    className="rt-button w-inline-block"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text"
                      >
                        {content.bookConsultation}
                      </div>
                      <div
                        {...{ button: "text-two" }}
                        className="rt-button-text rt-2"
                      >
                        {content.bookConsultation}
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
    </section>
  );
}
