import Link from "next/link";
import { blogPosts } from "./blogPost";
import Image from "next/image";

export default function RelatedPost() {
    return (
      <section className="section articles relative z-20 pb-20 pt-[60px] md:pt-[100px] after:-z-10 md:pb-40 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-article-polygon">
        <div className="container relative z-30 px-4 sm:px-6">
          <div className="row items-end justify-between pb-12">
            <div className="lg:w-8/12 xl:w-6/12 px-3 box-border flex-shrink-0 w-full max-w-full">
              <h2
                className="font-semibold text-h2 md:text-mdh2"
                data-aos="fade-up-sm"
              >
                Related Posts
              </h2>
            </div>
          </div>
          <div className="row -mt-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
              >
                <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                  <Link
                    className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                    href={post.postLink}
                  >
                    <Image
                      alt="author"
                      loading="lazy"
                      width="408"
                      height="262"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 transparent"
                      src={post.imgSrc}
                    />
                  </Link>
                  <div className="px-5 pb-12">
                    <div className="-mt-[30px] mb-3 flex items-center">
                      <Link
                        className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                        title={post.authorName}
                        href={post.authorLink}
                      >
                        <Image
                          alt={post.authorName}
                          loading="lazy"
                          width="40"
                          height="40"
                          decoding="async"
                          data-nimg="1"
                          className="h-[40px] w-[40px] object-cover transparent"
                          src={post.authorImg}
                        />
                      </Link>
                      <Link
                        className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                        href={post.authorLink}
                      >
                        {post.authorName}
                      </Link>
                    </div>
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      <Link
                        className="link-animation relative after:absolute after:inset-0"
                        href={post.postLink}
                      >
                        {post.postTitle}
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
        </div>
      </section>
    );
};
