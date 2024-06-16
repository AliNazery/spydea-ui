import Image from 'next/image';
import React from 'react'

export default function Innovative() {
  return (
    <>
      <section className="section-lg feature triangle-up pb-0 relative z-20 overflow-hidden pt-[100px] lg:pt-[200px] xl:pt-[300px]">
        <div className="container relative z-20 px-4 sm:px-6">
          <div className="row flex flex-wrap gy-4 items-center -mt-6 -mx-3">
            <div data-aos="fade-left-sm" className="lg:w-7/12 order-1 px-3 mt-6">
              <div className="feature-clip-path-1 relative">
                <Image
                  alt="feature image"
                  loading="lazy"
                  width="727"
                  height="613"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto block xl:mx-auto"
                  //   style="color:transparent"
                  //   srcSet="/_next/image?url=%2Fimages%2Ffeature-1.png&amp;w=750&amp;q=75 1x, /_next/image?url=%2Fimages%2Ffeature-1.png&amp;w=1920&amp;q=75 2x"
                  src="/images/innovative/feature-1.png"
                />
                <div
                  data-aos="fade-right-sm"
                  className="pointer-events-none absolute right-[100px] top-[-10px] -z-10 hidden select-none lg:block"
                >
                  <svg
                    className="text-quinary"
                    width="102"
                    height="311"
                    viewBox="0 0 102 311"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M92.2521 104.973C75.4018 81.8673 56.9239 60.1023 36.9142 39.7096C38.1588 38.7522 39.4034 37.7948 40.648 36.8374C65.0618 75.3889 85.263 116.398 101.028 159.257C101.826 161.428 98.5071 163.438 97.071 161.555C62.796 117.961 29.4464 73.6336 -2.91385 28.6037C-4.701 26.1145 -0.616074 23.8167 1.203 26.2102C37.3929 74.4634 69.1787 125.844 96.2413 179.746C97.6136 182.49 93.8797 184.661 92.1244 182.139C50.5731 121.727 5.73469 63.7086 -42.2632 8.27488C-41.0185 7.31747 -39.7739 6.36004 -38.5293 5.40264C1.87318 61.2193 40.5523 118.281 77.4442 176.491C79.1357 179.139 75.1465 181.246 73.3274 178.884C29.9251 122.493 -13.4772 66.102 -56.8795 9.74287C-55.5072 8.94503 -54.1349 8.1472 -52.7627 7.34936C-1.79686 76.8888 45.4989 149.045 88.9331 223.499C90.4969 226.18 86.5715 228.35 84.8163 225.893C36.3078 156.768 -14.9771 89.6223 -68.879 24.5827C-70.7938 22.253 -67.5386 18.9021 -65.528 21.2317C-16.7004 77.7186 25.8721 139.375 61.3599 205.053C62.8279 207.798 59.0302 209.872 57.243 207.447C5.57514 137.014 -49.5394 69.1338 -107.877 4.09422C-106.76 2.97725 -105.643 1.86027 -104.526 0.7433C-43.4439 74.2719 10.1388 153.545 63.53 232.722C62.1577 233.52 60.7854 234.318 59.4132 235.116C11.0962 163.183 -43.0929 95.5263 -97.3139 28.0293C-96.0692 27.0719 -94.8246 26.1145 -93.58 25.1571C-42.7099 93.2923 4.58582 164.044 48.052 237.126C49.3923 239.36 46.0095 242.201 44.3181 239.998C-15.9345 162.13 -78.9955 86.4309 -144.705 13.0938C-143.461 12.1364 -142.216 11.179 -140.971 10.2216C-84.5166 91.7605 -27.3596 172.821 30.4357 253.402C31.9995 255.572 28.3614 258.413 26.7019 256.274C-26.0192 188.777 -79.4742 121.855 -133.631 55.5068C-132.387 54.5494 -131.142 53.592 -129.898 52.6346C-77.7509 127.057 -27.2 202.564 21.7234 279.156C23.1595 281.39 19.7128 284.135 17.9895 282.029C-38.4654 213.287 -94.9203 144.545 -151.375 75.8038C-150.131 74.8464 -148.886 73.8889 -147.641 72.9315C-105.899 135.897 -66.1025 200.139 -28.3489 265.593C-26.7851 268.306 -30.6467 270.348 -32.4657 267.987C-85.9208 197.873 -139.408 127.791 -192.863 57.6769C-191.491 56.8791 -190.118 56.0812 -188.746 55.2834C-139.344 132.514 -89.9738 209.745 -40.5717 286.943C-41.944 287.741 -43.3163 288.539 -44.6886 289.337C-88.0589 221.042 -135.323 155.268 -186.257 92.4306C-185.012 91.4732 -183.767 90.5159 -182.523 89.5585C-142.727 146.428 -106.473 205.691 -73.9851 266.997C-72.549 269.71 -76.3786 271.912 -78.102 269.391C-121.121 206.808 -166.183 145.662 -213.224 86.048C-211.979 85.0906 -210.734 84.1332 -209.49 83.1758C-166.63 145.535 -125.717 209.234 -86.8462 274.146C-85.2506 276.795 -89.2397 279.029 -90.9631 276.539C-124.153 228.414 -157.375 180.288 -190.565 132.163C-189.193 131.365 -187.82 130.567 -186.448 129.769C-155.396 182.873 -125.174 236.456 -95.782 290.517C-94.314 293.198 -98.2713 295.496 -99.8988 292.911C-129.898 245.073 -161.747 198.447 -195.416 153.13C-194.044 152.332 -192.671 151.534 -191.299 150.737C-158.588 201.032 -128.812 253.147 -102.133 306.889C-100.792 309.602 -104.718 311.963 -106.25 309.283C-136.089 256.817 -169.981 206.745 -207.671 159.577C-206.426 158.619 -205.181 157.662 -203.937 156.704C-187.055 194.713 -168.896 232.148 -149.46 268.944C-148.024 271.657 -152.141 274.05 -153.577 271.337C-172.981 234.541 -191.171 197.107 -208.054 159.098C-209.043 156.864 -206.171 153.928 -204.32 156.226C-166.375 203.713 -132.195 254.072 -102.165 306.889C-103.537 307.687 -104.909 308.485 -106.282 309.283C-132.961 255.54 -162.736 203.426 -195.448 153.13C-197.139 150.513 -193.118 148.343 -191.331 150.737C-157.662 196.054 -125.813 242.711 -95.8139 290.517C-97.1862 291.315 -98.5585 292.113 -99.9308 292.911C-129.291 238.85 -159.513 185.267 -190.597 132.163C-192.161 129.482 -188.203 127.28 -186.48 129.769C-153.29 177.895 -120.068 226.02 -86.8782 274.146C-88.2504 274.944 -89.6227 275.742 -90.995 276.539C-129.898 211.627 -170.779 147.928 -213.638 85.5693C-215.138 83.3672 -211.596 80.5588 -209.905 82.697C-162.609 142.599 -117.292 204.064 -74.049 266.997C-75.4212 267.795 -76.7935 268.593 -78.1658 269.391C-110.686 208.085 -146.939 148.822 -186.703 91.952C-188.235 89.7819 -184.661 86.9734 -182.97 89.0797C-131.78 152.236 -84.2293 218.297 -40.6356 286.943C-38.9761 289.528 -43.0929 291.922 -44.7524 289.337C-94.1544 212.106 -143.525 134.876 -192.927 57.6769C-194.618 55.0281 -190.629 52.9218 -188.81 55.2834C-135.355 125.397 -81.8677 195.479 -28.4127 265.593C-29.785 266.391 -31.1573 267.189 -32.5295 267.987C-70.2832 202.532 -110.079 138.29 -151.822 75.325C-153.29 73.123 -149.811 70.3466 -148.088 72.4528C-91.6333 141.194 -35.1783 209.936 21.2766 278.678C20.0319 279.635 18.7873 280.592 17.5427 281.55C-31.3806 204.989 -81.9316 129.45 -134.078 55.0281C-135.61 52.858 -132.068 50.0496 -130.344 52.1559C-76.1871 118.504 -22.7321 185.426 29.9889 252.923C28.7443 253.881 27.4997 254.838 26.2551 255.796C-31.5402 175.214 -88.6972 94.154 -145.152 12.6151C-146.684 10.4131 -143.205 7.73232 -141.418 9.74287C-75.7085 83.08 -12.6474 158.747 47.6052 236.648C46.3605 237.605 45.1159 238.562 43.8713 239.52C0.405151 166.438 -46.8906 95.6858 -97.7607 27.5506C-99.3563 25.4124 -95.7182 22.5721 -94.0268 24.6784C-39.5505 92.4945 14.9258 160.438 63.4342 232.722C65.1576 235.275 61.0407 237.637 59.3174 235.116C6.14958 156.258 -47.1778 77.3356 -108.005 4.12612C-109.92 1.79644 -106.696 -1.52257 -104.654 0.775196C-46.0608 66.102 9.2771 134.301 61.2003 205.085C59.828 205.883 58.4557 206.681 57.0835 207.479C21.7872 142.152 -20.4982 80.8141 -69.0385 24.6146C-67.9216 23.4976 -66.8046 22.3806 -65.6876 21.2636C-11.5305 86.5905 40.0098 154.087 88.7416 223.531C87.3693 224.329 85.9971 225.127 84.6248 225.925C41.1906 151.471 -6.1052 79.3142 -57.071 9.77481C-58.8901 7.28556 -54.8051 5.01971 -52.9542 7.3813C-9.55185 63.7724 33.8505 120.163 77.2528 176.523C75.8805 177.32 74.5082 178.118 73.1359 178.916C36.244 120.706 -2.43516 63.6766 -42.8376 7.82809C-44.4014 5.65798 -40.8589 2.91339 -39.1037 4.95585C9.14944 60.6767 54.2432 119.046 96.0179 179.778C94.6456 180.576 93.2733 181.373 91.9011 182.171C64.8384 128.269 33.0207 76.9207 -3.13725 28.6356C-1.76497 27.8378 -0.392677 27.04 0.979599 26.2421C33.1165 70.9529 66.1788 114.962 100.199 158.236C98.8901 159.002 97.5497 159.768 96.2413 160.534C80.6356 118.057 60.562 77.4632 36.3397 39.2628C34.9036 36.965 38.1907 34.4758 40.0736 36.3906C60.3705 57.0705 79.0718 79.1866 96.1455 102.611C98.1561 105.068 94.0392 107.43 92.2521 104.973Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div
                  data-aos="fade-left-sm"
                  className="pointer-events-none absolute bottom-[130px] left-0 -z-10 hidden select-none lg:block"
                >
                  <svg
                    className="text-secondary"
                    width="166"
                    height="355"
                    viewBox="0 0 166 355"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M286.93 141.03C270.079 128.497 241.522 127.777 236.077 107.477C232.601 94.5224 241.468 79.0288 233.728 68.057C231.161 64.4043 227.142 62.0687 223.163 60.0455C209.001 52.8622 192.76 48.2997 177.226 51.5858C165.521 54.0571 154.576 61.9329 149.43 72.4294C131.057 77.9832 110.934 77.44 92.6834 83.7407C70.2646 91.4671 51.4577 110.627 46.8408 133.874C42.2376 157.135 53.6168 183.397 75.0036 193.649C96.1732 203.792 123.738 198.415 141.866 213.311C152.621 222.137 157.401 236.124 165.385 247.53C186.079 277.078 230.143 285.918 262.081 269.107C294.005 252.31 311.644 213.433 306.253 177.761C304.121 163.734 298.309 149.504 286.93 141.03Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M269.073 163.232C258.183 155.41 244.821 152.694 233.143 146.394C227.372 143.284 222.117 139.088 219.646 132.842C217.351 127.017 218.003 120.743 218.777 114.673C220.039 104.611 221.343 93.9382 212.598 86.7685C203.079 78.9607 188.401 74.3845 176.356 72.9588C163.524 71.4515 150.475 74.1265 140.25 82.3146C137.873 84.2293 135.701 86.3747 133.813 88.7782C131.464 91.752 130.622 94.5764 126.725 95.5677C119.447 97.4416 111.992 98.4871 104.564 99.5327C90.4149 101.515 76.1163 103.593 63.3113 110.369C51.9729 116.357 42.1417 125.292 35.3386 136.196C22.3572 156.972 23.0633 184.048 38.1495 203.588C45.4685 213.053 55.4762 219.095 66.9776 222.123C79.1579 225.342 91.8814 225.708 104.062 228.872C110.661 230.583 117.125 233.217 122.42 237.563C128.803 242.804 133.08 249.987 137.099 257.076C143.481 268.373 149.918 278.721 160.414 286.637C179.289 300.868 204.885 305.498 227.725 299.822C276.46 287.696 304.935 225.057 282.706 179.988C279.515 173.511 275.075 167.876 269.358 163.435C268.041 162.417 266.181 164.25 267.511 165.282C289.401 182.283 290.867 215.986 283.372 240.564C276.297 263.77 259.785 284.682 237.013 294.038C215.015 303.081 188.672 300.909 168.277 288.769C157.142 282.142 149.09 272.814 142.694 261.665C136.339 250.585 130.486 238.839 119.107 232.077C99.119 220.209 73.6177 225.803 53.6159 213.949C31.9167 201.076 23.5657 172.194 31.9847 149.028C36.6694 136.142 45.8216 125.061 57.0242 117.28C68.3898 109.391 81.3577 105.738 94.8688 103.579C101.522 102.52 108.203 101.732 114.857 100.646C118.034 100.13 121.198 99.5463 124.321 98.8402C126.453 98.365 130.16 98.1069 131.885 96.6812C132.713 95.9886 133.284 94.169 133.895 93.2049C134.886 91.6433 136.027 90.1769 137.235 88.7782C139.639 86.0489 142.463 83.6861 145.518 81.7443C151.493 77.915 158.282 75.851 165.33 75.2943C178.732 74.2216 192.216 78.499 204.043 84.5145C210.901 88.0042 216.346 92.5803 217.12 100.633C217.582 105.44 216.713 110.328 216.129 115.094C214.947 124.722 215.192 134.173 222.266 141.627C229.939 149.734 241.616 152.993 251.651 157.053C257.314 159.348 262.813 161.914 267.797 165.486C269.141 166.477 270.431 164.209 269.073 163.232Z"
                      fill="#4C4C4C"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 order-2 px-3 mt-6">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-right-sm"
              >
                INNOVATIVE STRATEGIES
              </span>
              <div
                data-aos="fade-right-sm"
                className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
              >
                <h2
                  className="font-semibold text-h2 md:text-mdh2"
                  data-aos="fade-right-sm"
                  data-aos-delay="100"
                >
                  Take Your Marketing to the Next Level.
                </h2>
              </div>
              <p
                className="pl-6 text-lg"
                data-aos="fade-right-sm"
                data-aos-delay="150"
              >
                Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit
                imperdiet et, porttitor at sem. Pellentesque in ipsum id orci
                porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                Proin eget elementum sed sit amet dui. Nulla porttitor accumsan
                tincidunt. Proin eget tortor risus.
              </p>
            </div>
          </div>
        </div>
        <div className="line-bg absolute left-0 top-1/2 z-10 flex h-full w-full -translate-y-1/2 justify-between">
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
      {/* COLLABORATIVE SOLUTIONS */}
      {/* <section className="section-lg feature triangle-down pt-32 relative z-20 overflow-hidden">
        <div className="container relative z-20">
          <div className="flex flex-wrap gy-4 items-center">
            <div data-aos="fade-left-sm" className="lg:col-7 order-2">
              <div className="feature-clip-path-2 relative">
                <img
                  alt="feature image"
                  loading="lazy"
                  width="727"
                  height="613"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto block"
                  src="../images/Innovative/feature-2.png"
                />
                <div
                  data-aos="fade-right-sm"
                  className="pointer-events-none absolute right-[100px] top-[-10px] -z-10 hidden select-none lg:block"
                >
                  <svg
                    className="text-quinary"
                    width="102"
                    height="311"
                    viewBox="0 0 102 311"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M92.2521 104.973C75.4018 81.8673 56.9239 60.1023 36.9142 39.7096C38.1588 38.7522 39.4034 37.7948 40.648 36.8374C65.0618 75.3889 85.263 116.398 101.028 159.257C101.826 161.428 98.5071 163.438 97.071 161.555C62.796 117.961 29.4464 73.6336 -2.91385 28.6037C-4.701 26.1145 -0.616074 23.8167 1.203 26.2102C37.3929 74.4634 69.1787 125.844 96.2413 179.746C97.6136 182.49 93.8797 184.661 92.1244 182.139C50.5731 121.727 5.73469 63.7086 -42.2632 8.27488C-41.0185 7.31747 -39.7739 6.36004 -38.5293 5.40264C1.87318 61.2193 40.5523 118.281 77.4442 176.491C79.1357 179.139 75.1465 181.246 73.3274 178.884C29.9251 122.493 -13.4772 66.102 -56.8795 9.74287C-55.5072 8.94503 -54.1349 8.1472 -52.7627 7.34936C-1.79686 76.8888 45.4989 149.045 88.9331 223.499C90.4969 226.18 86.5715 228.35 84.8163 225.893C36.3078 156.768 -14.9771 89.6223 -68.879 24.5827C-70.7938 22.253 -67.5386 18.9021 -65.528 21.2317C-16.7004 77.7186 25.8721 139.375 61.3599 205.053C62.8279 207.798 59.0302 209.872 57.243 207.447C5.57514 137.014 -49.5394 69.1338 -107.877 4.09422C-106.76 2.97725 -105.643 1.86027 -104.526 0.7433C-43.4439 74.2719 10.1388 153.545 63.53 232.722C62.1577 233.52 60.7854 234.318 59.4132 235.116C11.0962 163.183 -43.0929 95.5263 -97.3139 28.0293C-96.0692 27.0719 -94.8246 26.1145 -93.58 25.1571C-42.7099 93.2923 4.58582 164.044 48.052 237.126C49.3923 239.36 46.0095 242.201 44.3181 239.998C-15.9345 162.13 -78.9955 86.4309 -144.705 13.0938C-143.461 12.1364 -142.216 11.179 -140.971 10.2216C-84.5166 91.7605 -27.3596 172.821 30.4357 253.402C31.9995 255.572 28.3614 258.413 26.7019 256.274C-26.0192 188.777 -79.4742 121.855 -133.631 55.5068C-132.387 54.5494 -131.142 53.592 -129.898 52.6346C-77.7509 127.057 -27.2 202.564 21.7234 279.156C23.1595 281.39 19.7128 284.135 17.9895 282.029C-38.4654 213.287 -94.9203 144.545 -151.375 75.8038C-150.131 74.8464 -148.886 73.8889 -147.641 72.9315C-105.899 135.897 -66.1025 200.139 -28.3489 265.593C-26.7851 268.306 -30.6467 270.348 -32.4657 267.987C-85.9208 197.873 -139.408 127.791 -192.863 57.6769C-191.491 56.8791 -190.118 56.0812 -188.746 55.2834C-139.344 132.514 -89.9738 209.745 -40.5717 286.943C-41.944 287.741 -43.3163 288.539 -44.6886 289.337C-88.0589 221.042 -135.323 155.268 -186.257 92.4306C-185.012 91.4732 -183.767 90.5159 -182.523 89.5585C-142.727 146.428 -106.473 205.691 -73.9851 266.997C-72.549 269.71 -76.3786 271.912 -78.102 269.391C-121.121 206.808 -166.183 145.662 -213.224 86.048C-211.979 85.0906 -210.734 84.1332 -209.49 83.1758C-166.63 145.535 -125.717 209.234 -86.8462 274.146C-85.2506 276.795 -89.2397 279.029 -90.9631 276.539C-124.153 228.414 -157.375 180.288 -190.565 132.163C-189.193 131.365 -187.82 130.567 -186.448 129.769C-155.396 182.873 -125.174 236.456 -95.782 290.517C-94.314 293.198 -98.2713 295.496 -99.8988 292.911C-129.898 245.073 -161.747 198.447 -195.416 153.13C-194.044 152.332 -192.671 151.534 -191.299 150.737C-158.588 201.032 -128.812 253.147 -102.133 306.889C-100.792 309.602 -104.718 311.963 -106.25 309.283C-136.089 256.817 -169.981 206.745 -207.671 159.577C-206.426 158.619 -205.181 157.662 -203.937 156.704C-187.055 194.713 -168.896 232.148 -149.46 268.944C-148.024 271.657 -152.141 274.05 -153.577 271.337C-172.981 234.541 -191.171 197.107 -208.054 159.098C-209.043 156.864 -206.171 153.928 -204.32 156.226C-166.375 203.713 -132.195 254.072 -102.165 306.889C-103.537 307.687 -104.909 308.485 -106.282 309.283C-132.961 255.54 -162.736 203.426 -195.448 153.13C-197.139 150.513 -193.118 148.343 -191.331 150.737C-157.662 196.054 -125.813 242.711 -95.8139 290.517C-97.1862 291.315 -98.5585 292.113 -99.9308 292.911C-129.291 238.85 -159.513 185.267 -190.597 132.163C-192.161 129.482 -188.203 127.28 -186.48 129.769C-153.29 177.895 -120.068 226.02 -86.8782 274.146C-88.2504 274.944 -89.6227 275.742 -90.995 276.539C-129.898 211.627 -170.779 147.928 -213.638 85.5693C-215.138 83.3672 -211.596 80.5588 -209.905 82.697C-162.609 142.599 -117.292 204.064 -74.049 266.997C-75.4212 267.795 -76.7935 268.593 -78.1658 269.391C-110.686 208.085 -146.939 148.822 -186.703 91.952C-188.235 89.7819 -184.661 86.9734 -182.97 89.0797C-131.78 152.236 -84.2293 218.297 -40.6356 286.943C-38.9761 289.528 -43.0929 291.922 -44.7524 289.337C-94.1544 212.106 -143.525 134.876 -192.927 57.6769C-194.618 55.0281 -190.629 52.9218 -188.81 55.2834C-135.355 125.397 -81.8677 195.479 -28.4127 265.593C-29.785 266.391 -31.1573 267.189 -32.5295 267.987C-70.2832 202.532 -110.079 138.29 -151.822 75.325C-153.29 73.123 -149.811 70.3466 -148.088 72.4528C-91.6333 141.194 -35.1783 209.936 21.2766 278.678C20.0319 279.635 18.7873 280.592 17.5427 281.55C-31.3806 204.989 -81.9316 129.45 -134.078 55.0281C-135.61 52.858 -132.068 50.0496 -130.344 52.1559C-76.1871 118.504 -22.7321 185.426 29.9889 252.923C28.7443 253.881 27.4997 254.838 26.2551 255.796C-31.5402 175.214 -88.6972 94.154 -145.152 12.6151C-146.684 10.4131 -143.205 7.73232 -141.418 9.74287C-75.7085 83.08 -12.6474 158.747 47.6052 236.648C46.3605 237.605 45.1159 238.562 43.8713 239.52C0.405151 166.438 -46.8906 95.6858 -97.7607 27.5506C-99.3563 25.4124 -95.7182 22.5721 -94.0268 24.6784C-39.5505 92.4945 14.9258 160.438 63.4342 232.722C65.1576 235.275 61.0407 237.637 59.3174 235.116C6.14958 156.258 -47.1778 77.3356 -108.005 4.12612C-109.92 1.79644 -106.696 -1.52257 -104.654 0.775196C-46.0608 66.102 9.2771 134.301 61.2003 205.085C59.828 205.883 58.4557 206.681 57.0835 207.479C21.7872 142.152 -20.4982 80.8141 -69.0385 24.6146C-67.9216 23.4976 -66.8046 22.3806 -65.6876 21.2636C-11.5305 86.5905 40.0098 154.087 88.7416 223.531C87.3693 224.329 85.9971 225.127 84.6248 225.925C41.1906 151.471 -6.1052 79.3142 -57.071 9.77481C-58.8901 7.28556 -54.8051 5.01971 -52.9542 7.3813C-9.55185 63.7724 33.8505 120.163 77.2528 176.523C75.8805 177.32 74.5082 178.118 73.1359 178.916C36.244 120.706 -2.43516 63.6766 -42.8376 7.82809C-44.4014 5.65798 -40.8589 2.91339 -39.1037 4.95585C9.14944 60.6767 54.2432 119.046 96.0179 179.778C94.6456 180.576 93.2733 181.373 91.9011 182.171C64.8384 128.269 33.0207 76.9207 -3.13725 28.6356C-1.76497 27.8378 -0.392677 27.04 0.979599 26.2421C33.1165 70.9529 66.1788 114.962 100.199 158.236C98.8901 159.002 97.5497 159.768 96.2413 160.534C80.6356 118.057 60.562 77.4632 36.3397 39.2628C34.9036 36.965 38.1907 34.4758 40.0736 36.3906C60.3705 57.0705 79.0718 79.1866 96.1455 102.611C98.1561 105.068 94.0392 107.43 92.2521 104.973Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div
                  data-aos="fade-left-sm"
                  className="pointer-events-none absolute bottom-[130px] left-0 -z-10 hidden select-none lg:block"
                >
                  <svg
                    className="text-secondary"
                    width="166"
                    height="355"
                    viewBox="0 0 166 355"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M286.93 141.03C270.079 128.497 241.522 127.777 236.077 107.477C232.601 94.5224 241.468 79.0288 233.728 68.057C231.161 64.4043 227.142 62.0687 223.163 60.0455C209.001 52.8622 192.76 48.2997 177.226 51.5858C165.521 54.0571 154.576 61.9329 149.43 72.4294C131.057 77.9832 110.934 77.44 92.6834 83.7407C70.2646 91.4671 51.4577 110.627 46.8408 133.874C42.2376 157.135 53.6168 183.397 75.0036 193.649C96.1732 203.792 123.738 198.415 141.866 213.311C152.621 222.137 157.401 236.124 165.385 247.53C186.079 277.078 230.143 285.918 262.081 269.107C294.005 252.31 311.644 213.433 306.253 177.761C304.121 163.734 298.309 149.504 286.93 141.03Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M269.073 163.232C258.183 155.41 244.821 152.694 233.143 146.394C227.372 143.284 222.117 139.088 219.646 132.842C217.351 127.017 218.003 120.743 218.777 114.673C220.039 104.611 221.343 93.9382 212.598 86.7685C203.079 78.9607 188.401 74.3845 176.356 72.9588C163.524 71.4515 150.475 74.1265 140.25 82.3146C137.873 84.2293 135.701 86.3747 133.813 88.7782C131.464 91.752 130.622 94.5764 126.725 95.5677C119.447 97.4416 111.992 98.4871 104.564 99.5327C90.4149 101.515 76.1163 103.593 63.3113 110.369C51.9729 116.357 42.1417 125.292 35.3386 136.196C22.3572 156.972 23.0633 184.048 38.1495 203.588C45.4685 213.053 55.4762 219.095 66.9776 222.123C79.1579 225.342 91.8814 225.708 104.062 228.872C110.661 230.583 117.125 233.217 122.42 237.563C128.803 242.804 133.08 249.987 137.099 257.076C143.481 268.373 149.918 278.721 160.414 286.637C179.289 300.868 204.885 305.498 227.725 299.822C276.46 287.696 304.935 225.057 282.706 179.988C279.515 173.511 275.075 167.876 269.358 163.435C268.041 162.417 266.181 164.25 267.511 165.282C289.401 182.283 290.867 215.986 283.372 240.564C276.297 263.77 259.785 284.682 237.013 294.038C215.015 303.081 188.672 300.909 168.277 288.769C157.142 282.142 149.09 272.814 142.694 261.665C136.339 250.585 130.486 238.839 119.107 232.077C99.119 220.209 73.6177 225.803 53.6159 213.949C31.9167 201.076 23.5657 172.194 31.9847 149.028C36.6694 136.142 45.8216 125.061 57.0242 117.28C68.3898 109.391 81.3577 105.738 94.8688 103.579C101.522 102.52 108.203 101.732 114.857 100.646C118.034 100.13 121.198 99.5463 124.321 98.8402C126.453 98.365 130.16 98.1069 131.885 96.6812C132.713 95.9886 133.284 94.169 133.895 93.2049C134.886 91.6433 136.027 90.1769 137.235 88.7782C139.639 86.0489 142.463 83.6861 145.518 81.7443C151.493 77.915 158.282 75.851 165.33 75.2943C178.732 74.2216 192.216 78.499 204.043 84.5145C210.901 88.0042 216.346 92.5803 217.12 100.633C217.582 105.44 216.713 110.328 216.129 115.094C214.947 124.722 215.192 134.173 222.266 141.627C229.939 149.734 241.616 152.993 251.651 157.053C257.314 159.348 262.813 161.914 267.797 165.486C269.141 166.477 270.431 164.209 269.073 163.232Z"
                      fill="#4C4C4C"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="lg:flex-shrink-0 w-5/12 order-1">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-right-sm"
              >
                COLLABORATIVE SOLUTIONS
              </span>
              <div
                data-aos="fade-right-sm"
                className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
              >
                <h2
                  className="font-semibold text-4xl"
                  data-aos="fade-right-sm"
                  data-aos-delay="100"
                >
                  Choose the Right Plan for Your Team
                </h2>
              </div>
              <p
                className="pl-6 text-lg"
                data-aos="fade-right-sm"
                data-aos-delay="150"
              >
                Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit
                imperdiet et, porttitor at sem. Pellentesque in ipsum id orci
                porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                Proin eget elementum sed sit amet dui. Nulla porttitor accumsan
                tincidunt. Proin eget tortor risus.
              </p>
            </div>
          </div>
        </div>
        <div className="line-bg absolute left-0 top-1/2 z-10 flex h-full w-full -translate-y-1/2 justify-between">
          <div className="container flex justify-between">
            <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
            <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
          </div>
        </div>
        <div className="feature triangle-down relative"></div>
      </section> */}
      {/* INSPIRING TESTIMONIALS */}
          </>
  );
}
