"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import { siteConfig } from "@/data/siteConfig";
export default function AboutHeader() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutHeader;
  return (
    <header {...{ data: "hero-text-2" }} className="rt-header" ref={sectionRef}>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="rt-navbar w-nav"
      >
        <div className="rt-container w-container">
          <div className="w-layout-hflex rt-nav-flex">
            <Link href={content.Href} className="rt-logo-brand w-nav-brand">
              <BrandLogo />
            </Link>
            <nav role="navigation" className="rt-navigation w-nav-menu">
              <div className="w-layout-hflex rt-navigation-main">
                <Link href={content.Href} className="rt-nav-link-v1 w-nav-link">
                  {content.home}
                </Link>
                <Link
                  href={content.aboutHref}
                  className="rt-nav-link-v1 w-nav-link w--current"
                >
                  {content.about}
                </Link>
                <div
                  data-delay="500"
                  data-hover="true"
                  {...{ dropdown: "hover" }}
                  className="rt-navbar-dropdown w-dropdown"
                >
                  <div className="rt-nav-link-v1 rt-change w-dropdown-toggle">
                    <div className="w-layout-hflex rt-dropdown-flex">
                      <div>{content.pages}</div>
                      <div
                        {...{ dropdown: "icon" }}
                        className="rt-dropdown-icon w-icon-dropdown-toggle"
                      ></div>
                    </div>
                  </div>
                  <nav className="rt-dropdown-list w-dropdown-list">
                    <div
                      {...{ dropdown: "menu" }}
                      className="rt-overflow-hidden rt-full-width"
                    >
                      <div className="rt-page-dropdown-list-inner">
                        <div className="rt-page-inner">
                          <div
                            data-current="Tab 2"
                            data-easing="ease"
                            data-duration-in="300"
                            data-duration-out="100"
                            className="rt-page-dropdown-wrap w-tabs"
                          >
                            <div className="rt-mega-menu-v2-left w-tab-menu">
                              <a className="rt-mega-menu-v2-tab w-inline-block w-tab-link w--current">
                                <div className="rt-top-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    className="rt-menu-icon"
                                  >
                                    <path
                                      d="M26.9444 0.5H2.05556C1.19645 0.5 0.5 1.19645 0.5 2.05556V9.83333C0.5 10.6924 1.19645 11.3889 2.05556 11.3889H26.9444C27.8036 11.3889 28.5 10.6924 28.5 9.83333V2.05556C28.5 1.19645 27.8036 0.5 26.9444 0.5Z"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12.9444 17.6111H2.05556C1.19645 17.6111 0.5 18.3076 0.5 19.1667V26.9444C0.5 27.8036 1.19645 28.5 2.05556 28.5H12.9444C13.8036 28.5 14.5 27.8036 14.5 26.9444V19.1667C14.5 18.3076 13.8036 17.6111 12.9444 17.6111Z"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M26.9444 17.6111H22.2778C21.4187 17.6111 20.7222 18.3076 20.7222 19.1667V26.9444C20.7222 27.8036 21.4187 28.5 22.2778 28.5H26.9444C27.8036 28.5 28.5 27.8036 28.5 26.9444V19.1667C28.5 18.3076 27.8036 17.6111 26.9444 17.6111Z"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="rt-mega-menu-v2-tab-item">
                                  <div className="rt-text-style-h5">
                                    {content.homePages}
                                  </div>
                                  <div className="rt-opacity-60">
                                    {
                                      content.exploreFlexibleLayoutsForYourBusiness
                                    }
                                  </div>
                                </div>
                              </a>
                              <a className="rt-mega-menu-v2-tab w-inline-block w-tab-link">
                                <div className="rt-top-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    className="rt-menu-icon"
                                  >
                                    <path
                                      d="M6.72222 28.5C8.37246 28.5 9.95511 27.8444 11.122 26.6776C12.2889 25.5107 12.9444 23.928 12.9444 22.2778V3.61111C12.9444 2.78599 12.6167 1.99467 12.0332 1.41122C11.4498 0.827777 10.6585 0.5 9.83333 0.5H3.61111C2.78599 0.5 1.99467 0.827777 1.41122 1.41122C0.827777 1.99467 0.5 2.78599 0.5 3.61111V22.2778C0.5 23.928 1.15555 25.5107 2.32245 26.6776C3.48934 27.8444 5.07199 28.5 6.72222 28.5ZM6.72222 28.5H25.3889C26.214 28.5 27.0053 28.1722 27.5888 27.5888C28.1722 27.0053 28.5 26.214 28.5 25.3889V19.1667C28.5 18.3415 28.1722 17.5502 27.5888 16.9668C27.0053 16.3833 26.214 16.0556 25.3889 16.0556H21.8111M6.72222 22.2778H6.73778M12.9444 8.27778L16.5222 4.7C16.8696 4.35143 17.2824 4.07496 17.737 3.88652C18.1916 3.69807 18.679 3.60135 19.1711 3.60193C19.6632 3.60251 20.1503 3.70037 20.6045 3.88989C21.0586 4.0794 21.4708 4.35683 21.8173 4.70622L24.7667 7.65556C25.1254 8.00059 25.4115 8.41387 25.6081 8.87109C25.8048 9.3283 25.908 9.82023 25.9118 10.3179C25.9156 10.8156 25.8198 11.3091 25.6301 11.7692C25.4404 12.2293 25.1606 12.6469 24.8071 12.9973L11.2333 26.6333"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="rt-mega-menu-v2-tab-item">
                                  <div className="rt-text-style-h5">
                                    {content.innerPages}
                                  </div>
                                  <div className="rt-opacity-60">
                                    {content.buildACompleteAndConsistentWebsite}
                                  </div>
                                </div>
                              </a>
                              <a className="rt-mega-menu-v2-tab w-inline-block w-tab-link">
                                <div className="rt-top-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    className="rt-menu-icon"
                                  >
                                    <path
                                      d="M19.3333 6.0415H3.625"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M19.3333 14.5H3.625"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M19.3333 22.9585H3.625"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M25.375 22.9585H25.3871"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M25.375 14.5H25.3871"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M25.375 6.0415H25.3871"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="rt-mega-menu-v2-tab-item">
                                  <div className="rt-text-style-h5">
                                    {content.cmsPages}
                                  </div>
                                  <div className="rt-opacity-60">
                                    {content.manageInsightsStoriesAndContent}
                                  </div>
                                </div>
                              </a>
                              <a className="rt-mega-menu-v2-tab w-inline-block w-tab-link">
                                <div className="rt-top-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 26 29"
                                    fill="none"
                                    className="rt-menu-icon"
                                  >
                                    <path
                                      d="M9.74951 3.47133C9.82641 2.65835 10.2022 1.90338 10.8034 1.35393C11.4046 0.804469 12.188 0.5 13.0007 0.5C13.8133 0.5 14.5968 0.804469 15.198 1.35393C15.7992 1.90338 16.175 2.65835 16.2519 3.47133C16.2981 3.99651 16.4695 4.50276 16.7517 4.94725C17.0339 5.39174 17.4184 5.76137 17.8729 6.02486C18.3273 6.28834 18.8382 6.43793 19.3624 6.46096C19.8865 6.48398 20.4085 6.37977 20.8841 6.15714C21.6225 5.82023 22.4593 5.77148 23.2316 6.02038C24.0038 6.26928 24.6563 6.79802 25.062 7.50371C25.4677 8.20939 25.5976 9.04152 25.4264 9.83814C25.2553 10.6348 24.7952 11.3389 24.1359 11.8135C23.7066 12.1162 23.3561 12.5184 23.1142 12.986C22.8722 13.4536 22.7459 13.9729 22.7459 14.5C22.7459 15.0271 22.8722 15.5464 23.1142 16.014C23.3561 16.4816 23.7066 16.8838 24.1359 17.1865C24.7952 17.6611 25.2553 18.3652 25.4264 19.1619C25.5976 19.9585 25.4677 20.7906 25.062 21.4963C24.6563 22.202 24.0038 22.7307 23.2316 22.9796C22.4593 23.2285 21.6225 23.1798 20.8841 22.8429C20.4085 22.6202 19.8865 22.516 19.3624 22.539C18.8382 22.5621 18.3273 22.7117 17.8729 22.9751C17.4184 23.2386 17.0339 23.6083 16.7517 24.0527C16.4695 24.4972 16.2981 25.0035 16.2519 25.5287C16.175 26.3417 15.7992 27.0966 15.198 27.6461C14.5968 28.1955 13.8133 28.5 13.0007 28.5C12.188 28.5 11.4046 28.1955 10.8034 27.6461C10.2022 27.0966 9.82641 26.3417 9.74951 25.5287C9.70338 25.0033 9.53193 24.4969 9.24968 24.0522C8.96744 23.6076 8.58271 23.2378 8.12809 22.9743C7.67347 22.7108 7.16234 22.5613 6.63801 22.5384C6.11368 22.5155 5.59158 22.6199 5.11594 22.8429C4.37748 23.1798 3.5407 23.2285 2.76844 22.9796C1.99619 22.7307 1.34372 22.202 0.938016 21.4963C0.532314 20.7906 0.402407 19.9585 0.573578 19.1619C0.744749 18.3652 1.20475 17.6611 1.86406 17.1865C2.29339 16.8838 2.64385 16.4816 2.8858 16.014C3.12775 15.5464 3.25407 15.0271 3.25407 14.5C3.25407 13.9729 3.12775 13.4536 2.8858 12.986C2.64385 12.5184 2.29339 12.1162 1.86406 11.8135C1.20568 11.3387 0.746486 10.6348 0.575729 9.83872C0.404972 9.04263 0.534846 8.21118 0.940111 7.50596C1.34538 6.80074 1.99708 6.27212 2.76857 6.02284C3.54006 5.77356 4.37622 5.82143 5.11454 6.15714C5.59012 6.37977 6.11208 6.48398 6.63623 6.46096C7.16037 6.43793 7.67129 6.28834 8.12572 6.02486C8.58015 5.76137 8.96473 5.39174 9.24689 4.94725C9.52906 4.50276 9.7005 3.99651 9.74672 3.47133M17.187 14.5007C17.187 16.8245 15.3124 18.7082 13 18.7082C10.6876 18.7082 8.81303 16.8245 8.81303 14.5007C8.81303 12.1769 10.6876 10.2932 13 10.2932C15.3124 10.2932 17.187 12.1769 17.187 14.5007Z"
                                      stroke="var(--_colors---accent-color--accent-900)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="rt-mega-menu-v2-tab-item">
                                  <div className="rt-text-style-h5">
                                    {content.utilityPages}
                                  </div>
                                  <div className="rt-opacity-60">
                                    {content.essentialPagesForAPolishedWebsite}
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="rt-mega-menu-v2-right w-tab-content">
                              <div className="rt-mega-menu-v2-content w-tab-pane w--tab-active">
                                <div className="rt-full-width rt-full-height">
                                  <div className="rt-mega-menu-v2-content-top">
                                    <div className="rt-mega-menu-v2-content-left rt-change">
                                      <Link
                                        href={content.Href}
                                        {...{ button: "approach-v1" }}
                                        mega-link="hover"
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.homeOne}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.strategicFinanceForGrowth}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                      <a
                                        href={
                                          content.homeTwosmarterStrategiesStrongerResHref
                                        }
                                        {...{ button: "approach-v1" }}
                                        mega-link="hover"
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.homeTwo}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.smarterStrategiesStrongerResults
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.homeThreetransformChallengesIntoGroHref
                                        }
                                        {...{ button: "approach-v1" }}
                                        mega-link="hover"
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.homeThree}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.transformChallengesIntoGrowth
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="rt-mega-menu-v2-content w-tab-pane">
                                <div className="rt-full-width rt-full-height">
                                  <div className="rt-mega-menu-v2-content-top">
                                    <div className="rt-mega-menu-v2-content-left rt-change">
                                      <Link
                                        href={content.aboutHref}
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block w--current"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.about}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.meetYourFinancialPartner}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                      <a
                                        href={
                                          content.serviceexpertSolutionsForBusinessGrHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.service}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.expertSolutionsForBusinessGrowth
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <Link
                                        href={
                                          content.bloginsightsForSmarterBusinessHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.blog}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.insightsForSmarterBusiness}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                      <Link
                                        href={
                                          content.contactletSDiscussYourBusinessGoalsHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.contact}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.letSDiscussYourBusinessGoals
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                      <a
                                        href={
                                          content.caseStudyrealStrategiesMeasurableReHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.caseStudy}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.realStrategiesMeasurableResults
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.pricingflexiblePlansForYourBusinessHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.pricing}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.flexiblePlansForYourBusiness
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="rt-mega-menu-v2-content w-tab-pane">
                                <div className="rt-full-width rt-full-height">
                                  <div className="rt-mega-menu-v2-content-top">
                                    <div className="rt-mega-menu-v2-content-left rt-change">
                                      <a
                                        href={
                                          content.serviceDetailsexploreOurAdvisoryExpHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.serviceDetails}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.exploreOurAdvisoryExpertise
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.caseStudyDetailsseeStrategyInActionHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.caseStudyDetails}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.seeStrategyInAction}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.blogPostexpertPerspectivesAndInsighHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.blogPost}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.expertPerspectivesAndInsights
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="rt-mega-menu-v2-content w-tab-pane">
                                <div className="rt-full-width rt-full-height">
                                  <div className="rt-mega-menu-v2-content-top">
                                    <div className="rt-mega-menu-v2-content-left rt-change">
                                      <Link
                                        href={
                                          content.value404findYourWayBackHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 rt-top w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.value404}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.findYourWayBack}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                      <a
                                        href={
                                          content.passwordProtectedsecureAccessToPrivHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.passwordProtected}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.secureAccessToPrivateContent
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.styleGuidebuildWithConsistentDesignHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.styleGuide}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.buildWithConsistentDesign}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.licensesassetAndUsageInformationHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.licenses}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.assetAndUsageInformation}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.changelogtrackTheLatestTemplateUpdaHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.changelog}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {
                                              content.trackTheLatestTemplateUpdates
                                            }
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href={
                                          content.instructionsgetStartedWithYourTemplHref
                                        }
                                        mega-link="hover"
                                        {...{ button: "approach-v1" }}
                                        className="rt-mega-menu-v2-content-item rt-2 w-inline-block"
                                      >
                                        <div className="w-layout-vflex rt-mega-menu-item">
                                          <div className="rt-text-style-h5">
                                            {content.instructions}
                                          </div>
                                          <div className="rt-opacity-60">
                                            {content.getStartedWithYourTemplate}
                                          </div>
                                        </div>
                                        <div
                                          mega-link="bg"
                                          className="w-layout-vflex rt-approach-v1-button rt-v4"
                                        >
                                          <div className="w-layout-hflex rt-approach-v1-button-icon">
                                            <Image
                                              approach-v1="button-icon-dark"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                            <Image
                                              approach-v1="button-icon-white"
                                              alt={content.buttonDarkIconAlt}
                                              src={content.buttonDarkIconImage}
                                              className="rt-approach-v1-button-icon-white"
                                              decoding="async"
                                              width={10}
                                              height={10}
                                              sizes="10px"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <Link
                  href={content.bloginsightsForSmarterBusinessHref}
                  className="rt-nav-link-v1 w-nav-link"
                >
                  {content.blog}
                </Link>
                <Link
                  href={content.contactletSDiscussYourBusinessGoalsHref}
                  className="rt-nav-link-v1 w-nav-link"
                >
                  {content.contact}
                </Link>
              </div>
            </nav>
            <div
              {...{ hamburger: "open" }}
              className="w-layout-vflex rt-menu-bars"
            >
              <div className="rt-bar rt-top-line"></div>
              <div className="rt-bar rt-middle-line"></div>
              <div className="rt-bar rt-bottom-line"></div>
            </div>
            <div className="rt-tab-display-none">
              <Link
                {...{ hover: "button" }}
                href={content.contactletSDiscussYourBusinessGoalsHref}
                className="rt-button w-variant-5579dce6-2985-9311-3a00-673902a060bf w-inline-block"
              >
                <div className="rt-button-text-wrap rt-overflow-hidden">
                  <div
                    {...{ button: "text-one" }}
                    className="rt-button-text w-variant-5579dce6-2985-9311-3a00-673902a060bf"
                  >
                    {content.letSTalk}
                  </div>
                  <div
                    {...{ button: "text-two" }}
                    className="rt-button-text w-variant-5579dce6-2985-9311-3a00-673902a060bf rt-2"
                  >
                    {content.letSTalk}
                  </div>
                </div>
                <div className="rt-position-relative rt-overflow-hidden">
                  <div
                    {...{ button: "icon-one" }}
                    className="w-layout-vflex rt-zindex-2"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center rt-icon-first-1 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
                    >
                      <path
                        d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-900)"
                      ></path>
                    </svg>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center rt-position-absolute rt-icon-first-2 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
                    >
                      <path
                        d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---neutral-color--neutral-100)"
                      ></path>
                    </svg>
                  </div>
                  <div
                    {...{ button: "icon-two" }}
                    className="rt-position-absolute"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center rt-icon-second-1 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
                    >
                      <path
                        d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---accent-color--accent-900)"
                      ></path>
                    </svg>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center rt-position-absolute rt-icon-second-2 w-variant-5579dce6-2985-9311-3a00-673902a060bf"
                    >
                      <path
                        d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---neutral-color--neutral-100)"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div {...{ nav: "overlay" }} className="rt-navbar-overlay"></div>
      <div {...{ hamburger: "menu" }} className="rt-mobile-menu-wrap-outside">
        <div className="rt-mobile-menu-wrap">
          <div className="rt-mobile-menu-wrap-inner-outside">
            <div className="w-layout-vflex rt-mobile-menu-wrap-inner">
              <div className="w-layout-vflex rt-mobile-menu-wrap-top-wrap">
                <div className="w-layout-hflex rt-mobile-menu-wrap-top">
                  <Link
                    href={content.Href}
                    className="rt-logo-brand w-nav-brand"
                  >
                    <BrandLogo />
                  </Link>
                  <div
                    {...{ hamburger: "close" }}
                    className="w-layout-vflex rt-nav-call-wrap"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="rt-flex-center"
                    >
                      <path
                        d="M13 1L1 13"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---neutral-color--neutral-100)"
                      ></path>
                      <path
                        d="M1 1L13 13"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="var(--_colors---neutral-color--neutral-100)"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="w-layout-vflex rt-mobile-menu-wrap-middle">
                  <div className="rt-sub-text">{content.eyebrow}</div>
                  <div className="w-layout-vflex rt-mobile-menu-points-wrpper">
                    <div
                      {...{ faq: "item" }}
                      className="w-layout-vflex rt-faq-item-v2 rt-navbar-version"
                    >
                      <div className="w-layout-hflex rt-faq-item-inner">
                        <div className="rt-text-style-h5">
                          {content.homePages}
                        </div>
                        <div className="w-layout-vflex rt-faq-icon-wrap">
                          <div className="rt-minus-icon"></div>
                          <div
                            {...{ faq: "icon" }}
                            className="rt-plus-icon"
                          ></div>
                        </div>
                      </div>
                      <div {...{ faq: "answer" }} className="rt-answer">
                        <div className="rt-faq-answer rt-change-gap">
                          <div className="w-layout-vflex rt-menu-links-wrapper-v2">
                            <Link
                              href={content.Href}
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.homeOne}
                                <br />
                              </div>
                            </Link>
                            <a
                              href={
                                content.homeTwosmarterStrategiesStrongerResHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.homeTwo}
                              </div>
                            </a>
                            <a
                              href={
                                content.homeThreetransformChallengesIntoGroHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.homeThree}
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      {...{ faq: "item" }}
                      className="w-layout-vflex rt-faq-item-v2 rt-navbar-version"
                    >
                      <div className="w-layout-hflex rt-faq-item-inner">
                        <div className="rt-text-style-h5">
                          {content.innerPages}
                        </div>
                        <div className="w-layout-vflex rt-faq-icon-wrap">
                          <div className="rt-minus-icon"></div>
                          <div
                            {...{ faq: "icon" }}
                            className="rt-plus-icon"
                          ></div>
                        </div>
                      </div>
                      <div {...{ faq: "answer" }} className="rt-answer">
                        <div className="rt-faq-answer rt-change-gap">
                          <div className="w-layout-vflex rt-menu-links-wrapper-v2">
                            <Link
                              href={content.aboutHref}
                              className="rt-menu-link-card-v2 w-inline-block w--current"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.about}
                              </div>
                            </Link>
                            <a
                              href={
                                content.serviceexpertSolutionsForBusinessGrHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.service}
                              </div>
                            </a>
                            <Link
                              href={content.bloginsightsForSmarterBusinessHref}
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.blog}
                              </div>
                            </Link>
                            <a
                              href={
                                content.pricingflexiblePlansForYourBusinessHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.pricing}
                              </div>
                            </a>
                            <Link
                              href={
                                content.contactletSDiscussYourBusinessGoalsHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.contact}
                              </div>
                            </Link>
                            <a
                              href={
                                content.caseStudyrealStrategiesMeasurableReHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.caseStudy}
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      {...{ faq: "item" }}
                      className="w-layout-vflex rt-faq-item-v2 rt-navbar-version"
                    >
                      <div className="w-layout-hflex rt-faq-item-inner">
                        <div className="rt-text-style-h5">
                          {content.cmsPages}
                        </div>
                        <div className="w-layout-vflex rt-faq-icon-wrap">
                          <div className="rt-minus-icon"></div>
                          <div
                            {...{ faq: "icon" }}
                            className="rt-plus-icon"
                          ></div>
                        </div>
                      </div>
                      <div {...{ faq: "answer" }} className="rt-answer">
                        <div className="rt-faq-answer rt-change-gap">
                          <div className="w-layout-vflex rt-menu-links-wrapper-v2">
                            <a
                              href={
                                content.serviceDetailsexploreOurAdvisoryExpHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.serviceDetails}
                              </div>
                            </a>
                            <a
                              href={
                                content.blogPostexpertPerspectivesAndInsighHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.blogPost}
                              </div>
                            </a>
                            <a
                              href={
                                content.caseStudyDetailsseeStrategyInActionHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.caseStudyDetails}
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      {...{ faq: "item" }}
                      className="w-layout-vflex rt-faq-item-v2 rt-navbar-version"
                    >
                      <div className="w-layout-hflex rt-faq-item-inner">
                        <div className="rt-text-style-h5">
                          {content.utilityPages}
                        </div>
                        <div className="w-layout-vflex rt-faq-icon-wrap">
                          <div className="rt-minus-icon"></div>
                          <div
                            {...{ faq: "icon" }}
                            className="rt-plus-icon"
                          ></div>
                        </div>
                      </div>
                      <div {...{ faq: "answer" }} className="rt-answer">
                        <div className="rt-faq-answer rt-change-gap">
                          <div className="w-layout-vflex rt-menu-links-wrapper-v2">
                            <Link
                              href={content.value404findYourWayBackHref}
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.value404}
                              </div>
                            </Link>
                            <a
                              href={
                                content.passwordProtectedsecureAccessToPrivHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.passwordProtected}
                              </div>
                            </a>
                            <a
                              href={
                                content.styleGuidebuildWithConsistentDesignHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.styleGuide}
                              </div>
                            </a>
                            <a
                              href={
                                content.licensesassetAndUsageInformationHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.licenses}
                              </div>
                            </a>
                            <a
                              href={
                                content.instructionsgetStartedWithYourTemplHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.instructions}
                              </div>
                            </a>
                            <a
                              href={
                                content.changelogtrackTheLatestTemplateUpdaHref
                              }
                              className="rt-menu-link-card-v2 w-inline-block"
                            >
                              <div className="rt-menu-dot"></div>
                              <div className="rt-text-style-h6">
                                {content.changelog}
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex rt-mobile-menu-wrap-bottom">
                  <div className="w-layout-vflex rt-mobile-menu-wrap-bottom-top">
                    <div className="rt-sub-text">{content.eyebrow2}</div>
                    <div className="w-layout-hflex rt-appointment-box">
                      <div
                        nav-call="wrap"
                        className="w-layout-vflex rt-nav-call-wrap"
                      >
                        <div className="rt-nav-call rt-zindex-2 w-embed">
                          <svg
                            width="17"
                            height="21"
                            viewBox="0 0 17 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              d="M11.1 14.1017C9.10419 16.2016 4.01337 11.1567 6.0167 9.04833C7.24003 7.76083 5.85837 6.29 5.09337 5.2075C3.65754 3.17834 0.506711 5.98 0.601711 7.7625C0.90421 13.3842 6.98503 20.0458 12.8734 19.4641C14.715 19.2825 16.8317 15.9558 14.7192 14.74C13.6625 14.1316 12.2117 12.9317 11.1 14.1008M9.76669 4.5C11.3138 4.5 12.7975 5.11458 13.8915 6.20854C14.9854 7.3025 15.6 8.78623 15.6 10.3333M9.76669 7.83333C10.4297 7.83333 11.0656 8.09672 11.5345 8.56556C12.0033 9.0344 12.2667 9.67028 12.2667 10.3333"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </svg>{" "}
                        </div>
                        <div className="rt-non-descriptive-text-2">
                          {content.nonDescriptiveText}
                        </div>
                      </div>
                      <div className="w-layout-vflex">
                        <div>{content.callUsToday}</div>
                        <a href={content.value8881234560Href}>
                          {content.value8881234560}
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link
                    {...{ hover: "button" }}
                    href={content.contactletSDiscussYourBusinessGoalsHref}
                    className="rt-button w-variant-4347b68c-4eb4-abf3-54a6-4719ff4950e9 w-inline-block"
                  >
                    <div className="rt-button-text-wrap rt-overflow-hidden">
                      <div
                        {...{ button: "text-one" }}
                        className="rt-button-text"
                      >
                        {content.bookConsultation}
                      </div>
                      <div
                        {...{ button: "text-two" }}
                        className="rt-button-text rt-2"
                      >
                        {content.bookConsultation}
                      </div>
                    </div>
                    <div className="rt-position-relative rt-overflow-hidden">
                      <div
                        {...{ button: "icon-one" }}
                        className="w-layout-vflex rt-zindex-2"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="rt-flex-center rt-icon-first-1"
                        >
                          <path
                            d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="var(--_colors---accent-color--accent-900)"
                          ></path>
                        </svg>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="rt-flex-center rt-position-absolute rt-icon-first-2"
                        >
                          <path
                            d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="var(--_colors---neutral-color--neutral-100)"
                          ></path>
                        </svg>
                      </div>
                      <div
                        {...{ button: "icon-two" }}
                        className="rt-position-absolute"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="rt-flex-center rt-icon-second-1"
                        >
                          <path
                            d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="var(--_colors---accent-color--accent-900)"
                          ></path>
                        </svg>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="rt-flex-center rt-position-absolute rt-icon-second-2"
                        >
                          <path
                            d="M0.699951 4.7002H8.69995M4.69995 8.7002L8.69995 4.7002L4.69995 0.700195"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="var(--_colors---neutral-color--neutral-100)"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-layout-vflex rt-mobile-menu-wrap-bottom">
                  <div className="w-layout-vflex rt-mobile-menu-wrap-bottom-top">
                    <div className="rt-sub-text">{content.eyebrow3}</div>
                    <div className="w-layout-hflex rt-footer-bottom-wrap">
                      <a
                        href={content.Href2}
                        target="_blank"
                        className="rt-footer-icon-box rt-v2 w-inline-block"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 8 15"
                          className="rt-footer-icon"
                        >
                          <path
                            fill="currentColor"
                            d="M0.00509011 6.08139C0.00529702 5.85189 0.016383 5.64918 0.00280941 5.44812C-0.0124943 5.22143 0.0772333 5.13534 0.30508 5.13966C0.821192 5.14946 1.33806 5.13025 1.85373 5.14823C2.11479 5.15733 2.20094 5.04274 2.20192 4.81137C2.20434 4.24219 2.2068 3.67301 2.21104 3.10384C2.22474 1.26771 3.49248 0.00749908 5.33181 0.000581068C5.93987 -0.00170565 6.54738 0.00016654 7.15419 0.0558653C7.35972 0.0747297 7.4497 0.148261 7.44662 0.360738C7.43808 0.948194 7.43654 1.53594 7.44564 2.12336C7.4491 2.34717 7.34876 2.40724 7.14391 2.40353C6.72921 2.39603 6.31409 2.39837 5.89939 2.40748C5.21567 2.4225 4.86824 2.76667 4.85145 3.45407C4.84003 3.92202 4.85765 4.39071 4.84446 4.85857C4.83832 5.0764 4.91777 5.14969 5.13203 5.1464C5.74038 5.13707 6.34897 5.1417 6.95746 5.14276C7.34784 5.14345 7.34295 5.14492 7.2932 5.5244C7.21107 6.15078 7.12881 6.77735 7.06328 7.40557C7.0386 7.64215 6.95103 7.74515 6.70089 7.73813C6.20343 7.72418 5.70481 7.74732 5.20763 7.7291C4.93452 7.7191 4.84046 7.79766 4.84223 8.08332C4.85392 9.97451 4.84813 11.8658 4.84754 13.7571C4.84741 14.1463 4.84645 14.1469 4.45117 14.1471C3.78736 14.1475 3.12349 14.142 2.45977 14.1496C2.26097 14.1519 2.19332 14.0982 2.19461 13.8832C2.20616 11.9553 2.20215 10.0273 2.20764 8.09941C2.20838 7.83778 2.11809 7.71753 1.8346 7.72751C1.33737 7.74501 0.838926 7.72569 0.341263 7.73553C0.0989519 7.74032 -0.00992653 7.66419 0.000708564 7.40315C0.0182584 6.97239 0.00522608 6.54039 0.00509011 6.08139Z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href={content.Href3}
                        target="_blank"
                        className="rt-footer-icon-box rt-v2 w-inline-block"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                          className="rt-footer-icon"
                        >
                          <path
                            fill="currentColor"
                            d="M11.7746 13.4483C11.4127 13.4483 11.0838 13.4483 10.7143 13.4483C10.7143 13.3309 10.7143 13.226 10.7143 13.1212C10.7137 11.675 10.7204 10.2287 10.7072 8.78255C10.704 8.43507 10.6665 8.081 10.5892 7.74253C10.4336 7.0606 10.0504 6.75401 9.37151 6.70753C8.61452 6.65569 8.02413 6.93687 7.82289 7.55838C7.67415 8.01777 7.60726 8.5194 7.59679 9.0042C7.56749 10.3622 7.58635 11.7211 7.58622 13.0797C7.5862 13.1981 7.58621 13.3165 7.58621 13.4496C6.64363 13.4496 5.73302 13.4496 4.79877 13.4496C4.79877 10.4735 4.79877 7.49132 4.79877 4.49673C5.68113 4.49673 6.55694 4.49673 7.46417 4.49673C7.46417 4.88257 7.46417 5.25904 7.46417 5.73472C7.96434 4.94762 8.60422 4.50476 9.42177 4.3402C10.2148 4.18057 10.9994 4.23637 11.7534 4.53769C12.7189 4.92351 13.1597 5.71754 13.3522 6.67488C13.4337 7.08068 13.4886 7.49889 13.4919 7.91197C13.5067 9.74135 13.4983 11.5709 13.4983 13.4483C12.9409 13.4483 12.3742 13.4483 11.7746 13.4483Z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M2.39509 4.48409C2.61255 4.48409 2.797 4.48409 2.99762 4.48409C2.99762 7.48203 2.99762 10.4538 2.99762 13.4452C2.07615 13.4452 1.1599 13.4452 0.228683 13.4452C0.228683 10.4678 0.228683 7.49459 0.228683 4.48409C0.94239 4.48409 1.65223 4.48409 2.39509 4.48409Z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M2.73272 2.79524C2.11412 3.29953 1.46728 3.38419 0.855288 3.05483C0.247499 2.72774 -0.0727777 2.08864 0.0140325 1.37613C0.0888349 0.762172 0.559538 0.2341 1.18894 0.0580227C1.87012 -0.132541 2.61231 0.157618 2.99007 0.762176C3.3952 1.41054 3.30854 2.13908 2.73272 2.79524Z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href={content.Href4}
                        target="_blank"
                        className="rt-footer-icon-box rt-v2 w-inline-block"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                          className="rt-footer-icon"
                        >
                          <path
                            fill="currentColor"
                            d="M9.4515 0.0054488C10.1647 0.0312054 10.8525 -0.0514375 11.5352 0.0608285C13.2181 0.337566 14.4943 1.82754 14.4965 3.52941C14.4996 6.01196 14.5 8.49451 14.4964 10.9771C14.494 12.6174 13.1684 14.1355 11.5333 14.3877C11.347 14.4164 11.1625 14.4417 10.9734 14.4416C8.49918 14.4402 6.02496 14.445 3.55077 14.4396C1.59578 14.4352 0.00349376 12.8385 0.00169555 10.8884C-0.000559187 8.44338 -0.000648359 5.9983 0.00193038 3.55323C0.00399011 1.60038 1.59573 0.0100457 3.55288 0.0064322C5.50967 0.00281952 7.46647 0.00552714 9.4515 0.0054488ZM2.98063 12.8551C3.17949 12.9159 3.38156 12.9456 3.59095 12.9454C6.01818 12.9435 8.44542 12.9486 10.8726 12.9432C12.0945 12.9405 12.9896 12.0471 12.9925 10.8272C12.9983 8.41955 12.9979 6.01186 12.9923 3.60421C12.9895 2.4002 12.0909 1.50671 10.8877 1.50497C8.46046 1.50148 6.03322 1.50178 3.60598 1.50526C2.41766 1.50696 1.50868 2.4011 1.50575 3.58173C1.49972 6.00812 1.5016 8.43454 1.50612 10.8609C1.50784 11.7881 2.05119 12.5276 2.98063 12.8551Z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M6.15794 3.75852C8.16333 3.18392 10.1205 4.24276 10.7091 6.06739C11.425 8.28628 10.0345 10.5367 7.70791 10.8196C5.32268 11.1097 3.62364 9.29875 3.61602 7.29864C3.60954 5.59569 4.56138 4.26605 6.15794 3.75852ZM5.16538 7.69314C5.45544 8.94641 6.68557 9.64067 7.92124 9.24849C9.10818 8.87177 9.71288 7.54417 9.22525 6.3856C8.80564 5.38866 7.70559 4.87352 6.63891 5.17446C5.56882 5.47635 4.96 6.48848 5.16538 7.69314Z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M10.1669 3.35146C10.3854 2.96127 10.7038 2.80584 11.0542 2.89984C11.3875 2.98922 11.6128 3.27962 11.6141 3.62118C11.6153 3.96267 11.3967 4.2505 11.0565 4.34469C10.7782 4.42177 10.5277 4.3487 10.3332 4.14771C10.1245 3.93188 10.0472 3.66904 10.1669 3.35146Z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href={content.Href5}
                        target="_blank"
                        className="rt-footer-icon-box rt-v2 w-inline-block"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 15"
                          className="rt-footer-icon"
                        >
                          <path
                            fill="currentColor"
                            d="M0.74807 14.0724C0.48663 14.0592 0.248746 14.1023 0.0146876 14.0448C-0.00459037 13.9131 0.0959821 13.858 0.157406 13.7868C1.81136 11.8681 3.46442 9.9487 5.12752 8.03794C5.2799 7.86287 5.27329 7.75593 5.14706 7.57405C3.48461 5.17866 1.83047 2.77754 0.17572 0.376856C0.109478 0.280753 0.0228349 0.194092 0 0.0671235C0.0745376 -0.0326862 0.183838 0.00843047 0.276293 0.00818594C1.44987 0.00508249 2.62352 0.0120067 3.79701 0.00119946C4.02794 -0.000927492 4.15903 0.0825412 4.28593 0.268505C5.33178 1.80121 6.38798 3.32691 7.44209 4.85401C7.49336 4.92829 7.55448 4.99583 7.60403 5.05778C7.72481 5.0665 7.76062 4.98022 7.81158 4.92134C9.16408 3.35858 10.5174 1.79648 11.8638 0.228557C12.0014 0.0684014 12.1426 -0.009813 12.3569 0.00192725C12.653 0.0181446 12.9506 0.00599548 13.294 0.00599548C13.1198 0.332099 12.8963 0.536654 12.7033 0.761037C11.3086 2.38323 9.9068 3.99944 8.50724 5.61753C8.2021 5.97032 8.20701 5.96691 8.47075 6.34859C10.1803 8.82279 11.8877 11.2985 13.5949 13.7744C13.6454 13.8477 13.7141 13.9142 13.7153 14.0189C13.6461 14.1018 13.548 14.0699 13.463 14.0701C12.2711 14.0726 11.0791 14.0686 9.88722 14.0755C9.70284 14.0765 9.58686 14.02 9.48103 13.8656C8.36978 12.2448 7.25151 10.6287 6.13396 9.01222C6.06228 8.90853 6.00878 8.78828 5.85711 8.69653C5.5869 9.00657 5.31239 9.31912 5.04051 9.63392C3.80339 11.0663 2.56451 12.4972 1.33335 13.9347C1.16832 14.1273 0.966691 14.0521 0.74807 14.0724ZM7.73735 9.59163C8.34011 10.4525 8.94108 11.3146 9.54654 12.1736C9.77248 12.4941 9.9474 12.9075 10.2575 13.0963C10.5811 13.2932 11.0431 13.1458 11.4444 13.1541C11.6186 13.1577 11.8016 13.1937 11.9905 13.1102C11.9285 13.0169 11.8801 12.9405 11.8282 12.8666C9.20899 9.13378 6.57658 5.41006 3.98469 1.65858C3.61734 1.12687 3.24595 0.869533 2.60825 0.965048C2.32755 1.00709 2.03522 0.972129 1.68434 0.972129C3.72524 3.87844 5.71989 6.71888 7.73735 9.59163Z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        {...{ hamburger: "overlay" }}
        className="rt-mobile-menu-wrap-outside-overlay"
      ></div>
    </header>
  );
}
