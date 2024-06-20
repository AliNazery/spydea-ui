import React from 'react'

export default function Tittle() {
  return (
    <div>
      <section className="section relative z-20 py-[60px] md:py-[100px]">
        <div className="container sm:px-6">
          <div className="row gy-4 -mt-6">
            <div data-aos="fade-left-sm" className="lg:w-6/12 px-3 mt-6">
              <span className="mb-6 inline-block font-medium uppercase text-red-400">
                WE HAVE OUR VISION
              </span>
              <div className="border-l-2 border-dark border-opacity-50 py-2 pl-6">
                <h2 className="font-semibold text-h2 md:text-mdh2">
                  A World Financial Connected with Open Opportunities all
                </h2>
              </div>
            </div>
            <div data-aos="fade-left-sm" className="lg:w-6/12 px-3 mt-6">
              <span className="mb-6 inline-block font-medium uppercase text-red-400">
                WE ARE THE ULTIMATE
              </span>
              <div className="border-l-2 border-dark border-opacity-50 py-2 pl-6">
                <h2 className="font-semibold text-h2 md:text-mdh2">
                  Connect the World Through a Smart, Free and Financing App
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
