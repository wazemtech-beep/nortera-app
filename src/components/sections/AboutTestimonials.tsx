"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutTestimonials;
  return (
    <section
      className="rt-section rt-mobile-gap-change"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-col-seven rt-gap-lg rt-tab-align-change">
          <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
            {content.testimonials}
          </div>
          <h2 {...{ appear: "heading" }} className="rt-tab-text-center">
            {content.heading}
          </h2>
        </div>
        <div
          {...{ data: "card-wrap" }}
          className="w-layout-grid rt-testimonial-grid rt-mobile-display-none"
        >
          <div
            {...{ data: "card-v1" }}
            className="w-layout-vflex rt-testimonial-card rt-overflow-hidden rt-radius-md"
          >
            <div className="w-layout-vflex rt-testimonial-card-top">
              <div className="w-layout-vflex rt-testimonial-quote">
                <div className="rt-flex-center w-embed">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4V16C14 17.0609 13.5786 18.0783 12.8284 18.8284C12.0783 19.5786 11.0609 20 10 20C9.46957 20 8.96086 20.2107 8.58578 20.5858C8.21071 20.9609 8 21.4696 8 22V24C8 25.0609 8.42143 26.0783 9.17157 26.8284C9.92172 27.5786 10.9391 28 12 28C12.5304 28 13.0391 28.2107 13.4142 28.5858C13.7893 28.9609 14 29.4696 14 30V34C14 34.5304 13.7893 35.0391 13.4142 35.4142C13.0391 35.7893 12.5304 36 12 36C8.8174 36 5.76515 34.7357 3.51472 32.4853C1.26428 30.2348 0 27.1826 0 24V4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H10Z"
                      fill="#919191"
                    ></path>
                    <path
                      d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V16C36 17.0609 35.5786 18.0783 34.8284 18.8284C34.0783 19.5786 33.0609 20 32 20C31.4696 20 30.9609 20.2107 30.5858 20.5858C30.2107 20.9609 30 21.4696 30 22V24C30 25.0609 30.4214 26.0783 31.1716 26.8284C31.9217 27.5786 32.9391 28 34 28C34.5304 28 35.0391 28.2107 35.4142 28.5858C35.7893 28.9609 36 29.4696 36 30V34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36C30.8174 36 27.7652 34.7357 25.5147 32.4853C23.2643 30.2348 22 27.1826 22 24V4C22 2.93913 22.4214 1.92172 23.1716 1.17157C23.9217 0.421427 24.9391 0 26 0H32Z"
                      fill="#919191"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="rt-text-style-h5 rt-text-color-change">
                {
                  content.theirFinancialExpertiseHelpedUsImproveCashFlowMakeSmart
                }
              </div>
            </div>
            <div className="w-layout-hflex rt-testimonial-v2-bottom rt-position-static">
              <Image
                src={content.michaelReynoldsHeadshotImage}
                alt={content.michaelReynoldsHeadshotAlt}
                className="rt-testimonial-v2-avatar"
                decoding="async"
                width={120}
                height={120}
                sizes="120px"
              />
              <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                <div className="rt-text-style-h5">
                  {content.michaelReynolds}
                </div>
                <div>{content.founderCeo}</div>
              </div>
            </div>
          </div>
          <div
            {...{ data: "card-v1" }}
            className="rt-card-image-wrap rt-radius-md"
          >
            <Image
              {...{ image: "parallalx" }}
              alt={content.manInANavyBlazerSmilingByAWindowAlt}
              src={content.manInANavyBlazerSmilingByAWindowImage}
              className="rt-testimonial-image"
              decoding="async"
              width={928}
              height={960}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div
            {...{ data: "card-v1" }}
            className="w-layout-vflex rt-testimonial-card rt-overflow-hidden rt-radius-md"
          >
            <div className="w-layout-vflex rt-testimonial-card-top">
              <div className="w-layout-vflex rt-testimonial-quote">
                <div className="rt-flex-center w-embed">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4V16C14 17.0609 13.5786 18.0783 12.8284 18.8284C12.0783 19.5786 11.0609 20 10 20C9.46957 20 8.96086 20.2107 8.58578 20.5858C8.21071 20.9609 8 21.4696 8 22V24C8 25.0609 8.42143 26.0783 9.17157 26.8284C9.92172 27.5786 10.9391 28 12 28C12.5304 28 13.0391 28.2107 13.4142 28.5858C13.7893 28.9609 14 29.4696 14 30V34C14 34.5304 13.7893 35.0391 13.4142 35.4142C13.0391 35.7893 12.5304 36 12 36C8.8174 36 5.76515 34.7357 3.51472 32.4853C1.26428 30.2348 0 27.1826 0 24V4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H10Z"
                      fill="#919191"
                    ></path>
                    <path
                      d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V16C36 17.0609 35.5786 18.0783 34.8284 18.8284C34.0783 19.5786 33.0609 20 32 20C31.4696 20 30.9609 20.2107 30.5858 20.5858C30.2107 20.9609 30 21.4696 30 22V24C30 25.0609 30.4214 26.0783 31.1716 26.8284C31.9217 27.5786 32.9391 28 34 28C34.5304 28 35.0391 28.2107 35.4142 28.5858C35.7893 28.9609 36 29.4696 36 30V34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36C30.8174 36 27.7652 34.7357 25.5147 32.4853C23.2643 30.2348 22 27.1826 22 24V4C22 2.93913 22.4214 1.92172 23.1716 1.17157C23.9217 0.421427 24.9391 0 26 0H32Z"
                      fill="#919191"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="rt-text-style-h5 rt-text-color-change">
                {
                  content.partneringWithThisConsultingTeamWasAGreatDecisionTheirE
                }
              </div>
            </div>
            <div className="w-layout-hflex rt-testimonial-v2-bottom rt-position-static">
              <Image
                src={content.aspenCurtisHeadshotImage}
                alt={content.aspenCurtisHeadshotAlt}
                className="rt-testimonial-v2-avatar"
                decoding="async"
                width={120}
                height={120}
                sizes="120px"
              />
              <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                <div className="rt-text-style-h5">{content.aspenCurtis}</div>
                <div>{content.managingDirector}</div>
              </div>
            </div>
          </div>
          <div
            {...{ data: "card-v1" }}
            className="rt-card-image-wrap rt-radius-md"
          >
            <Image
              {...{ image: "parallalx" }}
              alt={content.womanWithGlassesInADesignStudioAlt}
              src={content.womanWithGlassesInADesignStudioImage}
              className="rt-testimonial-image"
              decoding="async"
              width={464}
              height={480}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div
            {...{ data: "card-v1" }}
            className="w-layout-vflex rt-testimonial-card rt-overflow-hidden rt-radius-md"
          >
            <div className="w-layout-vflex rt-testimonial-card-top">
              <div className="w-layout-vflex rt-testimonial-quote">
                <div className="rt-flex-center w-embed">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4V16C14 17.0609 13.5786 18.0783 12.8284 18.8284C12.0783 19.5786 11.0609 20 10 20C9.46957 20 8.96086 20.2107 8.58578 20.5858C8.21071 20.9609 8 21.4696 8 22V24C8 25.0609 8.42143 26.0783 9.17157 26.8284C9.92172 27.5786 10.9391 28 12 28C12.5304 28 13.0391 28.2107 13.4142 28.5858C13.7893 28.9609 14 29.4696 14 30V34C14 34.5304 13.7893 35.0391 13.4142 35.4142C13.0391 35.7893 12.5304 36 12 36C8.8174 36 5.76515 34.7357 3.51472 32.4853C1.26428 30.2348 0 27.1826 0 24V4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H10Z"
                      fill="#919191"
                    ></path>
                    <path
                      d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V16C36 17.0609 35.5786 18.0783 34.8284 18.8284C34.0783 19.5786 33.0609 20 32 20C31.4696 20 30.9609 20.2107 30.5858 20.5858C30.2107 20.9609 30 21.4696 30 22V24C30 25.0609 30.4214 26.0783 31.1716 26.8284C31.9217 27.5786 32.9391 28 34 28C34.5304 28 35.0391 28.2107 35.4142 28.5858C35.7893 28.9609 36 29.4696 36 30V34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36C30.8174 36 27.7652 34.7357 25.5147 32.4853C23.2643 30.2348 22 27.1826 22 24V4C22 2.93913 22.4214 1.92172 23.1716 1.17157C23.9217 0.421427 24.9391 0 26 0H32Z"
                      fill="#919191"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="rt-text-style-h5 rt-text-color-change">
                {
                  content.professionalInsightfulAndResultsFocusedTheirStrategicFi
                }
              </div>
            </div>
            <div className="w-layout-hflex rt-testimonial-v2-bottom rt-position-static">
              <Image
                src={content.homeOneTestimonialClientImageTwoImage}
                alt={content.homeOneTestimonialClientImageTwoAlt}
                className="rt-testimonial-v2-avatar"
                decoding="async"
                width={112}
                height={112}
                sizes="112px"
              />
              <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                <div className="rt-text-style-h5">{content.makennaBator}</div>
                <div>{content.entrepreneur}</div>
              </div>
            </div>
          </div>
          <div
            {...{ data: "card-v1" }}
            className="rt-card-image-wrap rt-radius-md"
          >
            <Image
              {...{ image: "parallalx" }}
              alt={content.womanInAnArtFilledStudioAlt}
              src={content.womanInAnArtFilledStudioImage}
              className="rt-testimonial-image"
              decoding="async"
              width={464}
              height={480}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
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
              <div className="w-layout-vflex rt-testimonial-card rt-overflow-hidden rt-radius-md">
                <div className="w-layout-vflex rt-testimonial-card-top">
                  <div className="w-layout-vflex rt-testimonial-quote">
                    <div className="rt-flex-center w-embed">
                      <svg
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4V16C14 17.0609 13.5786 18.0783 12.8284 18.8284C12.0783 19.5786 11.0609 20 10 20C9.46957 20 8.96086 20.2107 8.58578 20.5858C8.21071 20.9609 8 21.4696 8 22V24C8 25.0609 8.42143 26.0783 9.17157 26.8284C9.92172 27.5786 10.9391 28 12 28C12.5304 28 13.0391 28.2107 13.4142 28.5858C13.7893 28.9609 14 29.4696 14 30V34C14 34.5304 13.7893 35.0391 13.4142 35.4142C13.0391 35.7893 12.5304 36 12 36C8.8174 36 5.76515 34.7357 3.51472 32.4853C1.26428 30.2348 0 27.1826 0 24V4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H10Z"
                          fill="#919191"
                        ></path>
                        <path
                          d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V16C36 17.0609 35.5786 18.0783 34.8284 18.8284C34.0783 19.5786 33.0609 20 32 20C31.4696 20 30.9609 20.2107 30.5858 20.5858C30.2107 20.9609 30 21.4696 30 22V24C30 25.0609 30.4214 26.0783 31.1716 26.8284C31.9217 27.5786 32.9391 28 34 28C34.5304 28 35.0391 28.2107 35.4142 28.5858C35.7893 28.9609 36 29.4696 36 30V34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36C30.8174 36 27.7652 34.7357 25.5147 32.4853C23.2643 30.2348 22 27.1826 22 24V4C22 2.93913 22.4214 1.92172 23.1716 1.17157C23.9217 0.421427 24.9391 0 26 0H32Z"
                          fill="#919191"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="rt-text-style-h5 rt-text-color-change">
                    {
                      content.theirFinancialExpertiseHelpedUsImproveCashFlowMakeSmart
                    }
                  </div>
                </div>
                <div className="w-layout-hflex rt-testimonial-v2-bottom rt-position-static">
                  <Image
                    src={content.michaelReynoldsHeadshotImage}
                    alt={content.michaelReynoldsHeadshotAlt}
                    className="rt-testimonial-v2-avatar"
                    decoding="async"
                    width={120}
                    height={120}
                    sizes="120px"
                  />
                  <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                    <div className="rt-text-style-h5">
                      {content.michaelReynolds}
                    </div>
                    <div>{content.founderCeo}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-layout-vflex rt-testimonial-card rt-overflow-hidden rt-radius-md">
                <div className="w-layout-vflex rt-testimonial-card-top">
                  <div className="w-layout-vflex rt-testimonial-quote">
                    <div className="rt-flex-center w-embed">
                      <svg
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4V16C14 17.0609 13.5786 18.0783 12.8284 18.8284C12.0783 19.5786 11.0609 20 10 20C9.46957 20 8.96086 20.2107 8.58578 20.5858C8.21071 20.9609 8 21.4696 8 22V24C8 25.0609 8.42143 26.0783 9.17157 26.8284C9.92172 27.5786 10.9391 28 12 28C12.5304 28 13.0391 28.2107 13.4142 28.5858C13.7893 28.9609 14 29.4696 14 30V34C14 34.5304 13.7893 35.0391 13.4142 35.4142C13.0391 35.7893 12.5304 36 12 36C8.8174 36 5.76515 34.7357 3.51472 32.4853C1.26428 30.2348 0 27.1826 0 24V4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H10Z"
                          fill="#919191"
                        ></path>
                        <path
                          d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V16C36 17.0609 35.5786 18.0783 34.8284 18.8284C34.0783 19.5786 33.0609 20 32 20C31.4696 20 30.9609 20.2107 30.5858 20.5858C30.2107 20.9609 30 21.4696 30 22V24C30 25.0609 30.4214 26.0783 31.1716 26.8284C31.9217 27.5786 32.9391 28 34 28C34.5304 28 35.0391 28.2107 35.4142 28.5858C35.7893 28.9609 36 29.4696 36 30V34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36C30.8174 36 27.7652 34.7357 25.5147 32.4853C23.2643 30.2348 22 27.1826 22 24V4C22 2.93913 22.4214 1.92172 23.1716 1.17157C23.9217 0.421427 24.9391 0 26 0H32Z"
                          fill="#919191"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="rt-text-style-h5 rt-text-color-change">
                    {
                      content.partneringWithThisConsultingTeamWasAGreatDecisionTheirE
                    }
                  </div>
                </div>
                <div className="w-layout-hflex rt-testimonial-v2-bottom rt-position-static">
                  <Image
                    src={content.aspenCurtisHeadshotImage}
                    alt={content.aspenCurtisHeadshotAlt}
                    className="rt-testimonial-v2-avatar"
                    decoding="async"
                    width={120}
                    height={120}
                    sizes="120px"
                  />
                  <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                    <div className="rt-text-style-h5">
                      {content.aspenCurtis}
                    </div>
                    <div>{content.managingDirector}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-layout-vflex rt-testimonial-card rt-overflow-hidden rt-radius-md">
                <div className="w-layout-vflex rt-testimonial-card-top">
                  <div className="w-layout-vflex rt-testimonial-quote">
                    <div className="rt-flex-center w-embed">
                      <svg
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4V16C14 17.0609 13.5786 18.0783 12.8284 18.8284C12.0783 19.5786 11.0609 20 10 20C9.46957 20 8.96086 20.2107 8.58578 20.5858C8.21071 20.9609 8 21.4696 8 22V24C8 25.0609 8.42143 26.0783 9.17157 26.8284C9.92172 27.5786 10.9391 28 12 28C12.5304 28 13.0391 28.2107 13.4142 28.5858C13.7893 28.9609 14 29.4696 14 30V34C14 34.5304 13.7893 35.0391 13.4142 35.4142C13.0391 35.7893 12.5304 36 12 36C8.8174 36 5.76515 34.7357 3.51472 32.4853C1.26428 30.2348 0 27.1826 0 24V4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H10Z"
                          fill="#919191"
                        ></path>
                        <path
                          d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V16C36 17.0609 35.5786 18.0783 34.8284 18.8284C34.0783 19.5786 33.0609 20 32 20C31.4696 20 30.9609 20.2107 30.5858 20.5858C30.2107 20.9609 30 21.4696 30 22V24C30 25.0609 30.4214 26.0783 31.1716 26.8284C31.9217 27.5786 32.9391 28 34 28C34.5304 28 35.0391 28.2107 35.4142 28.5858C35.7893 28.9609 36 29.4696 36 30V34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36C30.8174 36 27.7652 34.7357 25.5147 32.4853C23.2643 30.2348 22 27.1826 22 24V4C22 2.93913 22.4214 1.92172 23.1716 1.17157C23.9217 0.421427 24.9391 0 26 0H32Z"
                          fill="#919191"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="rt-text-style-h5 rt-text-color-change">
                    {
                      content.professionalInsightfulAndResultsFocusedTheirStrategicFi
                    }
                  </div>
                </div>
                <div className="w-layout-hflex rt-testimonial-v2-bottom rt-position-static">
                  <Image
                    src={content.homeOneTestimonialClientImageTwoImage}
                    alt={content.homeOneTestimonialClientImageTwoAlt}
                    className="rt-testimonial-v2-avatar"
                    decoding="async"
                    width={112}
                    height={112}
                    sizes="112px"
                  />
                  <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                    <div className="rt-text-style-h5">
                      {content.makennaBator}
                    </div>
                    <div>{content.entrepreneur}</div>
                  </div>
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
