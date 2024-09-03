import React from 'react'
import SectionMiddleTitle from '../Common/Title/SectionMiddleTitle';
import { features } from './features';

export default function Benefits() {
  return (
    <>
      <section className="section relative z-20 overflow-hidden">
        <div className="container">
          <SectionMiddleTitle
            subtitle="BENEFITS AND ADVANTAGES"
            title="Why Working With Us?"
            description="Pellen tesque in ipsum id orci porta dapibus. titor nibh.
                Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam
                vehicula elementum"
          />
          <div className="flex flex-wrap gap-6 -mx-2 pb-20 items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay="50"
                className="md:w-1/2 lg:w-[32%] flex justify-center"
              >
                <div className="shadow-default h-full rounded-2xl bg-white px-8 py-12 text-center transition-all duration-300 hover:shadow-md sm:p-12">
                  <div
                    className={`mx-auto mb-10 w-[60px] rounded-lg p-4 bg-opacity-20 ${feature.bgColor} text-center text-xl leading-8 flex justify-center items-center ${feature.textColor}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mb-6 text-xl font-semibold text-dark sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
