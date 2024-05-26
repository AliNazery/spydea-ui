import React from 'react'

export default function Authors() {
  return (
    <main>
    <section className="section page-header relative overflow-hidden pb-96 after:z-10">
        <div className="container relative z-30">
            <div className="row items-center">
                <div className="mx-auto text-center lg:col-7">
                    <h1 className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px]" data-aos="fade-up-sm">Authors</h1>
                    <div data-aos="fade-up-sm" data-aos-dealy="50">
                        <nav aria-label="Breadcrumb" className="breadcrumb">
                            <ol className="inline-flex" role="list">
                                <li className="breadcrumb-list-item" role="listitem">
                                    <a className="text-primary " href="/">Home</a>
                                </li>
                                <li className="breadcrumb-list-item" role="listitem">
                                    <span className="ml-3 mr-2 inline-block">/</span>
                                    <span className="text-primary">Authors</span>
                                </li>
                            </ol>
                        </nav>
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
        <div className="pointer-events-none absolute left-0 top-[5%] z-30 hidden select-none lg:block" data-aos="fade-up-sm">
            <svg className="text-secondary" width="132" height="248" viewBox="0 0 132 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.8369 98.7143C73.0417 89.9416 53.0536 89.4378 49.2422 75.2285C46.8091 66.1611 53.0155 55.3164 47.5979 47.6366C45.8015 45.0799 42.9882 43.4451 40.2033 42.0289C30.29 37.001 18.9226 33.8075 8.04929 36.1076C-0.143669 37.8374 -7.80436 43.35 -11.4066 50.6971C-24.2663 54.5845 -38.3521 54.2043 -51.1263 58.6144C-66.8184 64.0225 -79.9823 77.4335 -83.2138 93.7054C-86.4359 109.987 -78.471 128.369 -63.5013 135.545C-48.6836 142.645 -29.3893 138.881 -16.7007 149.307C-9.17303 155.485 -5.82742 165.275 -0.238719 173.259C14.2463 193.941 45.0887 200.128 67.4435 188.362C89.7888 176.604 102.135 149.393 98.3619 124.424C96.8697 114.606 92.8018 104.645 84.8369 98.7143Z" fill="currentColor"></path>
                <path d="M72.338 114.254C64.7153 108.779 55.3627 106.879 47.1888 102.468C43.1493 100.292 39.4711 97.3549 37.7412 92.9828C36.135 88.9054 36.5912 84.5142 37.1329 80.2657C38.0169 73.2228 38.9293 65.7522 32.8084 60.7338C26.1456 55.2686 15.8712 52.0656 7.44057 51.0676C-1.54127 50.0126 -10.6752 51.885 -17.8321 57.6162C-19.4954 58.9564 -21.0162 60.4581 -22.3373 62.1404C-23.9816 64.2219 -24.5709 66.1989 -27.2987 66.8927C-32.3932 68.2043 -37.6112 68.9362 -42.8102 69.6681C-52.714 71.0557 -62.7223 72.5099 -71.6851 77.2527C-79.6215 81.4442 -86.5028 87.6983 -91.2646 95.3305C-100.351 109.872 -99.8568 128.825 -89.2972 142.502C-84.1742 149.126 -77.1693 153.356 -69.1189 155.476C-60.5933 157.728 -51.6875 157.985 -43.1618 160.199C-38.5426 161.397 -34.0184 163.241 -30.3116 166.282C-25.8445 169.951 -22.8505 174.979 -20.0372 179.94C-15.57 187.848 -11.0649 195.091 -3.7178 200.632C9.49359 210.593 27.4097 213.834 43.3965 209.861C77.5084 201.373 97.4396 157.529 81.8806 125.983C79.647 121.449 76.539 117.505 72.5375 114.397C71.6156 113.684 70.3135 114.967 71.2449 115.689C86.5663 127.589 87.5928 151.179 82.3463 168.383C77.3944 184.626 65.8368 199.263 49.8976 205.812C34.5002 212.142 16.0613 210.621 1.78537 202.124C-6.0084 197.486 -11.6446 190.956 -16.1213 183.153C-20.5694 175.397 -24.6659 167.176 -32.6308 162.442C-46.6215 154.135 -64.4712 158.051 -78.4714 149.754C-93.6598 140.743 -99.5051 120.527 -93.6122 104.312C-90.3332 95.2925 -83.9271 87.5367 -76.0858 82.0906C-68.1305 76.5684 -59.0535 74.0116 -49.5965 72.5004C-44.9392 71.7591 -40.2629 71.2078 -35.6057 70.4474C-33.3816 70.0862 -31.1671 69.6776 -28.981 69.1834C-27.4888 68.8507 -24.894 68.6701 -23.687 67.6721C-23.1072 67.1874 -22.708 65.9137 -22.2803 65.2389C-21.5864 64.1459 -20.788 63.1194 -19.9421 62.1404C-18.2598 60.23 -16.2829 58.5762 -14.1443 57.217C-9.9623 54.5367 -5.21002 53.092 -0.27714 52.7024C9.1039 51.9515 18.542 54.9455 26.8205 59.156C31.6203 61.5987 35.4316 64.8017 35.9734 70.4379C36.2965 73.8026 35.6882 77.2242 35.2795 80.5603C34.4526 87.2991 34.6237 93.9143 39.5756 99.1323C44.9457 104.807 53.1197 107.088 60.1436 109.93C64.107 111.536 67.9564 113.332 71.4445 115.832C72.3855 116.526 73.2884 114.938 72.338 114.254Z" fill="#4C4C4C"></path>
            </svg>
        </div>
        <div className="pointer-events-none absolute right-0 top-[25%] z-30 hidden select-none lg:block" data-aos="fade-up-sm">
            <svg className="text-quinary" width="120" height="207" viewBox="0 0 120 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M78.2117 111.852C76.8111 111.602 75.0413 112.525 75.1933 114.176C75.7362 120.451 79.1237 126.575 83.8793 131.352C84.6393 132.177 85.4862 132.937 86.3765 133.632C90.2526 136.835 94.7692 139.202 99.3185 140.19C100.393 140.418 101.229 139.973 101.74 139.289C103.184 139.148 104.422 137.997 103.976 136.336C102.294 130.049 101.012 123.491 95.9853 118.942C91.1212 114.534 84.4873 113.003 78.2117 111.852Z" fill="currentColor"></path>
                <path d="M131.239 93.1771C129.556 86.8906 128.275 80.3328 123.248 75.7835C118.373 71.3646 111.75 69.8228 105.475 68.6719C104.074 68.4222 102.304 69.3451 102.456 70.9954C102.999 77.271 106.387 83.3946 111.142 88.1718C111.902 88.997 112.749 89.757 113.639 90.4519C117.515 93.6548 122.032 96.0218 126.581 97.0098C127.656 97.2378 128.492 96.7926 129.003 96.1086C130.458 95.9783 131.684 94.8383 131.239 93.1771Z" fill="currentColor"></path>
                <path d="M38.4514 28.9229C37.0617 28.6623 35.281 29.596 35.433 31.2464C35.9759 37.522 39.3635 43.6455 44.119 48.4228C44.879 49.248 45.7259 50.008 46.6162 50.7029C50.4923 53.9059 55.009 56.2728 59.5583 57.2608C60.6331 57.4888 61.4692 57.0436 61.9795 56.3596C63.4235 56.2184 64.6613 55.0676 64.2161 53.4064C62.5332 47.12 61.252 40.5621 56.225 36.0128C51.3609 31.6047 44.727 30.0738 38.4514 28.9229Z" fill="currentColor"></path>
                <path d="M92.0552 50.7138C95.9313 53.9168 100.448 56.2837 104.997 57.2717C106.072 57.4997 106.908 57.0545 107.418 56.3705C108.863 56.2294 110.1 55.0785 109.655 53.4173C107.972 47.1308 106.691 40.573 101.664 36.0237C96.789 31.6047 90.1661 30.063 83.8905 28.9121C82.4898 28.6623 80.7201 29.5852 80.8721 31.2356C81.4149 37.5112 84.8025 43.6347 89.558 48.412C90.3398 49.2589 91.1649 50.0189 92.0552 50.7138Z" fill="currentColor"></path>
                <path d="M49.3415 94.7517C50.4164 94.9797 51.2524 94.5346 51.7627 93.8506C53.2067 93.7094 54.4445 92.5585 53.9993 90.8973C52.3164 84.6109 51.0353 78.053 46.0083 73.5037C41.1333 69.0847 34.5102 67.543 28.2346 66.3921C26.834 66.1424 25.0643 67.0652 25.2163 68.7156C25.7592 74.9912 29.1467 81.1148 33.9022 85.8921C34.6622 86.7172 35.5091 87.4772 36.3994 88.1721C40.2756 91.4184 44.7814 93.7745 49.3415 94.7517Z" fill="currentColor"></path>
                <path d="M104.334 156.15C102.934 155.901 101.164 156.824 101.316 158.474C101.859 164.75 105.246 170.873 110.002 175.65C110.762 176.475 111.609 177.236 112.499 177.93C116.375 181.133 120.892 183.5 125.441 184.488C126.516 184.716 127.352 184.271 127.862 183.587C129.306 183.446 130.544 182.295 130.099 180.634C128.416 174.348 127.135 167.79 122.108 163.24C117.244 158.832 110.61 157.301 104.334 156.15Z" fill="currentColor"></path>
                <path d="M109.361 104.436C106.343 117.335 121.261 127.15 131.652 130.657C132.835 131.059 133.725 130.538 134.203 129.713C135.256 129.506 136.179 128.605 136.212 127.378C136.375 121.591 134.713 116.173 130.696 111.874C125.691 106.521 118.894 106.434 112.89 102.949C111.554 102.178 109.709 102.916 109.361 104.436ZM114.801 109.029C114.453 109.311 114.171 109.681 114.008 110.104C113.9 109.626 113.834 109.149 113.791 108.671C114.128 108.79 114.475 108.92 114.801 109.029ZM127.157 115.261C126.125 114.317 125.029 113.524 123.867 112.818C123.693 112.623 123.487 112.46 123.302 112.275C124.801 113.122 126.082 114.121 127.157 115.261Z" fill="currentColor"></path>
                <path d="M95.345 97.7809C98.0268 97.7918 98.385 94.198 96.4307 93.2208C97.1907 85.7292 94.7153 81.8857 89.9706 76.1638C84.6287 69.7362 77.2891 69.6928 69.7757 67.2173C68.1688 66.6961 66.9094 68.1075 66.7574 69.5407C65.9648 77.2169 69.0374 82.7 74.8244 87.4881C81.7732 93.2425 86.1379 97.7375 95.345 97.7809Z" fill="currentColor"></path>
            </svg>
        </div>
    </section>
    <section className="section-md mt-[-28rem] md:mt-[-32rem]">
        <div className="container relative z-40">
            <div className="row gy-5">
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/benjamin">
                            <img alt="Benjamin" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover" src='../images/author' />
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/benjamin">Benjamin</a>
                            </h3>
                            We are especially int
                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/daniel-mitchell">
                            <img alt="Daniel Mitchell" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover"  src='../images/author'/>
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/daniel-mitchell">Daniel Mitchell</a>
                            </h3>
                            We are especially intere
                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/darlene-robertson">
                            <img alt="Darlene Robertson" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover"  src='../images/author'/>
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/darlene-robertson">Darlene Robertson</a>
                            </h3>
                            We are especially intere
                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/devid-harrison">
                            <img alt="David Harrison" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover"  src='../images/author'/>
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/devid-harrison">David Harrison</a>
                            </h3>
                            We are especially intere
                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/devon-lane">
                            <img alt="Devon Lane" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover"  src='../images/author'/>
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/devon-lane">Devon Lane</a>
                            </h3>
                            We are especially intere

                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/jacob-jones">
                            <img alt="Jacob Jones" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover"  src='../images/author'/>
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/jacob-jones">Jacob Jones</a>
                            </h3>
                            We are especially intere
                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/jerome-bell">
                            <img alt="Jerome Bell" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover"  src='../images/author'/>
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/jerome-bell">Jerome Bell</a>
                            </h3>
                            We are especially intere
                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-sm" className="md:col-6 lg:col-4 xl:col-3">
                    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <a className="h-full max-h-[900px] w-full" href="/authors/john-doe">
                            <img alt="John Doe" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" className="mx-auto h-[180px] w-[180px] rounded-full object-cover"  src='../images/author'/>
                        </a>
                        <div className="px-5 pt-8 text-center">
                            <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                                <a href="/authors/john-doe">John Doe</a>
                            </h3>
                            lorem ipsum dolor sit am
                            ...
                            <ul className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark">
                                <li>
                                    <a className="inline-block" aria-label="FaFacebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block" aria-label="FaTwitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                    </li>
                                <li>
                                    <a className="inline-block" aria-label="FaInstagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}
