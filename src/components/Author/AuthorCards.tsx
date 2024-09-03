import React from 'react'
import { authorData } from './authorData';
import Link from 'next/link';
import Image from 'next/image';
import { FaceBookIcon, InstagramSvg, TwitterIcon } from '../Common/Icons/footerIcon/SocialIcon';

export default function AuthorCards() {
  return (
    <>
      <section className=" md:py-[200px] mt-[-28rem] md:mt-[-32rem]">
        <div className="container relative z-40">
          <div className="flex flex-wrap -mt-6 -mx-3 gap-1 justify-center ">
            {authorData.map((author) => (
              <div
                key={author.id}
                data-aos="fade-up-sm"
                className="w-full sm:1/2 md:w-1/3 lg:w-[24%] xl:w-[300px] box-border max-w-full pr-3 pl-3 mt-6 "
              >
                <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-default transition-all duration-300 hover:shadow-md">
                  <Link
                    className="h-full max-h-[900px] w-full"
                    href={author.href}
                  >
                    <Image
                      alt={author.alt}
                      loading="lazy"
                      width="180"
                      height="180"
                      decoding="async"
                      data-nimg="1"
                      className="mx-auto h-[180px] w-[180px] rounded-full object-cover"
                      src={author.src}
                    />
                  </Link>
                  <div className="px-5 pt-8 text-center">
                    <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                      <Link href="/authors/benjamin">{author.title}</Link>
                    </h3>
                    {author.description}
                    <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                      <li>
                        <Link
                          className="inline-block"
                          aria-label="FaFacebook"
                          href={author.facebookLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          <FaceBookIcon />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block"
                          aria-label="FaTwitter"
                          href={author.twitterLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          <TwitterIcon />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block"
                          aria-label="FaInstagram"
                          href={author.instagramLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          <InstagramSvg />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
