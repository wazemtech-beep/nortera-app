"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { contactAnimation } from "@/hooks/pages/contactAnimation";
import { mountZenethInteractions } from "@/hooks/zeneth/interactions";

import ContactHeader from "@/components/sections/ContactHeader";
import ContactContactHero from "@/components/sections/ContactContactHero";
import ContactFaq from "@/components/sections/ContactFaq";
import ContactCtaGap from "@/components/sections/ContactCtaGap";
import ContactFooter from "@/components/sections/ContactFooter";
export default function ContactView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, contactAnimation, mountZenethInteractions);
  return (
    <div ref={rootRef} className="zeneth-site">
      <ContactHeader />
      <ContactContactHero />
      <ContactFaq />
      <ContactCtaGap />
      <ContactFooter />
    </div>
  );
}
