"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSolutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSolutions;
  return (
    <section
      className="rt-section-v2 rt-mobile-gap-change"
      id="solutions"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-flex-center rt-gap-lg">
          <div className="rt-col-six">
            <h2 {...{ appear: "heading" }} className="rt-text-center">
              {content.heading}
            </h2>
          </div>
        </div>
        <div
          {...{ data: "card-wrap" }}
          className="w-layout-vflex rt-trasform-wrap rt-mobile-display-none"
        >
          <div
            card-hover="zoom"
            {...{ data: "card-v1" }}
            className="w-layout-hflex rt-transform-item"
          >
            <div className="w-layout-hflex rt-transform-item-content">
              <div className="w-layout-vflex rt-transform-item-content-inner">
                <div className="rt-text-style-h4">
                  {content.financialExperts}
                </div>
                <div>
                  {content.providingReliableAdviceBackedByIndustryKnowledge}
                </div>
              </div>
              <a
                {...{ button: "approach-v1" }}
                href={content.Href}
                className="rt-approach-v1-button rt-v2 w-inline-block"
              >
                <div className="w-layout-hflex rt-approach-v1-button-icon">
                  <Image
                    approach-v1="button-icon-white"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                  <Image
                    approach-v1="button-icon-dark"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    className="rt-approach-v1-button-icon-white"
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                </div>
              </a>
            </div>
            <div className="rt-transform-item-image rt-overflow-hidden rt-radius-md">
              <div image-hover="zoom" className="rt-card-image-wrap">
                <Image
                  {...{ image: "parallalx" }}
                  alt={content.twoColleaguesInConversationAtAnOfficeDeskAlt}
                  src={content.twoColleaguesInConversationAtAnOfficeDeskImage}
                  className="rt-transform-landscape-image-1"
                  decoding="async"
                  width={1464}
                  height={400}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
          <div
            card-hover="zoom"
            {...{ data: "card-v1" }}
            className="w-layout-hflex rt-transform-item"
          >
            <div className="rt-transform-item-image rt-overflow-hidden rt-radius-md">
              <div image-hover="zoom" className="rt-card-image-wrap">
                <Image
                  {...{ image: "parallalx" }}
                  alt={
                    content.manReviewingDocumentsOnATabletInARelaxedSettingAlt
                  }
                  src={
                    content.manReviewingDocumentsOnATabletInARelaxedSettingImage
                  }
                  className="rt-transform-landscape-image-2"
                  decoding="async"
                  width={1464}
                  height={400}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
            <div className="w-layout-hflex rt-transform-item-content rt-middle">
              <div className="w-layout-vflex rt-transform-item-content-inner rt-little-gap">
                <div className="rt-text-style-h4">
                  {content.personalizedSolutions}
                </div>
                <div>
                  {content.strategiesDesignedAroundYourSpecificFinancialGoals}
                </div>
              </div>
              <a
                {...{ button: "approach-v1" }}
                href={content.Href}
                className="rt-approach-v1-button rt-v2 w-inline-block"
              >
                <div className="w-layout-hflex rt-approach-v1-button-icon">
                  <Image
                    approach-v1="button-icon-white"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                  <Image
                    approach-v1="button-icon-dark"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    className="rt-approach-v1-button-icon-white"
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                </div>
              </a>
            </div>
          </div>
          <div
            card-hover="zoom"
            {...{ data: "card-v1" }}
            className="w-layout-hflex rt-transform-item"
          >
            <div className="w-layout-hflex rt-transform-item-content">
              <div className="w-layout-vflex rt-transform-item-content-inner">
                <div className="rt-text-style-h4">
                  {content.longTermPartnership}
                </div>
                <div>
                  {content.buildingRelationshipsFocusedOnContinuousSuccess}
                </div>
              </div>
              <a
                {...{ button: "approach-v1" }}
                href={content.Href}
                className="rt-approach-v1-button rt-v2 w-inline-block"
              >
                <div className="w-layout-hflex rt-approach-v1-button-icon">
                  <Image
                    approach-v1="button-icon-white"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                  <Image
                    approach-v1="button-icon-dark"
                    alt={content.buttonDarkIconAlt}
                    src={content.buttonDarkIconImage}
                    className="rt-approach-v1-button-icon-white"
                    decoding="async"
                    width={10}
                    height={10}
                    sizes="10px"
                  />
                </div>
              </a>
            </div>
            <div className="rt-transform-item-image rt-overflow-hidden rt-radius-md">
              <div image-hover="zoom" className="rt-card-image-wrap">
                <Image
                  {...{ image: "parallalx" }}
                  alt={content.twoColleaguesReviewingPlansTogetherAtATableAlt}
                  src={content.twoColleaguesReviewingPlansTogetherAtATableImage}
                  className="rt-transform-landscape-image-3"
                  decoding="async"
                  width={1464}
                  height={400}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
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
              <div className="w-layout-hflex rt-transform-item">
                <div className="w-layout-hflex rt-transform-item-content">
                  <div className="w-layout-vflex rt-transform-item-content-inner">
                    <div className="rt-text-style-h4">
                      {content.financialExperts}
                    </div>
                    <div>{content.reliableAdviceBackedByIndustryExpertise}</div>
                  </div>
                  <a
                    {...{ button: "approach-v1" }}
                    href={content.Href}
                    className="rt-approach-v1-button rt-v2 w-inline-block"
                  >
                    <div className="w-layout-hflex rt-approach-v1-button-icon">
                      <Image
                        approach-v1="button-icon-white"
                        alt={content.buttonDarkIconAlt}
                        src={content.buttonDarkIconImage}
                        decoding="async"
                        width={10}
                        height={10}
                        sizes="10px"
                      />
                      <Image
                        approach-v1="button-icon-dark"
                        alt={content.buttonDarkIconAlt}
                        src={content.buttonDarkIconImage}
                        className="rt-approach-v1-button-icon-white"
                        decoding="async"
                        width={10}
                        height={10}
                        sizes="10px"
                      />
                    </div>
                  </a>
                </div>
                <div className="rt-transform-item-image rt-overflow-hidden rt-radius-md">
                  <Image
                    {...{ image: "parallalx" }}
                    alt={content.twoColleaguesInConversationAtAnOfficeDeskAlt}
                    src={content.twoColleaguesInConversationAtAnOfficeDeskImage}
                    className="rt-transform-landscape-image-1"
                    decoding="async"
                    width={1464}
                    height={400}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-layout-hflex rt-transform-item">
                <div className="rt-transform-item-image rt-overflow-hidden rt-radius-md">
                  <Image
                    {...{ image: "parallalx" }}
                    alt={
                      content.manReviewingDocumentsOnATabletInARelaxedSettingAlt
                    }
                    src={
                      content.manReviewingDocumentsOnATabletInARelaxedSettingImage
                    }
                    className="rt-transform-landscape-image-2"
                    decoding="async"
                    width={1464}
                    height={400}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="w-layout-hflex rt-transform-item-content rt-middle">
                  <div className="w-layout-vflex rt-transform-item-content-inner">
                    <div className="rt-text-style-h4">
                      {content.personalizedSolutions}
                    </div>
                    <div>
                      {
                        content.strategiesDesignedAroundYourSpecificFinancialGoals
                      }
                    </div>
                  </div>
                  <a
                    {...{ button: "approach-v1" }}
                    href={content.Href}
                    className="rt-approach-v1-button rt-v2 w-inline-block"
                  >
                    <div className="w-layout-hflex rt-approach-v1-button-icon">
                      <Image
                        approach-v1="button-icon-white"
                        alt={content.buttonDarkIconAlt}
                        src={content.buttonDarkIconImage}
                        decoding="async"
                        width={10}
                        height={10}
                        sizes="10px"
                      />
                      <Image
                        approach-v1="button-icon-dark"
                        alt={content.buttonDarkIconAlt}
                        src={content.buttonDarkIconImage}
                        className="rt-approach-v1-button-icon-white"
                        decoding="async"
                        width={10}
                        height={10}
                        sizes="10px"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-layout-hflex rt-transform-item">
                <div className="w-layout-hflex rt-transform-item-content">
                  <div className="w-layout-vflex rt-transform-item-content-inner">
                    <div className="rt-text-style-h4">
                      {content.longTermPartnership}
                    </div>
                    <div>
                      {content.buildingRelationshipsFocusedOnContinuousSuccess}
                    </div>
                  </div>
                  <a
                    {...{ button: "approach-v1" }}
                    href={content.Href}
                    className="rt-approach-v1-button rt-v2 w-inline-block"
                  >
                    <div className="w-layout-hflex rt-approach-v1-button-icon">
                      <Image
                        approach-v1="button-icon-white"
                        alt={content.buttonDarkIconAlt}
                        src={content.buttonDarkIconImage}
                        decoding="async"
                        width={10}
                        height={10}
                        sizes="10px"
                      />
                      <Image
                        approach-v1="button-icon-dark"
                        alt={content.buttonDarkIconAlt}
                        src={content.buttonDarkIconImage}
                        className="rt-approach-v1-button-icon-white"
                        decoding="async"
                        width={10}
                        height={10}
                        sizes="10px"
                      />
                    </div>
                  </a>
                </div>
                <div className="rt-transform-item-image rt-overflow-hidden rt-radius-md">
                  <Image
                    {...{ image: "parallalx" }}
                    alt={content.twoColleaguesReviewingPlansTogetherAtATableAlt}
                    src={
                      content.twoColleaguesReviewingPlansTogetherAtATableImage
                    }
                    className="rt-transform-landscape-image-3"
                    decoding="async"
                    width={1464}
                    height={400}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
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
          <div className="rt-mobile-slider-nav w-slider-nav w-slider-nav-invert w-round"></div>
        </div>
      </div>
    </section>
  );
}
