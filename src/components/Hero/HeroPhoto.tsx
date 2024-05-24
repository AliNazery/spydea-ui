import React from 'react'

export default function HeroPhoto() {
  return (
    <div className="mx-auto max-w-[600px] pt-24 lg:col-6 lg:pt-0 md:order-2">
        <div className="image-block relative mr-[5.5%] md:mr-6 lg:ml-6 aos-init aos-animate">
            <img src="../images/brands/banner-image.png" className="banner-image w-100 h-auto max-w-full"/>
            <img src="../images/brands/banner-image-part-1.png" alt=""  className='absolute bottom-16 left-0 w-[40%] rounded-lg shadow-md aos-init aos-animate color-transparent'/>
            <img src="../images/brands/banner-image-part-2.png" alt="" className='absolute right-0 top-0 w-[30%] rounded-lg md:-right-32 md:top-14 md:w-[40%] xl:top-36 aos-init aos-animate' />

        </div>
    </div>
  )
}
