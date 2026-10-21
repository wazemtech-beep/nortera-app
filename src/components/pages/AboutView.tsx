"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { aboutAnimation } from "@/hooks/pages/aboutAnimation";
import { mountZenethInteractions } from "@/hooks/zeneth/interactions";

import AboutHeader from "@/components/sections/AboutHeader";
import AboutAboutHero from "@/components/sections/AboutAboutHero";
import AboutValues from "@/components/sections/AboutValues";
import AboutApproach from "@/components/sections/AboutApproach";
import AboutExpertise from "@/components/sections/AboutExpertise";
import AboutSolutions from "@/components/sections/AboutSolutions";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import AboutCtaGap from "@/components/sections/AboutCtaGap";
import AboutFooter from "@/components/sections/AboutFooter";
export default function AboutView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, aboutAnimation, mountZenethInteractions);
  return (
    <div ref={rootRef} className="zeneth-site">
      <AboutHeader />
      <AboutAboutHero />
      <AboutValues />
      <AboutApproach />
      <AboutExpertise />
      <AboutSolutions />
      <AboutTestimonials />
      <AboutCtaGap />
      <AboutFooter />
    </div>
  );
}
