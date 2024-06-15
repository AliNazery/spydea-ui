import Image from "next/image";
import OverlayImage from "../OverlayImage";
import HeroPhoto from "./HeroPhoto";

export function Hero() {
  return (
    <section className="section banner relative py-[60px] md:py-[100px] overflow-hidden before:z-10 after:content-[''] after:z-10 after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
      <div className="container relative z-30 sm:px-6">
        <div className="lg:flex lg:items-center lg:-mx-3">
          <div className="lg:w-6/12 px-3 ">
            <h1
              data-aos="fade-up-sm"
              className="mb-6 font-bold text-[35px] sm:text-[50px] xl:text-[65px]"
            >
              The smarter way to save documents
            </h1>
            <p
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="mb-6 text-lg"
            >
              Pellen tesque in ipsum id orci porta dapibus. Sed port titor
              lectus nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit
              amet quam vehicula elementum sed suscipit tortor eghet felis
              porttitor volutpat. Vivamus
            </p>
            <form
              data-aos="fade-up-sm"
              data-aos-delay="200"
              className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row"
            >
              <input
                type="search"
                className="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
                placeholder="Enter Your Email Address"
              />
              <button type="submit" className="btn btn-primary btn-md">
                Get A Quote
              </button>
            </form>
            <span
              data-aos="fade-right"
              data-aos-delay="250"
              className="align-middle text-lg font-bold text-dark"
            >
              Supported
            </span>
            <ul className="mt-2 flex flex-row gap-8 align-middle text-[28px] xs:ml-[28px] xs:mt-0 xs:inline-flex">
              <li data-aos="fade-in" className="text-dark" data-aos-delay="300">
                <a href="#?">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
                  </svg>
                </a>
              </li>
              <li data-aos="fade-in" className="text-dark" data-aos-delay="350">
                <a href="#?">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 528 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"></path>
                  </svg>
                </a>
              </li>
              <li data-aos="fade-in" className="text-dark" data-aos-delay="400">
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"></path>
                  </svg>
                </a>
              </li>
              <li data-aos="fade-in" className="text-dark" data-aos-delay="450">
                <a href="#?">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div className="py-8">
              <hr className="h-[1px] border-0 border-b border-border/50 bg-transparent" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li data-aos="fade-in" data-aos-delay="100">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="mr-2 inline-block text-2xl text-emerald-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                </svg>
                <p className="inline-block align-middle text-lg font-medium text-dark">
                  Works Anywhere
                </p>
              </li>
              <li data-aos="fade-in" data-aos-delay="150">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="mr-2 inline-block text-2xl text-emerald-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                </svg>
                <p className="inline-block align-middle text-lg font-medium text-dark">
                  Get Rewarded
                </p>
              </li>
              <li data-aos="fade-in" data-aos-delay="200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="mr-2 inline-block text-2xl text-emerald-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                </svg>
                <p className="inline-block align-middle text-lg font-medium text-dark">
                  No Hidden Fees
                </p>
              </li>
            </ul>
          </div>
          <div className="mx-auto max-w-[600px] pt-24 px-3 sm:mx-0 sm:w-full md:mx-[72px] lg:w-6/12 lg:mx-0 lg:pt-0 xl:mx-6">
            <div
              data-aos="fade-up-sm"
              className="image-block relative mr-[5.5%] pl-8 md:mr-6 lg:ml-6 before:content-[''] before:-z-10 before:bg-tertiary before:absolute before:h-full before:w-calc-100-minus-80 before:-top-4 before:left-4 before:right-16 before:skew--[12deg] before:clip-path-before-hero  
              after:content-[''] after:-z-10 after:bg-yellow_tan  after:absolute after:left-[100px] after:-right-5  after:top-[15px]  after:bottom-[-15px] after:xl:bottom-[-30px] after:h-full after:calc-100-minus-80 after:after-hero"
            >
              <Image
                alt="banner-image"
                loading="lazy"
                width="448"
                height="564"
                decoding="async"
                data-nimg="1"
                className="banner-image w-100 h-auto max-w-full"
                // style="color:transparent"
                // srcSet="/_next/image?url=%2Fimages%2Fbanner%2Fbanner-image.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fbanner%2Fbanner-image.jpg&amp;w=1080&amp;q=75 2x"
                src="/images/brands/banner-image.png"
              />
              <Image
                data-aos="fade-down-sm"
                data-aos-delay="150"
                alt="banner-image"
                loading="lazy"
                width="211"
                height="121"
                decoding="async"
                data-nimg="1"
                className="absolute bottom-16 left-0 w-[40%] rounded-lg shadow-md"
                // style="color:transparent"
                // srcSet="/_next/image?url=%2Fimages%2Fbanner%2Fbanner-image-part-1.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fbanner%2Fbanner-image-part-1.jpg&amp;w=640&amp;q=75 2x"
                src="/images/brands/banner-image-part-1.png"
              />
              <Image
                data-aos="fade-up-sm"
                data-aos-delay="200"
                alt="banner-image"
                loading="lazy"
                width="211"
                height="254"
                decoding="async"
                data-nimg="1"
                className="absolute right-0 top-0 w-[30%] rounded-lg md:-right-32 md:top-14 md:w-[40%] xl:top-36"
                // style="color:transparent"
                // srcSet="/_next/image?url=%2Fimages%2Fbanner%2Fbanner-image-part-2.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fbanner%2Fbanner-image-part-2.jpg&amp;w=640&amp;q=75 2x"
                src="/images/brands/banner-image-part-2.png"
              />
              <div
                data-aos="fade-up-sm"
                className="pointer-events-none absolute left-[40px] top-[-50px] -z-20 w-[40%] select-none"
              >
                <svg
                  className="text-secondary"
                  width="235"
                  height="223"
                  viewBox="0 0 265 253"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M151.289 253C119.854 244.062 84.8551 258.903 54.0608 247.988C37.9118 242.253 24.9648 230.057 13.6327 217.222C8.20332 211.068 2.88531 204.442 0.797084 196.534C-1.29114 188.627 0.657866 179.077 7.42372 174.455C14.6629 169.499 24.4636 171.643 32.7608 174.427C41.0859 177.211 50.1627 180.497 58.3486 177.351C66.5344 174.204 70.3489 160.951 62.5529 156.914C60.3533 155.8 57.8196 155.661 55.3415 155.577C45.7914 155.215 36.2691 154.826 26.7189 154.464C21.0389 154.241 14.9135 153.851 10.5978 150.176C5.39118 145.777 4.52805 137.953 5.9202 131.27C7.2845 124.588 10.4308 118.379 11.9064 111.725C14.2453 101.033 14.5794 86.4153 25.2432 84.0208C34.9883 81.8212 44.9004 93.4596 53.9494 89.2553C55.258 88.6427 56.4552 87.6682 57.04 86.3596C58.8219 82.4059 54.367 78.313 50.1349 77.3942C45.9028 76.4753 41.1973 77.0322 37.5499 74.6934C32.0926 71.213 31.9534 62.9158 35.1275 57.3194C38.3016 51.6951 43.8145 47.8806 48.5478 43.4535C55.2023 37.2167 60.5203 29.532 63.945 21.0678C66.4509 14.9423 68.2328 8.03724 73.3559 3.86079C80.9849 -2.37604 92.2335 0.157674 101.672 3.0255C110.415 5.67059 119.353 8.42704 126.536 14.0513C133.692 19.7035 138.759 28.9752 136.81 37.8849C135.585 43.4814 131.826 48.159 129.599 53.4213C127.371 58.6837 127.065 65.7279 131.604 69.2362C134.833 71.742 139.455 71.5193 143.298 70.0993C153.377 66.3683 159.669 54.5629 157.163 44.1218C161.897 41.1147 168.328 43.5371 172.421 47.3794C176.514 51.2217 179.299 56.2892 183.531 59.9644C191.438 66.786 204.135 68.6793 208.283 78.2573C211.958 86.7216 206.418 96.578 199.234 102.369C192.051 108.161 183.169 111.669 176.375 117.934C169.581 124.198 165.405 135.057 170.695 142.63C174.844 148.589 183.28 150.037 190.38 148.533C202.074 146.055 212.042 136.588 215.077 125.034C216.385 120.105 216.497 114.899 218.167 110.082C219.838 105.265 223.68 100.643 228.748 100.281C238.354 99.6129 241.89 112.532 248.795 119.214C252.581 122.89 257.844 124.866 261.101 128.987C266.085 135.252 264.999 144.273 262.967 152.013C248.906 205.528 199.067 247.626 143.966 252.582"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M151.206 223.932C150.064 225.519 151.373 228.415 154.101 227.942C155.076 227.774 156.106 227.524 157.136 227.162C159.419 227.357 161.647 226.522 162.983 225.018C163.846 224.044 163.958 222.93 163.54 221.872C163.763 220.73 162.983 219.644 161.925 219.06C160.032 215.858 154.714 214.772 152.013 217.333C150.788 218.503 150.398 220.034 150.649 221.538C150.37 222.234 150.593 223.236 151.206 223.932Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M173.089 206.39C175.317 207.755 177.934 207.087 180.078 206.363C182.138 205.667 184.032 204.441 184.616 202.437C185.006 201.1 184.7 199.485 183.781 198.232C183.809 197.982 183.865 197.703 183.893 197.453C184.115 195.142 180.997 194.084 179.215 195.142C177.349 196.228 174.899 196.339 173.117 197.592C171.669 198.594 170.751 200.209 170.695 201.936C170.584 203.606 171.419 205.36 173.089 206.39Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M118.657 215.245C118.156 216.191 118.88 217.556 119.826 218.168C120.021 218.28 120.216 218.419 120.411 218.53C121.135 220.229 122.722 221.732 124.754 222.205C127.232 222.762 129.154 221.704 130.128 220.062C130.407 220.006 130.685 219.922 130.963 219.811C132.077 220.312 133.441 220.256 134.277 219.198C136.616 216.219 136.254 212.265 133.692 209.091C133.079 208.34 131.91 208.033 130.991 208.117C128.346 208.34 125.618 208.785 123.863 210.595C123.474 211.013 123.167 211.458 122.917 211.987C120.968 212.405 119.548 213.574 118.657 215.245Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M142.992 204.052C143.966 204.887 145.414 205.249 146.639 204.386C147.948 203.495 149.646 202.604 150.983 201.546C152.598 200.46 154.157 198.901 153.015 196.896C153.015 196.868 152.987 196.868 152.987 196.84C152.598 195.782 151.734 194.835 150.37 194.39C148.254 193.694 146.027 194.39 144.412 195.392C142.713 196.45 140.18 197.731 139.651 199.652C139.066 201.741 140.792 203.55 142.992 204.052ZM144.133 199.095C144.078 199.123 144.022 199.151 143.966 199.179C144.078 199.123 143.966 199.123 143.632 199.207C143.716 198.956 143.883 198.901 144.133 199.095Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M179.216 214.855C177.016 216.999 177.49 220.507 179.578 222.679C179.94 223.403 180.664 223.987 181.75 224.127C182.613 224.461 183.587 224.628 184.645 224.544C185.592 224.461 186.511 224.182 187.29 223.737C190.158 222.957 192.414 221.203 191.467 217.973C190.047 213.212 182.557 211.597 179.216 214.855Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M203.243 195.421C203.772 195.644 204.357 195.811 204.914 195.866C205.415 196.117 206 196.2 206.668 196.117C207.754 195.95 208.673 195.504 209.369 194.864C210.343 194.14 210.928 193.11 211.095 191.857C211.151 191.384 211.012 190.882 210.705 190.465C210.622 190.047 210.483 189.63 210.288 189.24C208.728 186.093 204.385 185.342 201.823 187.346C199.039 189.518 199.457 193.806 203.243 195.421ZM205.137 191.3H205.165C205.165 191.328 205.137 191.356 205.137 191.356C205.109 191.411 205.109 191.411 205.081 191.411C205.081 191.384 205.081 191.384 205.109 191.356C205.137 191.328 205.137 191.3 205.137 191.3ZM205.192 191.217H205.165C205.192 191.161 205.22 191.133 205.192 191.217ZM205.526 190.882C205.499 190.882 205.471 190.91 205.471 190.938C205.471 190.91 205.499 190.882 205.526 190.882ZM205.192 190.91C205.137 190.91 205.081 190.91 205.025 190.882C205.081 190.91 205.137 190.91 205.192 190.91Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M167.995 178.436C167.995 179.132 168.217 179.801 168.579 180.385C168.078 182.112 170.166 184.506 172.617 183.671C173.34 183.42 174.009 183.086 174.593 182.669C175.289 182.501 175.958 182.223 176.542 181.833C179.717 179.689 178.38 175.179 174.371 173.981C172.255 173.369 169.916 173.759 168.635 175.29C168.106 175.931 167.967 176.682 168.134 177.406C168.05 177.768 167.995 178.074 167.995 178.436Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M198.149 174.288C199.68 173.369 201.239 172.422 202.771 171.503C203.968 170.779 203.912 169.025 202.966 167.995C202.103 167.076 200.877 166.854 199.819 167.16C199.819 167.132 199.819 167.076 199.819 167.049C199.569 165.183 196.59 164.264 195.198 165.378C192.831 167.271 192.163 170.473 193.805 173.258C194.696 174.817 196.701 175.151 198.149 174.288Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M204.58 205.249C202.659 205.305 201.351 206.975 201.378 208.646C201.378 209.064 201.462 209.454 201.601 209.843C201.323 210.484 201.351 211.263 201.74 211.876C202.548 213.184 204.079 213.658 205.527 213.24C206.891 212.85 207.921 211.737 208.283 210.512C208.311 210.428 208.339 210.317 208.339 210.233C208.506 209.815 208.701 209.426 208.868 209.008C209.397 207.839 208.423 206.168 207.03 205.723C206.808 205.667 206.613 205.611 206.418 205.583C205.861 205.305 205.193 205.221 204.58 205.249Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M90.2843 32.4561C90.4235 30.9248 88.391 29.5326 86.7483 30.9248C86.1636 31.4259 85.5789 32.0106 85.022 32.651C83.4349 33.4306 82.2934 34.8785 81.9871 36.4098C81.7922 37.4122 82.182 38.1918 82.8781 38.7208C83.1844 39.5561 84.131 39.9737 85.0777 39.9459C87.6114 41.338 91.5929 39.9459 92.3725 37.1616C92.7345 35.8808 92.3725 34.7114 91.6208 33.8204C91.4816 33.2357 90.9526 32.6789 90.2843 32.4561Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M82.655 52.8368C80.6225 52.809 79.1468 54.2846 78.0052 55.6211C76.8915 56.9019 76.1397 58.4611 76.5574 60.0482C76.8358 61.1062 77.6711 62.0528 78.7848 62.5262C78.8684 62.7211 78.924 62.916 79.0076 63.1109C79.7872 64.7258 82.293 64.1968 83.0448 62.7768C83.8523 61.3011 85.4393 60.2709 86.1354 58.7117C86.6922 57.4588 86.6644 56.0109 86.024 54.8694C85.4393 53.6999 84.1864 52.8368 82.655 52.8368Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M115.398 25.2723C115.371 24.437 114.34 23.8244 113.449 23.7688C113.282 23.7688 113.087 23.7688 112.92 23.7688C111.779 22.9335 110.108 22.5437 108.577 23.0448C106.711 23.6574 105.848 25.1331 105.848 26.6087C105.681 26.7758 105.542 26.9429 105.403 27.1099C104.456 27.2213 103.565 27.7781 103.426 28.8362C103.036 31.7597 104.874 34.2377 107.825 35.3236C108.549 35.5742 109.412 35.3236 110.025 34.906C111.695 33.7087 113.338 32.3166 113.784 30.4232C113.895 30.0056 113.895 29.5601 113.867 29.1425C114.981 28.0844 115.454 26.7201 115.398 25.2723Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M103.649 42.4235C102.674 42.2565 101.56 42.5906 101.059 43.6486C100.53 44.7624 99.7784 46.0153 99.2772 47.2682C98.6368 48.6325 98.2192 50.3031 99.7784 51.1662C99.8062 51.1662 99.8062 51.1662 99.8341 51.1941C100.502 51.7509 101.477 52.0294 102.563 51.7788C104.261 51.389 105.458 50.0525 106.127 48.7439C106.85 47.3518 108.02 45.4863 107.602 44.0106C107.185 42.3957 105.291 41.8945 103.649 42.4235ZM104.846 46.1545C104.874 46.1267 104.901 46.071 104.929 46.0431C104.874 46.1267 104.957 46.071 105.152 45.8761C105.18 46.0988 105.096 46.1823 104.846 46.1545Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M75.2214 49.6349C75.8339 47.324 74.1355 45.1801 71.8524 44.5675C71.3233 44.2334 70.6273 44.122 69.8198 44.4561C69.1238 44.5675 68.3998 44.8459 67.7316 45.3193C67.1191 45.7369 66.6457 46.2938 66.2838 46.9063C64.6689 48.5769 63.8893 50.6373 65.8104 52.3914C68.6504 55.0365 74.3025 53.1153 75.2214 49.6349Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M66.9519 72.1322C66.5064 72.1879 66.0609 72.3272 65.6432 72.4942C65.2256 72.5221 64.7801 72.6891 64.3903 73.0232C63.7221 73.5522 63.3044 74.2205 63.0817 74.9165C62.7197 75.7797 62.7476 76.6985 63.1095 77.6173C63.2487 77.9793 63.555 78.2299 63.917 78.3969C64.1397 78.6475 64.3903 78.8703 64.6966 79.0373C66.9797 80.513 70.1816 79.2879 71.1005 76.9212C72.1028 74.3875 70.126 71.7146 66.9519 72.1322ZM67.3417 75.6405C67.3138 75.6405 67.3138 75.6405 67.3417 75.6405C67.3138 75.6405 67.3138 75.6126 67.3138 75.6126C67.3138 75.5848 67.3138 75.5569 67.3138 75.5569C67.3138 75.5848 67.3138 75.5848 67.3138 75.6126C67.3138 75.6126 67.3138 75.6405 67.3417 75.6405ZM67.3138 75.6962C67.3417 75.6962 67.3417 75.6962 67.3138 75.6962C67.3417 75.7518 67.3417 75.7518 67.3138 75.6962ZM67.2303 76.0581C67.2581 76.0303 67.2581 76.0303 67.2581 76.0024C67.2581 76.0303 67.2581 76.0581 67.2303 76.0581ZM67.453 75.8911C67.4809 75.8632 67.5366 75.8632 67.5644 75.8354C67.5087 75.8632 67.4809 75.8911 67.453 75.8911Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M97.1901 69.4318C96.9117 68.9863 96.4941 68.6243 96.0207 68.3737C95.6588 67.0373 93.32 66.2576 92.0392 67.789C91.6494 68.2345 91.3431 68.7357 91.1204 69.2369C90.7027 69.6267 90.3964 70.0721 90.1737 70.5455C88.8929 73.2462 91.5937 75.6964 94.74 74.9168C96.3827 74.4992 97.8027 73.2741 98.0254 71.7706C98.1368 71.1302 97.9141 70.5733 97.5243 70.1557C97.4129 69.8772 97.3294 69.6545 97.1901 69.4318Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M78.7579 84.16C78.0897 85.3851 77.4493 86.6102 76.7811 87.8631C76.2799 88.8097 77.0038 89.9792 78.0618 90.2576C79.0085 90.536 79.8995 90.1741 80.4842 89.5615C80.512 89.5894 80.512 89.6172 80.5399 89.645C81.4587 90.7866 83.7975 90.2298 84.2708 88.9211C85.0783 86.7215 84.2708 84.327 82.0712 83.1298C80.8461 82.4616 79.3704 83.0184 78.7579 84.16Z"
                    fill="#FFF8EA"
                  ></path>
                  <path
                    d="M62.1353 66.118C63.3883 65.3106 63.611 63.6678 62.9149 62.582C62.7479 62.3035 62.5251 62.0808 62.3024 61.8859C62.2189 61.3569 61.9126 60.8279 61.4114 60.5773C60.3534 60.0204 59.1283 60.3267 58.3487 61.162C57.5969 61.9694 57.3742 63.111 57.5969 64.0855C57.6248 64.169 57.6526 64.2247 57.6526 64.3082C57.6804 64.6423 57.7361 65.0043 57.764 65.3384C57.8753 66.3408 59.184 67.0369 60.2977 66.7863C60.4647 66.7584 60.6318 66.7027 60.771 66.6192C61.2722 66.5914 61.7455 66.3686 62.1353 66.118Z"
                    fill="#FFF8EA"
                  ></path>
                </svg>
              </div>
              <div
                data-aos="fade-down-sm"
                className="pointer-events-none absolute bottom-[-70px] right-[-130px] -z-20 w-[40%] select-none "
              >
                <svg
                  className="text-quinary"
                  width="207"
                  height="207"
                  viewBox="0 0 207 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.2117 111.852C76.8111 111.602 75.0413 112.525 75.1933 114.176C75.7362 120.451 79.1237 126.575 83.8793 131.352C84.6393 132.177 85.4862 132.937 86.3765 133.632C90.2526 136.835 94.7692 139.202 99.3185 140.19C100.393 140.418 101.229 139.973 101.74 139.289C103.184 139.148 104.422 137.997 103.976 136.336C102.294 130.049 101.012 123.491 95.9853 118.942C91.1212 114.534 84.4873 113.003 78.2117 111.852Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M131.24 93.1771C129.557 86.8906 128.275 80.3328 123.248 75.7835C118.373 71.3646 111.75 69.8228 105.475 68.6719C104.074 68.4222 102.304 69.3451 102.456 70.9954C102.999 77.271 106.387 83.3946 111.142 88.1718C111.902 88.997 112.749 89.757 113.64 90.4519C117.516 93.6548 122.032 96.0218 126.582 97.0098C127.657 97.2378 128.493 96.7926 129.003 96.1086C130.458 95.9783 131.685 94.8383 131.24 93.1771Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M38.4514 28.9229C37.0617 28.6623 35.281 29.596 35.433 31.2464C35.9759 37.522 39.3635 43.6455 44.119 48.4228C44.879 49.248 45.7259 50.008 46.6162 50.7029C50.4923 53.9059 55.009 56.2728 59.5583 57.2608C60.6331 57.4888 61.4692 57.0436 61.9795 56.3596C63.4235 56.2184 64.6613 55.0676 64.2161 53.4064C62.5332 47.12 61.252 40.5621 56.225 36.0128C51.3609 31.6047 44.727 30.0738 38.4514 28.9229Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M92.0552 50.7138C95.9313 53.9168 100.448 56.2837 104.997 57.2717C106.072 57.4997 106.908 57.0545 107.418 56.3705C108.863 56.2294 110.1 55.0785 109.655 53.4173C107.972 47.1308 106.691 40.573 101.664 36.0237C96.789 31.6047 90.1661 30.063 83.8905 28.9121C82.4898 28.6623 80.7201 29.5852 80.8721 31.2356C81.4149 37.5112 84.8025 43.6347 89.558 48.412C90.3398 49.2589 91.1649 50.0189 92.0552 50.7138Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M49.3415 94.7517C50.4164 94.9797 51.2524 94.5346 51.7627 93.8506C53.2067 93.7094 54.4445 92.5585 53.9993 90.8973C52.3164 84.6109 51.0353 78.053 46.0083 73.5037C41.1333 69.0847 34.5102 67.543 28.2346 66.3921C26.834 66.1424 25.0643 67.0652 25.2163 68.7156C25.7592 74.9912 29.1467 81.1148 33.9022 85.8921C34.6622 86.7172 35.5091 87.4772 36.3994 88.1721C40.2756 91.4184 44.7814 93.7745 49.3415 94.7517Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M104.334 156.15C102.934 155.901 101.164 156.824 101.316 158.474C101.859 164.75 105.246 170.873 110.002 175.65C110.762 176.475 111.609 177.236 112.499 177.93C116.375 181.133 120.892 183.5 125.441 184.488C126.516 184.716 127.352 184.271 127.862 183.587C129.306 183.446 130.544 182.295 130.099 180.634C128.416 174.348 127.135 167.79 122.108 163.24C117.244 158.832 110.61 157.301 104.334 156.15Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M155.452 105.033C154.051 104.783 152.282 105.706 152.434 107.357C152.976 113.632 156.364 119.756 161.119 124.533C161.879 125.358 162.726 126.118 163.617 126.813C167.493 130.016 172.009 132.383 176.559 133.371C177.634 133.599 178.47 133.154 178.98 132.47C180.424 132.329 181.662 131.178 181.217 129.517C179.534 123.23 178.253 116.672 173.226 112.123C168.361 107.715 161.727 106.184 155.452 105.033Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M145.234 149.343C143.834 149.093 142.064 150.016 142.216 151.666C142.759 157.942 146.146 164.065 150.902 168.843C151.662 169.668 152.509 170.428 153.399 171.123C157.275 174.326 161.792 176.693 166.341 177.681C167.416 177.909 168.252 177.464 168.762 176.78C170.206 176.638 171.444 175.487 170.999 173.826C169.316 167.54 168.035 160.982 163.008 156.433C158.133 152.014 151.51 150.494 145.234 149.343Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M109.361 104.436C106.343 117.335 121.261 127.15 131.652 130.657C132.835 131.059 133.725 130.538 134.203 129.713C135.256 129.506 136.179 128.605 136.212 127.378C136.375 121.591 134.713 116.173 130.696 111.874C125.691 106.521 118.894 106.434 112.89 102.949C111.554 102.178 109.709 102.916 109.361 104.436ZM114.801 109.029C114.453 109.311 114.171 109.681 114.008 110.104C113.9 109.626 113.834 109.149 113.791 108.671C114.128 108.79 114.475 108.92 114.801 109.029ZM127.157 115.261C126.125 114.317 125.029 113.524 123.867 112.818C123.693 112.623 123.487 112.46 123.302 112.275C124.801 113.122 126.082 114.121 127.157 115.261Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M95.345 97.7809C98.0268 97.7918 98.385 94.198 96.4307 93.2208C97.1907 85.7292 94.7153 81.8857 89.9706 76.1638C84.6287 69.7362 77.2891 69.6928 69.7757 67.2173C68.1688 66.6961 66.9094 68.1075 66.7574 69.5407C65.9648 77.2169 69.0374 82.7 74.8244 87.4881C81.7732 93.2425 86.1379 97.7375 95.345 97.7809Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </section>
    // <div className="relative z-10 py-[60px] overflow-hidden after:content-[''] after:z-10 after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
    //   <div className="container relative px-4 py-0 max-[480px] z-30 ">
    //     <div className="flex flex-wrap items-center -mx-3">
    //       <div className="">
    //         <h1 className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px] aos-init aos-animate flex flex-col leading-none text-gray-800">
    //           The smarter way to save documents
    //         </h1>
    //         <p className="text-sm sm:text-base text-gray-700 dark:text-white">
    //           Pellen tesque in ipsum id orci porta dapibus. Sed port titor
    //           lectus nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit
    //           amet quam vehicula elementum sed suscipit tortor eghet felis
    //           porttitor volutpat. Vivamus
    //         </p>
    //         <div className="flex mt-4 ">
    //           <form className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row aos-init aos-animate">
    //             <input
    //               type="Search"
    //               placeholder="Enter Your Email Address"
    //               className="w-full outline-none border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
    //             />
    //             <button type="submit" className="btn btn-primary py-4 px-11">
    //               Search
    //             </button>
    //           </form>
    //         </div>
    //         <div className="flex items-center">
    //           <span className="align-middle text-lg font-bold text-dark aos-init aos-animate">
    //             Supported
    //           </span>
    //           <ul className="mt-2 flex flex-row gap-8 align-middle text-[28px] xs:ml-7 xs:mt-0 xs:inline-flex">
    //             <li className="text-dark aos-init aos-animate">
    //               <a
    //                 href="#"
    //                 className="bg-transparent text-inherit decoration-inherit"
    //               >
    //                 <svg
    //                   stroke="currentColor"
    //                   fill="currentColor"
    //                   stroke-width="0"
    //                   viewBox="0 0 448 512"
    //                   height="1em"
    //                   width="1em"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
    //                 </svg>
    //               </a>
    //             </li>
    //             <li className="text-dark aos-init aos-animate">
    //               <a href="#">
    //                 <svg
    //                   stroke="currentColor"
    //                   fill="currentColor"
    //                   stroke-width="0"
    //                   viewBox="0 0 528 512"
    //                   height="1em"
    //                   width="1em"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"></path>
    //                 </svg>
    //               </a>
    //             </li>
    //             <li className="text-dark aos-init aos-animate">
    //               <a href="#">
    //                 <svg
    //                   stroke="currentColor"
    //                   fill="currentColor"
    //                   stroke-width="0"
    //                   viewBox="0 0 448 512"
    //                   height="1em"
    //                   width="1em"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"></path>
    //                 </svg>
    //               </a>
    //             </li>
    //             <li className="text-dark aos-init aos-animate">
    //               <a href="#">
    //                 <svg
    //                   stroke="currentColor"
    //                   fill="currentColor"
    //                   stroke-width="0"
    //                   viewBox="0 0 576 512"
    //                   height="1em"
    //                   width="1em"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
    //                 </svg>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="py-8">
    //           <hr className="h-[1px] border-0 border-b border-border/50 bg-transparent" />
    //         </div>
    //         <ul className="flex flex-wrap gap-x-6 gap-y-2">
    //           <li className="aos-init aos-animate">
    //             <svg
    //               className="mr-2 inline-block text-2xl text-emerald-400"
    //               stroke="currentColor"
    //               fill="currentColor"
    //               stroke-width="0"
    //               viewBox="0 0 16 16"
    //               height="1em"
    //               width="1em"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    //             </svg>
    //             <p className="inline-block align-middle text-lg font-medium text-dark">
    //               Works Anywhere
    //             </p>
    //           </li>
    //           <li className="aos-init aos-animate">
    //             <svg
    //               className="mr-2 inline-block text-2xl text-emerald-400"
    //               stroke="currentColor"
    //               fill="currentColor"
    //               stroke-width="0"
    //               viewBox="0 0 16 16"
    //               height="1em"
    //               width="1em"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    //             </svg>
    //             <p className="inline-block align-middle text-lg font-medium text-dark">
    //               Get Rewarded
    //             </p>
    //           </li>
    //           <li className="aos-init aos-animate">
    //             <svg
    //               className="mr-2 inline-block text-2xl text-emerald-400"
    //               stroke="currentColor"
    //               fill="currentColor"
    //               stroke-width="0"
    //               viewBox="0 0 16 16"
    //               height="1em"
    //               width="1em"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    //             </svg>
    //             <p className="inline-block align-middle text-lg font-medium text-dark">
    //               No Hidden Fees
    //             </p>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <HeroPhoto />
    //   </div>
    // </div>
  );
}

// w-120 bg-white rounded-md p-[6px] shadow-lg z-10

// w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent
// bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50

// hidden sm:block sm:w-1/3 lg:w-3/5 relative flex-1
