import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeaderIconOne,
  HeaderIconTwo,
} from "@/components/Common/Icons/PageHeaderIcon/HeaderIcon";
import { NextIcon, PreviousIcon } from "@/components/Common/Icons/BlogIcon/NavigateIcon";
import { BlogIconOne, BlogIconTwo } from "@/components/Common/Icons/BlogIcon/BlogIcon";

export default function Test() {
  return (
    <div>
      <section className="section page-header relative overflow-hidden pt-[60px] md:pt-[100px] pb-96 after:z-10 after:absolute after:left-0 after:top-0  after:h-full after:w-full after:bg-quaternary/20 after:content-[''] after:clip-path-abtafter-polygon">
        <div className="container relative z-30 sm:px-6">
          <div className="row items-center">
            <div className="lg:mx-auto text-center px-3 lg:w-7/12 box-border flex-shrink-0 w-full max-w-[100%]">
              <h1
                className="mb-6 font-bold text-[35px] sm:text-[50px] xl:text-[65px]"
                data-aos="fade-up-sm"
              >
                Latest Blog Posts
              </h1>
              <div data-aos="fade-up-sm" data-aos-dealy="50">
                <nav
                  aria-label="Breadcrumb"
                  className="breadcrumb mx-auto mb-6 flex w-fit gap-10"
                >
                  <ol className="inline-flex" role="list">
                    <li
                      className="breadcrumb-list-item relative pl-8 align-middle text-[20px] font-medium text-dark after:content-['']  after:absolute after:left-0 after:top-[20%] after:h-[20px] after:w-[20px] after:bg-abthome "
                      role="listitem"
                    >
                      <a className="text-dark align-middle " href="/">
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-list-item align-middle text-[20px] text-dark"
                      role="listitem"
                    >
                      <span className="ml-3 mr-2 inline-block align-middle">
                        /
                      </span>
                      <span className="text-dark align-middle">Blog</span>
                      <span className="ml-3 mr-2 inline-block align-middle">
                        /
                      </span>
                      <span className="text-dark align-middle">2</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <HeaderIconOne />
        <HeaderIconTwo />
      </section>
      <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30 px-4 sm:px-6">
          <div className="row gy-4 -mt-6">
            <div
              data-aos="fade-up-sm"
              className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-ful max-w-full"
            >
              <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                <a
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
                    src="/images/blog/42.jpg"
                  />
                </a>
                <div className="px-5 pb-12">
                  <div className="-mt-[30px] mb-3 flex items-center">
                    <Link
                      className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                      title="benjamin"
                      href="/blog/author"
                    >
                      <Image
                        alt="benjamin"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="h-[40px] w-[40px] object-cover"
                        src="/images/blog/4.jpg"
                      />
                    </Link>
                    <Link
                      className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                      href="/blog/author"
                    >
                      benjamin
                    </Link>
                  </div>
                  <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                    <a
                      className="link-animation relative after:absolute after:inset-0"
                      href="/blog/post-1"
                    >
                      The Real Product From The Buyers Improvements In Overflow
                      Basis.
                    </a>
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
            <Link
              href="/blog"
              className="rounded px-2 py-1.5 text-dark hover:bg-theme-light"
            >
              <span className="sr-only">Previous</span>
              <PreviousIcon/>
            </Link>
            <Link
              aria-current="page"
              className="rounded px-4 py-2  text-dark hover:bg-theme-light  "
              href="/blog"
            >
              1
            </Link>
            <span
              aria-current="page"
              className="rounded  px-4 py-2 bg-dark text-white "
            >
              2
            </span>
            <span className="rounded px-2 py-1.5 text-light ">
              <span className="sr-only">Next</span>
             <NextIcon/>
            </span>
          </nav>
        </div>
        <BlogIconOne/>
        <BlogIconTwo/>
      </section>
    </div>
  );
}
