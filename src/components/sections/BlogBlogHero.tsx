"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function BlogBlogHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.blogBlogHero;
  return (
    <div
      common-banner="scroll"
      className="rt-position-relative"
      id="blog-hero"
      ref={sectionRef}
    >
      <div className="w-layout-vflex rt-common-banner">
        <div className="rt-common-banner-image-wrap">
          <div common-banner="image" className="rt-card-image-wrap">
            <Image
              image-appear="page-load"
              src={
                content.aProfessionalWomanInADarkBlazerSmilesAndEngagesInConversationWithColleaguesInAModernOfficeSettingWithLargeWindowsAndWoodenFurnitureImage
              }
              alt={
                content.aProfessionalWomanInADarkBlazerSmilesAndEngagesInConverAlt
              }
              decoding="async"
              width={3840}
              height={1800}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div className="rt-position-absolute rt-common-banner-overlay"></div>
        </div>
        <div className="w-layout-blockcontainer rt-container w-container">
          <div
            common-banner="content"
            className="w-layout-vflex rt-flex-center rt-zindex-2"
          >
            <div
              data-animate="text"
              className="rt-sub-text rt-sub-gap rt-text-color-tertiary"
            >
              {content.blog}
            </div>
            <div className="rt-common-banner-heading">
              <h1
                {...{ appear: "heading" }}
                className="rt-text-center rt-text-color-tertiary rt-mobile-text-size-change"
              >
                {content.title}
              </h1>
              <p className="rt-utility-text">{content.description}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="rt-section-v2 rt-bg-quinary" id="articles">
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="w-dyn-list">
            <div
              {...{ data: "card-wrap" }}
              role="list"
              className="rt-blog-grid w-dyn-items"
            >
              {content.items.map((item, index) => (
                <div
                  {...{ data: "card-v1" }}
                  role="listitem"
                  className="w-dyn-item"
                  key={index}
                >
                  <div
                    card-hover="zoom"
                    className="w-layout-vflex rt-blog-card"
                  >
                    <a
                      href={item.href}
                      className="rt-card-image-wrap rt-radius-md w-inline-block"
                    >
                      <div
                        {...{ data: "image" }}
                        className="rt-card-image-wrap"
                      >
                        <div image-hover="zoom" className="rt-card-image-wrap">
                          <Image
                            {...{ image: "parallalx" }}
                            alt={content.Alt}
                            src={item.image}
                            className="rt-blog-page-image"
                            decoding="async"
                            width={1416}
                            height={800}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                        </div>
                      </div>
                      <div
                        {...{ data: "overlay" }}
                        className="rt-image-overlay"
                      ></div>
                      <div className="rt-non-descriptive-text">
                        {content.nonDescriptiveText}
                      </div>
                      <div className="rt-non-descriptive-text">
                        {content.nonDescriptiveText}
                      </div>
                    </a>
                    <div className="w-layout-vflex rt-blog-card-content rt-radius-md">
                      <div className="rt-blog-card-heading">
                        <div className="rt-text-style-h3">{item.title}</div>
                      </div>
                      <div className="w-layout-hflex rt-blog-card-content-bottom">
                        <div className="rt-sub-text">{item.label}</div>
                        <a
                          {...{ button: "approach-v1" }}
                          href={item.href2}
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
                          <div className="rt-non-descriptive-text">
                            {content.nonDescriptiveText}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
