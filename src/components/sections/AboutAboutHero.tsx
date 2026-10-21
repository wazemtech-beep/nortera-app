"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutAboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutAboutHero;
  return (
    <div
      common-banner="scroll"
      className="rt-position-relative"
      id="about-hero"
      ref={sectionRef}
    >
      <div className="w-layout-vflex rt-common-banner rt-v2">
        <div className="rt-common-banner-image-wrap">
          <div common-banner="image" className="rt-card-image-wrap">
            <Image
              image-appear="page-load"
              src={content.aboutHeroBannerMainImageImage}
              alt={content.aboutHeroBannerMainImageAlt}
              className="rt-about-hero-banner-image"
              decoding="async"
              width={3840}
              height={1800}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div className="rt-position-absolute rt-about-hero-overlay"></div>
        </div>
        <div className="w-layout-blockcontainer rt-container rt-zindex-2 w-container">
          <div common-banner="content-v2" className="w-layout-vflex">
            <div
              data-animate="text"
              className="rt-sub-text rt-sub-gap rt-text-color-tertiary"
            >
              {content.aboutZeneth}
            </div>
            <div className="rt-common-banner-heading rt-v2">
              <h1 {...{ appear: "heading" }} className="rt-text-color-tertiary">
                {content.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="rt-about-hero-bottom">
          <div className="w-layout-blockcontainer rt-container w-container">
            <div className="w-layout-hflex rt-about-hero-bottom-inner">
              <div className="w-layout-hflex rt-avatar-group">
                <div className="rt-avater">
                  <Image
                    src={content.investorClientHeadshotImage}
                    alt={content.investorClientHeadshotAlt}
                    decoding="async"
                    width={120}
                    height={120}
                    sizes="120px"
                  />
                </div>
                <div className="rt-avater rt-left-margin">
                  <Image
                    src={content.investorClientHeadshotImage2}
                    alt={content.investorClientHeadshotAlt}
                    decoding="async"
                    width={120}
                    height={120}
                    sizes="120px"
                  />
                </div>
                <div className="rt-avater rt-left-margin">
                  <Image
                    src={content.investorClientHeadshotImage3}
                    alt={content.investorClientHeadshotAlt}
                    decoding="async"
                    width={120}
                    height={120}
                    sizes="120px"
                  />
                </div>
              </div>
              <div className="rt-text-style-h4 rt-text-color-tertiary">
                {content.value45kTrustedPartners}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="rt-section-v2 rt-bg-quinary rt-zindex-4"
        id="about-company"
      >
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="w-layout-vflex rt-flex-center rt-gap-lg rt-desktop-gap-change-v2">
            <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
              {content.aboutOurCompany}
            </div>
            <div className="w-layout-vflex rt-col-nine rt-two-side-dektop-gap">
              <h2 text-opacity="scroll" className="rt-text-center">
                {content.heading}
              </h2>
            </div>
          </div>
          <div className="w-layout-grid rt-company-grid">
            <div className="w-layout-vflex rt-company-item rt-bg-septenary rt-radius-sm">
              <div className="w-layout-vflex rt-company-item-top">
                <div className="w-layout-vflex rt-company-top-inner">
                  <div data-counter="98%" className="rt-number-text">
                    {content.value98}
                  </div>
                  <div
                    {...{ appear: "heading" }}
                    className="rt-text-style-h4 rt-about-company-numlabel-a-v1"
                  >
                    {content.clientSatisfactionRate}
                  </div>
                </div>
                <div {...{ appear: "paragraph" }}>
                  {
                    content.achievingHighClientSatisfactionThroughExpertAdviceAndProvenResult
                  }
                </div>
              </div>
              <div className="w-layout-vflex rt-company-item-bottom">
                <div {...{ divider: "" }} className="rt-divider"></div>
                <div
                  data-animate="text"
                  className="w-layout-hflex rt-company-item-tag"
                >
                  <div className="rt-text-style-h4 rt-about-company-taglabel-v1">
                    {content.globally}
                  </div>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="rt-flex-center"
                  >
                    <path
                      d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="var(--_colors---accent-color--accent-900)"
                    ></path>
                    <path
                      d="M6.5 10.5C6.5 6.77674 7.93223 3.19615 10.5 0.5C13.0678 3.19615 14.5 6.77674 14.5 10.5C14.5 14.2233 13.0678 17.8038 10.5 20.5C7.93223 17.8038 6.5 14.2233 6.5 10.5Z"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="var(--_colors---accent-color--accent-900)"
                    ></path>
                    <path
                      d="M0.5 10.5H20.5"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="var(--_colors---accent-color--accent-900)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-company-item rt-bg-senary rt-radius-sm">
              <div className="w-layout-vflex rt-company-item-top">
                <div className="w-layout-vflex rt-company-top-inner">
                  <div data-counter="40+" className="rt-number-text">
                    {content.value40}
                  </div>
                  <div {...{ appear: "heading" }} className="rt-text-style-h4">
                    {content.industriesSupported}
                  </div>
                </div>
                <div {...{ appear: "paragraph" }}>
                  {
                    content.trustedFinancialExpertiseSupportingBusinessesAcrossDifferentSecto
                  }
                </div>
              </div>
              <div className="w-layout-vflex rt-company-item-bottom">
                <div {...{ divider: "" }} className="rt-divider"></div>
                <div
                  data-animate="text"
                  className="w-layout-hflex rt-company-item-tag"
                >
                  <div className="rt-text-style-h4 rt-about-company-taglabel-v1">
                    {content.allIndustry}
                  </div>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="rt-flex-center"
                  >
                    <path
                      d="M10.5 14.9444H10.5111M14.9444 14.9444H14.9556M6.05556 14.9444H6.06667M0.5 18.2778C0.5 18.8671 0.734126 19.4324 1.15087 19.8491C1.56762 20.2659 2.13285 20.5 2.72222 20.5H18.2778C18.8671 20.5 19.4324 20.2659 19.8491 19.8491C20.2659 19.4324 20.5 18.8671 20.5 18.2778V6.61111C20.5001 6.51145 20.4734 6.41359 20.4227 6.32779C20.372 6.242 20.2991 6.17143 20.2117 6.12348C20.1243 6.07554 20.0257 6.05198 19.9261 6.05527C19.8265 6.05857 19.7296 6.0886 19.6456 6.14222L14.6878 9.30222C14.6038 9.35584 14.5069 9.38587 14.4073 9.38917C14.3077 9.39247 14.209 9.36891 14.1216 9.32096C14.0342 9.27301 13.9614 9.20244 13.9107 9.11665C13.8599 9.03086 13.8332 8.933 13.8333 8.83333V6.61111C13.8334 6.51145 13.8067 6.41359 13.756 6.32779C13.7053 6.242 13.6324 6.17143 13.545 6.12348C13.4577 6.07554 13.359 6.05198 13.2594 6.05527C13.1598 6.05857 13.0629 6.0886 12.9789 6.14222L8.02222 9.30222C7.93819 9.35614 7.84119 9.38641 7.74141 9.38986C7.64163 9.3933 7.54277 9.3698 7.45522 9.32182C7.36767 9.27384 7.29466 9.20315 7.24389 9.11719C7.19311 9.03123 7.16643 8.93317 7.16667 8.83333V2.72222C7.16667 2.13285 6.93254 1.56762 6.51579 1.15087C6.09905 0.734126 5.53381 0.5 4.94444 0.5H2.72222C2.13285 0.5 1.56762 0.734126 1.15087 1.15087C0.734126 1.56762 0.5 2.13285 0.5 2.72222V18.2778Z"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="var(--_colors---accent-color--accent-900)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              id="w-node-_8a684e30-8e7f-4a71-8a5f-2647a8d5f578-a8d5f54d"
              className="rt-company-right rt-overflow-hidden rt-radius-sm"
            >
              <div className="rt-card-image-wrap">
                <div {...{ data: "image" }} className="rt-card-image-wrap">
                  <Image
                    {...{ image: "parallalx" }}
                    alt={
                      content.financialProfessionalStandingConfidentlyInAModernOfficeAlt
                    }
                    src={
                      content.financialProfessionalStandingConfidentlyInAModernOfficeImage
                    }
                    className="rt-company-image"
                    decoding="async"
                    width={708}
                    height={606}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div
                  {...{ data: "overlay" }}
                  className="rt-image-overlay"
                ></div>
              </div>
              <div className="rt-position-absolute rt-company-right-overlay"></div>
              <div className="w-layout-vflex rt-position-absolute rt-company-right-content">
                <div className="w-layout-vflex rt-company-right-content-inner">
                  <div className="rt-text-style-h4 rt-text-color-tertiary rt-text-center">
                    {content.joinUsAndCreateMeaningfulImpact}
                  </div>
                  <div {...{ divider: "" }} className="rt-divider rt-v2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
