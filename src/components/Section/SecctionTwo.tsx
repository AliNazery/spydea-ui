import React from 'react'

export default function SectionTwo() {
  return (
    <div>
      <section className="relative overflow-hidden pb-96">
      <div className="container relative z-30">
        <div className="flex items-center justify-center">
          <div className="mx-auto text-center lg:w-6/12">
            <h2 className="mb-6 text-4xl sm:text-5xl xl:text-6xl" data-aos="fade-up-sm">Another Section Title</h2>
            <p className="mb-6 text-lg" data-aos="fade-up-sm" data-aos-delay="100">This is another section content. It might contain some description or information about the topic.</p>
            <button className="btn btn-primary" data-aos="fade-up-sm" data-aos-delay="150">Learn More</button>
          </div>
        </div>
      </div>
      <div className="absolute z-20">
        <div className="container flex justify-between">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="bg-pattern inline-block h-full opacity-50 md:opacity-100"></span>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
