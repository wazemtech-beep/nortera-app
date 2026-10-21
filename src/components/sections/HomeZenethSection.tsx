"use client";
import { useRef } from "react";

import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import { siteConfig } from "@/data/siteConfig";
export default function HomeZenethSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeZenethSection;
  return (
    <div className="zeneth-section" ref={sectionRef}>
      <section className="rt-footer-sit-gap" id="footer">
        <div className="rt-footer">
          <div className="w-layout-blockcontainer rt-container w-container">
            <div className="rt-footer-top">
              <div
                id="w-node-_36540a52-3011-8632-fcb0-505bbc2225d1-bc2225cd"
                className="w-layout-vflex rt-footer-item-1"
              >
                <Link
                  href={content.Href}
                  className="rt-site-logo w-inline-block w--current"
                >
                  <BrandLogo light />
                </Link>
                <p className="rt-text-color-quaternary">
                  {content.description}
                </p>
              </div>
              <div
                id="w-node-_36540a52-3011-8632-fcb0-505bbc2225d6-bc2225cd"
                className="w-layout-vflex rt-footer-item-2"
              >
                <div>
                  <div className="rt-footer-cal-heading">
                    <div className="rt-sub-text rt-text-color-quinary">
                      {content.phone}
                    </div>
                  </div>
                  <a
                    href={content.value8884567890Href}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.value8884567890}
                  </a>
                </div>
                <div>
                  <div className="rt-footer-cal-heading">
                    <div className="rt-sub-text rt-text-color-quinary">
                      {content.address}
                    </div>
                  </div>
                  <div className="rt-text-style-h4 rt-text-color-tertiary rt-tab-text-size-h6">
                    {content.value410SandtownCalifornia94001Usa}
                  </div>
                </div>
              </div>
              <div id="w-node-_36540a52-3011-8632-fcb0-505bbc2225e3-bc2225cd">
                <div className="rt-footer-cal-heading">
                  <div className="rt-sub-text rt-text-color-quinary">
                    {content.navigation}
                  </div>
                </div>
                <div className="w-layout-vflex rt-footer-links-cal">
                  <Link
                    href={content.Href}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6 w--current"
                  >
                    {content.home}
                  </Link>
                  <Link
                    href={content.aboutHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.about}
                  </Link>
                  <Link
                    href={content.serviceHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.service}
                  </Link>
                  <Link
                    href={content.pricingHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.pricing}
                  </Link>
                  <Link
                    href={content.contactHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.contact}
                  </Link>
                </div>
              </div>
              <div id="w-node-_36540a52-3011-8632-fcb0-505bbc2225f2-bc2225cd">
                <div className="rt-footer-cal-heading">
                  <div className="rt-sub-text rt-text-color-quinary">
                    {content.utilityPages}
                  </div>
                </div>
                <div className="w-layout-vflex rt-footer-links-cal">
                  <Link
                    href={content.styleGuideHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.styleGuide}
                  </Link>
                  <Link
                    href={content.licensesHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.licenses}
                  </Link>
                  <Link
                    href={content.changelogHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.changelog}
                  </Link>
                  <Link
                    href={content.value404Href}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.value404}
                  </Link>
                  <Link
                    href={content.passwordProtectedHref}
                    className="rt-text-style-h4 rt-text-color-tertiary rt-hover-link rt-tab-text-size-h6"
                  >
                    {content.passwordProtected}
                  </Link>
                </div>
              </div>
            </div>
            <div className="rt-footer-bottom">
            <div className="rt-text-color-senary">{content.copyright}</div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

