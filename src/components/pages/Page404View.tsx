"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { page404Animation } from "@/hooks/pages/page404Animation";
import { mountZenethInteractions } from "@/hooks/zeneth/interactions";

import Page404Header from "@/components/sections/Page404Header";
import Page404UtilityWrap from "@/components/sections/Page404UtilityWrap";
import Page404Footer from "@/components/sections/Page404Footer";
export default function Page404View() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, page404Animation, mountZenethInteractions);
  return (
    <div ref={rootRef} className="zeneth-site">
      <Page404Header />
      <Page404UtilityWrap />
      <Page404Footer />
    </div>
  );
}
