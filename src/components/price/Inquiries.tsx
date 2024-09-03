import React from 'react'
import Collapes from './Collapes';

export default function Inquiries() {
  return (
    <section className="section-md faq z-20 pt-40  relative h-[988px] w-[1349px] overflow-hidden after:content-[''] after:z-10 after:bg-bgo1Color after:skew-y-[12deg]  after:absolute after:left-0 after:-top-40 after:h-[988px] after:w-full after:clip-path-custom-shaped">
      <div className="container relative z-30">
        <div className="flex flex-wrap justify-between">
          <div className="lg:w-5/12">
            <span
              className="mb-6 inline-block font-medium uppercase text-red-400"
              data-aos="fade-up-sm"
            >
              COMMON INQUIRIES
            </span>
            <div
              className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              <h2 className="font-semibold text-[2.28886641rem]">
                Frequently Asked Questions
              </h2>
            </div>
            <p
              className="pl-6 text-lg"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
              Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam
              sit amet quam vehicula elementum.
            </p>
          </div>
          <div className="lg:w-6/12">
            <Collapes />
          </div>
        </div>
      </div>
    </section>
  );
}
