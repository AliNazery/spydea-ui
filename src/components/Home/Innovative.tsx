import Image from 'next/image';
import React from 'react'
import { InnovativeOneSvg, InnovativeTwoSvg } from '../Common/svg';
import SectionTitleTwo from '../Common/Title/SectionTitleTwo';

export default function Innovative() {
  return (
    <>
      <section className="section-lg feature triangle-up pb-0 relative z-20 overflow-hidden pt-[100px] lg:pt-[200px] xl:pt-[300px] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-Innovative-polygon">
        <div className="container relative z-20 px-4 sm:px-6">
          <div className="row flex flex-wrap gy-4 items-center -mt-6 -mx-3">
            <div
              data-aos="fade-left-sm"
              className="lg:w-7/12 order-1 px-3 mt-6"
            >
              <div className="feature-clip-path-1 relative">
                <Image
                  alt="feature image"
                  loading="lazy"
                  width="727"
                  height="613"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto block xl:mx-auto"
                  src="/images/innovative/feature-1.png"
                />

                <InnovativeOneSvg />
                <InnovativeTwoSvg />
              </div>
            </div>
            <SectionTitleTwo
              className="lg:w-5/12 order-2 px-3 mt-6"
              subtitle="INNOVATIVE STRATEGIES"
              title="Take Your Marketing to the Next Level."
              description="Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Proin eget elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Proin eget tortor risus."
            />
          </div>
        </div>
      </section>
    </>
  );
}
