import React, { useState } from 'react'


export default function Collapes() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)

    const handleClick = () => {
        setIsVisible(!isVisible);
        setIsActive(!isActive);

    };
      const handleClick1 = () => {
        setIsVisible1(!isVisible1);
        setIsActive1(!isActive1);
      };
      const handleClick2 = () => {
        setIsVisible2(!isVisible2);
        setIsActive2(!isActive2);
      };
    
  return (
    <section>
        <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Collapse</h3>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick}>
                    <span>Why should you need to do this?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive ? 'rotate-180': 'rotate-0'}`}>
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                    <ul className='mt-5 pl-[1.625em] list-disc '>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick1}>
                    <span>Why should you need to do this?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive1 ? 'rotate-180': 'rotate-0'}`}>
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible1 ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                    <ul className='mt-5 pl-[1.625em] list-disc '>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick2}>
                    <span>Why should you need to do this?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive2 ? 'rotate-0': 'rotate-180'}`}
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible2 ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                    <ul className='mt-5 pl-[1.625em] list-disc '>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                        <li className='text-noticep mt-2 mb-2 pl-1.5 marker:text-xl marker:text-black'>This is a thing.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
