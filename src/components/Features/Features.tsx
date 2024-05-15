import React from 'react'
import Section from '../Section/page'

export default function Features() {
  return (
    <section className='section features relative z-20 overflow-hidden after:-z-10'>
        <div className='container relative z-30'>
            <div className='row items-end justify-between pb-12'>
                <div className='lg:col-8 xl:col-6'>
                    <span className='mb-6 inline-block font-medium uppercase text-red-400 aos-init aos-animate'>WE ARE THE ULTIMATE</span>
                    <div className='mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0 aos-init aos-animate'>
                        <h2 className='mb-6 font-semibold aos-init aos-animate'>A Technology Approach</h2>
                        <p className='text-lg aos-init aos-animate'>
                        Pellen tesque in ipsum id orci porta dapibus. Sed port titor nibh. 
                        Vivamus <br /> accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
                        </p>
                        <div className='flex justify-end'>
                            <a href="#" className="inline-block px-6 py-3 bg-white border border-black text-black rounded-md transition duration-300 hover:bg-black hover:text-white">All Features</a>
                        </div>
                    </div>
                    <div className='colored-box-icon row gy-4'>
                        <div className='md:col-6 lg:col-4 xl:col-3 aos-init aos-animate'>
                            <div className='h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm'>
                                <div className='icon-box'>
                                    <svg 
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                        d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 className='mb-6 text-xl font-semibold sm:text-2xl'>Realtime function</h3>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt pulvinar a. Curabitur aliquet quam id dui posuere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
