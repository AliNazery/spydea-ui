import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks, widgetLinks } from "./FooterData";

export default function MainFooter() {
  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-delay="50"
        className="container relative z-30 sm:px-6 pt-[80px] lg:pt-[130px] "
      >
        <div className="row flex flex-wrap items-center justify-center pb-10 lg:justify-between">
          <div className="flex-none w-auto px-3">
            <Link href="index.html">
              <Image
                alt="spydea"
                loading="lazy"
                width="164"
                height="38"
                decoding="async"
                data-nimg="1"
                src="/images/footer/logo-light.png"
              />
            </Link>
          </div>
          <div className="pt-10 box-border flex-shrink-0 w-full max-w-full lg:w-6/12 px-3 lg:pt-0">
            <form className="mx-auto flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] sm:flex-row lg:ml-auto lg:mr-0 lg:max-w-full">
              <input
                type="search"
                className="w-full border-0 bg-transparent p-4 pl-6 text-center text-lg placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left md:text-base"
                placeholder="Enter Your Email Address"
              />
              <button type="submit" className="btn btn-primary btn-md">
                Get A Quote
              </button>
            </form>
          </div>
        </div>
        <hr className="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent" />
        <div className="row flex flex-wrap gy-5 py-7 text-center -mt-12 lg:-mt-6 lg:g-4 sm:py-14 sm:text-left">
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="widget lg:pl-16 ">
              <h3 className="widget-title md:mb-8">Company</h3>
              <ul className="widget-content flex flex-col gap-3 md:gap-6">
                {widgetLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mx-auto sm:mx-0 w-fit text-footerli"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-2/12 px-3 mt-12 lg:mt-[24px]xl:w-2/12">
            <div className="widget pl-0">
              <h3 className="widget-title md:mb-8 ">Resources</h3>
              <ul className="widget-content flex flex-col gap-3 md:gap-6">
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mx-auto sm:mx-0 w-fit text-footerli"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-4/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="widget lg:pl-8">
              <h3 className="widget-title md:mb-8">Email</h3>
              <div className="mx-auto -mt-1 mb-4 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <Link href="mailto:hello@themefisher.com">
                  hello@themefisher.com
                </Link>
              </div>
              <ul className="social-icons flex flex-wrap items-center gap-4 font-secondary justify-center sm:justify-start">
                {socialLinks.map((link, index) => (
                  <li key={index} className="inline-block text-white">
                    <Link
                      className="inline-block"
                      aria-label={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="xl:pl-16">
              <h3 className="widget-title md:mb-8">Call US</h3>
              <div className="mx-auto -mt-1 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <Link href="tel:+94746-388817">+94746-388817</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent" />
        <p className="copyright py-12 text-center text-copyp text-copyco opacity-50">
          2023 Design and Developed by{" "}
          <Link
            href="https://themefisher.com/"
            className="underline underline-offset-2"
          >
            Themefisher
          </Link>
        </p>
      </div>
    </>
  );
}
