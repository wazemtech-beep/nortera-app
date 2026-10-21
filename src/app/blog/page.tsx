import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import BlogView from "@/components/pages/BlogView";
export const metadata: Metadata = siteConfig.metadata["/blog"];
export default function Page() {
  return <BlogView />;
}
