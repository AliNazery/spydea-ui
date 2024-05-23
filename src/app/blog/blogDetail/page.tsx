import React from 'react'

export default function PostDetail() {
  return (
    <main>
        <section className="section page-header blog-single sm:pt-[100px] relative overflow-hidden pb-0 after:z-10 after:content-[''] after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
            <div className="container relative z-40">
                <div className="flex flex-wrap">
                    <div className="w-full" data-aos="fade-up-sm">
                        <img alt="featured-image" loading="lazy" width="1272" height="450" decoding="async" data-nimg="1" className="h-[350px] w-full rounded-t-xl object-cover md:h-[450px]" src="../images/blog/1.jpg"/>
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
        <section className=" relative overflow-hidden pt-6 md:pt-10">
            <div className="container relative z-30">
                <article className="flex flex-wrap">
                    <div className="mx-auto sm:w-10/12" data-aos="fade-up-sm">
                        <h1 className="h2 mb-6 font-secondary text-2xl capitalize !leading-normal text-dark md:text-3xl lg:text-4xl xl:text-5xl">The Real Product From The Buyers Improvements In Overflow Basis.</h1>
                        <div className="mb-6 flex flex-wrap items-center gap-x-12 gap-y-6">
                            <div className="flex items-center">
                                <a title="author image" className="relative z-20 overflow-hidden rounded-full border-[6px] border-zinc-100" href="/authors/benjamin">
                                    <img alt="Daniel Mitchell" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" className="h-[70px] w-[70px] object-cover"   src="../images/blog/2.jpg"/>
                                </a>
                                <a className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70" href="/authors/benjamin">benjamin</a>
                            </div>
                            <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">04 Apr, 2022</span>
                        </div>
                    </div>
                    <div className="sm:w-10/12 sm:mx-auto" data-aos="fade-up-sm" data-aos-delay="50">
                        <div className="content">
                            <p className='mt-0  pt-0 text-[18px] mb-8 leading-7'>We collect certain identifying personal data when you Sign up to our Service such as your name, email address, PayPal address (if different from email address), and telephone number. The personal data we collect from you is disclosed only in accordance with our Terms of Service and/or this Privacy Policy.Conclude collects Slack account and access information from Users for the purposes of connecting to the Slack API and to authenticate access to information on the Conclude website. Whenever you visit our Site, we may collect non-identifying information from you, such as referring URL, browser, operating system, cookie information, and Internet Service Provider. Without a subpoena, voluntary compliance on the part of your Internet Service Provider, or additional records from a third party, this information alone cannot usually be used to identify you.The term &quot;personal data &quot;does not include any anonymizedand aggregated data made on the basis of personal data, which are wholly owned by Conclude.</p>
                            <h4 className='text-[1.5129rem] font-semibold mb-8 font-primary'>It’s natural for business leaders to be overwhelmed, but keep a balanced outlook</h4>
                            <h5 className='text-[1.5129rem] font-semibold mb-8 font-primary'>Service Provided AS IS</h5>
                            <p className=' text-[18px] mb-8 leading-7'>The Service is provided for free during this pilot project, and is provided &quot;as is &quot;with no warranty. Conclude will provide User support for the Service, however; Conclude is not committed to any level of service or availability of the Service. A further description of the Service and our user support is available at the Site.</p>
                            <h5 className='text-[1.5129rem] font-semibold mb-8 font-primary'>Interoperation with Slack</h5>
                            <p className='text-[18px] mb-8 leading-7'>The Service is provided for free during this pilot project, and is provided &quot;as is &quot;with no warranty. Conclude will provide User support for the Service, however; Conclude is not committed to any level of service or availability of the Service. A further description of the Service and our user support is available at the Site.</p>
                            <h5 className='text-[1.5129rem] font-semibold mb-8 font-primary'>Company Liability</h5>
                            <p className='text-[18px] mb-8 leading-7'>If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and omissions conducted by its designated users of the Service.</p>
                            <blockquote className='py-14 pt-10 my-10 rounded-lg mt-10 mb-10 border-l-4 border-black bg-quote pb-10'>
                                    <p className='text-[18px] mb-8 leading-7 pl-3'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once.</p>
                                    <cite className='pl-3'>Esther Howard</cite>
                                    <br/>
                                    <span className='pl-3'>CEO &amp;Founder</span>
                            </blockquote>
                            <h5 className='text-[1.5129rem] font-semibold mb-8 font-primary'>Use internal mobility as an opportunity to use internal resources</h5>
                            <p className='text-[18px] mb-8 leading-7'>In order to use our Service, you must meet a number of conditions, including but not limited to:</p>
                            <ul>
                                <li>Enhance or improve User experience, our Site, or our Service.</li>
                                <li>Process transactions.</li>
                                <li>Send emails about our Site or respond to inquiries.</li>
                                <li>Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our Terms of Service.</li>
                                <li>Perform any other function that we believe in good is necessary to protect the or proper functioning of our Site or Service.</li>
                            </ul>
                            <h5 className='text-[1.5129rem] font-semibold mb-8 font-primary'>You must not</h5>
                            <ul>
                                <li>Enhance or improve User experience, our Site, or our Service.</li>
                                <li>Process transactions.</li>
                                <li>Send emails about our Site or respond to inquiries.</li>
                                <li>Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our Terms of Service.</li>
                                <li>Perform any other function that we believe in good is necessary to protect the or proper functioning of our Site or Service.</li>
                            </ul>
                        </div>
                        <div className="mt-20">
                            <div id="disqus_thread"></div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="pointer-events-none absolute left-0 top-[40%] select-none">
                <svg className="text-quaternary" width="85" height="189" viewBox="0 0 85 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-75.4295 46.4233C-75.4295 46.4233 2.46399 -13.0678 37.2488 2.64144C72.0335 18.3507 41.1455 32.8155 67.8512 48.1371C94.5773 63.4587 85.6414 94.4896 69.1773 100.284C52.7132 106.078 57.3036 123.99 60.527 128.846C63.7505 133.681 72.6864 153.797 50.7342 163.447C28.782 173.117 22.2332 158.163 12.6648 169.078C3.09645 180.013 12.0323 188.765 -4.65621 188.765C-21.3447 188.765 -82.5292 157.204 -75.4295 46.4233Z" fill="currentColor"></path>
                </svg>
            </div>
            <div className="pointer-events-none absolute bottom-[20%] right-[-6%] select-none">
                <svg className="text-quinary" width="218" height="225" viewBox="0 0 218 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2275 205.443C41.8294 212.172 49.447 218.193 58.1891 221.875C65.9337 225.122 74.5489 225.974 82.493 222.927C92.0694 219.245 98.8164 210.594 103.441 201.779C106.724 195.504 109.318 188.884 112.383 182.5C115.666 175.68 119.257 168.951 123.791 162.857C128.126 157.035 133.476 151.793 140.078 148.637C146.517 145.536 153.863 144.847 160.845 146.098C166.577 147.114 172.072 149.236 177.876 149.762C182.991 150.215 188.106 149.182 192.767 147.096C194.29 146.679 195.796 146.098 197.247 145.318C202.561 142.416 206.605 137.519 209.598 132.332C216.127 120.996 218.757 107.684 217.814 94.7158C215.583 64.1365 197.047 36.949 171.927 20.1721C149.528 5.22709 121.687 -2.19101 94.8624 1.56338C81.3684 3.44964 68.2552 8.38295 56.9921 16.0912C45.9647 23.6544 36.1525 33.249 27.8276 43.696C12.1933 63.3022 2.52623 87.3158 1.00271 112.399C-0.43012 135.796 4.77524 159.937 16.4193 180.323C21.6246 189.41 27.9001 197.971 35.2275 205.443Z" fill="currentColor"></path>
                    <path d="M85.938 180.196C81.0954 180.432 76.2528 180.795 71.4283 181.285C66.5132 181.792 61.6161 182.482 56.7191 183.044C52.0216 183.588 47.3241 184.06 42.5903 184.295C37.9834 184.531 33.431 184.404 28.8241 184.259C25.6501 184.168 22.3311 184.277 19.0664 184.749C19.4291 185.329 19.7918 185.891 20.1546 186.454C22.4943 186.164 24.834 186.055 27.083 186.055C29.2413 186.055 31.3997 186.218 33.5761 186.254C35.8977 186.309 38.2373 186.272 40.5589 186.2C45.1294 186.037 49.6637 185.638 54.2161 185.148C59.0588 184.622 63.9014 183.951 68.744 183.389C73.5504 182.826 78.393 182.427 83.2356 182.155C92.9208 181.593 102.606 181.484 112.309 181.502C112.491 181.502 112.69 181.502 112.872 181.502C113.162 180.886 113.47 180.287 113.779 179.67C104.492 179.67 95.2061 179.743 85.938 180.196Z" fill="white"></path>
                    <path d="M109.135 153.625C105.326 153.535 101.681 152.846 97.9989 151.921C94.5347 151.032 91.0705 149.98 87.5157 149.49C84.2873 149.037 81.077 149.109 77.9029 149.871C75.1098 150.524 72.4619 151.667 69.7957 152.737C67.1295 153.807 64.3908 154.768 61.507 155.022C58.0791 155.33 54.5786 155.258 51.1507 155.33C47.5595 155.403 43.9865 155.439 40.3953 155.457C38.7086 155.457 37.0037 155.53 35.317 155.294C33.739 155.076 32.1792 154.659 30.6739 154.133C27.7901 153.136 25.0513 151.757 22.2038 150.633C19.3381 149.508 16.4181 148.783 13.3348 148.656C10.6686 148.547 8.0024 148.873 5.42693 149.545C5.06419 149.635 4.71961 149.744 4.375 149.835C4.5201 150.433 4.66519 151.032 4.82843 151.63C5.73529 151.358 6.64214 151.104 7.549 150.923C10.197 150.397 12.9538 150.306 15.62 150.669C18.6126 151.086 21.4239 152.211 24.1626 153.426C26.9195 154.623 29.6944 155.893 32.6326 156.618C35.8066 157.398 39.0351 157.289 42.2635 157.271C45.8365 157.253 49.3914 157.198 52.9644 157.108C56.2472 157.035 59.6388 157.162 62.8854 156.672C68.5079 155.802 73.3868 152.682 78.9187 151.503C85.7382 150.034 92.322 152.428 98.8695 154.024C102.388 154.877 105.907 155.421 109.516 155.475C113.488 155.548 117.46 155.258 121.432 155.022C124.661 154.841 127.835 154.75 131.027 154.822C131.716 154.206 132.423 153.607 133.149 153.027C132.677 152.991 132.206 152.972 131.734 152.954C124.189 152.592 116.68 153.789 109.135 153.625Z" fill="white"></path>
                    <path d="M16.7463 97.3096C20.2649 96.0763 23.4752 94.1356 26.885 92.6665C30.8026 90.9797 34.9016 90.1636 39.1638 90.0366C48.3956 89.7646 57.4642 92.1405 66.4239 93.9724C70.795 94.8792 75.2023 95.6773 79.6459 96.1126C81.9312 96.3302 84.2527 96.4572 86.5561 96.4028C88.4424 96.3665 90.3831 96.3121 92.1787 95.641C95.3889 94.4258 97.8919 91.5783 101.574 92.0317C105.201 92.467 107.922 95.4959 110.57 97.7449C113.599 100.32 116.754 101.826 120.763 102.189C125.098 102.588 129.378 101.59 133.622 100.792C135.925 100.357 138.265 99.9939 140.623 99.9395C143.126 99.8851 145.629 100.175 148.132 100.23C152.938 100.357 157.744 100.175 162.533 99.7218C172.109 98.8513 181.559 97.0013 191.008 95.3327C199.823 93.7729 208.51 91.4332 217.216 89.2205C217.125 88.6038 217.035 88.0053 216.944 87.4067C210.723 89.0028 204.52 90.6533 198.317 92.0317C188.795 94.1356 179.092 95.8042 169.425 97.1101C164.854 97.7268 160.247 98.1802 155.641 98.3616C153.192 98.4522 150.743 98.4704 148.313 98.416C145.81 98.3616 143.289 98.0714 140.786 98.1076C132.389 98.2165 122.558 103.295 114.651 98.5248C111.567 96.6748 109.246 93.7729 106.199 91.8685C103.315 90.0548 99.9413 89.5832 96.8036 91.0523C95.3345 91.7415 94.0468 92.7209 92.5958 93.4464C90.8002 94.3533 88.8958 94.4984 86.9189 94.5528C82.3302 94.6979 77.7596 94.1719 73.2616 93.4101C64.2837 91.8866 55.4509 89.4018 46.3642 88.495C42.0657 88.0597 37.6946 88.0234 33.4143 88.7489C29.5329 89.42 25.9781 90.9798 22.4595 92.7028C19.0316 94.4077 15.5492 96.1307 11.7041 96.6385C8.82031 97.0194 5.95468 96.7292 3.12528 96.1307C3.01646 96.693 2.88951 97.2733 2.79883 97.8537C7.40566 98.7969 12.0488 98.9601 16.7463 97.3096Z" fill="white"></path>
                    <path d="M50.4985 45.6548C54.8152 43.696 58.1161 40.0142 62.9406 39.1617C68.6356 38.146 74.4032 40.1593 80.1164 39.4882C83.2904 39.1255 86.1924 37.9465 89.1306 36.8039C92.6855 35.4073 96.3855 34.4461 100.158 33.8838C107.032 32.8681 114.015 33.1221 120.925 32.7956C124.716 32.6142 128.47 32.2333 132.206 31.5804C136.251 30.8912 140.368 30.5284 144.467 30.3471C152.701 30.0025 160.954 30.4196 169.188 30.5466C174.43 30.6191 179.708 30.7098 184.949 30.3108C184.296 29.7123 183.643 29.1319 182.972 28.5515C180.687 28.6966 178.402 28.751 176.098 28.751C167.9 28.751 159.72 28.3883 151.541 28.3701C147.405 28.3701 143.252 28.4789 139.135 28.8417C135.163 29.1863 131.245 30.0025 127.291 30.4378C120.145 31.2539 112.963 30.9456 105.799 31.4172C102.334 31.6529 98.8703 32.0882 95.4786 32.8863C91.7061 33.775 88.2419 35.3529 84.5601 36.5681C82.039 37.4024 79.4817 37.8377 76.8155 37.747C74.0043 37.6382 71.2293 37.2573 68.418 37.1122C65.371 36.9671 62.3058 37.0941 59.4583 38.2549C57.3181 39.1255 55.4681 40.4676 53.5637 41.7735C51.3872 43.2607 49.0838 44.494 46.4902 45.1107C43.3888 45.8543 40.1603 45.546 37.0951 44.8205C34.3202 44.1857 31.6359 43.2426 28.9334 42.3357C28.5707 42.771 28.2261 43.2244 27.8633 43.6597C27.8089 43.7141 27.7727 43.7867 27.7183 43.8411C29.3869 44.3852 31.0373 44.9656 32.6878 45.4916C38.5824 47.3597 44.6765 48.3029 50.4985 45.6548Z" fill="white"></path>
                    <path d="M12.7372 123.989C16.0745 122.738 19.2666 122.484 22.7671 123.119C27.5009 123.989 32.1259 125.477 36.7327 126.873C41.4665 128.306 46.291 129.648 51.2606 129.92C56.1757 130.192 60.9095 129.231 65.4801 127.453C69.7423 125.803 73.805 123.699 78.2123 122.429C82.9099 121.087 87.68 121.087 92.3956 122.266C101.174 124.479 108.937 129.866 118.005 131.063C123.229 131.752 128.38 130.809 133.549 130.156C136.106 129.829 138.682 129.594 141.275 129.703C143.851 129.811 145.882 130.501 148.222 131.534C150.09 132.369 152.085 133.239 154.171 133.185C156.021 133.149 157.871 132.405 159.449 131.444C162.895 129.34 165.361 126.075 169.46 125.096C178.837 122.829 188.795 128.814 197.881 124.352C199.405 123.59 200.747 122.538 202.18 121.631C204.175 120.362 206.333 119.546 208.691 119.364C210.867 119.201 213.044 119.382 215.22 119.382C215.402 118.766 215.583 118.149 215.746 117.532C215.347 117.551 214.948 117.551 214.531 117.551C212.028 117.514 209.507 117.315 207.022 117.732C204.955 118.095 202.996 118.947 201.218 120.072C199.84 120.96 198.552 121.994 197.065 122.72C194.925 123.79 192.513 124.171 190.137 124.207C185.167 124.316 180.324 123.028 175.373 122.81C170.875 122.611 166.722 123.481 163.13 126.293C160.138 128.632 156.891 132.097 152.683 131.208C150.507 130.736 148.548 129.594 146.481 128.796C144.34 127.979 142.073 127.834 139.788 127.853C134.492 127.889 129.305 129.14 124.027 129.43C119.093 129.702 114.45 128.687 109.844 126.982C105.581 125.386 101.482 123.373 97.2019 121.831C93.0123 120.326 88.5868 119.31 84.1069 119.546C79.4457 119.8 75.0565 121.432 70.8124 123.246C66.5683 125.059 62.3242 127.036 57.7355 127.762C52.6208 128.578 47.4699 127.871 42.5003 126.583C37.5851 125.313 32.7969 123.627 27.8636 122.375C24.3087 121.468 20.5725 120.507 16.8907 120.997C13.0637 121.505 9.23678 123.246 5.88141 125.078C4.19465 126.003 2.67112 127.091 1.11133 128.106C1.16574 128.832 1.22014 129.576 1.27456 130.301C2.92504 129.285 4.43044 128.034 6.1172 127.054C8.14856 125.839 10.452 124.842 12.7372 123.989Z" fill="white"></path>
                    <path d="M35.2997 67.7459C38.6188 67.5101 41.7747 67.8366 44.985 68.7616C48.7756 69.868 52.3849 71.5729 56.2482 72.3709C59.6035 73.0601 63.3942 73.0964 66.3868 71.2464C69.3613 69.4327 71.6103 66.4763 75.2014 65.8234C79.5725 65.0435 84.0705 66.8391 88.4597 66.8572C93.1391 66.8753 97.7822 66.2224 102.407 65.5332C106.851 64.8803 111.367 64.1004 115.883 64.2817C120.399 64.4631 124.843 65.4425 129.341 65.7508C133.839 66.0592 138.174 65.3156 142.563 64.3724C147.061 63.4112 151.523 62.2322 156.002 61.1621C165.071 58.9675 174.448 57.0994 183.807 58.3327C192.132 59.4391 200.547 61.1621 208.963 62.1597C208.636 61.5068 208.31 60.8357 207.983 60.1827C201.309 59.3666 194.689 58.1332 188.051 57.1176C183.843 56.4646 179.671 55.9931 175.409 56.1563C170.893 56.3195 166.413 57.0269 162.006 57.9337C157.417 58.8769 152.865 60.0739 148.312 61.1803C143.851 62.2685 139.28 63.4837 134.709 63.919C130.103 64.3543 125.55 63.52 120.998 62.9577C116.536 62.3955 112.237 62.4136 107.776 62.9759C103.187 63.5562 98.6528 64.3905 94.046 64.8077C91.7244 65.0072 89.3847 65.1523 87.0631 65.0435C84.7416 64.9347 82.4563 64.3905 80.1529 64.1003C78.1397 63.8464 76.072 63.7557 74.077 64.2454C72.4265 64.6626 70.9211 65.5332 69.5789 66.5489C68.2186 67.5646 66.9672 68.7435 65.5344 69.6503C63.9746 70.6297 62.2153 70.9743 60.3834 70.9925C56.4477 71.065 52.7114 69.5234 49.0658 68.2175C45.656 67.0023 42.1919 65.9685 38.5463 65.8597C31.9806 65.6601 25.2699 67.3832 19.067 69.4145C16.2013 70.3395 13.3538 71.3915 10.5425 72.5885C10.1979 73.4047 9.85332 74.2027 9.52686 75.0189C11.3768 74.2027 13.2631 73.441 15.1494 72.7336C21.5881 70.267 28.4076 68.2356 35.2997 67.7459Z" fill="white"></path>
                    <path d="M61.3085 19.5194C64.4825 18.6488 67.5839 17.4881 70.7217 16.4905C74.5667 15.2572 78.4663 14.3141 82.4746 13.8244C90.6726 12.8268 98.9431 13.3528 107.159 12.7361C111.276 12.4278 115.393 11.8111 119.366 10.6504C120.635 10.2695 121.923 9.94301 123.211 9.63468C129.776 8.11116 136.451 7.04106 143.125 6.17047C141.747 5.71705 140.368 5.2999 138.99 4.90088C134.546 5.55382 130.103 6.31557 125.714 7.22243C121.923 8.00233 118.241 9.21752 114.45 9.96114C106.325 11.5391 98 11.1219 89.7838 11.4484C85.5942 11.6116 81.3863 11.9925 77.2692 12.8268C73.5692 13.5886 69.978 14.7856 66.405 15.9827C62.1609 17.4155 57.7355 18.939 53.31 18.7214C52.6027 19.2474 51.8953 19.7915 51.188 20.3356C51.6596 20.4263 52.1311 20.4988 52.6208 20.5351C55.5591 20.8071 58.4972 20.2812 61.3085 19.5194Z" fill="white"></path>
                    <path d="M87.1535 203.104C82.1839 202.65 77.1962 202.052 72.1903 202.36C69.7962 202.505 67.4203 202.868 65.0987 203.503C62.886 204.119 60.7639 204.935 58.5875 205.625C56.4292 206.314 54.2346 206.894 51.9674 207.021C49.6459 207.148 47.3787 206.767 45.1479 206.132C40.94 204.917 36.9136 203.013 32.5244 202.578C33.2136 203.321 33.9028 204.065 34.6102 204.808C37.494 205.425 40.269 206.495 43.1165 207.42C45.2023 208.091 47.3243 208.653 49.5189 208.835C51.7498 209.016 54.017 208.744 56.1934 208.218C60.5645 207.166 64.6453 205.153 69.1252 204.5C74.0222 203.793 78.9555 204.155 83.8526 204.609C88.6952 205.062 93.5378 205.606 98.4167 205.262C99.5231 205.189 100.611 205.062 101.7 204.881C102.099 204.21 102.479 203.539 102.842 202.85C102.371 202.94 101.881 203.013 101.409 203.085C96.6937 203.829 91.8873 203.539 87.1535 203.104Z" fill="white"></path>
                </svg>
            </div>
        </section>
        <section className="section articles relative z-20 pb-20 after:-z-10 md:pb-40">
            <div className="container relative z-30">
                <div className="flex flex-wrap mt-36 -mx-3 space-y-3">
                    <div data-aos="fade-up-sm" className="md:col-6 lg:flex-none w-1/3 box-border  max-w-full px-3 mt-0">
                        <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                            <a className="inline-block h-full max-h-[270px] w-full overflow-hidden" href="/blog/BlogDetail">
                                <img alt="author" loading="lazy" width="408" height="262" decoding="async" data-nimg="1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 transparent"  src="../images/Article/1-1.jpg"/>
                            </a>
                            <div className="px-5 pb-12">
                                <div className="-mt-[30px] mb-3 flex items-center">
                                    <a className="relative z-20 overflow-hidden rounded-full border-[6px] border-white" title="benjamin" href="/authors/benjamin">
                                        <img alt="benjamin" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="h-[40px] w-[40px] object-cover transparent"  src="../images/Article/1-2.jpg"/>
                                    </a>
                                    <a className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70" href="/authors/benjamin">benjamin</a>
                                </div>
                                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                                    <a className="link-animation relative after:absolute after:inset-0" href="/blog/post-1">The Real Product From The Buyers Improvements In Overflow Basis.</a>
                                </h2>
                                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">04 Apr, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-sm" className="md:col-6 md:col-6 lg:flex-none w-1/3 box-border  max-w-full px-3 mt-0">
                        <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                            <a className="inline-block h-full max-h-[270px] w-full overflow-hidden" href="/blog/post-2">
                                <img alt="author" loading="lazy" width="408" height="262" decoding="async" data-nimg="1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 transparent"  src="../images/Article/2-1.jpg"/>
                            </a>
                            <div className="px-5 pb-12">
                                <div className="-mt-[30px] mb-3 flex items-center">
                                    <a className="relative z-20 overflow-hidden rounded-full border-[6px] border-white" title="Daniel Mitchell" href="/authors/daniel-mitchell">
                                        <img alt="Daniel Mitchell" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="h-[40px] w-[40px] object-cover transparent"  src="../images/Article/2-2.jpg"/>
                                    </a>
                                    <a className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70" href="/authors/daniel-mitchell">Daniel Mitchell</a>
                                </div>
                                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                                    <a className="link-animation relative after:absolute after:inset-0" href="/blog/post-2">The Real Product From The Buyers Improvements In Overflow Basis.</a>
                                </h2>
                                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">04 Apr, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-sm" className="md:col-6 md:col-6 lg:flex-none w-1/3 box-border  max-w-full px-3 mt-0">
                        <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                            <a className="inline-block h-full max-h-[270px] w-full overflow-hidden" href="/blog/post-3">
                                <img alt="author" loading="lazy" width="408" height="262" decoding="async" data-nimg="1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 transparent"  src="../images/Article/3-1.jpg"/>
                            </a>
                            <div className="px-5 pb-12">
                                <div className="-mt-[30px] mb-3 flex items-center">
                                    <a className="relative z-20 overflow-hidden rounded-full border-[6px] border-white" title="Daniel Mitchell" href="/authors/daniel-mitchell">
                                        <img alt="Daniel Mitchell" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="h-[40px] w-[40px] object-cover transparent" src="../images/Article/3-2.jpg"/>
                                    </a>
                                    <a className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70" href="/authors/daniel-mitchell">Daniel Mitchell</a>
                                </div>
                                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                                    <a className="link-animation relative after:absolute after:inset-0" href="/blog/post-3">The Real Product From The Buyers Improvements In Overflow Basis.</a>
                                </h2>
                                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">04 Apr, 2022</span>
                            </div>
                        </div>
                    </div>
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
            </div>
        </section>
    </main>
  )
}
