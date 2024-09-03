import React from 'react'
import Image from 'next/image';
import { CareerOneSvg, CareerTwoSvg } from '../Common/PagesSvg';

export default function CareerImage() {
  return (
    <>
      <section className="section relative z-20 mt-[-25rem] overflow-hidden pb-0">
        <div className="container relative">
          <div className="row">
            <div className="col-11 mx-auto">
              <div
                data-aos="fade-up-sm"
                className="relative z-10 rounded-[15px] border-[6px] border-white bg-white sm:border-[12px] mb-20"
              >
                <Image
                  alt="career"
                  loading="lazy"
                  width="1140"
                  height="600"
                  decoding="async"
                  data-nimg="1"
                  className="w-full rounded-[15px] object-cover"
                  src="/images/career/career.jpg"
                />
              </div>
            </div>
          </div>
          <CareerOneSvg />
          <CareerTwoSvg />
        </div>
      </section>
    </>
  );
}
