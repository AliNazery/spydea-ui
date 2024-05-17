import React from 'react'
import Section from '../Acheivment/Section'

export default function Acheivement() {
  return (
    // <Section/>
   <section className='section relative z-20 overflow-hidden'>
    <div className='container'>
        <div className='row pb-12 text-center aos-init aos-animate'>
            <div className='mx-auto lg:col-8'>
                <span className='mb-6 inline-block font-medium uppercase text-red-400 aos-init aos-animate'>
                ACHIEVING EXCELLENCE
                </span>
                <h2 className='mb-6 font-semibold aos-init aos-animate'>
                A Few Numbers We are Proud
                </h2>
                <p className='text-lg lg:col-7'>
                Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum
                </p>
            </div>
        </div>
        <div className='flex flex-wrap relative pb-20'>
            <div className='flex-none w-full' >
                <ul className='list-dotted-line-separator shadow-default flex flex-col justify-center space-x-20 gap-6 rounded-2xl bg-white px-12 py-10 sm:py-14 md:flex-row md:gap-0'>
                    <li className='text-center pr-6'>
                        <span className='mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl'>
                            <span>94</span>
                            %
                        </span>
                        <div className='text-dark md:text-h6 xl:text-h4'>Client Retention</div>
                    </li>
                    <li className='text-center pr-6 pl-0'>
                        <span className='mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl'>
                            <span>70</span>
                            M+
                        </span>
                        <div className='text-dark md:text-h6 xl:text-h4 after:'>Emails Per Month</div>
                    </li>
                    <li className='text-center'>
                        <span className='mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl'>
                            <span>10</span>
                            K+
                        </span>
                        <div className='text-dark md:text-h6 xl:text-h4'>Monthly Campaigns</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </section>
  )
}
