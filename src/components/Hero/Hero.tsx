import OverlayImage from "../OverlayImage";
import HeroPhoto from "./HeroPhoto";

export function Hero() {
  return (
    <div className="shadow-black dark:bg-gray-800 flex relative z-20 items-center overflow-hidden after:content-[''] after:z-10 after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
      {/* <OverlayImage/> */}
          <div className="container mx-auto px-1 flex relative py-16 z-30 ">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col flex-1 relative z-20 ">
          <h1 className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px] aos-init aos-animate flex flex-col leading-none text-gray-800">
            The smarter way to save documents
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Pellen tesque in ipsum id orci porta dapibus. Sed port titor lectus
            nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam
            vehicula elementum sed suscipit tortor eghet felis porttitor
            volutpat. Vivamus
          </p>
          <div className="flex mt-4 ">
            <form className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row aos-init aos-animate">
              <input
                type="Search"
                placeholder="Enter Your Email Address"
                className="w-full outline-none border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
              />
              <button type="submit" className="btn btn-primary py-4 px-11">
                Search
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <span className="align-middle text-lg font-bold text-dark aos-init aos-animate">
              Supported
            </span>
            <ul className="mt-2 flex flex-row gap-8 align-middle text-[28px] xs:ml-7 xs:mt-0 xs:inline-flex">
              <li className="text-dark aos-init aos-animate">
                <a
                  href="#"
                  className="bg-transparent text-inherit decoration-inherit"
                >
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
              <li className="text-dark aos-init aos-animate">
                <a href="#">
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
              <li className="text-dark aos-init aos-animate">
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
              <li className="text-dark aos-init aos-animate">
                <a href="#">
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
          </div>
          <div className="py-8">
            <hr className="h-[1px] border-0 border-b border-border/50 bg-transparent" />
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li className="aos-init aos-animate">
              <svg
                className="mr-2 inline-block text-2xl text-emerald-400"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
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
            <li className="aos-init aos-animate">
              <svg
                className="mr-2 inline-block text-2xl text-emerald-400"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
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
            <li className="aos-init aos-animate">
              <svg
                className="mr-2 inline-block text-2xl text-emerald-400"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
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
        <HeroPhoto />
      </div>
    </div>
  ); 
}


// w-120 bg-white rounded-md p-[6px] shadow-lg z-10

// w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent
// bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50

// hidden sm:block sm:w-1/3 lg:w-3/5 relative flex-1