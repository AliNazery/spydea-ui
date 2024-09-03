import React from 'react';
import Image from 'next/image';
import { blogPosts } from './BlogData';
import Link from 'next/link';

export default function BlogCard() {
  return (
    <>
      <div className="row gy-4 -mt-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            data-aos="fade-up-sm"
            className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
          >
            <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
              <Link
                className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                href={post.href}
              >
                <Image
                  alt="author"
                  loading="lazy"
                  width="408"
                  height="262"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={post.imgSrc}
                />
              </Link>
              <div className="px-5 pb-12">
                <div className="-mt-[30px] mb-3 flex items-center">
                  <Link
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                    title={post.authorName}
                    href={post.authorHref}
                  >
                    <Image
                      alt={post.authorName}
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="h-[40px] w-[40px] object-cover"
                      src={post.authorImgSrc}
                    />
                  </Link>
                  <Link
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                    href={post.authorHref}
                  >
                    {post.authorName}
                  </Link>
                </div>
                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                  <Link
                    className="link-animation relative after:absolute after:inset-0"
                    href={post.href}
                  >
                    {post.title}
                  </Link>
                </h2>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
