"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeResults() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeResults;
  return (
    <section
      {...{ line: "wrap" }}
      {...{ return: "wrap" }}
      className="rt-section"
      id="results"
      ref={sectionRef}
    >
      <div className="rt-statistics-v1-outer-wrapper">
        <div className="rt-statistics-v1-wrapper rt-radius-lg">
          <div className="w-layout-blockcontainer rt-container rt-right-gutter-off w-container">
            <div className="w-layout-hflex rt-statistics-v1-main">
              <div className="w-layout-vflex rt-statistics-v1-left-part">
                <div className="w-layout-vflex rt-stats-left-v1 rt-desktop-gap">
                  <div className="w-layout-vflex rt-stats-left-top-v1">
                    <div
                      {...{ appear: "heading" }}
                      className="rt-text-style-h3 rt-text-color-tertiary"
                    >
                      {content.financialPerformance}
                    </div>
                    <div data-counter="35%" className="rt-stats-number-v1">
                      {content.value35}
                    </div>
                  </div>
                  <p
                    {...{ appear: "paragraph" }}
                    className="rt-text-color-tertiary"
                  >
                    {content.description}
                  </p>
                </div>
                <div className="rt-globe">
                  <Image
                    src={content.globeIconImage}
                    alt={content.globeIconAlt}
                    decoding="async"
                    width={414}
                    height={409}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div
                  {...{ return: "line-1" }}
                  className="rt-return-line rt-tab-display-none"
                ></div>
              </div>
              <div className="w-layout-vflex rt-statistics-v1-right-part">
                <div className="w-layout-vflex rt-stats-invest-v1">
                  <div
                    {...{ appear: "heading" }}
                    className="rt-text-style-h3 rt-text-color-tertiary"
                  >
                    {content.investmentReturns}
                  </div>
                  <div className="w-layout-vflex rt-stats-graph-v1">
                    <div className="w-layout-hflex rt-stats-barrow-v1">
                      <div className="rt-text-style-h5 rt-text-color-tertiary">
                        {content.value2024}
                      </div>
                      <div className="w-layout-hflex rt-returns-bar">
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                        <div
                          {...{ return: "item" }}
                          className="rt-returns-bar-item"
                        ></div>
                      </div>
                      <div
                        data-counter="8%"
                        className="rt-text-style-h5 rt-text-color-octonary"
                      >
                        {content.value8}
                      </div>
                    </div>
                    <div className="w-layout-hflex rt-stats-barrow-v1">
                      <div className="rt-text-style-h5 rt-text-color-tertiary">
                        {content.value2025}
                      </div>
                      <div className="w-layout-hflex rt-returns-bar rt-v2">
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                        <div
                          {...{ return: "item-2" }}
                          className="rt-returns-bar-item rt-v2"
                        ></div>
                      </div>
                      <div
                        data-counter="10.5%"
                        className="rt-text-style-h5 rt-text-color-octonary"
                      >
                        {content.value105}
                      </div>
                    </div>
                    <div className="w-layout-hflex rt-stats-barrow-v1">
                      <div className="rt-text-style-h5 rt-text-color-tertiary">
                        {content.value2026}
                      </div>
                      <div className="w-layout-hflex rt-returns-bar rt-v3">
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                        <div
                          {...{ return: "item-3" }}
                          className="rt-returns-bar-item rt-v3"
                        ></div>
                      </div>
                      <div
                        data-counter="12%"
                        className="rt-text-style-h5 rt-text-color-octonary"
                      >
                        {content.value12}
                      </div>
                    </div>
                  </div>
                  <div
                    {...{ return: "line-2" }}
                    className="rt-return-line rt-v2 rt-tab-display-none"
                  ></div>
                </div>
                <div className="w-layout-hflex rt-statistics-v1-across">
                  <div className="w-layout-vflex rt-client-box">
                    <div className="w-layout-vflex rt-stats-clients-v1">
                      <div
                        {...{ appear: "heading" }}
                        className="rt-text-style-h3 rt-text-color-tertiary"
                      >
                        {content.clientsAcrossMultipleMarkets}
                      </div>
                      <div
                        {...{ appear: "paragraph" }}
                        className="rt-stats-desc-v1"
                      >
                        {
                          content.deliveringTailoredFinancialSolutionsToClientsAcrossMultipleMarket
                        }
                      </div>
                    </div>
                    <div className="rt-map-image rt-tab-display-none">
                      <Image
                        alt={
                          content.worldMapShowingClientPresenceAcrossMultipleMarketsAlt
                        }
                        src={
                          content.worldMapShowingClientPresenceAcrossMultipleMarketsImage
                        }
                        className="rt-stats-mapimg-v1"
                        decoding="async"
                        width={600}
                        height={400}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div className="w-layout-vflex rt-client-logo-main-outside rt-top-margin">
                      <div className="w-layout-hflex rt-client-logo-main">
                        <div
                          page-load="marquee"
                          className="w-layout-hflex rt-client-logo-train"
                        >
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.asiaPacific}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage2}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.netherlands}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage3}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.northAmerica}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage4}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.europe}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          page-load="marquee"
                          className="w-layout-hflex rt-client-logo-train"
                        >
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.asiaPacific}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage2}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.netherlands}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage3}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.northAmerica}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage4}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.europe}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-hflex rt-client-logo-main">
                        <div
                          page-load="marquee-reverse"
                          className="w-layout-hflex rt-client-logo-train"
                        >
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.asiaPacific}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage2}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.netherlands}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage3}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.northAmerica}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage4}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.europe}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          page-load="marquee-reverse"
                          className="w-layout-hflex rt-client-logo-train"
                        >
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.asiaPacific}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage2}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.netherlands}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage3}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.northAmerica}
                              </div>
                            </div>
                          </div>
                          <div className="rt-client-box-wrap-outside">
                            <div className="w-layout-hflex rt-client-box-wrap">
                              <div className="w-layout-vflex rt-client-logo">
                                <Image
                                  src={content.northAmericaFlagImage4}
                                  alt={content.northAmericaFlagAlt}
                                  decoding="async"
                                  width={21}
                                  height={21}
                                  sizes="21px"
                                />
                              </div>
                              <div className="rt-sub-text rt-text-color-primary">
                                {content.europe}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rt-position-absolute rt-two-side-overlay"></div>
                    </div>
                    <div
                      {...{ return: "line-3" }}
                      className="rt-return-line rt-landscape-display-none"
                    ></div>
                  </div>
                  <div className="w-layout-vflex rt-stats-satisfaction-v1">
                    <div className="w-layout-vflex rt-stats-statgroup-v1">
                      <div data-counter="98%" className="rt-stats-number-v1">
                        {content.value98}
                      </div>
                      <div
                        {...{ appear: "heading" }}
                        className="rt-text-style-h3 rt-text-color-tertiary"
                      >
                        {content.clientSatisfactionRate}
                      </div>
                    </div>
                    <p
                      {...{ appear: "paragraph" }}
                      className="rt-text-color-tertiary"
                    >
                      {content.description2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rt-globe rt-half-globe">
                <Image
                  src={content.globeIconImage}
                  alt={content.globeIconAlt}
                  decoding="async"
                  width={414}
                  height={409}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
