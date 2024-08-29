import Image from 'next/image';
import React from 'react'
import { AboutIconOne, AboutIconThree, AboutIconTwo } from '../Common/Icons/AboutIcon/AboutIcon';

export default function Photo() {
  return (
    <div>
      <section className="section relative z-20 py-[60px] md:py-[100px] mt-[-26rem] overflow-hidden">
        <div className="container relative sm:px-6">
          <div data-aos="fade-up-sm" data-aos-delay="150" className="row">
            <div className="md:w-6/12 lg:translate-x-24 px-3 box-border flex-shrink-0 w-full max-w-full">
              <div className="max-w-[670px] rounded-[15px] border-[6px] border-white bg-white sm:border-[12px] lg:rotate-[-4deg]">
                <Image
                  alt="gallery"
                  loading="lazy"
                  width="608"
                  height="472"
                  decoding="async"
                  data-nimg="1"
                  className="w-full rounded-[15px] object-cover"
                  src="/images/about/about-1.png"
                  unoptimized={true}
                />
              </div>
            </div>
            <div className="md:w-6/12 lg:-translate-x-24 lg:pt-36 box-border flex-shrink-0 w-full max-w-full px-3">
              <div className="relative z-10 max-w-[670px] rounded-[15px] border-[6px] border-white bg-white sm:border-[12px] lg:rotate-[8deg]">
                <Image
                  alt="gallery"
                  loading="lazy"
                  width="608"
                  height="472"
                  decoding="async"
                  data-nimg="1"
                  className="w-full rounded-[15px] object-cover"
                  src="/images/about/about-2.png"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
          <AboutIconOne />
          <AboutIconTwo />
          <AboutIconThree/>
        </div>
      </section>
    </div>
  );
}
