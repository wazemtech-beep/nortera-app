"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutExpertise;
  return (
    <section
      className="rt-section rt-bg-secondary"
      id="expertise"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-finance-main">
          <div className="w-layout-vflex rt-finance-left">
            <div className="rt-col-five">
              <h2 {...{ appear: "heading" }} className="rt-text-color-tertiary">
                {content.heading}
              </h2>
            </div>
            <div
              {...{ data: "card-wrap" }}
              className="w-layout-grid rt-finance-points-wrap"
            >
              <div
                {...{ data: "card-v1" }}
                className="w-layout-vflex rt-finance-point"
              >
                <div className="w-layout-vflex rt-finance-point-top">
                  <div className="w-layout-vflex rt-finance-icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center"
                    >
                      <path
                        d="M22.1667 3.5H5.83333C4.54467 3.5 3.5 4.54467 3.5 5.83333V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V5.83333C24.5 4.54467 23.4553 3.5 22.1667 3.5Z"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-100)"
                      ></path>
                      <path
                        d="M19.8332 13.9998H17.4998L15.1665 19.8332L12.8332 8.1665L10.4998 13.9998H8.1665"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-100)"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-text-style-h5 rt-text-color-tertiary">
                    {content.strategicFinancialPlanning}
                  </div>
                </div>
                <div className="rt-finance-point-text">
                  <div className="rt-text-color-nonary">
                    {
                      content.strategicSolutionsDesignedForSustainableFinancialProgress
                    }
                  </div>
                </div>
              </div>
              <div
                {...{ data: "card-v1" }}
                className="w-layout-vflex rt-finance-point"
              >
                <div className="w-layout-vflex rt-finance-point-top">
                  <div className="w-layout-vflex rt-finance-icon">
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center"
                    >
                      <path
                        d="M34.1842 9.38889V2.72222C34.1842 2.13285 33.9624 1.56762 33.5676 1.15087C33.1728 0.734126 32.6373 0.5 32.0789 0.5H4.71053C3.59383 0.5 2.52286 0.968252 1.73323 1.80175C0.943608 2.63524 0.5 3.7657 0.5 4.94444M34.1842 9.38889H4.71053C3.59383 9.38889 2.52286 8.92064 1.73323 8.08714C0.943608 7.25365 0.5 6.12318 0.5 4.94444M34.1842 9.38889H36.2895C36.8478 9.38889 37.3833 9.62302 37.7781 10.0398C38.1729 10.4565 38.3947 11.0217 38.3947 11.6111V20.5M0.5 4.94444V36.0556C0.5 37.2343 0.943608 38.3648 1.73323 39.1983C2.52286 40.0317 3.59383 40.5 4.71053 40.5H36.2895C36.8478 40.5 37.3833 40.2659 37.7781 39.8491C38.1729 39.4324 38.3947 38.8671 38.3947 38.2778V29.3889M38.3947 20.5H32.0789C30.9622 20.5 29.8913 20.9683 29.1017 21.8018C28.312 22.6352 27.8684 23.7657 27.8684 24.9444C27.8684 26.1232 28.312 27.2536 29.1017 28.0871C29.8913 28.9206 30.9622 29.3889 32.0789 29.3889H38.3947M38.3947 20.5C38.9531 20.5 39.4886 20.7341 39.8834 21.1509C40.2782 21.5676 40.5 22.1329 40.5 22.7222V27.1667C40.5 27.756 40.2782 28.3213 39.8834 28.738C39.4886 29.1548 38.9531 29.3889 38.3947 29.3889"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-100)"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-text-style-h5 rt-text-color-tertiary">
                    {content.wealthManagement}
                  </div>
                </div>
                <div className="rt-finance-point-text">
                  <div className="rt-text-color-nonary">
                    {content.buildingAndProtectingWealthThroughSmartStrategies}
                  </div>
                </div>
              </div>
              <div
                {...{ data: "card-v1" }}
                className="w-layout-vflex rt-finance-point"
              >
                <div className="w-layout-vflex rt-finance-point-top">
                  <div className="w-layout-vflex rt-finance-icon">
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center"
                    >
                      <path
                        d="M6.5 19.3235C6.5 15.5793 7.76428 11.9884 10.0147 9.34085C12.2652 6.69327 15.3174 5.20588 18.5 5.20588H25.5L26.1 4.26471C26.8452 3.0958 27.8114 2.14706 28.9223 1.49363C30.0331 0.840189 31.258 0.5 32.5 0.5V7.55882C33.742 8.65467 34.75 10.0757 35.4443 11.7093C36.1385 13.3428 36.5 15.1442 36.5 16.9706H38.5C39.0304 16.9706 39.5391 17.2185 39.9142 17.6597C40.2893 18.101 40.5 18.6995 40.5 19.3235V24.0294C40.5 24.6535 40.2893 25.2519 39.9142 25.6932C39.5391 26.1345 39.0304 26.3824 38.5 26.3824H36.5C36.1898 27.4784 35.6668 28.4743 34.9725 29.2912C34.2782 30.108 33.4316 30.7233 32.5 31.0882V38.1471C32.5 38.7711 32.2893 39.3696 31.9142 39.8108C31.5391 40.2521 31.0304 40.5 30.5 40.5H26.5C25.9696 40.5 25.4609 40.2521 25.0858 39.8108C24.7107 39.3696 24.5 38.7711 24.5 38.1471V33.4412H18.5V38.1471C18.5 38.7711 18.2893 39.3696 17.9142 39.8108C17.5391 40.2521 17.0304 40.5 16.5 40.5H12.5C11.9696 40.5 11.4609 40.2521 11.0858 39.8108C10.7107 39.3696 10.5 38.7711 10.5 38.1471V31.0882C9.25804 29.9924 8.25001 28.5714 7.55573 26.9378C6.86145 25.3042 6.5 23.5029 6.5 21.6765V19.3235ZM6.5 19.3235H4.5C3.43913 19.3235 2.42172 18.8277 1.67157 17.9452C0.921427 17.0627 0.5 15.8657 0.5 14.6176V12.2647M28.5 16.9706H28.52"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-100)"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-text-style-h5 rt-text-color-tertiary">
                    {content.investmentAdvisory}
                  </div>
                </div>
                <div className="rt-finance-point-text">
                  <div className="rt-text-color-nonary">
                    {content.buildingStrongerPortfoliosThroughExpertGuidance}
                  </div>
                </div>
              </div>
              <div
                {...{ data: "card-v1" }}
                className="w-layout-vflex rt-finance-point"
              >
                <div className="w-layout-vflex rt-finance-point-top">
                  <div className="w-layout-vflex rt-finance-icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center"
                    >
                      <path
                        d="M4.49189 10.0566C4.32161 9.28956 4.34775 8.49193 4.56791 7.73768C4.78806 6.98343 5.1951 6.29697 5.75127 5.74196C6.30745 5.18695 6.99475 4.78135 7.74947 4.56278C8.50418 4.3442 9.30186 4.31973 10.0686 4.49162C10.4906 3.83164 11.0719 3.2885 11.759 2.91228C12.4461 2.53607 13.2169 2.33887 14.0002 2.33887C14.7836 2.33887 15.5543 2.53607 16.2414 2.91228C16.9286 3.2885 17.5099 3.83164 17.9319 4.49162C18.6998 4.31898 19.4988 4.34335 20.2547 4.56245C21.0106 4.78156 21.6989 5.18828 22.2554 5.7448C22.8119 6.30131 23.2186 6.98954 23.4377 7.74545C23.6568 8.50137 23.6812 9.30042 23.5086 10.0683C24.1685 10.4903 24.7117 11.0716 25.0879 11.7587C25.4641 12.4458 25.6613 13.2166 25.6613 14C25.6613 14.7833 25.4641 15.5541 25.0879 16.2412C24.7117 16.9283 24.1685 17.5096 23.5086 17.9316C23.6804 18.6983 23.656 19.496 23.4374 20.2507C23.2188 21.0054 22.8132 21.6927 22.2582 22.2489C21.7032 22.8051 21.0167 23.2121 20.2625 23.4323C19.5082 23.6524 18.7106 23.6786 17.9436 23.5083C17.5221 24.1708 16.9403 24.7163 16.252 25.0942C15.5638 25.4721 14.7913 25.6702 14.0061 25.6702C13.2209 25.6702 12.4484 25.4721 11.7601 25.0942C11.0718 24.7163 10.49 24.1708 10.0686 23.5083C9.30186 23.6802 8.50418 23.6557 7.74947 23.4371C6.99475 23.2186 6.30745 22.813 5.75127 22.2579C5.1951 21.7029 4.78806 21.0165 4.56791 20.2622C4.34775 19.508 4.32161 18.7103 4.49189 17.9433C3.82684 17.5224 3.27904 16.9402 2.89945 16.2507C2.51986 15.5613 2.3208 14.787 2.3208 14C2.3208 13.2129 2.51986 12.4387 2.89945 11.7492C3.27904 11.0597 3.82684 10.4775 4.49189 10.0566Z"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-100)"
                      ></path>
                      <path
                        d="M18.6668 9.3335H11.6668C11.048 9.3335 10.4545 9.57933 10.0169 10.0169C9.57933 10.4545 9.3335 11.048 9.3335 11.6668C9.3335 12.2857 9.57933 12.8792 10.0169 13.3167C10.4545 13.7543 11.048 14.0002 11.6668 14.0002H16.3335C16.9523 14.0002 17.5458 14.246 17.9834 14.6836C18.421 15.1212 18.6668 15.7147 18.6668 16.3335C18.6668 16.9523 18.421 17.5458 17.9834 17.9834C17.5458 18.421 16.9523 18.6668 16.3335 18.6668H9.3335"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-100)"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-text-style-h5 rt-text-color-tertiary">
                    {content.businessGrowthConsulting}
                  </div>
                </div>
                <div className="rt-finance-point-text">
                  <div className="rt-text-color-nonary">
                    {content.expertGuidanceToUnlockNewGrowthOpportunities}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-finance-right">
            <div className="rt-card-image-wrap rt-radius-md">
              <div {...{ data: "image" }} className="rt-card-image-wrap">
                <Image
                  {...{ image: "parallalx" }}
                  alt={
                    content.twoColleaguesReviewingInvestmentFiguresOnALaptopAlt
                  }
                  src={
                    content.twoColleaguesReviewingInvestmentFiguresOnALaptopImage
                  }
                  className="rt-about-finanace-image"
                  decoding="async"
                  width={610}
                  height={700}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div {...{ data: "overlay" }} className="rt-image-overlay"></div>
              <div
                data-animate="text"
                className="rt-investment-box-wrap rt-radius-sm"
              >
                <div className="w-layout-hflex rt-investment-box">
                  <div className="w-layout-hflex rt-investment-box-content">
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
                    <div className="w-layout-vflex">
                      <div className="rt-text-style-h3">
                        {content.value205b}
                      </div>
                      <div className="rt-text-style-h5">
                        {content.assetInvestment}
                      </div>
                    </div>
                  </div>
                  <div className="w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="6"
                      viewBox="0 0 26 6"
                      fill="none"
                      style={{ display: "block" }}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="3" cy="3" r="3" fill="#21161A"></circle>
                      <circle cx="13" cy="3" r="3" fill="#21161A"></circle>
                      <circle cx="23" cy="3" r="3" fill="#21161A"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
