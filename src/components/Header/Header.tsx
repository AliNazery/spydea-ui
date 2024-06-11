"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header
        className={`header z-50 h-[85.5px] ${
          sticky ? "bg-white shadow-lg" : "bg-quaternary/20"
        }`}
      >
        <nav className="flex flex-wrap items-center justify-between  pt-4 pb-4 transition-padding duration-200 ease-in-out container relative z-30 lg:py-[4px]">
          <Link href="/" className="navbar-brand text-[15px]">
            <img
              alt="wamaSolution"
              loading="lazy"
              width="158"
              height="36"
              decoding="async"
              style={{ color: "transparent" }}
              src="/images/logo/logo-dark.png"
            />
          </Link>
          <button
            className={`navbar-toggler group relative ml-auto lg:hidden md:block ${
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
            className={`lg:flex ${
              isOpen
                ? "flex flex-col bg-white justify-between items-center"
                : "hidden"
            } w-full lg:w-auto bg-transparent visible static h-auto rounded-xl flex-row overflow-visible py-4 opacity-100 filter-none drop-shadow-n`}
          >
            <ul
              className={`order-2 w-auto ${
                isOpen
                  ? "flex flex-col items-center bg-white w-full md:w-auto space-y-4 py-4"
                  : "hidden"
              } md:flex md:flex-col md:items-center md:space-y-4 lg:flex-row lg:space-x-9 lg:space-y-0`}
            >
              <li className="relative z-10 mr-0">
                <Link
                  href="/"
                  className="nav-link text-[15px] cursor-pointer select-none lg:py-4 lg:pl-0 bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li className="relative z-10 mr-0">
                <Link
                  href="/about"
                  className="nav-link text-[15px] cursor-pointer select-none lg:py-4 lg:pl-0 bg-transparent"
                >
                  About
                </Link>
              </li>
              <li className="relative z-10 mr-0">
                <Link
                  href="/blog"
                  className="nav-link text-[15px] cursor-pointer select-none lg:py-4 lg:pl-0 bg-transparent"
                >
                  Blog
                </Link>
              </li>
              <li className="relative z-10 mr-0 lg:text-left nav-dropdown group">
                <label htmlFor="expand" className="cursor-pointer">
                  <span className="nav-link text-[15px] cursor-pointer select-none lg:py-4 lg:pl-0 bg-transparent inline-flex items-center hover:text-black">
                    Pages
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
                      ></path>
                    </svg>
                  </span>
                </label>
                <input className="peer hidden" type="checkbox" id="expand" />
                <ul className="nav-dropdown-list absolute hidden peer-checked:block lg:group-hover:block lg:group-hover:opacity-100 shadow-lg w-[250px] rounded-md bg-white p-3 ">
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link
                      href="/element"
                      className="nav-dropdown-link block w-full p-1 px-4 font-normal text-gray-900"
                    >
                      Elements
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/integration" className="nav-dropdown-link">
                      Integration
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/careers" className="nav-dropdown-link">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/pricing" className="nav-dropdown-link">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/authors" className="nav-dropdown-link">
                      Authors
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/contact" className="nav-dropdown-link">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/signUp" className="nav-dropdown-link">
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/terms" className="nav-dropdown-link">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="nav-dropdown-item rounded-lg transition-all duration-200 tex-[15px] py-2 hover:bg-hoverCo">
                    <Link href="/404" className="nav-dropdown-link">
                      404 Page
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="order-2 mx-auto mb-4 flex flex-col items-center lg:mx-0 lg:mb-0 lg:ml-7 lg:flex-row">
              <div className="flex flex-col justify-center gap-5 pt-4 text-center lg:ml-7 lg:flex-row lg:gap-7 lg:pt-0 lg:text-left">
                <Link
                  href="/login"
                  className="btn btn-outline-primary w-52 lg:w-auto"
                >
                  Login
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-primary w-52 lg:w-auto"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="line-bg absolute z-20 flex justify-between">
          <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
        </div>
      </header>
    </>
  );
};

export default Header;
