import React from 'react'
import Section from '../Section/page'
import Cards from './Cards'

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
                    <Cards/>
                </div>
            </div>
        </div>
    </section>
  )
}
