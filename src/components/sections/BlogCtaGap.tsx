"use client";
import { useRef } from "react";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/data/siteConfig";
export default function BlogCtaGap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.blogCtaGap;
  return (
    <div className="rt-cta-gap" ref={sectionRef}>
      <section className="rt-cta-v1" id="consultation">
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="w-layout-vflex rt-cta-v1-wrap">
            <div className="rt-cta-heading rt-overflow-hidden">
              <h2 {...{ appear: "heading" }} className="rt-text-center">
                {content.heading}
              </h2>
            </div>
            <div data-animate="text" className="rt-cta-form w-form">
              <ContactForm
                id="wf-form-CTA-Form"
                name="wf-form-CTA-Form"
                data-name="CTA Form"
                className="rt-cta-form-field-wrap rt-full-width"
                data-design-only="true"
              >
                <label
                  {...{ htmlFor: "CTA-Email" }}
                  className="rt-display-none"
                >
                  {content.emailAddress}
                </label>
                <input
                  className="rt-cta-form-field rt-radius-xxs w-input"
                  maxLength={256}
                  name="CTA-Email"
                  data-name="CTA Email"
                  placeholder={content.enterYourEmailPlaceholder}
                  type="email"
                  id="CTA-Email"
                  required={true}
                  aria-label={content.enterYourEmailPlaceholder}
                />
                <div
                  {...{ hover: "button" }}
                  className="rt-position-relative rt-mobile-full-width"
                >
                  <div
                    {...{ data: "button" }}
                    {...{ hover: "button" }}
                    className="rt-button rt-full-width rt-flex-center"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text"
                      >
                        {content.getStartedNow}
                      </div>
                      <div
                        {...{ button: "text-two" }}
                        className="rt-button-text rt-2"
                      >
                        {content.getStartedNow}
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
                    aria-label={content.getStartedNow}
                  />
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
        </div>
      </section>
    </div>
  );
}
