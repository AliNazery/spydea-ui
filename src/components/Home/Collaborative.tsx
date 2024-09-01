import Image from "next/image";
import React from "react";
import SectionTitleTwo from "../Common/Title/SectionTitleTwo";
import { CollaborativeOneSvg, CollaborativeTwoSvg } from "../Common/svg";

export default function Collaborative() {
  return (
    <section className="section-lg feature triangle-down pt-32 pb-[100px] lg:pb-[200px] xl:pb-[300px] relative z-20 overflow-hidden">
      <div className="container relative z-20 sm:px-6 ">
        <div className="flex flex-wrap gy-4 items-center -mx-3 -mt-6">
          <div data-aos="fade-left-sm" className="lg:w-7/12 order-2 px-3 mt-6">
            <div className="feature-clip-path-2 relative">
              <Image
                alt="feature image"
                loading="lazy"
                width="727"
                height="613"
                decoding="async"
                data-nimg="1"
                className="mx-auto block xl:mx-auto"
                src="/images/Innovative/feature-2.png"
              />
              <CollaborativeOneSvg />
              <CollaborativeTwoSvg />
            </div>
          </div>
          <SectionTitleTwo
            className="lg:w-5/12 order-1 mt-6 px-3"
            subtitle="COLLABORATIVE SOLUTIONS"
            title="Choose the Right Plan for Your Team"
            description="Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Proin eget elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Proin eget tortor risus."
          />
        </div>
      </div>
    </section>
  );
}
