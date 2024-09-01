import Image from "next/image";
import React from "react";
import SectionTitle from "../Common/Title/SectionTitle";
import {
  TestimonialsOneSvg,
  TestimonialsThreeSvg,
  TestimonialsTwoSvg,
} from "../Common/svg";
import { testimonialsData } from "./Hero/testimonialsData";
import SectionTitleTwo from "../Common/Title/SectionTitleTwo";

export default function Testemonials() {
  return (
    <section className="section relative z-20 overflow-hidden py-[60px] md:py-[100px]">
      <div className="container relative z-20 px-4 sm:px-6 ">
        <div className="colored-box-bg items-start lg:columns-2">
          <SectionTitleTwo
            subtitle="INSPIRING TESTIMONIALS"
            className=""
            title="Take a Look at Our Customers Stories"
            description={""}
          />

          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up-sm"
              className="shadow-default aos-init aos-animate mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0"
            >
              <div
                className={`box-bg flex items-center justify-center ${testimonial.bgColor} py-12 sm:py-28 xl:px-12`}
              >
                <Image
                  alt="logo"
                  loading="lazy"
                  width="265"
                  height="94"
                  decoding="async"
                  data-nimg="1"
                  className="img !max-w-[140px] sm:min-w-[40px] sm:-rotate-90 sm:transform"
                  src={testimonial.imgSrc}
                />
              </div>
              <div className="px-6 py-12">
                <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
                  {testimonial.title}
                </h3>
                <p className="mb-6 sm:text-lg">{testimonial.description}</p>
                <div className="flex items-center gap-4">
                  <Image
                    alt="logo"
                    loading="lazy"
                    width="65"
                    height="65"
                    decoding="async"
                    data-nimg="1"
                    className="img h-[70px] w-[70px] object-cover"
                    src={testimonial.personImg}
                  />
                  <div className="items-start rounded-full">
                    <div className="flex flex-col justify-center">
                      <h4 className="mb-1 font-primary text-lg">
                        {testimonial.personName}
                      </h4>
                      <p>{testimonial.personPosition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <TestimonialsOneSvg />
        <TestimonialsTwoSvg />
        <TestimonialsThreeSvg />
      </div>
    </section>
  );
}
