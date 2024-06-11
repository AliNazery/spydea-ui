// src/components/OverlayImage.js
import React from "react";

const OverlayImage = () => {
    return (
      <>
        <div className="flex justify-between fixed inset-0 z-50 pointer-events-none content-center  ">
          <div className="flex-auto">
            <img
              src="/images/line.svg"
              alt="Overlay"
              className="w-[1px]  h-full opacity-1 object-cover"
            />
          </div>
          <div className="flex-auto ">
            <img
              src="/images/line.svg"
              alt="Overlay"
              className="w-[1px]  h-full opacity-1 object-cover"
            />
          </div>
          <div className="flex-auto">
            <img
              src="/images/line.svg"
              alt="Overlay"
              className="w-[1px] h-full opacity-1 object-cover"
            />
          </div>
          <div className="flex-auto">
            <img
              src="/images/line.svg"
              alt="Overlay"
              className="w-[1px]  h-full opacity-1 object-cover"
            />
          </div>
          <div className="flex-auto">
            <img
              src="/images/line.svg"
              alt="Overlay"
              className="w-[1px]  h-full opacity-1 object-cover"
            />
          </div>
          <div className="flex-auto">
            <img
              src="/images/line.svg"
              alt="Overlay"
              className="w-[1px]  h-full opacity-1 object-cover"
            />
          </div>
        </div>
      </>
    );
};

export default OverlayImage;


    /* <div classNameName="line-bg  fixed left-0 top-1/2 z-10 flex h-screen w-full -translate-y-1/2 justify-between">
            <div classNameName="container w-[1px] bg-line-bg w-full px-6 mx-auto max-w-[1024px] flex justify-between">
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
            </div>
        </div> */
 
