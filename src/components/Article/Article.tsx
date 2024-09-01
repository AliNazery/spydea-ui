import Image from "next/image";
import React from "react";
import SectionTitleTwo from "../Common/Title/SectionTitleTwo";
import { cardsData } from "./CardsData";
import { ArticleOneSvg, ArticleTwoSvg } from "../Common/svg";

export default function Article() {
  return (
    <section className="section-md articles relative z-20 overflow-hidden py-[100px] md:py-[200px] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-article-polygon">
      <div className="container relative z-30 sm:px-6">
        <div className="flex flex-wrap items-end justify-between pb-12 -mx-3">
          <SectionTitleTwo
            subtitle="Latest Articles"
            className="lg:w-8/12 xl:w-6/12 px-3"
            title="Take a Look at the Latest Articles from Our Blog"
            description={""}
          />
          <div data-aos="fade-right-sm" className="col-auto px-3">
            <a className="btn btn-outline-primary btn-sm" href="blog/">
              Browse All Articles
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mt-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              data-aos="fade-up-sm"
              className="md:w-6/12 lg:w-4/12 px-3 mt-6"
            >
              <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                <a
                  className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                  href={card.postUrl}
                >
                  <Image
                    alt="author"
                    loading="lazy"
                    width="408"
                    height="262"
                    decoding="async"
                    data-nimg="1"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={card.imageUrl}
                  />
                </a>
                <div className="px-5 pb-12">
                  <div className="-mt-[30px] mb-3 flex items-center">
                    <a
                      className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                      title={card.authorName}
                      href={card.authorUrl}
                    >
                      <Image
                        alt={card.authorName}
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="h-[40px] w-[40px] object-cover"
                        src={card.authorImage}
                      />
                    </a>
                    <a
                      className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                      href={card.authorUrl}
                    >
                      {card.authorName}
                    </a>
                  </div>
                  <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                    <a
                      className="link-animation relative pb-[4px] after:absolute after:inset-0"
                      href={card.postUrl}
                    >
                      {card.title}
                    </a>
                  </h2>
                  <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                    {card.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ArticleOneSvg/>
      <ArticleTwoSvg/>
    </section>
   );
}
