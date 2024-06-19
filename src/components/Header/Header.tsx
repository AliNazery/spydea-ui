"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header
        className={`header z-50 bg-quaternary/20 top-[-1px] sticky transition-colors duration-200 ease-out ${
          sticky ? "bg-white z-999 shadow-shdwhead" : "bg-opacity-0"
        }`}
      >
        <nav className="navbar container relative z-30 flex flex-wrap items-center justify-center sm:px-6 py-3 transition-[padding] duration-200 ease-out">
          <Link className="navbar-brand" href="/">
            <Image
              alt="Wama-solution"
              width="158"
              height="36"
              decoding="async"
              data-nimg="1"
              // style="color:transparent"
              // srcSet="/_next/image?url=%2Fimages%2Flogo-dark.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo-dark.png&amp;w=384&amp;q=75 2x"
              src="/images/logo/logo-dark.png"
            />
          </Link>
          <button
            className={`navbar-toggler group lg:hidden relative ml-auto lg:ml-4 block rounded-md border-2 border-black/75 p-1 ${
              isOpen ? "active" : ""
            }`}
            aria-label="navbar toggler"
            onClick={toggleMenu}
          >
            <div className="relative flex h-[30px] w-[30px] transform items-center justify-center overflow-hidden rounded-full ring-0 transition-all duration-200">
              <div
                className={`flex h-[15px] w-[18px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isOpen ? "h-[21px]" : ""
                }`}
              >
                <div
                  className={`h-[2px] w-7 origin-left transform bg-dark transition-all duration-300 ${
                    isOpen ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`h-[2px] w-7 transform rounded bg-dark transition-all delay-75 duration-300 ${
                    isOpen ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`h-[2px] w-7 origin-left transform bg-dark transition-all delay-150 duration-300 ${
                    isOpen ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
                    isOpen ? "w-12 translate-x-0" : ""
                  }`}
                >
                  <div
                    className={`absolute h-[2px] w-5 rotate-0 transform bg-dark transition-all delay-300 duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  ></div>
                  <div
                    className={`absolute h-[2px] w-5 -rotate-0 transform bg-dark transition-all delay-300 duration-500 ${
                      isOpen ? "-rotate-45" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
          <div
            className={`navbar-wrapper ${
              isOpen
                ? "h-auto rounded-lg p-3 opacity-100 shadow-md max-h-[calc(100vh-250%)] overflow-auto"
                : "hidden"
            } lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto`}
          >
            <ul className="navbar-nav flex w-full flex-col items-center text-center order-3 mx-auto md:text-left lg:order-2 lg:ml-auto lg:mr-0 lg:flex-row lg:w-auto lg:bg-transparent ">
              <li className="nav-item relative text-center z-10 mr-0 lg:text-left">
                <Link
                  className="nav-link lg:pl-0 pointer select-none lg:py-4 xl:pr-6"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link lg:py-4 xl:px-6" href="/Linkbout">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link lg:py-4 xl:px-6" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item nav-dropdown group">
                <label htmlFor="expand">
                  <span className="nav-link inline-flex items-center lg:py-4 xl:px-6 ">
                    Pages
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
                      ></path>
                    </svg>
                  </span>
                </label>
                <input className="peer hidden" type="checkbox" id="expand" />
                <ul className="nav-dropdown-list invisible absolute m-0 block w-[250px] shadow-navdrop rounded-lg bg-white z-10 lg:group-hover:visible lg:group-hover:opacity-100 peer-checked:max-lg:block p-3">
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/element"
                    >
                      Elements
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/integration"
                    >
                      Integration
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="careers"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/pricing"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/authors"
                    >
                      Authors
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/signUp"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/terms"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg">
                    <Link
                      className="nav-dropdown-link py-1 lg:py-2"
                      href="/404"
                    >
                      404 Page
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="order-2 mx-auto mb-[0.75rem] flex flex-col items-center lg:mx-0 lg:mb-0 lg:ml-7 lg:flex-row">
              <div className="flex flex-col justify-center gap-5 pt-4 text-center lg:ml-7 lg:flex-row lg:gap-7 lg:pt-0 lg:text-left">
                <Link
                  className="btn-login btn-outline-primary w-[200px] min-[340px]:w-[300px] lg:w-auto"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn-login btn-primary w-[200px] min-[340px]:w-[300px] lg:w-auto"
                  href="/contact"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="line-bg absolute z-20">
          <div className="container flex justify-between">
            <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
