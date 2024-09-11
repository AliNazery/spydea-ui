"use client"

import { useState } from "react";
import { CloseSvg } from "../Common/Icons/Announcement";

export default function Announcement() {
  const [isVisible, setIsVisible]=useState(true)

  const handleClick = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null;

  return (
    <div className="annoucement relative z-30 bg-black bg-opacity-100 text-white py-2">
      <div className="sm:mx-auto px-4 md:text-15px xs:text-14px leading-6 xs:font-thin lg:px-10">
        <div className="relative flex items-center justify-between sm:text-center">
          <span className="mx-auto pr-10 ">
            Pellen tesque in ipsum id orci porta dapibus. Sed port titor lectus
            nibh Vivamus.
            <a
              href="#"
              className="underline underline-offset-2 xs:text-14px md:text-15px"
            >
              Learn More
            </a>
          </span>
          <button
            className="flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white text-white opacity-80"
            aria-label="close toast button"
            type="button"
            onClick={handleClick}
          >
            <CloseSvg/>
          </button>
        </div>
      </div>
    </div>
  );
}
