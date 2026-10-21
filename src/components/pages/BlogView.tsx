"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { blogAnimation } from "@/hooks/pages/blogAnimation";
import { mountZenethInteractions } from "@/hooks/zeneth/interactions";

import BlogHeader from "@/components/sections/BlogHeader";
import BlogBlogHero from "@/components/sections/BlogBlogHero";
import BlogCtaGap from "@/components/sections/BlogCtaGap";
import BlogFooter from "@/components/sections/BlogFooter";
export default function BlogView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, blogAnimation, mountZenethInteractions);
  return (
    <div ref={rootRef} className="zeneth-site">
      <BlogHeader />
      <BlogBlogHero />
      <BlogCtaGap />
      <BlogFooter />
    </div>
  );
}
