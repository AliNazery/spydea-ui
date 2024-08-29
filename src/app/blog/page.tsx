"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import { BlogIconOne, BlogIconTwo } from "@/components/Common/Icons/BlogIcon/BlogIcon";

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Latest Blog Posts"
        currentPage="Blog"
        description=""
      />
      <main>
        <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
          <div className="container relative z-30 px-4 sm:px-6">
            <div className="row gy-4 -mt-6">
              <div
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-ful max-w-full"
              >
                <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                  <Link
                    className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                    href="/blog/blogDetail"
                  >
                    <Image
                      alt="author"
                      loading="lazy"
                      width="408"
                      height="262"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src="/images/Article/2-1.jpg"
                    />
                  </Link>
                  <div className="px-5 pb-12">
                    <div className="-mt-[30px] mb-3 flex items-center">
                      <Link
                        className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                        title="benjamin"
                        href="blog/Author"
                      >
                        <Image
                          alt="benjamin"
                          loading="lazy"
                          width="40"
                          height="40"
                          decoding="async"
                          data-nimg="1"
                          className="h-[40px] w-[40px] object-cover"
                          src="/images/Article/1-2.jpg"
                        />
                      </Link>
                      <Link
                        className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                        href="/authors/benjamin"
                      >
                        benjamin
                      </Link>
                    </div>
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      <Link
                        className="link-animation relative after:absolute after:inset-0"
                        href="//blog/blogDetail"
                      >
                        The Real Product From The Buyers Improvements In
                        Overflow Basis.
                      </Link>
                    </h2>
                    <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                      04 Apr, 2022
                    </span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-ful max-w-full"
              >
                <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                  <Link
                    className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                    href="//blog/blogDetail"
                  >
                    <Image
                      alt="author"
                      loading="lazy"
                      width="408"
                      height="262"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src="/images/Article/1-1.jpg"
                    />
                  </Link>
                  <div className="px-5 pb-12">
                    <div className="-mt-[30px] mb-3 flex items-center">
                      <Link
                        className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                        title="Daniel Mitchell"
                        href="blog/Author"
                      >
                        <Image
                          alt="Daniel Mitchell"
                          loading="lazy"
                          width="40"
                          height="40"
                          decoding="async"
                          data-nimg="1"
                          className="h-[40px] w-[40px] object-cover"
                          src="/images/Article/2-2.jpg"
                        />
                      </Link>
                      <Link
                        className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                        href="/authors/daniel-mitchell"
                      >
                        Daniel Mitchell
                      </Link>
                    </div>
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      <Link
                        className="link-animation relative after:absolute after:inset-0"
                        href="/blog/blogDetail"
                      >
                        The Real Product From The Buyers Improvements In
                        Overflow Basis.
                      </Link>
                    </h2>
                    <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                      04 Apr, 2022
                    </span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-ful max-w-full"
              >
                <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                  <Link
                    className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                    href="/blog/blogDetail"
                  >
                    <Image
                      alt="author"
                      loading="lazy"
                      width="408"
                      height="262"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src="/images/Article/3-1.jpg"
                    />
                  </Link>
                  <div className="px-5 pb-12">
                    <div className="-mt-[30px] mb-3 flex items-center">
                      <Link
                        className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                        title="Daniel Mitchell"
                        href="blog/Author"
                      >
                        <Image
                          alt="Daniel Mitchell"
                          loading="lazy"
                          width="40"
                          height="40"
                          decoding="async"
                          data-nimg="1"
                          className="h-[40px] w-[40px] object-cover"
                          src="/images/Article/3-2.jpg"
                        />
                      </Link>
                      <Link
                        className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                        href="/authors/daniel-mitchell"
                      >
                        Daniel Mitchell
                      </Link>
                    </div>
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      <Link
                        className="link-animation relative after:absolute after:inset-0"
                        href="/blog/blogDetail"
                      >
                        The Real Product From The Buyers Improvements In
                        Overflow Basis.
                      </Link>
                    </h2>
                    <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                      04 Apr, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <nav
              className="mt-8 flex items-center justify-center space-x-3"
              aria-label="Pagination"
            >
              <span className="rounded px-2 py-1.5 text-light">
                <span className="sr-only">Previous</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="30"
                  width="30"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span
                aria-current="page"
                className="rounded bg-dark px-4 py-2 text-white  "
              >
                1
              </span>
              <Link
                aria-current="page"
                className="rounded px-4 py-2 text-dark hover:bg-theme-light  "
                href="/blog/Blog2"
              >
                2
              </Link>
              <Link
                href="/blog/Blog2"
                className="rounded px-2 py-1.5 text-dark hover:bg-theme-light  "
              >
                <span className="sr-only">Next</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="30"
                  width="30"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </nav>
          </div>
          <BlogIconOne />
          <BlogIconTwo/>
        </section>
      </main>
    </>
  );
}
