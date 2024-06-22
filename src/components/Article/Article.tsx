import Image from "next/image";
import React from "react";

export default function Article() {
  return (
    <section className="section-md articles relative z-20 overflow-hidden py-[100px] md:py-[200px] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-article-polygon">
      <div className="container relative z-30 sm:px-6">
        <div className="flex flex-wrap items-end justify-between pb-12 -mx-3">
          <div className="lg:w-8/12 xl:w-6/12 px-3">
            <span
              className="mb-6 inline-block font-medium uppercase text-red-400"
              data-aos="fade-up-sm"
            >
              Latest Articles
            </span>
            <div
              data-aos="fade-up-sm"
              className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0"
            >
              <h2
                className="font-semibold text-h2 md:text-mdh2"
                data-aos="fade-up-sm"
              >
                Take a Look at the Latest Articles from Our Blog
              </h2>
            </div>
          </div>
          <div data-aos="fade-right-sm" className="col-auto px-3">
            <a className="btn btn-outline-primary btn-sm" href="blog/">
              Browse All Articles
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mt-6">
          <div data-aos="fade-up-sm" className="md:w-6/12 lg:w-4/12 px-3 mt-6">
            <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
              <a
                className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                href="/blog/post-1"
              >
                <Image
                  alt="author"
                  loading="lazy"
                  width="408"
                  height="262"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/images/Article/2-1.jpg"
                />
              </a>
              <div className="px-5 pb-12">
                <div className="-mt-[30px] mb-3 flex items-center">
                  <a
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                    title="benjamin"
                    href="/authors/benjamin"
                  >
                    <Image
                      alt="benjamin"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="h-[40px] w-[40px] object-cover"
                      src="/images/Article/1-2.jpg"
                    />
                  </a>
                  <a
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                    href="/authors/benjamin"
                  >
                    benjamin
                  </a>
                </div>
                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                  <a
                    className="link-animation relative pb-[4px] after:absolute after:inset-0"
                    href="/blog/post-1"
                  >
                    The Real Product From The Buyers Improvements In Overflow
                    Basis.
                  </a>
                </h2>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  04 Apr, 2022
                </span>
              </div>
            </div>
          </div>
          <div data-aos="fade-up-sm" className="md:w-6/12 lg:w-4/12 px-3 mt-6">
            <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
              <a
                className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                href="/blog/post-2"
              >
                <Image
                  alt="author"
                  loading="lazy"
                  width="408"
                  height="262"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/images/Article/1-1.jpg"
                />
              </a>
              <div className="px-5 pb-12">
                <div className="-mt-[30px] mb-3 flex items-center">
                  <a
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                    title="Daniel Mitchell"
                    href="/authors/daniel-mitchell"
                  >
                    <Image
                      alt="Daniel Mitchell"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="h-[40px] w-[40px] object-cover"
                      src="/images/Article/2-2.jpg"
                    />
                  </a>
                  <a
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                    href="/authors/daniel-mitchell"
                  >
                    Daniel Mitchell
                  </a>
                </div>
                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                  <a
                    className="link-animation relative pb-[4px] after:absolute after:inset-0"
                    href="/blog/post-2"
                  >
                    The Real Product From The Buyers Improvements In Overflow
                    Basis.
                  </a>
                </h2>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  04 Apr, 2022
                </span>
              </div>
            </div>
          </div>
          <div data-aos="fade-up-sm" className="md:w-6/12 lg:w-4/12 px-3 mt-6">
            <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
              <a
                className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                href="/blog/post-3"
              >
                <Image
                  alt="author"
                  loading="lazy"
                  width="408"
                  height="262"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/images/Article/3-1.jpg"
                />
              </a>
              <div className="px-5 pb-12">
                <div className="-mt-[30px] mb-3 flex items-center">
                  <a
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                    title="Daniel Mitchell"
                    href="/authors/daniel-mitchell"
                  >
                    <Image
                      alt="Daniel Mitchell"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="h-[40px] w-[40px] object-cover"
                      src="/images/Article/3-2.jpg"
                    />
                  </a>
                  <a
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                    href="/authors/daniel-mitchell"
                  >
                    Daniel Mitchell
                  </a>
                </div>
                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                  <a
                    className="link-animation relative pb-[4px] after:absolute after:inset-0"
                    href="/blog/post-3"
                  >
                    The Real Product From The Buyers Improvements In Overflow
                    Basis.
                  </a>
                </h2>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  04 Apr, 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left-sm"
        className="pointer-events-none absolute -left-24 bottom-0 hidden select-none lg:block"
      >
        <svg
          className="text-secondary"
          width="225"
          height="242"
          viewBox="0 0 225 242"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.6131 84.6415C67.521 83.5649 66.4959 82.4478 65.315 82.8838C60.8175 84.5158 56.9907 88.205 54.4206 92.6332C53.9646 93.353 53.5734 94.1238 53.2386 94.9136C51.6507 98.3871 50.8021 102.166 50.9715 105.698C51.0156 106.532 51.5065 107.057 52.1087 107.297C52.4961 108.329 53.5839 109.011 54.7151 108.358C58.9965 105.887 63.556 103.658 65.9055 99.0755C68.1834 94.6402 68.0024 89.4721 67.6131 84.6415Z"
            fill="currentColor"
          ></path>
          <path
            d="M91.7392 119.875C96.0206 117.405 100.58 115.175 102.93 110.593C105.213 106.147 105.042 100.985 104.653 96.1547C104.561 95.078 103.536 93.961 102.355 94.397C97.8575 96.029 94.0307 99.7182 91.4606 104.146C91.0046 104.866 90.6135 105.637 90.2787 106.427C88.6908 109.9 87.8421 113.679 88.0116 117.211C88.0556 118.045 88.5466 118.571 89.1487 118.811C89.5304 119.852 90.608 120.528 91.7392 119.875Z"
            fill="currentColor"
          ></path>
          <path
            d="M120.64 39.1674C120.558 38.0966 119.523 36.9737 118.342 37.4097C113.844 39.0417 110.018 42.7309 107.447 47.1591C106.991 47.8789 106.6 48.6496 106.266 49.4395C104.678 52.9129 103.829 56.692 103.998 60.224C104.042 61.0574 104.533 61.5833 105.136 61.8232C105.523 62.8549 106.611 63.5368 107.742 62.8836C112.023 60.413 116.583 58.1839 118.932 53.6013C121.21 49.166 121.029 43.9979 120.64 39.1674Z"
            fill="currentColor"
          ></path>
          <path
            d="M115.19 82.779C113.603 86.2525 112.754 90.0316 112.923 93.5635C112.967 94.397 113.458 94.9228 114.061 95.1628C114.448 96.1945 115.536 96.8763 116.667 96.2232C120.948 93.7526 125.508 91.5234 127.857 86.9409C130.141 82.4955 129.97 77.3332 129.581 72.5027C129.489 71.426 128.464 70.309 127.283 70.7449C122.785 72.377 118.958 76.0662 116.388 80.4944C115.921 81.2344 115.525 81.9892 115.19 82.779Z"
            fill="currentColor"
          ></path>
          <path
            d="M74.484 60.0984C74.528 60.9318 75.0189 61.4577 75.6211 61.6976C76.0085 62.7293 77.0962 63.4112 78.2275 62.758C82.5089 60.2874 87.0684 58.0583 89.4179 53.4757C91.7016 49.0304 91.5308 43.868 91.1414 39.0375C91.0493 37.9608 90.0243 36.8439 88.8434 37.2798C84.3458 38.9118 80.519 42.601 77.9489 47.0292C77.4929 47.749 77.1018 48.5198 76.767 49.3096C75.1472 52.7916 74.3044 56.5606 74.484 60.0984Z"
            fill="currentColor"
          ></path>
          <path
            d="M40.2479 112.516C40.1557 111.439 39.1307 110.322 37.9498 110.758C33.4522 112.39 29.6255 116.079 27.0554 120.507C26.5994 121.227 26.2082 121.998 25.8734 122.788C24.2855 126.261 23.4369 130.04 23.6063 133.572C23.6503 134.406 24.1413 134.931 24.7435 135.171C25.1309 136.203 26.2186 136.885 27.3498 136.232C31.6312 133.761 36.1908 131.532 38.5402 126.949C40.8181 122.514 40.6372 117.346 40.2479 112.516Z"
            fill="currentColor"
          ></path>
          <path
            d="M84.6488 138.245C84.5566 137.168 83.5316 136.051 82.3506 136.487C77.8531 138.119 74.0263 141.808 71.4562 146.236C71.0002 146.956 70.6091 147.727 70.2743 148.517C68.6864 151.99 67.8377 155.769 68.0072 159.301C68.0512 160.135 68.5421 160.66 69.1443 160.9C69.5317 161.932 70.6195 162.614 71.7507 161.961C76.0321 159.49 80.5917 157.261 82.9411 152.678C85.219 148.243 85.0381 143.075 84.6488 138.245Z"
            fill="currentColor"
          ></path>
          <path
            d="M53.283 141.185C53.1909 140.108 52.1659 138.991 50.985 139.427C46.4874 141.059 42.6606 144.748 40.0905 149.176C39.6345 149.896 39.2434 150.667 38.9086 151.457C37.3207 154.93 36.4721 158.709 36.6415 162.241C36.6855 163.075 37.1765 163.6 37.7786 163.84C38.1661 164.872 39.2538 165.554 40.3851 164.901C44.6665 162.43 49.226 160.201 51.5754 155.618C53.8592 151.173 53.6723 146.015 53.283 141.185Z"
            fill="currentColor"
          ></path>
          <path
            d="M79.1773 106.037C69.1204 106.359 64.852 119.233 64.3217 127.546C64.2596 128.493 64.817 129.044 65.5163 129.232C65.8747 129.964 66.7173 130.464 67.6238 130.247C71.9017 129.229 75.5501 126.945 77.9148 123.152C80.858 118.428 79.5856 113.424 80.9623 108.334C81.2653 107.203 80.3608 105.993 79.1773 106.037ZM76.8771 110.931C76.6017 110.732 76.2753 110.597 75.9326 110.561C76.2617 110.387 76.5994 110.246 76.9414 110.12C76.9199 110.39 76.8927 110.671 76.8771 110.931ZM74.7336 121.222C75.2239 120.279 75.5898 119.319 75.8792 118.328C75.9885 118.162 76.0674 117.978 76.1665 117.807C75.8397 119.072 75.3587 120.209 74.7336 121.222Z"
            fill="currentColor"
          ></path>
          <path
            d="M81.3056 94.4454C81.8249 96.4151 84.532 95.9714 84.8647 94.3455C90.5106 93.4303 92.8438 90.8585 96.1091 86.2526C99.7747 81.0698 98.3637 75.6763 98.7029 69.6772C98.7694 68.3958 97.4863 67.7493 96.4049 67.9195C90.6172 68.8471 87.1984 72.1793 84.8231 77.3664C81.9673 83.5958 79.5275 87.6818 81.3056 94.4454Z"
            fill="currentColor"
          ></path>
          <path
            d="M126.696 116.733C126.604 115.656 125.579 114.539 124.398 114.975C119.9 116.607 116.074 120.296 113.504 124.725C113.048 125.444 112.656 126.215 112.322 127.005C110.734 130.478 109.885 134.257 110.055 137.789C110.099 138.623 110.59 139.149 111.192 139.389C111.579 140.42 112.667 141.102 113.798 140.449C118.08 137.979 122.639 135.749 124.988 131.167C127.266 126.731 127.085 121.563 126.696 116.733Z"
            fill="currentColor"
          ></path>
          <path
            d="M158.401 158.363C162.683 155.892 167.242 153.663 169.592 149.081C171.875 144.635 171.705 139.473 171.315 134.643C171.223 133.566 170.198 132.449 169.017 132.885C164.52 134.517 160.693 138.206 158.123 142.634C157.667 143.354 157.276 144.125 156.941 144.915C155.353 148.388 154.504 152.167 154.674 155.699C154.718 156.533 155.209 157.058 155.811 157.298C156.192 158.34 157.27 159.016 158.401 158.363Z"
            fill="currentColor"
          ></path>
          <path
            d="M187.302 77.6547C187.22 76.5839 186.185 75.461 185.004 75.897C180.506 77.529 176.68 81.2182 174.11 85.6464C173.654 86.3662 173.262 87.137 172.928 87.9268C171.34 91.4002 170.491 95.1793 170.661 98.7113C170.705 99.5447 171.196 100.071 171.798 100.311C172.185 101.342 173.273 102.024 174.404 101.371C178.685 98.9004 183.245 96.6712 185.594 92.0886C187.872 87.6534 187.691 82.4852 187.302 77.6547Z"
            fill="currentColor"
          ></path>
          <path
            d="M181.853 121.266C180.265 124.74 179.416 128.519 179.585 132.051C179.629 132.884 180.12 133.41 180.723 133.65C181.11 134.682 182.198 135.364 183.329 134.71C187.61 132.24 192.17 130.011 194.519 125.428C196.803 120.983 196.632 115.821 196.243 110.99C196.151 109.913 195.126 108.796 193.945 109.232C189.447 110.864 185.621 114.553 183.05 118.982C182.583 119.722 182.187 120.476 181.853 121.266Z"
            fill="currentColor"
          ></path>
          <path
            d="M136.509 105.942C136.553 106.775 137.044 107.301 137.646 107.541C138.033 108.573 139.121 109.254 140.252 108.601C144.534 106.131 149.093 103.902 151.443 99.319C153.727 94.8736 153.556 89.7113 153.166 84.8808C153.074 83.8041 152.049 82.6871 150.868 83.1231C146.371 84.7551 142.544 88.4442 139.974 92.8725C139.518 93.5923 139.127 94.363 138.792 95.1528C137.172 98.6349 136.329 102.404 136.509 105.942Z"
            fill="currentColor"
          ></path>
          <path
            d="M106.91 151.003C106.818 149.927 105.793 148.81 104.612 149.246C100.114 150.878 96.2876 154.567 93.7175 158.995C93.2615 159.715 92.8703 160.486 92.5355 161.275C90.9476 164.749 90.099 168.528 90.2684 172.06C90.3124 172.893 90.8034 173.419 91.4056 173.659C91.793 174.691 92.8807 175.373 94.012 174.72C98.2934 172.249 102.853 170.02 105.202 165.437C107.48 161.002 107.299 155.834 106.91 151.003Z"
            fill="currentColor"
          ></path>
          <path
            d="M154.462 178.457C154.37 177.381 153.345 176.264 152.164 176.7C147.667 178.332 143.84 182.021 141.27 186.449C140.814 187.169 140.423 187.94 140.088 188.729C138.5 192.203 137.651 195.982 137.821 199.514C137.865 200.347 138.356 200.873 138.958 201.113C139.345 202.145 140.433 202.827 141.564 202.174C145.846 199.703 150.405 197.474 152.755 192.891C155.032 188.456 154.852 183.288 154.462 178.457Z"
            fill="currentColor"
          ></path>
          <path
            d="M119.945 179.672C119.853 178.596 118.828 177.479 117.647 177.915C113.15 179.547 109.323 183.236 106.753 187.664C106.297 188.384 105.906 189.155 105.571 189.944C103.983 193.418 103.134 197.197 103.304 200.729C103.348 201.562 103.839 202.088 104.441 202.328C104.828 203.36 105.916 204.042 107.047 203.388C111.329 200.918 115.888 198.689 118.238 194.106C120.521 189.661 120.334 184.503 119.945 179.672Z"
            fill="currentColor"
          ></path>
          <path
            d="M155.24 41.6362C155.147 40.5595 154.122 39.4425 152.942 39.8784C148.444 41.5104 144.617 45.1996 142.047 49.6278C141.591 50.3476 141.2 51.1184 140.865 51.9082C139.277 55.3817 138.429 59.1608 138.598 62.6927C138.642 63.5262 139.133 64.052 139.735 64.292C140.123 65.3237 141.21 66.0055 142.342 65.3524C146.623 62.8818 151.183 60.6526 153.532 56.0701C155.816 51.6247 155.629 46.4667 155.24 41.6362Z"
            fill="currentColor"
          ></path>
          <path
            d="M182.396 50.5815C182.304 49.5048 181.279 48.3878 180.098 48.8238C175.6 50.4558 171.773 54.1449 169.203 58.5731C168.747 59.293 168.356 60.0637 168.021 60.8535C166.433 64.327 165.585 68.1061 165.754 71.6381C165.798 72.4715 166.289 72.9974 166.891 73.2373C167.279 74.269 168.367 74.9508 169.498 74.2977C173.779 71.8271 178.339 69.5979 180.688 65.0154C182.972 60.57 182.785 55.412 182.396 50.5815Z"
            fill="currentColor"
          ></path>
          <path
            d="M75.9319 179C75.8398 177.924 74.8148 176.807 73.6339 177.243C69.1364 178.875 65.3095 182.564 62.7394 186.992C62.2834 187.712 61.8923 188.483 61.5575 189.272C59.9696 192.746 59.121 196.525 59.2904 200.057C59.3345 200.89 59.8254 201.416 60.4275 201.656C60.815 202.688 61.9027 203.37 63.034 202.717C67.3154 200.246 71.8749 198.017 74.2244 193.434C76.5081 188.989 76.3213 183.831 75.9319 179Z"
            fill="currentColor"
          ></path>
          <path
            d="M141.125 141.809C131.069 142.131 126.8 155.005 126.27 163.318C126.208 164.265 126.765 164.816 127.465 165.004C127.823 165.736 128.666 166.236 129.572 166.019C133.85 165.001 137.498 162.717 139.863 158.924C142.806 154.2 141.534 149.196 142.911 144.106C143.214 142.975 142.309 141.765 141.125 141.809ZM138.825 146.703C138.55 146.504 138.224 146.369 137.881 146.333C138.21 146.159 138.548 146.018 138.89 145.892C138.868 146.162 138.841 146.443 138.825 146.703ZM136.682 156.993C137.172 156.051 137.538 155.091 137.827 154.1C137.937 153.934 138.016 153.75 138.115 153.579C137.788 154.844 137.307 155.981 136.682 156.993Z"
            fill="currentColor"
          ></path>
          <path
            d="M147.968 132.933C148.487 134.902 151.194 134.459 151.527 132.833C157.173 131.918 159.506 129.346 162.771 124.74C166.437 119.557 165.026 114.164 165.365 108.165C165.431 106.883 164.148 106.237 163.067 106.407C157.279 107.334 153.861 110.667 151.485 115.854C148.629 122.083 146.19 126.169 147.968 132.933Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div
        data-aos="fade-right-sm"
        className="pointer-events-none absolute right-0 top-52 hidden select-none lg:block"
      >
        <svg
          className="text-quinary"
          width="166"
          height="354"
          viewBox="0 0 166 354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M287.103 141.03C270.252 128.496 241.695 127.777 236.25 107.476C232.774 94.5219 241.641 79.0283 233.901 68.0565C231.334 64.4038 227.315 62.0682 223.336 60.045C209.173 52.8617 192.933 48.2992 177.399 51.5853C165.694 54.0566 154.749 61.9324 149.603 72.4289C131.23 77.9827 111.106 77.4395 92.8563 83.7402C70.4374 91.4666 51.6305 110.627 47.0137 133.874C42.4104 157.134 53.7896 183.396 75.1765 193.648C96.346 203.792 123.911 198.414 142.039 213.311C152.794 222.137 157.573 236.123 165.558 247.53C186.252 277.077 230.316 285.917 262.254 269.106C294.178 252.309 311.817 213.433 306.426 177.761C304.294 163.734 298.482 149.503 287.103 141.03Z"
            fill="currentColor"
          ></path>
          <path
            d="M269.073 162.231C258.183 154.41 244.821 151.694 233.143 145.393C227.372 142.284 222.117 138.088 219.646 131.841C217.351 126.016 218.003 119.743 218.777 113.673C220.039 103.611 221.343 92.9377 212.598 85.7681C203.079 77.9602 188.401 73.384 176.356 71.9583C163.524 70.451 150.475 73.1261 140.25 81.3142C137.873 83.2288 135.701 85.3743 133.813 87.7777C131.464 90.7515 130.622 93.5759 126.725 94.5672C119.447 96.4411 111.992 97.4867 104.564 98.5322C90.4149 100.515 76.1163 102.592 63.3113 109.368C51.9729 115.357 42.1417 124.292 35.3386 135.195C22.3572 155.971 23.0633 183.048 38.1495 202.588C45.4685 212.052 55.4762 218.095 66.9776 221.123C79.1579 224.341 91.8814 224.708 104.062 227.872C110.661 229.583 117.125 232.217 122.42 236.562C128.803 241.804 133.08 248.987 137.099 256.075C143.481 267.373 149.918 277.72 160.414 285.637C179.289 299.867 204.885 304.498 227.725 298.822C276.46 286.696 304.935 224.056 282.706 178.988C279.515 172.51 275.075 166.875 269.358 162.435C268.041 161.416 266.181 163.25 267.511 164.282C289.401 181.282 290.867 214.985 283.372 239.563C276.297 262.77 259.785 283.681 237.013 293.037C215.015 302.081 188.672 299.908 168.277 287.768C157.142 281.142 149.09 271.813 142.694 260.665C136.339 249.584 130.486 237.839 119.107 231.076C99.119 219.208 73.6177 224.803 53.6159 212.948C31.9167 200.076 23.5657 171.193 31.9847 148.028C36.6694 135.141 45.8216 124.061 57.0242 116.28C68.3898 108.391 81.3577 104.738 94.8688 102.579C101.522 101.52 108.203 100.732 114.857 99.6457C118.034 99.1297 121.198 98.5459 124.321 97.8397C126.453 97.3645 130.16 97.1065 131.885 95.6807C132.713 94.9881 133.284 93.1685 133.895 92.2044C134.886 90.6429 136.027 89.1764 137.235 87.7777C139.639 85.0484 142.463 82.6856 145.518 80.7438C151.493 76.9145 158.282 74.8506 165.33 74.2938C178.732 73.2211 192.216 77.4985 204.043 83.514C210.901 87.0038 216.346 91.5799 217.12 99.6322C217.582 104.439 216.713 109.328 216.129 114.094C214.947 123.721 215.192 133.172 222.266 140.627C229.939 148.734 241.616 151.993 251.651 156.053C257.314 158.348 262.813 160.914 267.797 164.485C269.141 165.476 270.431 163.209 269.073 162.231Z"
            fill="#4C4C4C"
          ></path>
        </svg>
      </div>
      <div className="line-bg absolute z-20">
        <div className="container flex justify-between">
          <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
          <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
        </div>
      </div>
    </section>
    //     <section classNameName="section-md articles relative z-20 overflow-hidden after:-z-10 pt-40 pb-40">
    //     <div className="container relative z-30">
    //         <div className="flex flex-wrap mt-[-0] mr-[-1.5rem] ml-[-1.5rem] items-end justify-between pb-12">
    //             <div className="lg:w-2/3 xl:w-1/2">
    //                 <span className="mb-6 inline-block font-medium uppercase text-red-400" data-aos="fade-up-sm">Latest Articles</span>
    //                 <div data-aos="fade-up-sm" className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0">
    //                     <h2 className="font-semibold" data-aos="fade-up-sm">Take a Look at the Latest Articles from Our Blog</h2>
    //                 </div>
    //             </div>
    //             <div data-aos="fade-right-sm" className="col-auto">
    //                 <a className="btn btn-outline-primary btn-sm hover:bg-black hover:text-white" href="blog/">Browse All Articles</a>
    //             </div>
    //         </div>
    //         <div className="flex flex-wrap -mt-0 -mx-3 space-y-3">
    //             <div data-aos="fade-up-sm" className="md:col-6 lg:flex-none w-1/3 box-border  max-w-full px-3 mt-0">
    //                 <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
    //                     <a className="inline-block h-full max-h-[270px] w-full overflow-hidden" href="/blog/post-1">
    //                         <img alt="author" loading="lazy" width="408" height="262" decoding="async" data-nimg="1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 transparent"  src="../images/Article/1-1.jpg"/>
    //                     </a>
    //                     <div className="px-5 pb-12">
    //                         <div className="-mt-[30px] mb-3 flex items-center">
    //                             <a className="relative z-20 overflow-hidden rounded-full border-[6px] border-white" title="benjamin" href="/authors/benjamin">
    //                                 <img alt="benjamin" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="h-[40px] w-[40px] object-cover transparent"  src="../images/Article/1-2.jpg"/>
    //                             </a>
    //                             <a className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70" href="/authors/benjamin">benjamin</a>
    //                         </div>
    //                         <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
    //                             <a className="link-animation relative after:absolute after:inset-0" href="/blog/post-1">The Real Product From The Buyers Improvements In Overflow Basis.</a>
    //                         </h2>
    //                         <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">04 Apr, 2022</span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div data-aos="fade-up-sm" className="md:col-6 md:col-6 lg:flex-none w-1/3 box-border  max-w-full px-3 mt-0">
    //                 <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
    //                     <a className="inline-block h-full max-h-[270px] w-full overflow-hidden" href="/blog/post-2">
    //                         <img alt="author" loading="lazy" width="408" height="262" decoding="async" data-nimg="1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 transparent"  src="../images/Article/2-1.jpg"/>
    //                     </a>
    //                     <div className="px-5 pb-12">
    //                         <div className="-mt-[30px] mb-3 flex items-center">
    //                             <a className="relative z-20 overflow-hidden rounded-full border-[6px] border-white" title="Daniel Mitchell" href="/authors/daniel-mitchell">
    //                                 <img alt="Daniel Mitchell" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="h-[40px] w-[40px] object-cover transparent"  src="../images/Article/2-2.jpg"/>
    //                             </a>
    //                             <a className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70" href="/authors/daniel-mitchell">Daniel Mitchell</a>
    //                         </div>
    //                         <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
    //                             <a className="link-animation relative after:absolute after:inset-0" href="/blog/post-2">The Real Product From The Buyers Improvements In Overflow Basis.</a>
    //                         </h2>
    //                         <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">04 Apr, 2022</span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div data-aos="fade-up-sm" className="md:col-6 md:col-6 lg:flex-none w-1/3 box-border  max-w-full px-3 mt-0">
    //                 <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
    //                     <a className="inline-block h-full max-h-[270px] w-full overflow-hidden" href="/blog/post-3">
    //                         <img alt="author" loading="lazy" width="408" height="262" decoding="async" data-nimg="1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 transparent"  src="../images/Article/3-1.jpg"/>
    //                     </a>
    //                     <div className="px-5 pb-12">
    //                         <div className="-mt-[30px] mb-3 flex items-center">
    //                             <a className="relative z-20 overflow-hidden rounded-full border-[6px] border-white" title="Daniel Mitchell" href="/authors/daniel-mitchell">
    //                                 <img alt="Daniel Mitchell" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="h-[40px] w-[40px] object-cover transparent" src="../images/Article/3-2.jpg"/>
    //                             </a>
    //                             <a className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70" href="/authors/daniel-mitchell">Daniel Mitchell</a>
    //                         </div>
    //                         <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
    //                             <a className="link-animation relative after:absolute after:inset-0" href="/blog/post-3">The Real Product From The Buyers Improvements In Overflow Basis.</a>
    //                         </h2>
    //                         <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">04 Apr, 2022</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div data-aos="fade-left-sm" className="pointer-events-none absolute -left-24 bottom-0 hidden select-none lg:block">
    //         <svg className="text-secondary" width="225" height="242" viewBox="0 0 225 242" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M67.6131 84.6415C67.521 83.5649 66.4959 82.4478 65.315 82.8838C60.8175 84.5158 56.9907 88.205 54.4206 92.6332C53.9646 93.353 53.5734 94.1238 53.2386 94.9136C51.6507 98.3871 50.8021 102.166 50.9715 105.698C51.0156 106.532 51.5065 107.057 52.1087 107.297C52.4961 108.329 53.5839 109.011 54.7151 108.358C58.9965 105.887 63.556 103.658 65.9055 99.0755C68.1834 94.6402 68.0024 89.4721 67.6131 84.6415Z" fill="currentColor"></path>
    //             <path d="M91.7392 119.875C96.0206 117.405 100.58 115.175 102.93 110.593C105.213 106.147 105.042 100.985 104.653 96.1547C104.561 95.078 103.536 93.961 102.355 94.397C97.8575 96.029 94.0307 99.7182 91.4606 104.146C91.0046 104.866 90.6135 105.637 90.2787 106.427C88.6908 109.9 87.8421 113.679 88.0116 117.211C88.0556 118.045 88.5466 118.571 89.1487 118.811C89.5304 119.852 90.608 120.528 91.7392 119.875Z" fill="currentColor"></path>
    //             <path d="M120.64 39.1674C120.558 38.0966 119.523 36.9737 118.342 37.4097C113.844 39.0417 110.018 42.7309 107.447 47.1591C106.991 47.8789 106.6 48.6496 106.266 49.4395C104.678 52.9129 103.829 56.692 103.998 60.224C104.042 61.0574 104.533 61.5833 105.136 61.8232C105.523 62.8549 106.611 63.5368 107.742 62.8836C112.023 60.413 116.583 58.1839 118.932 53.6013C121.21 49.166 121.029 43.9979 120.64 39.1674Z" fill="currentColor"></path>
    //             <path d="M115.19 82.779C113.603 86.2525 112.754 90.0316 112.923 93.5635C112.967 94.397 113.458 94.9228 114.061 95.1628C114.448 96.1945 115.536 96.8763 116.667 96.2232C120.948 93.7526 125.508 91.5234 127.857 86.9409C130.141 82.4955 129.97 77.3332 129.581 72.5027C129.489 71.426 128.464 70.309 127.283 70.7449C122.785 72.377 118.958 76.0662 116.388 80.4944C115.921 81.2344 115.525 81.9892 115.19 82.779Z" fill="currentColor"></path>
    //             <path d="M74.484 60.0984C74.528 60.9318 75.0189 61.4577 75.6211 61.6976C76.0085 62.7293 77.0962 63.4112 78.2275 62.758C82.5089 60.2874 87.0684 58.0583 89.4179 53.4757C91.7016 49.0304 91.5308 43.868 91.1414 39.0375C91.0493 37.9608 90.0243 36.8439 88.8434 37.2798C84.3458 38.9118 80.519 42.601 77.9489 47.0292C77.4929 47.749 77.1018 48.5198 76.767 49.3096C75.1472 52.7916 74.3044 56.5606 74.484 60.0984Z" fill="currentColor"></path>
    //             <path d="M40.2479 112.516C40.1557 111.439 39.1307 110.322 37.9498 110.758C33.4522 112.39 29.6255 116.079 27.0554 120.507C26.5994 121.227 26.2082 121.998 25.8734 122.788C24.2855 126.261 23.4369 130.04 23.6063 133.572C23.6503 134.406 24.1413 134.931 24.7435 135.171C25.1309 136.203 26.2186 136.885 27.3498 136.232C31.6312 133.761 36.1908 131.532 38.5402 126.949C40.8181 122.514 40.6372 117.346 40.2479 112.516Z" fill="currentColor"></path>
    //             <path d="M84.6488 138.245C84.5566 137.168 83.5316 136.051 82.3506 136.487C77.8531 138.119 74.0263 141.808 71.4562 146.236C71.0002 146.956 70.6091 147.727 70.2743 148.517C68.6864 151.99 67.8377 155.769 68.0072 159.301C68.0512 160.135 68.5421 160.66 69.1443 160.9C69.5317 161.932 70.6195 162.614 71.7507 161.961C76.0321 159.49 80.5917 157.261 82.9411 152.678C85.219 148.243 85.0381 143.075 84.6488 138.245Z" fill="currentColor"></path>
    //             <path d="M53.283 141.185C53.1909 140.108 52.1659 138.991 50.985 139.427C46.4874 141.059 42.6606 144.748 40.0905 149.176C39.6345 149.896 39.2434 150.667 38.9086 151.457C37.3207 154.93 36.4721 158.709 36.6415 162.241C36.6855 163.075 37.1765 163.6 37.7786 163.84C38.1661 164.872 39.2538 165.554 40.3851 164.901C44.6665 162.43 49.226 160.201 51.5754 155.618C53.8592 151.173 53.6723 146.015 53.283 141.185Z" fill="currentColor"></path>
    //             <path d="M79.1773 106.037C69.1204 106.359 64.852 119.233 64.3217 127.546C64.2596 128.493 64.817 129.044 65.5163 129.232C65.8747 129.964 66.7173 130.464 67.6238 130.247C71.9017 129.229 75.5501 126.945 77.9148 123.152C80.858 118.428 79.5856 113.424 80.9623 108.334C81.2653 107.203 80.3608 105.993 79.1773 106.037ZM76.8771 110.931C76.6017 110.732 76.2753 110.597 75.9326 110.561C76.2617 110.387 76.5994 110.246 76.9414 110.12C76.9199 110.39 76.8927 110.671 76.8771 110.931ZM74.7336 121.222C75.2239 120.279 75.5898 119.319 75.8792 118.328C75.9885 118.162 76.0674 117.978 76.1665 117.807C75.8397 119.072 75.3587 120.209 74.7336 121.222Z" fill="currentColor"></path>
    //             <path d="M81.3056 94.4454C81.8249 96.4151 84.532 95.9714 84.8647 94.3455C90.5106 93.4303 92.8438 90.8585 96.1091 86.2526C99.7747 81.0698 98.3637 75.6763 98.7029 69.6772C98.7694 68.3958 97.4863 67.7493 96.4049 67.9195C90.6172 68.8471 87.1984 72.1793 84.8231 77.3664C81.9673 83.5958 79.5275 87.6818 81.3056 94.4454Z" fill="currentColor"></path>
    //             <path d="M126.696 116.733C126.604 115.656 125.579 114.539 124.398 114.975C119.9 116.607 116.074 120.296 113.504 124.725C113.048 125.444 112.656 126.215 112.322 127.005C110.734 130.478 109.885 134.257 110.055 137.789C110.099 138.623 110.59 139.149 111.192 139.389C111.579 140.42 112.667 141.102 113.798 140.449C118.08 137.979 122.639 135.749 124.988 131.167C127.266 126.731 127.085 121.563 126.696 116.733Z" fill="currentColor"></path>
    //             <path d="M158.401 158.363C162.683 155.892 167.242 153.663 169.592 149.081C171.875 144.635 171.705 139.473 171.315 134.643C171.223 133.566 170.198 132.449 169.017 132.885C164.52 134.517 160.693 138.206 158.123 142.634C157.667 143.354 157.276 144.125 156.941 144.915C155.353 148.388 154.504 152.167 154.674 155.699C154.718 156.533 155.209 157.058 155.811 157.298C156.192 158.34 157.27 159.016 158.401 158.363Z" fill="currentColor"></path>
    //             <path d="M187.302 77.6547C187.22 76.5839 186.185 75.461 185.004 75.897C180.506 77.529 176.68 81.2182 174.11 85.6464C173.654 86.3662 173.262 87.137 172.928 87.9268C171.34 91.4002 170.491 95.1793 170.661 98.7113C170.705 99.5447 171.196 100.071 171.798 100.311C172.185 101.342 173.273 102.024 174.404 101.371C178.685 98.9004 183.245 96.6712 185.594 92.0886C187.872 87.6534 187.691 82.4852 187.302 77.6547Z" fill="currentColor"></path>
    //             <path d="M181.853 121.266C180.265 124.74 179.416 128.519 179.585 132.051C179.629 132.884 180.12 133.41 180.723 133.65C181.11 134.682 182.198 135.364 183.329 134.71C187.61 132.24 192.17 130.011 194.519 125.428C196.803 120.983 196.632 115.821 196.243 110.99C196.151 109.913 195.126 108.796 193.945 109.232C189.447 110.864 185.621 114.553 183.05 118.982C182.583 119.722 182.187 120.476 181.853 121.266Z" fill="currentColor"></path>
    //             <path d="M136.509 105.942C136.553 106.775 137.044 107.301 137.646 107.541C138.033 108.573 139.121 109.254 140.252 108.601C144.534 106.131 149.093 103.902 151.443 99.319C153.727 94.8736 153.556 89.7113 153.166 84.8808C153.074 83.8041 152.049 82.6871 150.868 83.1231C146.371 84.7551 142.544 88.4442 139.974 92.8725C139.518 93.5923 139.127 94.363 138.792 95.1528C137.172 98.6349 136.329 102.404 136.509 105.942Z" fill="currentColor"></path>
    //             <path d="M106.91 151.003C106.818 149.927 105.793 148.81 104.612 149.246C100.114 150.878 96.2876 154.567 93.7175 158.995C93.2615 159.715 92.8703 160.486 92.5355 161.275C90.9476 164.749 90.099 168.528 90.2684 172.06C90.3124 172.893 90.8034 173.419 91.4056 173.659C91.793 174.691 92.8807 175.373 94.012 174.72C98.2934 172.249 102.853 170.02 105.202 165.437C107.48 161.002 107.299 155.834 106.91 151.003Z" fill="currentColor"></path>
    //             <path d="M154.462 178.457C154.37 177.381 153.345 176.264 152.164 176.7C147.667 178.332 143.84 182.021 141.27 186.449C140.814 187.169 140.423 187.94 140.088 188.729C138.5 192.203 137.651 195.982 137.821 199.514C137.865 200.347 138.356 200.873 138.958 201.113C139.345 202.145 140.433 202.827 141.564 202.174C145.846 199.703 150.405 197.474 152.755 192.891C155.032 188.456 154.852 183.288 154.462 178.457Z" fill="currentColor"></path>
    //             <path d="M119.945 179.672C119.853 178.596 118.828 177.479 117.647 177.915C113.15 179.547 109.323 183.236 106.753 187.664C106.297 188.384 105.906 189.155 105.571 189.944C103.983 193.418 103.134 197.197 103.304 200.729C103.348 201.562 103.839 202.088 104.441 202.328C104.828 203.36 105.916 204.042 107.047 203.388C111.329 200.918 115.888 198.689 118.238 194.106C120.521 189.661 120.334 184.503 119.945 179.672Z" fill="currentColor"></path>
    //             <path d="M155.24 41.6362C155.147 40.5595 154.122 39.4425 152.942 39.8784C148.444 41.5104 144.617 45.1996 142.047 49.6278C141.591 50.3476 141.2 51.1184 140.865 51.9082C139.277 55.3817 138.429 59.1608 138.598 62.6927C138.642 63.5262 139.133 64.052 139.735 64.292C140.123 65.3237 141.21 66.0055 142.342 65.3524C146.623 62.8818 151.183 60.6526 153.532 56.0701C155.816 51.6247 155.629 46.4667 155.24 41.6362Z" fill="currentColor"></path>
    //             <path d="M182.396 50.5815C182.304 49.5048 181.279 48.3878 180.098 48.8238C175.6 50.4558 171.773 54.1449 169.203 58.5731C168.747 59.293 168.356 60.0637 168.021 60.8535C166.433 64.327 165.585 68.1061 165.754 71.6381C165.798 72.4715 166.289 72.9974 166.891 73.2373C167.279 74.269 168.367 74.9508 169.498 74.2977C173.779 71.8271 178.339 69.5979 180.688 65.0154C182.972 60.57 182.785 55.412 182.396 50.5815Z" fill="currentColor"></path>
    //             <path d="M75.9319 179C75.8398 177.924 74.8148 176.807 73.6339 177.243C69.1364 178.875 65.3095 182.564 62.7394 186.992C62.2834 187.712 61.8923 188.483 61.5575 189.272C59.9696 192.746 59.121 196.525 59.2904 200.057C59.3345 200.89 59.8254 201.416 60.4275 201.656C60.815 202.688 61.9027 203.37 63.034 202.717C67.3154 200.246 71.8749 198.017 74.2244 193.434C76.5081 188.989 76.3213 183.831 75.9319 179Z" fill="currentColor"></path>
    //             <path d="M141.125 141.809C131.069 142.131 126.8 155.005 126.27 163.318C126.208 164.265 126.765 164.816 127.465 165.004C127.823 165.736 128.666 166.236 129.572 166.019C133.85 165.001 137.498 162.717 139.863 158.924C142.806 154.2 141.534 149.196 142.911 144.106C143.214 142.975 142.309 141.765 141.125 141.809ZM138.825 146.703C138.55 146.504 138.224 146.369 137.881 146.333C138.21 146.159 138.548 146.018 138.89 145.892C138.868 146.162 138.841 146.443 138.825 146.703ZM136.682 156.993C137.172 156.051 137.538 155.091 137.827 154.1C137.937 153.934 138.016 153.75 138.115 153.579C137.788 154.844 137.307 155.981 136.682 156.993Z" fill="currentColor"></path>
    //             <path d="M147.968 132.933C148.487 134.902 151.194 134.459 151.527 132.833C157.173 131.918 159.506 129.346 162.771 124.74C166.437 119.557 165.026 114.164 165.365 108.165C165.431 106.883 164.148 106.237 163.067 106.407C157.279 107.334 153.861 110.667 151.485 115.854C148.629 122.083 146.19 126.169 147.968 132.933Z" fill="currentColor"></path>
    //         </svg>
    //     </div>
    //     <div data-aos="fade-right-sm" className="pointer-events-none absolute right-0 top-52 hidden select-none lg:block">
    //         <svg className="text-quinary" width="166" height="354" viewBox="0 0 166 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M287.103 141.03C270.252 128.496 241.695 127.777 236.25 107.476C232.774 94.5219 241.641 79.0283 233.901 68.0565C231.334 64.4038 227.315 62.0682 223.336 60.045C209.173 52.8617 192.933 48.2992 177.399 51.5853C165.694 54.0566 154.749 61.9324 149.603 72.4289C131.23 77.9827 111.106 77.4395 92.8563 83.7402C70.4374 91.4666 51.6305 110.627 47.0137 133.874C42.4104 157.134 53.7896 183.396 75.1765 193.648C96.346 203.792 123.911 198.414 142.039 213.311C152.794 222.137 157.573 236.123 165.558 247.53C186.252 277.077 230.316 285.917 262.254 269.106C294.178 252.309 311.817 213.433 306.426 177.761C304.294 163.734 298.482 149.503 287.103 141.03Z" fill="currentColor"></path>
    //             <path d="M269.073 162.231C258.183 154.41 244.821 151.694 233.143 145.393C227.372 142.284 222.117 138.088 219.646 131.841C217.351 126.016 218.003 119.743 218.777 113.673C220.039 103.611 221.343 92.9377 212.598 85.7681C203.079 77.9602 188.401 73.384 176.356 71.9583C163.524 70.451 150.475 73.1261 140.25 81.3142C137.873 83.2288 135.701 85.3743 133.813 87.7777C131.464 90.7515 130.622 93.5759 126.725 94.5672C119.447 96.4411 111.992 97.4867 104.564 98.5322C90.4149 100.515 76.1163 102.592 63.3113 109.368C51.9729 115.357 42.1417 124.292 35.3386 135.195C22.3572 155.971 23.0633 183.048 38.1495 202.588C45.4685 212.052 55.4762 218.095 66.9776 221.123C79.1579 224.341 91.8814 224.708 104.062 227.872C110.661 229.583 117.125 232.217 122.42 236.562C128.803 241.804 133.08 248.987 137.099 256.075C143.481 267.373 149.918 277.72 160.414 285.637C179.289 299.867 204.885 304.498 227.725 298.822C276.46 286.696 304.935 224.056 282.706 178.988C279.515 172.51 275.075 166.875 269.358 162.435C268.041 161.416 266.181 163.25 267.511 164.282C289.401 181.282 290.867 214.985 283.372 239.563C276.297 262.77 259.785 283.681 237.013 293.037C215.015 302.081 188.672 299.908 168.277 287.768C157.142 281.142 149.09 271.813 142.694 260.665C136.339 249.584 130.486 237.839 119.107 231.076C99.119 219.208 73.6177 224.803 53.6159 212.948C31.9167 200.076 23.5657 171.193 31.9847 148.028C36.6694 135.141 45.8216 124.061 57.0242 116.28C68.3898 108.391 81.3577 104.738 94.8688 102.579C101.522 101.52 108.203 100.732 114.857 99.6457C118.034 99.1297 121.198 98.5459 124.321 97.8397C126.453 97.3645 130.16 97.1065 131.885 95.6807C132.713 94.9881 133.284 93.1685 133.895 92.2044C134.886 90.6429 136.027 89.1764 137.235 87.7777C139.639 85.0484 142.463 82.6856 145.518 80.7438C151.493 76.9145 158.282 74.8506 165.33 74.2938C178.732 73.2211 192.216 77.4985 204.043 83.514C210.901 87.0038 216.346 91.5799 217.12 99.6322C217.582 104.439 216.713 109.328 216.129 114.094C214.947 123.721 215.192 133.172 222.266 140.627C229.939 148.734 241.616 151.993 251.651 156.053C257.314 158.348 262.813 160.914 267.797 164.485C269.141 165.476 270.431 163.209 269.073 162.231Z" fill="#4C4C4C"></path>
    //         </svg>
    //     </div>
    //     <div className="line-bg absolute z-20">
    //         <div className="container flex justify-between">
    //             <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
    //             <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
    //             <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
    //             <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
    //             <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
    //             <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
    //         </div>
    //     </div>
    // </section>
  );
}
