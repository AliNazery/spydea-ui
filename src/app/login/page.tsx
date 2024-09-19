import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GreaterSvg } from "@/components/Common/PagesSvg";
import { GreatSvg, LoginFourSvg, LoginOneSvg, LoginThreeSvg, LoginTwoSvg } from "@/components/Common/Icons/loginSvg/loginSvg";

export default function login() {
  return (
    <>
      <section className="section relative overflow-hidden  py-[100px]">
        <div className="container relative z-30">
          <div className="flex flex-wrap -mt-0 -mr-[calc(1.5rem/2)] -ml-[calc(1.5rem/2)]">
            <div className="relative mx-auto lg:w-3/4 xl:w-7/12">
              <div
                data-aos="fade-up-sm"
                className="shadow-default rounded-2xl bg-white px-8 py-8 sm:px-20 sm:py-20"
              >
                <div className="mb-6 text-center">
                  <Image
                    width="50"
                    height="50"
                    className="inline-block h-12 w-12"
                    src="/images/login/key.png"
                    alt="logo"
                  />
                  <h1 className="mb-5 sm:mb-10 md:text-4xl lg:text-5xl">
                    Login
                  </h1>
                  <p className="mb-8 text-lg sm:mb-16">
                    Donec rutrum congue leo eget malesuada. Sed porttitor nibh.
                    Cras ultricies ligula sed magna dictum porta. Vestibulum
                  </p>
                  <Link
                    href="https://google.com"
                    target="_blank"
                    className="block rounded-lg border border-border px-5 py-3 text-neutral-400 transition-colors duration-200 hover:border-dark sm:py-4"
                  >
                    <Image
                      alt="google"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="mr-2 inline-block w-fit"
                      src="./images/login/google.svg"
                    />
                    Login With Google
                  </Link>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <hr className="w-full border-border" />
                  <span className="whitespace-nowrap px-4 text-zinc-400 text-opacity-70">
                    Or Login With Email
                  </span>
                  <hr className="w-full border-border" />
                </div>
                <form
                  className="flex flex-wrap space-y-3 mt-0 -mx-[0.75] text-dark "
                  method="post"
                >
                  <div className="w-full">
                    <label htmlFor="email" className="mb-3 block font-semibold">
                      Email Adrdess
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
                      placeholder="Your Email Address"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="password"
                      className="mb-3 block font-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
                      placeholder="Enter Your Password"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className="btn btn-primary inline-flex w-full max-w-full items-center justify-between mt-6"
                    >
                                          Login
                      <GreatSvg/>
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-center">
                  Don &#x27;t have any account?
                  <Link
                    className="font-medium underline underline-offset-2 hover:no-underline"
                    href="sign-up"
                  >
                    Sign Up
                  </Link>
                </p>
                <p className="mt-2 text-center">
                  Forget your password?
                  <Link
                    className="font-medium underline underline-offset-2 hover:no-underline"
                    href="/reset-password"
                  >
                    Reset Password
                  </Link>
                </p>
              </div>
              <LoginOneSvg/>
              <LoginTwoSvg/>
              <LoginThreeSvg/>
              <LoginFourSvg/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
