"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeConsultation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeConsultation;
  return (
    <section className="rt-cta-v1" id="consultation" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-cta-v1-wrap">
          <div className="rt-col-six">
            <h2 {...{ appear: "heading" }} className="rt-text-center">
              {content.heading}
            </h2>
          </div>
          <div className="w-layout-hflex rt-cta-v1-bottom">
            <div
              {...{ cta: "line" }}
              className="rt-cta-v1-bottom-line rt-v2"
            ></div>
            <Link
              {...{ hover: "button" }}
              href={content.bookConsultationbookConsultationHref}
              className="rt-button w-inline-block"
            >
              <div className="rt-button-text-wrap rt-overflow-hidden">
                <div {...{ button: "text-one" }} className="rt-button-text">
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
            <div {...{ cta: "line" }} className="rt-cta-v1-bottom-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
