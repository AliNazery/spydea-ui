"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { CountUp } from "countup.js";

export default function Acheivement() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

   const countUpRefs = [
     useRef<HTMLSpanElement | null>(null),
     useRef<HTMLSpanElement | null>(null),
     useRef<HTMLSpanElement | null>(null),
   ];

  useEffect(() => {
    if (inView1 && countUpRefs[0].current) {
      new CountUp(countUpRefs[0].current, 94).start();
    }
    if (inView2 && countUpRefs[1].current) {
      new CountUp(countUpRefs[1].current, 70).start();
    }
    if (inView3 && countUpRefs[2].current) {
      new CountUp(countUpRefs[2].current, 10).start();
    }
  }, [inView1, inView2, inView3]);

  return (
    <section className="section relative z-20 overflow-hidden py-[60px] md:py-[100px]">
      <div className="container sm:px-6">
        <div data-aos="fade-up-sm" className="row pb-12 text-center">
          <div className="mx-auto lg:w-8/12 px-3 lg:mx-auto">
            <span
              className="mb-6 inline-block font-medium uppercase text-red-400"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              ACHIEVING EXCELLENCE
            </span>
            <h2
              className="mb-6 font-semibold text-h2 md:text-mdh2"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              A Few Numbers We are Proud
            </h2>
            <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">
              Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus
              accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
              elementum
            </p>
          </div>
        </div>
        <div className="row relative -mx-3 flex flex-wrap">
          <div className="w-full flex-none px-3">
            <ul className="list-dotted-line-separator shadow-default flex flex-col md:h-full justify-center gap-6 rounded-2xl bg-white px-12 py-10 sm:py-14 md:flex-row md:justify-between md:gap-0">
              <li ref={ref1} className="text-center md:pr-10 lg:pr-22 xl:pr-26">
                <span className="mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
                  <span ref={countUpRefs[0]}>94</span>%
                </span>
                <div className="text-dark md:text-h6 xl:text-h4">
                  Client Retention
                </div>
              </li>
              <li className="hidden  md:block">
                <img
                  className="h-[116px] lg:h-[90px] xl:h-[124px]"
                  src="../images/about/line.svg"
                  alt=""
                />
              </li>
              <li ref={ref2} className="text-center md:pr-10 lg:pr-23 xl:pr-27">
                <span className="mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
                  <span ref={countUpRefs[1]}>70</span>
                  M+
                </span>
                <div className="text-dark md:text-h6 xl:text-h4">
                  Emails Per Month
                </div>
              </li>
              <li className="hidden md:block">
                <img
                  className="h-[116px] lg:h-[90px] xl:h-[124px]"
                  src="../images/about/line.svg"
                  alt=""
                />
              </li>
              <li ref={ref3} className="text-center md:pr-10 lg:pr-23 xl:pr-27">
                <span className="mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
                  <span ref={countUpRefs[2]}>10</span>
                  K+
                </span>
                <div className="text-dark md:text-h6 xl:text-h4">
                  Monthly Campaigns
                </div>
              </li>
            </ul>
            <div
              data-aos="fade-up-md"
              data-aos-delay="50"
              className="pointer-events-none absolute bottom-[-55px] left-[-30px] -z-10 hidden select-none lg:block"
            >
              <svg
                className="text-quinary"
                width="148"
                height="194"
                viewBox="0 0 148 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2024 87.8036C16.5843 86.9172 15.1381 86.4624 14.3333 87.4304C11.2544 91.0925 9.78487 96.2008 9.77321 101.321C9.73822 102.172 9.78484 103.035 9.88981 103.887C10.2514 107.689 11.406 111.386 13.3187 114.36C13.7735 115.06 14.4617 115.27 15.1031 115.176C15.9545 115.876 17.2375 115.923 17.8906 114.791C20.3631 110.511 23.1971 106.301 22.9405 101.158C22.6956 96.1775 19.9549 91.7923 17.2024 87.8036Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M55.7134 106.254C58.1859 101.974 61.0199 97.7637 60.7633 92.6204C60.5184 87.6287 57.7893 83.2435 55.0369 79.2548C54.4188 78.3684 52.9726 77.9135 52.1678 78.8815C49.0888 82.5437 47.6193 87.652 47.6077 92.772C47.5727 93.6234 47.6193 94.4864 47.7243 95.3378C48.0858 99.1399 49.2405 102.837 51.1532 105.811C51.608 106.511 52.2962 106.721 52.9376 106.627C53.789 107.339 55.0603 107.386 55.7134 106.254Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M40.3885 21.9086C39.782 21.0222 38.3241 20.5673 37.5194 21.5353C34.4404 25.1975 32.9709 30.3058 32.9592 35.4258C32.9243 36.2772 32.9709 37.1403 33.0758 37.9916C33.4374 41.7937 34.592 45.4908 36.5047 48.4648C36.9596 49.1646 37.6477 49.3746 38.2892 49.2813C39.1406 49.981 40.4234 50.0277 41.0765 48.8964C43.5491 44.6161 46.3832 40.4059 46.1266 35.2625C45.8816 30.2825 43.1409 25.8973 40.3885 21.9086Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M57.4745 62.4017C57.836 66.2038 58.9907 69.9009 60.9034 72.875C61.3582 73.5747 62.0464 73.7846 62.6878 73.6913C63.5392 74.3911 64.8221 74.4378 65.4753 73.3065C67.9478 69.0262 70.7818 64.8159 70.5252 59.6726C70.2803 54.6809 67.5512 50.2957 64.7988 46.307C64.1807 45.4206 62.7344 44.9658 61.9297 45.9338C58.8507 49.5959 57.3812 54.7042 57.3696 59.8242C57.3346 60.699 57.3695 61.5503 57.4745 62.4017Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.8813 63.1135C11.3361 63.8132 12.0242 64.0232 12.6657 63.9299C13.5171 64.6296 14.8 64.6763 15.4531 63.545C17.9256 59.2648 20.7597 55.0545 20.5031 49.9112C20.2582 44.9195 17.5291 40.5342 14.7766 36.5455C14.1585 35.6591 12.7124 35.2043 11.9076 36.1723C8.82864 39.8345 7.35908 44.9428 7.34742 50.0628C7.31243 50.9142 7.35912 51.7772 7.46409 52.6286C7.80231 56.454 8.95693 60.1394 10.8813 63.1135Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7.44072 125.626C6.82259 124.74 5.37637 124.285 4.57163 125.253C1.49264 128.915 0.0231535 134.023 0.0114906 139.143C-0.0234979 139.995 0.023125 140.858 0.128091 141.709C0.489639 145.511 1.64426 149.208 3.55697 152.182C4.01182 152.882 4.69996 153.092 5.34142 152.999C6.19281 153.699 7.47566 153.745 8.12878 152.614C10.6013 148.334 13.4354 144.123 13.1788 138.98C12.9339 134 10.1931 129.615 7.44072 125.626Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M58.7571 125.708C58.139 124.821 56.6928 124.367 55.888 125.335C52.809 128.997 51.3396 134.105 51.3279 139.225C51.2929 140.076 51.3395 140.94 51.4445 141.791C51.806 145.593 52.9607 149.29 54.8734 152.264C55.3282 152.964 56.0163 153.174 56.6578 153.081C57.5091 153.78 58.7921 153.827 59.4452 152.696C61.9177 148.415 64.7518 144.205 64.4952 139.062C64.2503 134.082 61.5096 129.697 58.7571 125.708Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M33.0638 143.937C32.4456 143.05 30.9995 142.595 30.1947 143.563C27.1157 147.226 25.6462 152.334 25.6345 157.454C25.5995 158.305 25.6462 159.168 25.7512 160.02C26.1127 163.822 27.2674 167.519 29.1801 170.493C29.6349 171.193 30.323 171.403 30.9645 171.309C31.8158 172.009 33.0988 172.056 33.7519 170.924C36.2244 166.644 39.0585 162.434 38.8019 157.291C38.557 152.299 35.8162 147.925 33.0638 143.937Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M37.6507 100.256C29.1019 105.563 31.8427 118.847 35.5398 126.311C35.9596 127.162 36.7177 127.361 37.4175 127.174C38.0939 127.629 39.0736 127.64 39.75 126.999C42.9457 123.978 44.9633 120.176 45.1149 115.709C45.3015 110.146 41.6977 106.449 40.3449 101.352C40.0416 100.221 38.6538 99.6263 37.6507 100.256ZM38.1056 105.644C37.7674 105.609 37.4175 105.656 37.1026 105.796C37.3008 105.481 37.5224 105.19 37.7557 104.91C37.8723 105.155 37.989 105.411 38.1056 105.644ZM41.3945 115.628C41.3478 114.566 41.1846 113.552 40.9397 112.549C40.9513 112.35 40.928 112.152 40.928 111.954C41.2779 113.214 41.4295 114.438 41.3945 115.628Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M33.9625 89.448C35.397 90.8942 37.5196 89.1564 36.9948 87.5819C41.4266 83.9664 42.1614 80.5726 42.6862 74.9511C43.2694 68.6298 39.3507 64.6644 36.6449 59.2995C36.0617 58.1566 34.6273 58.2382 33.7759 58.9263C29.2274 62.6234 27.9327 67.2186 28.4692 72.8984C29.1107 79.7212 29.0407 84.4796 33.9625 89.448Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M84.4153 86.0541C83.7972 85.1677 82.351 84.7128 81.5462 85.6809C78.4672 89.343 76.9978 94.4513 76.9861 99.5713C76.9511 100.423 76.9977 101.286 77.1027 102.137C77.4642 105.939 78.6189 109.636 80.5316 112.61C80.9864 113.31 81.6746 113.52 82.316 113.427C83.1674 114.127 84.4503 114.173 85.1035 113.042C87.576 108.762 90.41 104.551 90.1534 99.408C89.9085 94.428 87.1678 90.0428 84.4153 86.0541Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M132.688 106.254C135.161 101.974 137.995 97.7637 137.738 92.6204C137.493 87.6287 134.764 83.2435 132.012 79.2548C131.393 78.3684 129.947 77.9135 129.142 78.8815C126.063 82.5437 124.594 87.652 124.582 92.772C124.547 93.6234 124.594 94.4864 124.699 95.3378C125.06 99.1399 126.215 102.837 128.128 105.811C128.583 106.511 129.271 106.721 129.912 106.627C130.764 107.339 132.035 107.386 132.688 106.254Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M117.363 21.9086C116.757 21.0222 115.299 20.5673 114.494 21.5353C111.415 25.1975 109.946 30.3058 109.934 35.4258C109.899 36.2772 109.945 37.1403 110.05 37.9916C110.412 41.7937 111.567 45.4908 113.479 48.4648C113.934 49.1646 114.622 49.3746 115.264 49.2813C116.115 49.981 117.398 50.0277 118.051 48.8964C120.524 44.6161 123.358 40.4059 123.101 35.2625C122.856 30.2825 120.116 25.8973 117.363 21.9086Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M134.449 62.4017C134.811 66.2038 135.965 69.9009 137.878 72.875C138.333 73.5747 139.021 73.7846 139.662 73.6913C140.514 74.3911 141.797 74.4378 142.45 73.3065C144.922 69.0262 147.756 64.8159 147.5 59.6726C147.255 54.6809 144.526 50.2957 141.773 46.307C141.155 45.4206 139.709 44.9658 138.904 45.9338C135.825 49.5959 134.356 54.7042 134.344 59.8242C134.309 60.699 134.344 61.5503 134.449 62.4017Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M87.518 71.8022C87.9729 72.502 88.6609 72.7119 89.3024 72.6186C90.1538 73.3184 91.4367 73.365 92.0898 72.2337C94.5624 67.9535 97.3964 63.7432 97.1399 58.5999C96.8949 53.6082 94.1658 49.2229 91.4134 45.2342C90.7952 44.3479 89.3491 43.893 88.5443 44.861C85.4654 48.5232 83.9958 53.6315 83.9841 58.7515C83.9491 59.6029 83.9958 60.4659 84.1008 61.3173C84.439 65.1427 85.5936 68.8282 87.518 71.8022Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M84.4153 125.626C83.7972 124.74 82.351 124.285 81.5462 125.253C78.4672 128.915 76.9978 134.023 76.9861 139.143C76.9511 139.995 76.9977 140.858 77.1027 141.709C77.4642 145.511 78.6189 149.208 80.5316 152.182C80.9864 152.882 81.6746 153.092 82.316 152.999C83.1674 153.699 84.4503 153.745 85.1034 152.614C87.5759 148.334 90.41 144.123 90.1534 138.98C89.9085 134 87.1678 129.615 84.4153 125.626Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M139.324 125.626C138.706 124.74 137.26 124.285 136.455 125.253C133.376 128.915 131.906 134.023 131.895 139.143C131.86 139.995 131.906 140.858 132.011 141.709C132.373 145.511 133.528 149.208 135.44 152.182C135.895 152.882 136.583 153.092 137.225 152.999C138.076 153.699 139.359 153.745 140.012 152.614C142.485 148.334 145.319 144.123 145.062 138.98C144.817 134 142.076 129.615 139.324 125.626Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M110.038 143.937C109.42 143.05 107.974 142.595 107.169 143.563C104.09 147.226 102.621 152.334 102.609 157.454C102.574 158.305 102.621 159.168 102.726 160.02C103.087 163.822 104.242 167.519 106.155 170.493C106.61 171.193 107.298 171.403 107.939 171.309C108.79 172.009 110.073 172.056 110.727 170.924C113.199 166.644 116.033 162.434 115.777 157.291C115.532 152.299 112.791 147.925 110.038 143.937Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M71.5862 6.74695C70.9681 5.86057 69.5219 5.40571 68.7172 6.37373C65.6382 10.0359 64.1687 15.1442 64.157 20.2642C64.122 21.1156 64.1687 21.9786 64.2737 22.83C64.6352 26.6321 65.7898 30.3292 67.7025 33.3032C68.1574 34.003 68.8455 34.2129 69.4869 34.1196C70.3383 34.8194 71.6212 34.866 72.2744 33.7347C74.7469 29.4545 77.581 25.2442 77.3244 20.1009C77.0795 15.1092 74.3386 10.7356 71.5862 6.74695Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M99.5769 0.915405C98.9588 0.0290287 97.5127 -0.425831 96.7079 0.542185C93.6289 4.20432 92.1594 9.31265 92.1477 14.4326C92.1127 15.284 92.1594 16.1471 92.2644 16.9985C92.6259 20.8006 93.7806 24.4977 95.6933 27.4717C96.1481 28.1715 96.8362 28.3814 97.4776 28.2881C98.329 28.9879 99.612 29.0345 100.265 27.9032C102.738 23.6229 105.572 19.4127 105.315 14.2693C105.07 9.27764 102.329 4.9041 99.5769 0.915405Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M71.5862 165.361C70.9681 164.475 69.5219 164.02 68.7172 164.988C65.6382 168.65 64.1687 173.759 64.157 178.879C64.122 179.73 64.1687 180.593 64.2737 181.445C64.6352 185.247 65.7898 188.944 67.7025 191.918C68.1574 192.618 68.8455 192.827 69.4869 192.734C70.3383 193.434 71.6212 193.481 72.2744 192.349C74.7469 188.069 77.581 183.859 77.3244 178.715C77.0795 173.724 74.3386 169.35 71.5862 165.361Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M109.45 100.557C100.901 105.863 103.642 119.147 107.339 126.611C107.759 127.463 108.517 127.661 109.217 127.475C109.893 127.929 110.873 127.941 111.549 127.3C114.745 124.279 116.763 120.477 116.914 116.01C117.101 110.447 113.497 106.75 112.144 101.653C111.841 100.522 110.453 99.9269 109.45 100.557ZM109.905 105.945C109.567 105.91 109.217 105.957 108.902 106.096C109.1 105.782 109.322 105.49 109.555 105.21C109.672 105.455 109.788 105.712 109.905 105.945ZM113.194 115.928C113.147 114.867 112.984 113.852 112.739 112.849C112.751 112.651 112.727 112.453 112.727 112.254C113.077 113.514 113.229 114.739 113.194 115.928Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M110.937 89.448C112.372 90.8942 114.494 89.1564 113.969 87.5819C118.401 83.9664 119.136 80.5726 119.661 74.9511C120.244 68.6298 116.325 64.6644 113.62 59.2995C113.036 58.1566 111.602 58.2382 110.75 58.9263C106.202 62.6234 104.907 67.2186 105.444 72.8984C106.085 79.7212 106.015 84.4796 110.937 89.448Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div
              data-aos="fade-down-md"
              data-aos-delay="50"
              className="pointer-events-none absolute right-[-40px] top-[40px] -z-10 hidden select-none lg:block"
            >
              <svg
                className="text-secondary"
                width="181"
                height="141"
                viewBox="0 0 181 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M152.645 0.971011C146.718 -0.890515 139.614 -0.205822 135.099 4.15915C130.007 9.08043 129.6 16.5693 125.77 22.1967C124.294 24.3578 122.047 27.011 119.437 27.9953C117.832 28.5944 116.655 28.0595 115.414 27.011C113.788 25.5988 112.611 23.7159 111.434 21.9614C110.022 19.8431 108.653 17.7034 107.027 15.7349C104.737 12.9747 101.677 9.72234 97.8473 8.99485C91.1714 7.73244 88.1117 15.9275 86.4641 20.4636C83.9179 27.5246 82.4202 35.1419 78.6757 41.7535C77.9696 43.0159 77.3277 43.9788 76.1936 45.0914C75.4661 45.8189 74.5675 46.418 73.3906 46.7176C73.3478 46.739 73.3265 46.739 73.3051 46.739C73.2837 46.739 73.2409 46.739 73.1981 46.7604C73.0484 46.7818 72.8771 46.8032 72.7273 46.8246C72.5989 46.8246 72.4492 46.846 72.3208 46.846C71.9142 46.8673 72.2566 46.8673 72.0212 46.846C71.1867 46.7818 70.3523 46.5678 69.5606 46.2896C67.8489 45.6691 66.3725 44.6849 65.1743 43.4224C62.2857 40.4055 60.8092 36.2973 59.5682 32.4886C58.1346 28.0809 57.0648 23.5661 55.567 19.1798C54.1976 15.1572 52.4217 11.0704 49.362 7.92501C46.3236 4.80107 42.1298 3.32467 37.6792 3.34607C24.2847 3.38887 14.4207 13.3598 8.75057 23.8657C-10.8918 60.1976 4.12896 100.552 37.8933 123.982C47.7572 130.829 59.0761 136.071 71.1226 138.403C115.093 146.962 164.927 130.016 177.208 83.0923C182.108 64.37 183.114 44.2783 175.047 25.6844C172.694 20.2282 169.698 14.9218 165.74 10.3642C162.273 6.29885 157.951 2.63997 152.645 0.971011Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M34.2346 22.9884C27.8583 18.6662 25.2692 30.6271 24.5631 34.5213C23.0012 43.2298 23.5147 52.1523 25.526 60.7539C28.1793 72.2012 34.6411 82.7285 42.3226 91.5012C49.9612 100.231 59.4401 107.549 70.2242 111.935C75.4878 114.075 80.9653 115.273 86.5927 116.001C92.6052 116.792 98.6821 117.113 104.737 116.771C110.557 116.45 116.227 115.444 121.705 113.454C127.14 111.465 132.275 108.769 136.94 105.324C141.326 102.071 145.456 98.3268 148.687 93.8977C151.703 89.7467 153.886 85.0394 155.512 80.2037C158.936 69.9973 159.877 59.0207 159.663 48.3223C159.513 40.2557 159 32.0606 156.004 24.4648C154.934 21.7687 153.372 17.9601 150.334 16.9758C146.483 15.7134 143.872 20.5063 142.546 23.2879C139.978 28.7227 138.887 34.7995 138.758 40.7906C138.651 45.8402 139.25 50.8899 139.571 55.9396C140.171 65.7394 140.577 76.823 135.313 85.5315C132.018 91.0091 123.01 99.1399 116.805 92.9348C113.745 89.8751 112.526 85.2105 111.777 81.0809C111.199 77.8714 111.071 74.6191 110.664 71.3881C110.215 67.8363 109.616 64.3272 108.995 60.8181C107.819 54.3776 106.556 47.9799 105.743 41.4753C105.486 39.4212 105.122 37.2173 103.732 35.6125C102.298 33.965 99.8589 33.4515 97.7834 34.0292C93.6966 35.1846 93.0333 40.1273 92.6909 43.7006C92.049 50.248 93.2686 56.5601 94.4026 63.0006C94.959 66.1031 95.2371 69.2057 95.6223 72.3082C95.9004 74.5977 96.4139 76.8444 96.906 79.1124C97.8047 83.242 99.1099 88.0135 97.8475 92.2073C96.4781 96.7435 91.0005 98.3482 86.7639 98.6906C81.3291 99.1399 75.8943 97.5993 71.1228 95.0745C65.902 92.3143 61.6226 88.4201 57.7498 83.9909C53.7271 79.3906 50.1538 74.4051 47.1369 69.0987C41.1457 58.5928 37.3372 46.7817 36.8022 34.6497C36.6097 30.3061 37.9576 25.342 33.5499 22.6032C32.1377 21.726 30.8539 23.9512 32.2447 24.8285C34.2346 26.0695 34.4271 28.2734 34.3416 30.4131C34.256 32.8523 34.2131 35.1846 34.4271 37.6239C34.9406 43.4652 36.1175 49.2424 37.9576 54.827C41.6807 66.1459 47.9071 76.5448 55.6956 85.5315C62.885 93.8121 72.5137 100.873 83.8754 101.301C86.4644 101.408 89.0748 101.108 91.5568 100.36C93.8249 99.6748 96.2 98.6906 97.9118 97.0002C100.993 93.9405 101.164 89.3615 100.65 85.3175C100.094 80.8456 98.682 76.5234 98.1471 72.0728C97.7833 69.0773 97.5265 66.0817 97.013 63.1075C96.4353 59.7268 95.7292 56.3461 95.3227 52.944C94.9803 49.9271 94.9376 46.9315 95.2157 43.9145C95.3869 42.1814 95.5795 40.3199 96.2856 38.7151C97.0131 37.0889 98.3611 36.1261 100.18 36.447C102.148 36.7894 102.705 38.8435 103.004 40.5338C103.454 42.9945 103.646 45.5193 104.053 48.0013C104.63 51.489 105.272 54.9767 105.936 58.4644C106.577 61.8665 107.198 65.2686 107.711 68.6921C108.225 72.0515 108.439 75.4536 108.867 78.8129C109.744 85.938 112.419 97.1286 121.32 97.7277C125.236 98.0059 128.894 95.7806 131.826 93.4055C135.634 90.2816 138.33 86.2162 139.978 81.6159C143.38 72.1156 142.546 61.567 141.861 51.703C141.497 46.5892 141.069 41.4753 141.626 36.34C141.947 33.3873 142.588 30.4345 143.551 27.6315C144.364 25.235 145.456 22.646 147.103 20.6989C147.488 20.2496 148.109 19.6719 148.494 19.5221C148.986 19.3295 149.2 19.3295 149.585 19.4793C149.756 19.5435 149.799 19.5649 150.077 19.736C150.27 19.8644 150.42 19.9928 150.634 20.2068C151.104 20.6775 151.489 21.2338 151.853 21.8115C153.651 24.7429 154.656 28.1878 155.469 31.5043C156.347 35.1418 156.582 38.5011 156.817 42.3312C157.138 47.5306 157.203 52.7515 156.882 57.9723C156.282 68.2642 154.335 78.8557 149.35 87.9921C144.257 97.3212 135.378 104.511 125.856 109.025C120.742 111.443 115.265 113.155 109.637 113.861C103.796 114.588 97.8475 114.567 91.9848 114.096C86.4216 113.647 80.837 112.855 75.4877 111.208C70.1171 109.539 65.0247 107.035 60.296 103.976C50.8386 97.8561 42.8147 89.4899 36.7166 80.0325C33.614 75.2182 30.8967 70.0615 29.1421 64.6053C27.1308 58.3788 26.4034 51.8742 26.1252 45.3695C26.0182 42.6521 26.2322 39.9989 26.6387 37.3029C27.1095 34.0934 27.7085 30.6913 29.0779 27.7171C29.356 27.118 29.677 26.5189 30.0622 25.9626C30.2333 25.7272 30.7469 25.1923 30.8753 25.1067C30.9822 25.0425 31.0679 24.9783 31.1749 24.9355C31.3888 24.8285 31.0464 24.9783 31.2818 24.8927C31.6242 24.7643 31.4315 24.7857 31.7525 24.8285C31.8167 24.8285 31.6456 24.7857 31.881 24.8499C32.0094 24.8713 32.1163 24.9141 32.2447 24.9569C32.2875 24.9783 32.6726 25.1923 32.8866 25.3206C34.3202 26.1337 35.604 23.9085 34.2346 22.9884Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
