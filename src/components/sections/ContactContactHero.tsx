"use client";
import { useRef } from "react";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/data/siteConfig";
export default function ContactContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.contactContactHero;
  return (
    <div
      common-banner="scroll"
      className="rt-position-relative"
      id="contact-hero"
      ref={sectionRef}
    >
      <div className="w-layout-vflex rt-common-banner">
        <div className="rt-common-banner-image-wrap">
          <div common-banner="image" className="rt-card-image-wrap">
            <Image
              image-appear="page-load"
              src={content.contactPageHeroBannerImageImage}
              alt={content.contactPageHeroBannerImageAlt}
              decoding="async"
              width={1920}
              height={900}
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
              {content.contactUs}
            </div>
            <div className="rt-common-banner-heading w-variant-a2c17057-7d24-bc60-d070-5f008b7612b2">
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
      <section className="rt-section-v2 rt-bg-quinary" id="contact-form">
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="rt-col-six rt-gap-md">
            <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
              {content.getInTouch}
            </div>
            <h2 {...{ appear: "heading" }}>{content.heading}</h2>
          </div>
          <div
            {...{ data: "card-wrap" }}
            className="w-layout-hflex rt-contact-wrap"
          >
            <div
              {...{ data: "card-v1" }}
              className="rt-contact-left rt-radius-md"
            >
              <div className="rt-gap-off w-form">
                <ContactForm
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  data-design-only="true"
                >
                  <div className="w-layout-vflex rt-contact-inner">
                    <div className="w-layout-grid rt-contact-inner-grid">
                      <input
                        className="rt-input-field w-node-_706ccce5-b7ae-44fb-a575-3f5b22513304-225132f7 w-input"
                        maxLength={256}
                        name="full-name"
                        data-name="full-name"
                        placeholder={content.fullNamePlaceholder}
                        type="text"
                        id="full-name"
                        required={true}
                        aria-label={content.fullNamePlaceholder}
                      />
                      <input
                        className="rt-input-field w-node-_706ccce5-b7ae-44fb-a575-3f5b22513305-225132f7 w-input"
                        maxLength={256}
                        name="email"
                        data-name="email"
                        placeholder={content.emailPlaceholder}
                        type="email"
                        id="email"
                        required={true}
                        aria-label={content.emailPlaceholder}
                      />
                    </div>
                    <div className="w-layout-grid rt-contact-inner-grid">
                      <input
                        className="rt-input-field w-node-_706ccce5-b7ae-44fb-a575-3f5b22513307-225132f7 w-input"
                        maxLength={256}
                        name="phone"
                        data-name="phone"
                        placeholder={content.phonePlaceholder}
                        type="tel"
                        id="phone"
                        required={true}
                        aria-label={content.phonePlaceholder}
                      />
                      <input
                        className="rt-input-field w-node-_706ccce5-b7ae-44fb-a575-3f5b22513308-225132f7 w-input"
                        maxLength={256}
                        name="address"
                        data-name="address"
                        placeholder={content.addressPlaceholder}
                        type="text"
                        id="address"
                        required={true}
                        aria-label={content.addressPlaceholder}
                      />
                    </div>
                    <input
                      className="rt-input-field w-input"
                      maxLength={256}
                      name="subject"
                      data-name="subject"
                      placeholder={content.subjectPlaceholder}
                      type="text"
                      id="subject"
                      required={true}
                      aria-label={content.subjectPlaceholder}
                    />
                    <textarea
                      id="message"
                      name="message"
                      maxLength={5000}
                      data-name="message"
                      placeholder={content.messagePlaceholder}
                      className="rt-input-field rt-textarea w-input"
                      aria-label={content.messagePlaceholder}
                    ></textarea>
                  </div>
                  <div className="w-layout-hflex rt-contact-btton-wrap">
                    <div
                      {...{ hover: "button" }}
                      className="rt-position-relative"
                    >
                      <div
                        {...{ data: "button" }}
                        {...{ hover: "button" }}
                        className="rt-button"
                      >
                        <div className="rt-button-text-wrap rt-overflow-hidden">
                          <div
                            {...{ button: "text-one" }}
                            className="rt-button-text"
                          >
                            {content.submitNow}
                          </div>
                          <div
                            {...{ button: "text-two" }}
                            className="rt-button-text rt-2"
                          >
                            {content.submitNow}
                          </div>
                        </div>
                        <div className="rt-button-icon-wrap rt-overflow-hidden">
                          <Image
                            {...{ button: "icon-one" }}
                            alt={content.buttonIconLightAlt}
                            src={content.buttonIconLightImage}
                            decoding="async"
                            width={10}
                            height={10}
                            sizes="10px"
                          />
                          <Image
                            {...{ button: "icon-two" }}
                            alt={content.buttonIconLightAlt}
                            src={content.buttonIconLightImage}
                            className="rt-button-icon-1"
                            decoding="async"
                            width={10}
                            height={10}
                            sizes="10px"
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        className="rt-submit-button w-button"
                        value={content.submitValue}
                        aria-label={content.submitNow}
                      />
                    </div>
                  </div>
                </ContactForm>
                <div className="rt-success-message rt-radius-xs w-form-done">
                  <div className="rt-text-center rt-text-color-tertiary">
                    {content.thankYouYourSubmissionHasBeenReceived}
                  </div>
                </div>
                <div className="rt-error-message rt-radius-xs w-form-fail">
                  <div className="rt-text-center rt-text-color-tertiary">
                    {content.oopsSomethingWentWrongWhileSubmittingTheForm}
                  </div>
                </div>
              </div>
            </div>
            <div
              {...{ data: "card-v1" }}
              className="w-layout-vflex rt-contact-right rt-radius-md"
            >
              <div className="w-layout-vflex rt-contact-right-top rt-desktop-bttom-gap">
                <div className="rt-sub-text">{content.eyebrow}</div>
                <div className="w-layout-hflex rt-contact-box">
                  <div className="rt-conatct-avatar rt-radius-xs rt-overflow-hidden">
                    <Image
                      src={content.contactAvatarImageImage}
                      alt={content.contactAvatarImageAlt}
                      decoding="async"
                      width={130}
                      height={130}
                      sizes="130px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-contact-box-content">
                    <div className="rt-text-style-h5">
                      {content.marcusWhitfield}
                    </div>
                    <div>{content.seniorAdvisorNewClientIntake}</div>
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-contact-middle">
                <div className="rt-text-style-h5 rt-ct-blocktitle-v1">
                  {content.officeHours}
                </div>
                <div className="w-layout-grid rt-contact-time">
                  <div className="rt-text-style-h5">{content.monThu}</div>
                  <div>{content.value800Am600Pm}</div>
                </div>
                <div className="w-layout-grid rt-contact-time">
                  <div className="rt-text-style-h5">{content.friday}</div>
                  <div>{content.value800Am400Pm}</div>
                </div>
              </div>
              <div className="w-layout-vflex rt-contact-address">
                <div className="rt-text-style-h5 rt-ct-blocktitle-v1">
                  {content.office}
                </div>
                <div>{content.value410SandtownCalifornia94001Usa}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
