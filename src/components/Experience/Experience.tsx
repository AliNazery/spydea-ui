import React from 'react'

export default function Experience() {
  return (
    <section className='relative z-20 overflow-hidden'>
        <div className="container relative z-30 mt-4">
            <div className='flex flex-wrap -mt-4 -mr-4 -ml-4 pb-12 text-center'>
                <div className="mx-auto lg:col-7">
                    <span className='mb-6 inline-block font-medium uppercase text-red-400'>
                    EXPERIENCE SPEAKS
                    </span>
                    <h2 className='mb-6 font-semibold'>Don't Take Our Word For It</h2>
                    <p className='text-lg'>Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt.</p>
                </div>
            </div>
            {/* <div className='flex flex-wrap -mt-4 -mr-4 -ml-4 '>
                <div className='flex flex-wrap gap-4 lg:gap-6'>
                    <div className='opacity-100 transform-none'></div>
                </div>
            </div> */}
            <div className='flex md:flex-row'>
                <div className='felx flex-wrap gap-4 xl:col-4 lg:gap-6 my-4 mx-20' >
                    <div className='py-10'>
                        <h3>one</h3>
                    </div>
                    <div className='py-10'>
                        <h3>two</h3>
                    </div>
                    <div className='py-10'>
                        <h3>three</h3>
                    </div>
                </div>
                <div className='w-full h-90'>
                    <img src="../images/experience/feature-tab-content-1.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
