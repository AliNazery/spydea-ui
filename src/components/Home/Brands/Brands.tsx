import React from 'react'
import Image from 'next/image';
import { brandImages } from '../Hero/Data';

export default function Brands() {
  return (
    <section className="md:py-28 ">
      <div className="shadow-default relative z-0 mx-3 max-w-[1440px] bg-white py-8 md:mx-6 md:py-16 lg:mx-auto">
        <div className="container">
          <div className="row justify-center flex flex-wrap">
            {brandImages.map((src, index) => (
              <div
                key={index}
                className="w-5/12 sm:w-1/4 lg:w-1/6 aos-init aos-animate"
              >
                <Image
                  src={src}
                  alt={`Brand ${index + 1}`}
                  className="inline-block py-4 sm:mx-auto text-transparent"
                  width={150} // Example width, adjust as needed
                  height={100} // Example height, adjust as needed
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
