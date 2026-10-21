import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <span className={`nortera-brand${light ? " nortera-brand--light" : ""}`}>
      <Image src={siteConfig.brand.logo} alt="" width={36} height={36} sizes="36px" className="nortera-brand__mark" />
      <span className="nortera-brand__name">{siteConfig.name}<span>Advisory</span></span>
    </span>
  );
}
