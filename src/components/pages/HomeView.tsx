"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { homeAnimation } from "@/hooks/pages/homeAnimation";
import { mountZenethInteractions } from "@/hooks/zeneth/interactions";

import HomeHeader from "@/components/sections/HomeHeader";
import HomeHome from "@/components/sections/HomeHome";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeApproach from "@/components/sections/HomeApproach";
import HomeServices from "@/components/sections/HomeServices";
import HomeResults from "@/components/sections/HomeResults";
import HomeWhyUs from "@/components/sections/HomeWhyUs";
import HomeProcess from "@/components/sections/HomeProcess";
import HomeCaseStudies from "@/components/sections/HomeCaseStudies";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeConsultation from "@/components/sections/HomeConsultation";
import HomeZenethSection from "@/components/sections/HomeZenethSection";
export default function HomeView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, homeAnimation, mountZenethInteractions);
  return (
    <div ref={rootRef} className="zeneth-site">
      <HomeHeader />
      <main>
        <div className="rt-position-relative">
          <div className="zeneth-section">
            <HomeHome />
          </div>
          <div className="zeneth-section">
            <HomeAbout />
          </div>
        </div>
        <div className="zeneth-section">
          <HomeApproach />
        </div>
        <div className="zeneth-section">
          <HomeServices />
        </div>
        <div className="zeneth-section">
          <HomeResults />
        </div>
        <div className="zeneth-section">
          <HomeWhyUs />
        </div>
        <div className="zeneth-section">
          <HomeProcess />
        </div>
        <div className="zeneth-section">
          <HomeCaseStudies />
        </div>
        <div className="zeneth-section">
          <HomeTestimonials />
        </div>
        <div className="rt-cta-gap">
          <div className="zeneth-section">
            <HomeConsultation />
          </div>
        </div>
      </main>
      <HomeZenethSection />
    </div>
  );
}
