import React from 'react'

export default function Achieving() {
  return (
    <>
    <section className="relative z-20 overflow-hidden py-12">
    <div className="container mx-auto">
      <div data-aos="fade-up-sm" className="text-center pb-12">
        <div className="mx-auto lg:w-2/3">
          <span className="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm" data-aos-delay="50">ACHIEVING EXCELLENCE</span>
          <h2 className="mb-6 font-semibold" data-aos="fade-up-sm" data-aos-delay="100">A Few Numbers We are Proud</h2>
          <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum</p>
        </div>
      </div>
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-md p-10 md:p-14">
          <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-0">
            <li className="text-center">
              <span className="block mb-6 font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
                <span></span>%
              </span>
              <div className="text-dark md:text-lg xl:text-2xl">Client Retention</div>
            </li>
            <li className="text-center">
              <span className="block mb-6 font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
                <span></span>M+
              </span>
              <div className="text-dark md:text-lg xl:text-2xl">Emails Per Month</div>
            </li>
            <li className="text-center">
              <span className="block mb-6 font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
                <span></span>K+
              </span>
              <div className="text-dark md:text-lg xl:text-2xl">Monthly Campaigns</div>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up-md" data-aos-delay="50" className="absolute bottom-[-55px] left-[-30px] -z-10 hidden select-none lg:block">
          <svg className="text-quinary" width="148" height="194" viewBox="0 0 148 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG paths */}
          </svg>
        </div>
      </div>
    </div>
  </section>
   <section className={styles.team}>
   <div className="container">
     <div className="row text-center lg:text-left">
       <div className="mx-auto mb-16 lg:col-7 lg:mx-0">
         <h2 className="mb-4 section-heading">Our Team</h2>
         <p className="mb-6">Meet our dedicated team members.</p>
       </div>
     </div>
     <div className="row items-center justify-center">
       <div className={`${styles.teamMember} text-center`}>
         <Image
           src="/images/team/member1.jpg"
           alt="Team Member"
           width={150}
           height={150}
           className="mb-4 rounded-full"
         />
         <h3 className="mb-2">John Doe</h3>
         <p>CEO</p>
       </div>
       {/* Repeat for other team members */}
     </div>
   </div>
 </section>
 </>

  )
}
