import Image from "next/image";
import React from "react";
import {
  FooterIconFive,
  FooterIconFour,
  FooterIconOne,
  FooterIconSix,
  FooterIconThree,
  FooterIconTwo,
} from "../Common/Icons/footerIcon/FooterIcon";
import {
  FaceBookIcon,
  LinkedinIcon,
  SKypeIcon,
  TwitterIcon,
} from "../Common/Icons/footerIcon/SocialIcon";

export default function Footer() {
  return (
    <footer className=" relative z-20 bg-theme-dark after:absolute after:left-0 after:top-0 after:-z-10 after:h-[400px] after:w-full after:bg-[white] after:content-[''] after:clip-path-polygon">
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
                <li
                  className="text-dark"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  <a href="#?">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
                    </svg>
                  </a>
                </li>
                <li
                  className="text-dark"
                  data-aos="fade-up-sm"
                  data-aos-delay="150"
                >
                  <a href="#?">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 528 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"></path>
                    </svg>
                  </a>
                </li>
                <li
                  className="text-dark"
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                >
                  <a href="#">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"></path>
                    </svg>
                  </a>
                </li>
                <li
                  className="text-dark"
                  data-aos="fade-up-sm"
                  data-aos-delay="250"
                >
                  <a href="#?">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div
                className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:justify-start sm:gap-8"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                <a
                  className="btn-footer btn-md btn-primary "
                  href="https://github.com/zeon-studio/astroplate"
                >
                  Get A Quote
                </a>
                <a
                  className="btn-footer btn-md btn-outline-primary"
                  href="https://github.com/zeon-studio/astroplate"
                >
                  Started Now
                </a>
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
                  //   style="color:transparent"
                  //   srcSet="/_next/image?url=%2Fimages%2Fcta-image.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcta-image.png&amp;w=1080&amp;q=75 2x"
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
      <div
        data-aos="fade-in"
        data-aos-delay="50"
        className="container relative z-30 sm:px-6 pt-[80px] lg:pt-[130px] "
      >
        <div className="row flex flex-wrap items-center justify-center pb-10 lg:justify-between">
          <div className="flex-none w-auto px-3">
            <a href="index.html">
              <Image
                alt="spydea"
                loading="lazy"
                width="164"
                height="38"
                decoding="async"
                data-nimg="1"
                // style="color:transparent"
                // srcSet="/_next/image?url=%2Fimages%2Flogo-light.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo-light.png&amp;w=384&amp;q=75 2x"
                src="/images/footer/logo-light.png"
              />
            </a>
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
                <li className="mx-auto sm:mx-0 w-fit text-footerli">
                  <a href="/about">About us</a>
                </li>
                <li className="mx-auto sm:mx-0 w-fit text-footerli">
                  <a href="/contact">Contact us</a>
                </li>
                <li className="mx-auto sm:mx-0 w-fit text-footerli">
                  <a href="/pricing">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-2/12 px-3 mt-12 lg:mt-[24px]xl:w-2/12">
            <div className="widget pl-0">
              <h3 className="widget-title md:mb-8 ">Resources</h3>
              <ul className="widget-content flex flex-col gap-3 md:gap-6">
                <li className="mx-auto sm:mx-0 w-fit text-footerli">
                  <a href="/blog">Blog</a>
                </li>
                <li className="mx-auto sm:mx-0 w-fit text-footerli">
                  <a href="/career">Career</a>
                </li>
                <li className="mx-auto sm:mx-0 w-fit text-footerli">
                  <a href="/terms-conditions">Terms &amp;Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-4/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="widget lg:pl-8">
              <h3 className="widget-title md:mb-8">Email</h3>
              <div className="mx-auto -mt-1 mb-4 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <a href="mailto:hello@themefisher.com">hello@themefisher.com</a>
              </div>
              <ul className="social-icons flex flex-wrap items-center gap-4 font-secondary justify-center sm:justify-start">
                <li className="inline-block text-white">
                  <a
                    className="inline-block"
                    aria-label="FaFacebook"
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <FaceBookIcon />
                  </a>
                </li>
                <li className="inline-block text-white">
                  <a
                    className="inline-block"
                    aria-label="FaSkype"
                    href="https://skype.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <SKypeIcon />
                  </a>
                </li>
                <li className="inline-block text-white">
                  <a
                    className="inline-block"
                    aria-label="FaTwitter"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li className="inline-block text-white">
                  <a
                    className="inline-block"
                    aria-label="FaLinkedin"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <LinkedinIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="xl:pl-16">
              <h3 className="widget-title md:mb-8">Call US</h3>
              <div className="mx-auto -mt-1 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <a href="tel:+94746-388817">+94746-388817</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent" />
        <p className="copyright py-12 text-center text-copyp text-copyco opacity-50">
          2023 Design and Developed by{" "}
          <a
            href="https://themefisher.com/"
            className="underline underline-offset-2"
          >
            Themefisher
          </a>
        </p>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full">
        <FooterIconFour />
        <FooterIconFive />
        <FooterIconSix />
      </div>
    </footer>
  );
}
