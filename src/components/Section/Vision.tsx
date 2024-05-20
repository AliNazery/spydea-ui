import React from 'react';

export default function Vision () {
  return (
    <section className="relative z-20 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div data-aos="fade-left-sm" className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <span className="mb-6 inline-block font-medium uppercase text-red-400">WE HAVE OUR VISION</span>
            <div className="border-l-2 border-dark border-opacity-50 py-2 pl-6">
              <h2 className="font-semibold text-lg lg:text-xl">A World Financial Connected with Open Opportunities for all</h2>
            </div>
          </div>
          <div data-aos="fade-left-sm" className="w-full lg:w-1/2 px-4">
            <span className="mb-6 inline-block font-medium uppercase text-red-400">WE ARE THE ULTIMATE</span>
            <div className="border-l-2 border-dark border-opacity-50 py-2 pl-6">
              <h2 className="font-semibold text-lg lg:text-xl">Connect the World Through a Smart, Free, and Financing App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

