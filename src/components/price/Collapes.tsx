"use client"

import React, { useState } from 'react'


export default function Collapes() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)

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
      const handleClick3 = () => {
        setIsVisible3(!isVisible3);
        setIsActive3(!isActive3);
      };
      const handleClick4 = () => {
        setIsVisible4(!isVisible4);
        setIsActive4(!isActive4);
      };
      const handleClick5 = () => {
        setIsVisible5(!isVisible5);
        setIsActive5(!isActive5);
      };
      
    
  return (
    <section>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick}>
                    <span>How does the free trial work?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive ? 'rotate-180': 'rotate-0'}`}>
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid.</p>
                </div>
            </div>
        </div>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick1}>
                    <span>Do I need a creditcard to Sign up?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive1 ? 'rotate-180': 'rotate-0'}`}>
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible1 ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid.</p> 
                </div>
            </div>
        </div>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick2}>
                    <span>How does the free trial work?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive2 ? 'rotate-180': 'rotate-0'}`}
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible2 ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid.</p>
                </div>
            </div>
        </div>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick3}>
                    <span>How does the free trial work?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive3 ? 'rotate-180': 'rotate-0'}`}
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible3 ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid.</p>
                </div>
            </div>
        </div>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick4}>
                    <span>Do I need a creditcard to Sign up?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive4 ? 'rotate-180': 'rotate-0'}`}
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible4 ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid.</p>
                </div>
            </div>
        </div>
        <div className="mb-6 mt-0 rounded-xl border border-borderColor bg-bgColor">
            <div data-aos="fade-up-sm" className='transition-opacity-transform opacity-100 ease duration-400 pointer-events-auto'>
                <button type="button" className="flex cursor-pointer select-none items-center justify-between gap-3 p-6 capitalize text-dark px-10 w-full text-xl font-medium" data-accordion="true"
                onClick={handleClick5}>
                    <span>Can I change my plan at any time?</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`h-[.68em] w-[.68em]  transform transition-transform duration-200 ease-linear  ${ isActive5 ? 'rotate-180': 'rotate-0'}`}
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </button>
                <div className={` ${isVisible5 ? 'block' : 'hidden'} overflow-hidden max-h-screen text-lg leading-7 px-10 pb-10`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat veritatis necessitatibus nemo ullam dolores aut veniam officiis asperiores, unde quo magni repudiandae impedit iusto voluptatum eos, aliquam, consectetur aliquid.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
