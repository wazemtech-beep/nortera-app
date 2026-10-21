"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
export default function ContactFaq() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.contactFaq;
  return (
    <section className="rt-section" id="faq" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-flex-center rt-gap-sm rt-dektop-extra-gap">
          <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
            {content.faq}
          </div>
          <div className="rt-col-six">
            <h2 {...{ appear: "heading" }} className="rt-text-center">
              {content.heading}
            </h2>
          </div>
        </div>
        <div
          data-current="Tab 1"
          data-easing="ease"
          data-duration-in="300"
          data-duration-out="100"
          className="w-tabs"
        >
          <div
            data-animate="text"
            className="rt-tab-menu rt-bottom-gap w-tab-menu"
          >
            <a className="rt-tab-link w-inline-block w-tab-link w--current">
              <div className="rt-sub-text rt-text-color-inherit">
                {content.generalQuestions}
              </div>
            </a>
            <a className="rt-tab-link w-inline-block w-tab-link">
              <div className="rt-sub-text rt-text-color-inherit">
                {content.servicesSolutions}
              </div>
            </a>
            <a className="rt-tab-link w-inline-block w-tab-link">
              <div className="rt-sub-text rt-text-color-inherit">
                {content.processApproach}
              </div>
            </a>
          </div>
          <div className="w-tab-content">
            <div className="w-tab-pane w--tab-active">
              <div
                {...{ data: "card-wrap" }}
                className="w-layout-grid rt-faq-grid"
              >
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {
                        content.value01WhatIsFinancialConsultingAndHowCanItHelpMe
                      }
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value02WhyShouldIWorkWithAFinancialConsultant}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description2}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {
                        content.value03WhoCanBenefitFromFinancialConsultingServices
                      }
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description3}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value04WhatAreasOfFinanceCanYouHelpMeWith}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description4}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value05HowDoesYourFinancialConsultingProcessWork}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description5}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value06HowOftenShouldIReviewMyFinancialPlan}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description6}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {
                        content.value07WhyShouldIChooseYourFinancialConsultingFirm
                      }
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description7}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ data: "card-v1" }}
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {
                        content.value08HowDoYouMeasureTheSuccessOfAFinancialStrategy
                      }
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description8}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-tab-pane">
              <div className="w-layout-grid rt-faq-grid">
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value01WhatFinancialConsultingServicesDoYouOffer}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>
                        {content.description9}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value02CanYouCreateACustomizedFinancialStrategy}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>
                        {content.description10}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value03DoYouProvideInvestmentPlanningAndGuidance}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>
                        {content.description11}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value04CanYouHelpImproveBusinessCashFlow}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description12}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value05DoYouProvideFinancialRiskManagement}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>
                        {content.description13}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value06CanYouHelpImproveFinancialPerformance}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description14}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value07DoYouOfferLongTermFinancialPlanning}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description15}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value08CanYourServicesSupportGrowingBusinesses}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description16}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-tab-pane">
              <div className="w-layout-grid rt-faq-grid">
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value01WhatHappensDuringTheInitialConsultation}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description17}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value02HowDoYouAssessMyFinancialSituation}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description18}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value03HowDoYouDevelopAFinancialStrategy}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description19}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value04HowInvolvedWillIBeInTheProcess}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description20}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value05HowDoYouTurnRecommendationsIntoAction}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description21}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value06HowDoYouTrackFinancialProgress}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description22}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {content.value07CanTheStrategyChangeAsMyNeedsEvolve}
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description23}</p>
                    </div>
                  </div>
                </div>
                <div
                  {...{ faq: "item" }}
                  className="w-layout-vflex rt-faq-item rt-radius-xs"
                >
                  <div className="w-layout-hflex rt-faq-item-inner">
                    <div className="rt-text-style-h6">
                      {
                        content.value08HowDoYouEnsureTheStrategyDeliversLongTermValue
                      }
                    </div>
                    <div className="w-layout-vflex rt-faq-icon-wrap">
                      <div className="rt-minus-icon"></div>
                      <div {...{ faq: "icon" }} className="rt-plus-icon"></div>
                    </div>
                  </div>
                  <div {...{ faq: "answer" }} className="rt-answer">
                    <div className="rt-faq-answer">
                      <p>{content.description24}</p>
                    </div>
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
