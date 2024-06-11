import React from "react";
import OverlayImage from "../OverlayImage";

export default function bgLines() {
  return (
    <div>
      <div className=" bg-line-bg fixed left-0 top-1/2 z-10 flex h-screen w-full -translate-y-1/2 justify-between">
          <div className="container bg-line-bg flex justify-between">
          <span className="  ">

          </span>
          <span className="w-1px h-full bg-line-bg opacity-50 md:opacity-100">
            <OverlayImage/>
          </span>
          <span className="w-1px h-full bg-line-bg opacity-50 md:opacity-100"></span>
          <span className="w-1px h-full bg-line-bg opacity-50 md:opacity-100"></span>
          <span className="w-1px h-full bg-line-bg opacity-50 md:opacity-100"></span>
          <span className="w-1px h-full bg-line-bg opacity-50 md:opacity-100"></span>
        </div>
      </div>
      {/* <div classNameName="line-bg  fixed left-0 top-1/2 z-10 flex h-screen w-full -translate-y-1/2 justify-between">
            <div classNameName="container w-[1px] bg-line-bg w-full px-6 mx-auto max-w-[1024px] flex justify-between">
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span classNameName=" inline-block h-full opacity-50 md:opacity-100"></span>
            </div>
        </div> */}
    </div>
  );
}
