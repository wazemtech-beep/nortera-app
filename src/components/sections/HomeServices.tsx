"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeServices;
  return (
    <section
      className="rt-section rt-overflow-hidden"
      id="services"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-center rt-gap-medium">
          <div
            {...{ data: "big-text-v1" }}
            className="rt-big-text-v1 rt-text-cenetr"
          >
            {content.ourServices}
          </div>
        </div>
      </div>
      <div className="w-layout-vflex rt-service-v1-marquee-wrap">
        <div
          data-animate="text"
          className="w-layout-hflex rt-service-v1-marquee"
        >
          <div page-load="marquee" className="w-dyn-list">
            <div
              role="list"
              className="rt-service-v1-marquee-train w-dyn-items"
            >
              {content.items.map((item, index) => (
                <div role="listitem" className="w-dyn-item" key={index}>
                  <div className="w-layout-grid rt-service-v1-marquee-card-wrap rt-pointer">
                    <div
                      card-hover="zoom"
                      className="rt-service-v1-marquee-image rt-overflow-hidden rt-radius-sm"
                    >
                      <Image
                        image-hover="zoom"
                        alt={item.alt}
                        src={item.image}
                        decoding="async"
                        width={928}
                        height={1000}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div
                      {...{ hover: "round-button" }}
                      className="w-layout-vflex rt-service-v1-marquee-card rt-radius-sm"
                    >
                      <div className="w-layout-vflex rt-service-v1-marquee-card-content">
                        <div className="rt-text-style-h2 rt-text-center">
                          {item.title}
                        </div>
                        <Link
                          href={item.href}
                          className="rt-round-button w-inline-block"
                        >
                          <div
                            {...{ hover: "round-button-icon" }}
                            className="w-layout-hflex rt-round-button-icon rt-zindex-2"
                          >
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="1"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="#4D4237"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="2"
                              className="rt-position-absolute"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="var(--_colors---neutral-color--neutral-100)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="rt-non-descriptive-text">
                            {content.ndt}
                          </div>
                          <div
                            {...{ hover: "round-button-overlay" }}
                            className="rt-position-absolute rt-bg-secondary rt-radius-xl"
                          ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div page-load="marquee" className="w-dyn-list">
            <div
              role="list"
              className="rt-service-v1-marquee-train w-dyn-items"
            >
              {content.items2.map((item, index) => (
                <div role="listitem" className="w-dyn-item" key={index}>
                  <div className="w-layout-grid rt-service-v1-marquee-card-wrap rt-pointer">
                    <div
                      card-hover="zoom"
                      className="rt-service-v1-marquee-image rt-overflow-hidden rt-radius-sm"
                    >
                      <Image
                        image-hover="zoom"
                        alt={item.alt}
                        src={item.image}
                        decoding="async"
                        width={928}
                        height={1000}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div
                      {...{ hover: "round-button" }}
                      className="w-layout-vflex rt-service-v1-marquee-card rt-radius-sm"
                    >
                      <div className="w-layout-vflex rt-service-v1-marquee-card-content">
                        <div className="rt-text-style-h2 rt-text-center">
                          {item.title}
                        </div>
                        <Link
                          {...{ hover: "round-button" }}
                          href={item.href}
                          className="rt-round-button w-inline-block"
                        >
                          <div
                            {...{ hover: "round-button-icon" }}
                            className="w-layout-hflex rt-round-button-icon rt-zindex-2"
                          >
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="1"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="#4D4237"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="2"
                              className="rt-position-absolute"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="var(--_colors---neutral-color--neutral-100)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="rt-non-descriptive-text">
                            {content.ndt}
                          </div>
                          <div
                            {...{ hover: "round-button-overlay" }}
                            className="rt-position-absolute rt-bg-secondary rt-radius-xl"
                          ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          data-animate="text"
          className="w-layout-hflex rt-service-v1-marquee"
        >
          <div page-load="marquee-reverse" className="w-dyn-list">
            <div
              role="list"
              className="rt-service-v1-marquee-train w-dyn-items"
            >
              {content.items3.map((item, index) => (
                <div role="listitem" className="w-dyn-item" key={index}>
                  <div className="w-layout-grid rt-service-v1-marquee-card-wrap rt-pointer">
                    <div
                      card-hover="zoom"
                      className="rt-service-v1-marquee-image rt-overflow-hidden rt-radius-sm"
                    >
                      <Image
                        image-hover="zoom"
                        alt={item.alt}
                        src={item.image}
                        decoding="async"
                        width={928}
                        height={1000}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div
                      {...{ hover: "round-button" }}
                      className="w-layout-vflex rt-service-v1-marquee-card rt-radius-sm"
                    >
                      <div className="w-layout-vflex rt-service-v1-marquee-card-content">
                        <div className="rt-text-style-h2 rt-text-center">
                          {item.title}
                        </div>
                        <Link
                          href={item.href}
                          className="rt-round-button w-inline-block"
                        >
                          <div
                            {...{ hover: "round-button-icon" }}
                            className="w-layout-hflex rt-round-button-icon rt-zindex-2"
                          >
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="1"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="#4D4237"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="2"
                              className="rt-position-absolute"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="var(--_colors---neutral-color--neutral-100)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="rt-non-descriptive-text">
                            {content.ndt}
                          </div>
                          <div
                            {...{ hover: "round-button-overlay" }}
                            className="rt-position-absolute rt-bg-secondary rt-radius-xl"
                          ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div page-load="marquee-reverse" className="w-dyn-list">
            <div
              role="list"
              className="rt-service-v1-marquee-train w-dyn-items"
            >
              {content.items4.map((item, index) => (
                <div role="listitem" className="w-dyn-item" key={index}>
                  <div className="w-layout-grid rt-service-v1-marquee-card-wrap rt-pointer">
                    <div
                      card-hover="zoom"
                      className="rt-service-v1-marquee-image rt-overflow-hidden rt-radius-sm"
                    >
                      <Image
                        image-hover="zoom"
                        alt={item.alt}
                        src={item.image}
                        decoding="async"
                        width={928}
                        height={1000}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div
                      {...{ hover: "round-button" }}
                      className="w-layout-vflex rt-service-v1-marquee-card rt-radius-sm"
                    >
                      <div className="w-layout-vflex rt-service-v1-marquee-card-content">
                        <div className="rt-text-style-h2 rt-text-center">
                          {item.title}
                        </div>
                        <Link
                          {...{ hover: "round-button" }}
                          href={item.href}
                          className="rt-round-button w-inline-block"
                        >
                          <div
                            {...{ hover: "round-button-icon" }}
                            className="w-layout-hflex rt-round-button-icon rt-zindex-2"
                          >
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="1"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="#4D4237"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <svg
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              round-icon="2"
                              className="rt-position-absolute"
                            >
                              <path
                                d="M9 9V1H1M9 1L1 9"
                                stroke="var(--_colors---neutral-color--neutral-100)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="rt-non-descriptive-text">
                            {content.ndt}
                          </div>
                          <div
                            {...{ hover: "round-button-overlay" }}
                            className="rt-position-absolute rt-bg-secondary rt-radius-xl"
                          ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
