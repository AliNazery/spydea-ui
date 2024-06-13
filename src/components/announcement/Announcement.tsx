
export default function Announcement() {
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
          >
            <svg
              className="w-3 h-3 md:h-4 md:w-4 text-current fill-current "
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
