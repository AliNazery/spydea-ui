import React from "react";
import { GreaterSvg, PriceOneSvg, PriceTwoSvg } from "../Common/PagesSvg";
import Link from "next/link";
import { PriceList } from "./PriceData";

export default function Price() {
  return (
    <>
      <section className="section relative z-20 mt-[-26rem] mb-6 overflow-hidden md:py-[100px]">
        <div className="container relative">
          <div className="flex flex-wrap gap-6">
            <div className="relative order-0 lg:w-10/12 xl:w-[65%] xl:order-0 xl:max-w-[1280px]">
              <div className="shadow-default flex flex-col justify-between rounded-xl bg-white px-8 py-12  md:flex-row xl:px-12">
                <div
                  data-aos="fade-up-sm"
                  className="px-0 py-3 sm:px-2 w-[332px] "
                >
                  <div className="mb-6 flex items-center gap-4">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-md text-transparent"
                      src="../images/price/award.svg"
                    />
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-dark sm:text-2xl">
                    Standard license
                  </h2>
                  <p className="mb-6 text-dark">Traffic Corporate Sites</p>
                  <div className="block w-full border-b border-b-border border-opacity-70 pb-6">
                    <h2 className="text-[2.8153056842999997rem] font-secondary plan-price">
                      $200{" "}
                      <span className="text-lg font-semibold text-dark">
                        /month
                      </span>
                    </h2>
                  </div>
                  <ul className="mb-10 mt-8 border-b border-b-gray-300/70 pb-8 text-lg leading-7 text-gray-900">
                    {PriceList.map((price) => (
                      <div
                        key={price.id}
                        className="flex items-center mb-5 last:mb-0"
                      >
                        <span className="inline-block pr-2 text-base">
                          <GreaterSvg />
                        </span>
                        <li className="list-none pl-0">
                          <strong>{price.strong}</strong> {price.value}
                        </li>
                      </div>
                    ))}
                  </ul>
                  <Link
                    href="#?"
                    className="btn btn-icon btn-outline-primary inline-flex  py-5 w-[313px]"
                  >
                    Start Free Trial
                    <span className="ml-auto">
                      <GreaterSvg />
                    </span>
                  </Link>
                </div>
                <div
                  data-aos="fade-up-sm"
                  className="px-0 py-3 sm:px-2  w-[332px] "
                >
                  <div className="mb-6 flex items-center gap-4">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-md"
                      src="../images/price/price-tag.svg"
                    />
                    <span className="rounded-[4px] bg-black px-4 py-[3px] align-middle text-sm font-medium capitalize text-white">
                      popular
                    </span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-dark sm:text-2xl">
                    Enterprise License
                  </h2>
                  <p className="mb-6 text-dark">Traffic Corporate Sites</p>
                  <div className="block w-full border-b border-b-border border-opacity-70 pb-6">
                    <h2 className="text-[2.8153056842999997rem] font-secondary plan-price">
                      $500{" "}
                      <span className="text-lg font-semibold text-dark">
                        /month
                      </span>
                    </h2>
                  </div>
                  <ul className="mb-10 mt-8 border-b border-b-gray-300/70 pb-8 text-lg leading-7 text-gray-900">
                    {PriceList.map((price) => (
                      <div
                        key={price.id}
                        className="flex items-center mb-5 last:mb-0"
                      >
                        <span className="inline-block pr-2 text-base">
                          <GreaterSvg />
                        </span>
                        <li className="list-none pl-0">
                          <strong>{price.strong}</strong>
                          {price.value}
                        </li>
                      </div>
                    ))}
                  </ul>
                  <a
                    href="#?"
                    className="btn btn-icon btn-primary inline-flex  py-5 w-[313px]"
                  >
                    Start Free Trial
                    <span className="ml-auto">
                      <GreaterSvg />
                    </span>
                  </a>
                </div>
              </div>
              <PriceOneSvg />
              <PriceTwoSvg />
            </div>
            <div className="lg:w-full xl:w-[30%]">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                CHOOSE PLAN FOR YOU
              </span>
              <div
                className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                <h2 className="font-semibold text-[2.28886641rem]">
                  Try Spydea for free Now
                </h2>
              </div>
              <p
                className="mb-8 pl-6 text-lg"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                Lorem ipsum dolor sit amet, consectetur mag na dictum porta.
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. elementum id enim. Nulla quis lorem ut libero malesuada
                feugiat. Curabitur non nulla sit amet nisl tempus convallis quis
                ac lectus. Quisque velit nisi, pretium ut
              </p>
              <span data-aos="fade-up-sm" data-aos-delay="150">
                <a
                  href="/login"
                  className="btn btn-outline-primary btn-icon w-[300px] ml-6 max-w-[250px] md:max-w-[300px] inline-flex  py-5 "
                >
                  Sign up For Free
                  <span className="ml-auto">
                    <GreaterSvg />
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
