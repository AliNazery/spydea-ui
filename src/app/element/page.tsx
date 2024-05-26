import React from 'react'

export default function Elements() {
  return (
    <main>
        <section className="section page-header relative overflow-hidden pb-96 after:content-[''] after:z-10 after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-40 after:h-full after:w-full after:clip-path-custom-shape">
              <div className="container relative mb-[40px] z-30 pb-40" >
                    <div className="row items-center">
                        <div className="mx-auto mb-[40px] text-center lg:col-7">
                            <h1 className="mb-12 text-4xl font-bold sm:text-[50px] xl:text-[65px]" data-aos="fade-up-sm">Elements</h1>
                            <div data-aos="fade-up-sm" data-aos-dealy="50">
                                <nav aria-label="Breadcrumb" className="ml-auto mr-auto mb-6 flex w-fit gap-10">
                                    <ol className="inline-flex list-none m-0 p-0" role="list">
                                        <li className="relative pl-8 align-middle text-xl font-medium text-black" role="listitem">
                                            <div className="flex items-center space-x-2">
                                                <span>
                                                    <img src="../images/about/home.png" alt="" />
                                                </span>
                                                <a className="text-primary align-middle" href="/">Home</a>
                                            </div>
                                        </li>
                                        <li className="relative  align-middle text-xl font-medium" role="listitem">
                                            <span className="ml-3 mr-2 inline-block">/</span>
                                            <span className="text- align-middle">Elements</span>
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
        <section className="section-md relative z-20 mt-[-28rem] md:mt-[-32rem]">
            <div className="container">
                <div className="content shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-20 lg:py-16">
                    <h1 className='text-[2.8153056842999997rem] font-semibold font-primary'>Heading 1</h1>
                    <p className='text-[18px] mb-8 leading-7'>
                        Here is an example of headings. You can use this heading by the following markdown rules. For example: use <code>#</code>
                        for heading 1 and use <code>######</code>
                        for heading 6.
                    </p>
                    <h2 className='text-[2.28886641rem] font-semibold font-primary mt-2 mb-1.5'>Heading 2</h2>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Heading 3</h3>
                    <h4 className='text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5'>Heading 4</h4>
                    <h5 className='text-[1.23rem] font-semibold font-primary mt-2 mb-1.5'>Heading 5</h5>
                    <h6 className='text-[1rem] font-semibold font-primary mt-2 mb-1.5'>Heading 6</h6>
                    <hr/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Paragraph</h3>
                    <p className='text-[18px] mb-8 leading-7'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships.</p>
                    <p className='text-[18px] mb-8 leading-7'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships.</p>
                    <hr/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Emphasis</h3>
                    <ol className='mb-8 pl-[1.625em] list-decimal '>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>
                                Did you come here for something in <strong>particular</strong>
                                or just general
                            </p>
                        </li>
                        <li className=' pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>
                                Did you come here for something in <ins>particular</ins>
                            </p>
                        </li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>
                                <em>Did you come here</em>
                            </p>
                        </li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>
                                Did you come here for <strong>something</strong>
                                in particular
                            </p>
                        </li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>Did you come here for something in particular</p>
                        </li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>Did you come here for something in particular</p>
                        </li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>
                                URLs and URLs in angle brackets will automatically get turned into links. <a href="http://www.example.com" className='font-semibold'>http://www.example.com</a>
                                 or
                            </p>
                        </li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>
                            <p className='text-[18px] mb-8 leading-7'>
                                <a href="http://www.example.com" className='font-semibold'>http://www.example.com</a>
                                and sometimes example.com (but not on Github, for example).
                            </p>
                        </li>
                    </ol>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Button</h3>
                    <a target="_blank" rel="noopener noreferrer nofollow" className="btn mb-4 me-4 btn-primary border-primary no-underline" href="#">Primary</a>
                    <a target="_blank" rel="noopener noreferrer nofollow" className="btn mb-4 me-4 btn-primary border-primary no-underline" href="#">Secondary</a>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Link</h3>
                    <p className='text-[18px] mb-8 leading-7'>
                        <a href="https://www.google.com"className='hover:underline font-medium text-linkBlack ' >I &#x27;m an inline-style link</a>
                    </p>
                    <p className='text-[18px] mb-8 leading-7'>
                        <a href="https://www.google.com" title="Google&#x27;s Homepage" className='hover:underline font-medium text-linkBlack'>I &#x27;m an inline-style link with title</a>
                    </p>
                    <p className='text-[18px] mb-8 leading-7'>
                        <a href="https://www.themefisher.com" className='hover:underline font-medium text-linkBlack'>I &#x27;m a reference-style link</a>
                    </p>
                    <p className='text-[18px] mb-8 leading-7'>
                        <a href="../blob/master/LICENSE" className='hover:underline font-medium text-linkBlack'>I &#x27;m a relative reference to a repository file</a>
                    </p>
                    <p className='mb-8'>
                        <a href="https://gethugothemes.com" className='hover:underline font-medium text-linkBlack '>You can use numbers for reference-style link definitions</a>
                    </p>
                    <p className='text-[18px] mb-8 leading-7'>
                        Or leave it empty and use the <a href="https://www.getjekyllthemes.com" className='hover:underline font-medium text-linkBlack'>link text itself</a>
                        .
                    </p>
                    <p className='text-[18px] mb-8 leading-7'>example.com (but not on Github, for example).</p>
                    <p className='text-[18px] mb-8 leading-7'>Some text to show that the reference links can follow later.</p>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Ordered List</h3>
                    <ol className='mb-8 pl-[1.625em] list-decimal'>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                    </ol>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Unordered List</h3>
                    <ul className='mt-0 mb-8 pl-[1.625em] list-disc'>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                        <li className='pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker'>List item</li>
                    </ul>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Code and Syntax Highlighting</h3>
                    <h4 className='text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5'>HTML</h4>
                    <pre className='bg-hoverCo overflow-x-auto font-normal text-sm rounded-lg leading-relaxed mb-8 p-3.5 px-4.5'>
                        <code className="language-html px-1 bg-transparent border-0  p-0 font-inherit text-inherit leading-inherit">&lt;ul &gt; <br />   &lt;li className=&quot;nav-item &quot;&gt;<br />      &lt;a className=&quot;nav-link &quot;href=&quot;/&quot;&gt;Home &lt;/a &gt; <br />   &lt;/li &gt;<br />   &lt;li className=&quot;nav-item &quot;&gt;<br />      &lt;a className=&quot;nav-link &quot;href=&quot;about/&quot;&gt;About &lt;/a &gt;<br />   &lt;/li &gt;<br />&lt;/ul &gt;</code>
                    </pre>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h4 className='text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5'>CSS</h4>
                    <pre className='bg-hoverCo overflow-x-auto font-normal text-sm rounded-lg leading-relaxed mb-8 p-3.5 px-4.5'>
                    <code className="language-css px-1 bg-transparent border-0 p-0 font-inherit text-inherit leading-inherit">
                            img &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;vertical-align: middle;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;border: 0;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;max-width: 100%;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;height: auto;<br />
                            &#125;
                            </code>
                    </pre>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h4 className='text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5'>JavaScript</h4>
                    <pre className='bg-hoverCo overflow-x-auto font-normal text-sm rounded-lg leading-relaxed mb-8 p-3.5 px-4.5'>
                        <code className="language-javascript px-1 bg-transparent border-0 p-0 font-inherit text-inherit leading-inherit">
                        window.addEventListener(&quot;load&quot;, (e) =&gt;&#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;document.querySelector(&quot;.preloader&quot;).style.display = &quot;none&quot;;<br />
                        &#125;);
                        </code>
                    </pre>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.5129rem] font-semibold mb-8 font-primary'>Quote</h3>
                    <blockquote className='py-14 pt-10 my-10 rounded-lg mt-10 mb-10 border-l-8 border-black bg-quote pb-10'>
                        <span className='inline-block ml-2'><img src="../images/blog/quote.svg" alt="" /></span>
                            <p className='text-[22px] mb-8 leading-7 pl-10 font-semibold'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once.</p>
                            <cite className='pl-10 font-medium'>Esther Howard</cite>
                            <br/>
                            <span className='pl-10 font-medium'>CEO &amp;Founder</span>
                    </blockquote>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.5129rem] font-semibold mb-8 font-primary'>Notice</h3>
                    <div className="notice note border-noticeNote">
                        <div className="notice-head">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p className="my-0 ml-1.5">Note</p>
                        </div>
                        <div className="notice-body">
                            <p className='text-[18px] mb-8 leading-7'>This is a simple note.</p>
                        </div>
                    </div>
                    <div className="notice tip">
                        <div className="notice-head">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4ZM15.9515 7.55147L9.6 13.9029L8.04853 12.3515C7.5799 11.8828 6.8201 11.8828 6.35147 12.3515C5.88284 12.8201 5.88284 13.5799 6.35147 14.0485L8.75147 16.4485C9.2201 16.9172 9.9799 16.9172 10.4485 16.4485L17.6485 9.24853C18.1172 8.7799 18.1172 8.0201 17.6485 7.55147C17.1799 7.08284 16.4201 7.08284 15.9515 7.55147Z" fill="currentColor"></path>
                            </svg>
                            <p className="my-0 ml-1.5 ">Tip</p>
                        </div>
                        <div className="notice-body">
                            <p className='text-[18px] mb-8 leading-7'>This is a simple note.</p>
                        </div>
                    </div>
                    <div className="notice info">
                        <div className="notice-head">
                            <svg width="20" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16109 0.993016C9.97971 1.03952 10.6611 1.42989 11.0721 2.22339L17.7981 15.8014C18.4502 17.1739 17.4403 19.0208 15.7832 19.0474H2.23859C0.730337 19.0234 -0.507163 17.3108 0.231587 15.7864L7.08321 2.20877C7.21146 1.96502 7.26996 1.89452 7.38059 1.76664C7.82534 1.25102 8.31171 0.975016 9.16109 0.993016ZM9.05046 2.49189C8.79284 2.50464 8.55696 2.64902 8.42834 2.87327C6.06134 7.36539 3.77946 11.9036 1.56546 16.4734C1.36071 16.9328 1.71209 17.5223 2.22621 17.547C6.74871 17.6201 11.2731 17.6201 15.7956 17.547C16.2925 17.523 16.666 16.953 16.459 16.4783C14.2866 11.9093 12.0471 7.37102 9.72171 2.87814C9.58446 2.63402 9.38309 2.48739 9.05046 2.49189Z" fill="currentColor"></path>
                                <path d="M9.61323 13.2153H8.35773L8.21973 7.04688H9.75723L9.61323 13.2153ZM8.17773 15.1015C8.17773 14.8731 8.25161 14.6841 8.39973 14.5338C8.54823 14.3838 8.75036 14.3084 9.00648 14.3084C9.26298 14.3084 9.46511 14.3838 9.61323 14.5338C9.76136 14.6841 9.83561 14.8731 9.83561 15.1015C9.83561 15.3216 9.76323 15.5057 9.61923 15.6539C9.47486 15.802 9.27086 15.8762 9.00648 15.8762C8.74211 15.8762 8.53811 15.802 8.39373 15.6539C8.24973 15.5057 8.17773 15.3216 8.17773 15.1015Z" fill="currentColor"></path>
                            </svg>
                            <p className="my-0 ml-1.5">Info</p>
                        </div>
                        <div className="notice-body">
                            <p className='text-[18px] mb-8 leading-7'>This is a simple note.</p>
                        </div>
                    </div>
                    <div className="notice warning">
                        <div className="notice-head">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.522 0 20 4.478 20 10C20 15.522 15.522 20 10 20C4.478 20 0 15.522 0 10C0 4.478 4.478 0 10 0ZM10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2ZM12.293 6.293L13.707 7.707L11.414 10L13.707 12.293L12.293 13.707L10 11.414L7.707 13.707L6.293 12.293L8.586 10L6.293 7.707L7.707 6.293L10 8.586L12.293 6.293Z" fill="currentColor"></path>
                            </svg>
                            <p className="my-0 ml-1.5">Warning</p>
                        </div>
                        <div className="notice-body">
                            <p className='text-[18px] mb-8 leading-7'>This is a simple note.</p>
                        </div>
                    </div>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Tab</h3>
                    <div className="tab">
                        {/* <ul className="tab-nav" role="tablist">
                            <li className="tab-nav-item active" role="tab" tabindex="0">Tab 1</li>
                            <li className="tab-nav-item false" role="tab" tabindex="-1">Tab 2</li>
                            <li className="tab-nav-item false" role="tab" tabindex="-1">Tab 3</li>
                        </ul> */}
                        <div className="tab-content block">
                            <h4>Did you come here for something in particular?</h4>
                            <p className='text-[18px] mb-8 leading-7'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.</p>
                        </div>
                        <div className="tab-content hidden">
                            <h4>I wanna talk about the assassination attempt</h4>
                            <p className='text-[18px] mb-8 leading-7'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p className='text-[18px] mb-8 leading-7'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="tab-content hidden">
                            <h4>We know you’re dealing in stolen ore</h4>
                            <p className='text-[18px] mb-8 leading-7'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p className='text-[18px] mb-8 leading-7'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                        </div>
                    </div>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Table</h3>
                    <table>
                        <thead>
                            <tr>
                                <th align="left">#</th>
                                <th align="center">First</th>
                                <th align="center">Last</th>
                                <th align="right">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="left">1</td>
                                <td align="center">Row:1 Cell:1</td>
                                <td align="center">Row:1 Cell:2</td>
                                <td align="right">Row:1 Cell:3</td>
                            </tr>
                            <tr>
                                <td align="left">2</td>
                                <td align="center">Row:2 Cell:1</td>
                                <td align="center">Row:2 Cell:2</td>
                                <td align="right">Row:2 Cell:3</td>
                            </tr>
                            <tr>
                                <td align="left">3</td>
                                <td align="center">Row:3 Cell:1</td>
                                <td align="center">Row:3 Cell:2</td>
                                <td align="right">Row:3 Cell:3</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Collapse</h3>
                    <div className="accordion false">
                        <div data-aos="fade-up-sm">
                            <button type="button" className="accordion-header w-full text-xl font-medium" data-accordion="true">
                                <span>Why should you need to do this?</span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="accordion-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </button>
                            <div className="accordion-content">
                                <ul>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion false">
                        <div data-aos="fade-up-sm">
                            <button type="button" className="accordion-header w-full text-xl font-medium" data-accordion="true">
                                <span>How can I adjust Horizontal centering</span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="accordion-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </button>
                            <div className="accordion-content">
                                <ul>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion false">
                        <div data-aos="fade-up-sm">
                            <button type="button" className="accordion-header w-full text-xl font-medium" data-accordion="true">
                                <span>Should you use Negative margin?</span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="accordion-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </button>
                            <div className="accordion-content">
                                <ul>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                    <li>This is a thing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Image</h3>
                    <p className='text-[18px] mb-8 leading-7'>
                        <img src="/images/image-placeholder.png" alt="image"/>
                    </p>
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Youtube video</h3>
                    {/* <article className="yt-lite rounded-lg " data-title="Play:Youtube" style="background-image:url(https://i.ytimg.com/vi/ZEe-IFezQok/hqdefault.jpg);--aspect-ratio:56.25%">
                        <button type="button" className="lty-playbtn" aria-label="Watch Play:Youtube"></button>
                    </article> */}
                    <hr className='border-t border-t-1 mt-12 mb-12'/>
                    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Custom video</h3>
                    {/* <video className="overflow-hidden rounded-lg" width="100%" height="auto" controls="">
                        <source src="https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_61516692993d77.04238324_preview.mp4" type="video/mp4"/>
                    </video> */}
                </div>
            </div>
        </section>
    </main>
  )
}
