import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeaderIconOne,
  HeaderIconTwo,
} from "@/components/Common/Icons/PageHeaderIcon/HeaderIcon";
import { items, listItems } from "@/components/Blog/BlogData";
import {
  BlogDetailOneSvg,
  BlogDetailTwoSvg,
} from "@/components/Common/BlogSvg";
import RelatedPost from "@/components/Blog/Detial/RelatedPost";

export default function blogDetail() {
  return (
    <main>
      <section className="section page-header blog-single sm:pt-[100px] relative overflow-hidden pb-0 after:z-10 after:content-[''] after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
        <div className="container relative z-40">
          <div className="flex flex-wrap">
            <div className="w-full" data-aos="fade-up-sm">
              <Image
                alt="featured-image"
                loading="lazy"
                width="1272"
                height="450"
                decoding="async"
                data-nimg="1"
                className="h-[350px] w-full rounded-t-xl object-cover md:h-[450px]"
                src="/images/blog/1.jpg"
              />
            </div>
          </div>
        </div>
        <HeaderIconOne />
        <HeaderIconTwo />
      </section>
      <section className=" relative overflow-hidden pt-6 md:pt-10">
        <div className="container relative z-30">
          <article className="flex flex-wrap">
            <div className="mx-auto sm:w-10/12" data-aos="fade-up-sm">
              <h1 className="h2 mb-6 font-secondary font-bold text-2xl capitalize !leading-normal text-dark md:text-3xl lg:text-4xl xl:text-5xl">
                The Real Product From The Buyers Improvements In Overflow Basis.
              </h1>
              <div className="mb-6 flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex items-center">
                  <Link
                    title="author image"
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-zinc-100"
                    href="/images/blog/blogDetail"
                  >
                    <Image
                      alt="Daniel Mitchell"
                      loading="lazy"
                      width="70"
                      height="70"
                      decoding="async"
                      data-nimg="1"
                      className="h-[70px] w-[70px] object-cover"
                      src="/images/blog/2.jpg"
                    />
                  </Link>
                  <Link
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                    href="/authors/benjamin"
                  >
                    benjamin
                  </Link>
                </div>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  04 Apr, 2022
                </span>
              </div>
            </div>
            <div
              className="sm:w-10/12 sm:mx-auto px-3"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              <div className="content text-[1rem] leading-7">
                <p className="mt-0  pt-0 text-[18px] mb-8 leading-7">
                  We collect certain identifying personal data when you Sign up
                  to our Service such as your name, email address, PayPal
                  address (if different from email address), and telephone
                  number. The personal data we collect from you is disclosed
                  only in accordance with our Terms of Service and/or this
                  Privacy Policy.Conclude collects Slack account and access
                  information from Users for the purposes of connecting to the
                  Slack API and to authenticate access to information on the
                  Conclude website. Whenever you visit our Site, we may collect
                  non-identifying information from you, such as referring URL,
                  browser, operating system, cookie information, and Internet
                  Service Provider. Without a subpoena, voluntary compliance on
                  the part of your Internet Service Provider, or additional
                  records from a third party, this information alone cannot
                  usually be used to identify you.The term &quot;personal data
                  &quot;does not include any anonymizedand aggregated data made
                  on the basis of personal data, which are wholly owned by
                  Conclude.
                </p>
                <h4 className="text-[1.5129rem] font-semibold mb-8 font-primary">
                  It’s natural for business leaders to be overwhelmed, but keep
                  a balanced outlook
                </h4>
                <h5 className="text-[1.5129rem] font-semibold mb-8 font-primary">
                  Service Provided AS IS
                </h5>
                <p className=" text-[18px] mb-8 leading-7">
                  The Service is provided for free during this pilot project,
                  and is provided &quot;as is &quot;with no warranty. Conclude
                  will provide User support for the Service, however; Conclude
                  is not committed to any level of service or availability of
                  the Service. A further description of the Service and our user
                  support is available at the Site.
                </p>
                <h5 className="text-[1.5129rem] font-semibold mb-8 font-primary">
                  Interoperation with Slack
                </h5>
                <p className="text-[18px] mb-8 leading-7">
                  The Service is provided for free during this pilot project,
                  and is provided &quot;as is &quot;with no warranty. Conclude
                  will provide User support for the Service, however; Conclude
                  is not committed to any level of service or availability of
                  the Service. A further description of the Service and our user
                  support is available at the Site.
                </p>
                <h5 className="text-[1.5129rem] font-semibold mb-8 font-primary">
                  Company Liability
                </h5>
                <p className="text-[18px] mb-8 leading-7">
                  If you enter into this agreement on behalf of a company, you
                  hereby agree that the company is responsible under this
                  Agreement for all actions and omissions conducted by its
                  designated users of the Service.
                </p>
                <blockquote className="py-14 pt-10 my-10 rounded-lg mt-10 mb-10  border-l-8 border-black bg-quote pb-10">
                  <span className="inline-block ml-2">
                    <Image
                      src="/images/blog/quote.svg"
                      width={28}
                      height={22}
                      alt=""
                    />
                  </span>
                  <p className="text-[22px] mb-8 leading-7 pl-10 font-semibold">
                    Did you come here for something in particular or just
                    general Riker-bashing? And blowing into maximum warp speed,
                    you appeared for an instant to be in two places at once.
                  </p>
                  <cite className="pl-10 font-medium">Esther Howard</cite>
                  <br />
                  <span className="pl-10 font-medium">CEO &amp;Founder</span>
                </blockquote>
                <h5 className="text-[1.5129rem] font-semibold mb-8 font-primary">
                  Use internal mobility as an opportunity to use internal
                  resources
                </h5>
                <p className="text-[18px] mb-8 leading-7">
                  In order to use our Service, you must meet a number of
                  conditions, including but not limited to:
                </p>
                <ul className="list-disc pl-6 leading-8 mb-8">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h5 className="text-[1.5129rem] font-semibold mb-8 font-primary">
                  You must not
                </h5>
                <ul className="list-disc pl-6 leading-8 mb-8">
                  {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-20">
                <div id="disqus_thread">
                  <iframe
                    id="dsq-app6781"
                    name="dsq-app6781"
                    title="Disqus"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
                    width="100%"
                    src="//tempest.services.disqus.com/ads-iframe/taboola/?position=top&shortname=themefisher-template&experiment=network_default&variant=fallthrough&service=dynamic&anchorColor=%23555555&colorScheme=light&sourceUrl=https%3A%2F%2Fspydea-nextjs.vercel.app%2Fblog%2Fpost-1&typeface=sans-serif&disqus_version=current"
                    className="w-px min-w-full border-0 overflow-hidden h-0"
                  ></iframe>
                </div>
              </div> */}
            </div>
          </article>
        </div>
        <BlogDetailOneSvg />
        <BlogDetailTwoSvg />
      </section>
      <RelatedPost/>
    </main>
  );
}
