import React from 'react'

export default function Experience() {
  return (

    <section className="relative z-20 overflow-hidden">
      <div className="container relative z-30 mt-4">
        <div className="flex flex-wrap justify-center pb-12 text-center">
          <div className="w-full lg:w-7/12">
            <span className="mb-6 inline-block font-medium uppercase text-red-400">
              EXPERIENCE SPEAKS
            </span>
            <h2 className="mb-6 font-semibold">Don't Take Our Word For It</h2>
            <p className="text-lg">
              Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit
              amet quam vehicula elementum. Vivamus accumsan tincidunt.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:gap-8">
            <div className="aos-init aos-animate">
              <button className="group active w-full">
                <div className="h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10">
                  <h3 className="text-sm font-semibold xl:mb-6 xl:text-2xl">
                    Features You Will Need
                  </h3>
                  <p className="hidden xl:block">
                    Proin eget tortor risus. Donec sollicitudin molestie imperdiet et,
                    porttitor at sem.
                  </p>
                </div>
              </button>
            </div>
            <div className="aos-init aos-animate">
              <button className="group w-full">
                <div className="h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10">
                  <h3 className="text-sm font-semibold xl:mb-6 xl:text-2xl">
                    Increase Your Sales
                  </h3>
                  <p className="hidden xl:block">
                    Proin eget tortor risus. Donec sollicitudin molestie imperdiet et,
                    porttitor at sem.
                  </p>
                </div>
              </button>
            </div>
            <div className="aos-init aos-animate">
              <button className="group w-full">
                <div className="h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10">
                  <h3 className="text-sm font-semibold xl:mb-6 xl:text-2xl">
                    Choose Right Plan
                  </h3>
                  <p className="hidden xl:block">
                    Proin eget tortor risus. Donec sollicitudin molestie imperdiet et,
                    porttitor at sem.
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="relative w-full lg:w-2/3 bg-slate-500 flex justify-center items-center aos-init aos-animate -mr-8">
            <div className="relative active shadow-default group -mr-8">
              <div className="invisible h-0 opacity-70 transition-opacity duration-300 group-[.active]:visible group-[.active]:h-full group-[.active]:opacity-100">
                <img
                  alt="feature image"
                  loading="lazy"
                  width={840}
                  height={610}
                  className="h-full w-full rounded-xl"
                  src="/images/experience/feature-tab-content-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className='relative z-20 overflow-hidden'>
    //     <div className="container relative z-30 mt-4">
    //         <div className='flex flex-wrap -mt-4 -mr-4 -ml-4 pb-12 text-center'>
    //             <div className="mx-auto lg:col-7">
    //                 <span className='mb-6 inline-block font-medium uppercase text-red-400'>
    //                 EXPERIENCE SPEAKS
    //                 </span>
    //                 <h2 className='mb-6 font-semibold'>Don't Take Our Word For It</h2>
    //                 <p className='text-lg'>Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt.</p>
    //             </div>
    //         </div>
    //         <div className='flex flex-wrap -mt-4 -mr-4 -ml-4 '>
    //             <div className='flex flex-wrap gap-4 lg:gap-6'>
    //                 <div className='aos-init aos-animate'>
    //                     <button className='group active'>
    //                         <div className='h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10'>
    //                             <h3 className='text-sm font-semibold xl:mb-6 xl:text-2xl'>Features You will Need</h3>
    //                             <p className='hidden xl:block'>
    //                             Proin eget tortor risus. Donec sollicitudin molestie imperdiet et, porttitor at sem.
    //                             </p>
    //                         </div>
    //                     </button>
    //                 </div>
    //                 <div className='aos-init aos-animate'>
    //                     <button className='group false'>
    //                         <div className='h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10'>
    //                             <h3 className='text-sm font-semibold xl:mb-6 xl:text-2xl'>
    //                             Increase Your Sales
    //                             </h3>
    //                             <p className='hidden xl:block'>
    //                             Proin eget tortor risus. Donec sollicitudin molestie imperdiet et, porttitor at sem.
    //                             </p>
    //                         </div>
    //                     </button>
    //                 </div>
    //                 <div className='aos-init aos-animate'>
    //                     <button className='group false'>
    //                         <div className='h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10'>
    //                             <h3 className='text-sm font-semibold xl:mb-6 xl:text-2xl'>
    //                             Choose Right Plan
    //                             </h3>
    //                             <p className='hidden xl:block'>
    //                             Proin eget tortor risus. Donec sollicitudin molestie imperdiet et, porttitor at sem.
    //                             </p>
    //                         </div>
    //                     </button>
    //                 </div>
    //             </div>
    //             <div className='relative xl:col-8 aos-init aos-animate'>
    //                 <div className='active shadow-default group relative'>
    //                     <div className='invisible h-0 opacity-70 transition-opacity duration-300 group-[.active]:visible group-[.active]:h-full group-[.active]:opacity-100'>
    //                         <img 
    //                         alt="feature image" 
    //                         loading="lazy" 
    //                         width="840" 
    //                         height="610" 
    //                         decoding="async" 
    //                         data-nimg="1" 
    //                         className="h-full w-full rounded-xl transparent" 
    //                         src="../images/experience/feature-tab-content-1.png" 
    //                         />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
  )
}







   {/* <div className='flex md:flex-row'>
                <div className='felx flex-wrap gap-4 xl:col-4 lg:gap-6 my-4 mx-20' >
                    <div className='py-10'>
                        <h3>Features You will Need</h3>
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
            </div> */}