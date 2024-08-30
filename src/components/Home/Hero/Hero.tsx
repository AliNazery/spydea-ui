import Image from "next/image";
import { HeroOne, HeroTwo } from "../../Common/Icons/hero/hero1";
import { CheckMarkSvg} from "../../Common/svg";
import Link from "next/link";
import { items, links } from "./Data";

export function Hero() {
  return (
    <section className="section banner relative py-[60px] md:py-[100px] overflow-hidden before:z-10 after:content-[''] after:z-10 after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
      <div className="container relative z-30 sm:px-6">
        <div className="lg:flex lg:items-center lg:-mx-3">
          <div className="lg:w-6/12 px-3 ">
            <h1
              data-aos="fade-up-sm"
              className="mb-6 font-bold text-[35px] sm:text-[50px] xl:text-[65px]"
            >
              The smarter way to save documents
            </h1>
            <p
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="mb-6 text-lg"
            >
              Pellen tesque in ipsum id orci porta dapibus. Sed port titor
              lectus nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit
              amet quam vehicula elementum sed suscipit tortor eghet felis
              porttitor volutpat. Vivamus
            </p>
            <form
              data-aos="fade-up-sm"
              data-aos-delay="200"
              className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row"
            >
              <input
                type="search"
                className="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
                placeholder="Enter Your Email Address"
              />
              <button type="submit" className="btn btn-primary btn-md">
                Get A Quote
              </button>
            </form>
            <span
              data-aos="fade-right"
              data-aos-delay="250"
              className="align-middle text-lg font-bold text-dark"
            >
              Supported
            </span>
            <ul className="mt-2 flex flex-row gap-8 align-middle text-[28px] xs:ml-[28px] xs:mt-0 xs:inline-flex">
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
            <div className="py-8">
              <hr className="h-[1px] border-0 border-b border-border/50 bg-transparent" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {items.map(({ delay, text }, index) => (
                <li key={index} data-aos="fade-in" data-aos-delay={delay}>
                  <CheckMarkSvg />
                  <p className="inline-block align-middle text-lg font-medium text-dark">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-[600px] pt-24 px-3 sm:mx-0 sm:w-full md:mx-[72px] lg:w-6/12 lg:mx-0 lg:pt-0 xl:mx-6">
            <div
              data-aos="fade-up-sm"
              className="image-block relative mr-[5.5%] pl-8 md:mr-6 lg:ml-6 before:content-[''] before:-z-10 before:bg-tertiary before:absolute before:h-full before:w-calc-100-minus-80 before:-top-4 before:left-4 before:right-16 before:clip-path-herobefore-polygon
              after:content-[''] after:-z-10 after:bg-yellow_tan  after:absolute after:left-[100px] after:-right-5  after:top-[15px]  after:bottom-[-15px] after:xl:bottom-[-30px] after:h-full after:calc-100-minus-80 after:clip-path-herobefore-polygon"
            >
              <Image
                alt="banner-image"
                loading="lazy"
                width="448"
                height="564"
                decoding="async"
                data-nimg="1"
                className="banner-image w-full h-auto max-w-full z-10 clip-path-hero-polygon"
                src="/images/brands/banner-image.png"
              />
              <Image
                data-aos="fade-down-sm"
                data-aos-delay="150"
                alt="banner-image"
                loading="lazy"
                width="211"
                height="121"
                decoding="async"
                data-nimg="1"
                className="absolute bottom-16 left-0 w-[40%] rounded-lg shadow-md"
                src="/images/brands/banner-image-part-1.png"
                unoptimized={true}
              />
              <Image
                data-aos="fade-up-sm"
                data-aos-delay="200"
                alt="banner-image"
                loading="lazy"
                width="211"
                height="254"
                decoding="async"
                data-nimg="1"
                className="absolute right-0 top-0 w-[30%] rounded-lg md:-right-32 md:top-14 md:w-[40%] xl:top-36"
                src="/images/brands/banner-image-part-2.png"
                unoptimized={true}
              />
              <HeroOne />
              <HeroTwo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}