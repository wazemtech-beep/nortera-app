"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeTestimonials;
  return (
    <section className="rt-section" id="testimonials" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-flex-center rt-gap-lg">
          <div {...{ data: "subtext" }} className="rt-sub-text rt-sub-gap">
            {content.testimonials}
          </div>
          <div className="w-layout-vflex rt-top-heading">
            <h2 {...{ appear: "heading" }} className="rt-text-center">
              {content.heading}
            </h2>
          </div>
        </div>
      </div>
      <div
        data-animate="text"
        className="w-layout-hflex rt-testimonial-v2-marquee rt-full-width rt-overflow-hidden"
      >
        <div
          page-load="marquee"
          className="w-layout-hflex rt-testimonial-v2-train"
        >
          {content.items.map((item, index) => (
            <div className={item.className} key={index}>
              <div className="w-layout-vflex rt-testimonial-v2-card rt-radius-xs rt-position-relative">
                <div className="w-layout-hflex rt-testimonial-v2-stars">
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>{item.description}</p>
                <div className="w-layout-hflex rt-testimonial-v2-plain-avatarrow">
                  <Image
                    src={item.image}
                    alt={content.makennaBatorAlt}
                    className="rt-testimonial-v2-avatar"
                    decoding="async"
                    width={112}
                    height={112}
                    sizes="112px"
                  />
                  <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                    <div className="rt-text-style-h5">{item.title}</div>
                    <div className="rt-sub-text">{item.label}</div>
                  </div>
                </div>
                <div className="rt-testimonial-v2-photo-overlay rt-radius-xs rt-overflow-hidden rt-display-none">
                  <Image
                    src={content.homeOneTestimonialImageImage}
                    alt={content.homeOneTestimonialImageAlt}
                    className="rt-testimonial-v2-photoimg"
                    decoding="async"
                    width={928}
                    height={936}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <div className="rt-testimonial-v2-photofade"></div>
                  <div className="w-layout-hflex rt-testimonial-v2-bottom">
                    <Image
                      src={item.image2}
                      alt={item.alt}
                      className="rt-testimonial-v2-avatar"
                      decoding="async"
                      width={112}
                      height={112}
                      sizes="112px"
                    />
                    <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                      <div className="rt-text-style-h5 rt-text-color-tertiary">
                        {item.title2}
                      </div>
                      <div className="rt-sub-text rt-text-color-tertiary">
                        {item.label2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          page-load="marquee"
          className="w-layout-hflex rt-testimonial-v2-train"
        >
          {content.items2.map((item, index) => (
            <div className={item.className} key={index}>
              <div className="w-layout-vflex rt-testimonial-v2-card rt-radius-xs rt-position-relative">
                <div className="w-layout-hflex rt-testimonial-v2-stars">
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-testimonial-v2-star w-embed">
                    <svg
                      viewBox="0 0 28.3895 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0118 3.64058C13.3842 2.49468 15.0053 2.49468 15.3776 3.64058L17.2664 9.45366C17.4329 9.96612 17.9105 10.3131 18.4493 10.3131H24.5615C25.7664 10.3131 26.2674 11.8549 25.2926 12.5631L20.3477 16.1558C19.9118 16.4725 19.7294 17.0339 19.8959 17.5463L21.7847 23.3594C22.157 24.5053 20.8455 25.4582 19.8707 24.75L14.9258 21.1573C14.4899 20.8406 13.8996 20.8406 13.4637 21.1573L8.51877 24.75C7.54401 25.4582 6.23248 24.5053 6.6048 23.3594L8.49359 17.5463C8.6601 17.0339 8.47769 16.4725 8.04176 16.1558L3.09686 12.5631C2.1221 11.8549 2.62306 10.3131 3.82793 10.3131H9.94016C10.479 10.3131 10.9566 9.96612 11.1231 9.45366L13.0118 3.64058Z"
                        fill="#FFA600"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>{item.description}</p>
                <div className="w-layout-hflex rt-testimonial-v2-plain-avatarrow">
                  <Image
                    src={item.image}
                    alt={content.makennaBatorAlt}
                    className="rt-testimonial-v2-avatar"
                    decoding="async"
                    width={112}
                    height={112}
                    sizes="112px"
                  />
                  <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                    <div className="rt-text-style-h5">{item.title}</div>
                    <div className="rt-sub-text">{item.label}</div>
                  </div>
                </div>
                <div className="rt-testimonial-v2-photo-overlay rt-radius-xs rt-overflow-hidden rt-display-none">
                  <Image
                    src={content.homeOneTestimonialImageImage}
                    alt={content.homeOneTestimonialImageAlt}
                    className="rt-testimonial-v2-photoimg"
                    decoding="async"
                    width={928}
                    height={936}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <div className="rt-testimonial-v2-photofade"></div>
                  <div className="w-layout-hflex rt-testimonial-v2-bottom">
                    <Image
                      src={item.image2}
                      alt={item.alt}
                      className="rt-testimonial-v2-avatar"
                      decoding="async"
                      width={112}
                      height={112}
                      sizes="112px"
                    />
                    <div className="w-layout-vflex rt-testimonial-v2-author-wrap">
                      <div className="rt-text-style-h5 rt-text-color-tertiary">
                        {item.title2}
                      </div>
                      <div className="rt-sub-text rt-text-color-tertiary">
                        {item.label2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
