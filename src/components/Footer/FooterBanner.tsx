import Image from "next/image";
import Link from "next/link";
import {
  FooterIconOne,
  FooterIconThree,
  FooterIconTwo,
} from "../Common/Icons/footerIcon/FooterIcon";
import { links } from "../Home/Hero/Data";

import React from "react";

export default function FooterBanner() {
  return (
    <div className="container relative z-30 sm:px-6">
      <div className="shadow-default relative z-20 overflow-hidden rounded-lg bg-white px-8 py-10 sm:px-14">
        <div className="row flex flex-wrap items-center text-center sm:text-left">
          <div className="px-3 md:w-12/12 lg:w-7/12 xl:w-6/12 box-border flex-shrink-0 w-full max-w-full">
            <h2
              data-aos="fade-up-sm"
              className="mb-6 font-secondary !leading-normal font-semibold text-h2 sm:text-[46px]"
            >
              Sign up and Create Your Online Store Today!
            </h2>
            <span
              className="inline-block align-middle text-[20px] font-bold text-dark"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            ></span>
            <ul className="mx-auto mt-2 flex w-fit flex-row gap-8 align-middle text-[28px]  sm:mt-0 sm:ml-[28px] sm:inline-flex">
              {links.map(({ delay, href, SvgComponent }, index) => (
                <li
                  key={index}
                  data-aos="fade-in"
                  className="text-dark"
                  data-aos-delay={delay}
                >
                  <Link href={href}>
                    <SvgComponent />
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:justify-start sm:gap-8"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              <Link
                className="btn-footer btn-md btn-primary "
                href="https://github.com/zeon-studio/astroplate"
              >
                Get A Quote
              </Link>
              <Link
                className="btn-footer btn-md btn-outline-primary"
                href="https://github.com/zeon-studio/astroplate"
              >
                Started Now
              </Link>
            </div>
          </div>
          <div className="hidden lg:w-5/12 xl:w-6/12 lg:block px-3">
            <div className="cta-clip-path relative" data-aos="fade-right-md">
              <Image
                alt="banner image"
                loading="lazy"
                width="470"
                height="484"
                decoding="async"
                data-nimg="1"
                className="mx-auto block"
                src="/images/footer/cta-image-1.png"
              />
            </div>
          </div>
        </div>
        <FooterIconOne />
        <FooterIconTwo />
        <FooterIconThree />
      </div>
    </div>
  );
}
