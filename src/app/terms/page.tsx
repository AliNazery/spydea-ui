import React from 'react'

export default function Terms() {
  return (
    <main>
    <section className="section page-header relative overflow-hidden pb-96 after:content-[''] after:z-10 after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-40 after:h-full after:w-full after:clip-path-custom-shape">
        <div className="container relative z-30">
            <div className="row items-center">
                <div className="mx-auto text-center lg:col-7">
                    <h1 className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px]" data-aos="fade-up-sm">Terms &amp;Conditions</h1>
                    <div data-aos="fade-up-sm" data-aos-dealy="50">
                        <nav aria-label="Breadcrumb" className="breadcrumb">
                            <ol className="inline-flex" role="list">
                                <li className="breadcrumb-list-item" role="listitem">
                                    <a className="text-primary " href="/">Home</a>
                                </li>
                                <li className="breadcrumb-list-item" role="listitem">
                                    <span className="ml-3 mr-2 inline-block">/</span>
                                    <span className="text-primary">Terms conditions</span>
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
                <h3>1. Definitions</h3>
                <p>We collect certain identifying personal data when you Sign up to our Service such as your name, email address, PayPal address (if different from email address), and telephone number. The personal data we collect from you is disclosed only in accordance with our Terms of Service and/or this Privacy Policy.Conclude collects Slack account and access information from Users for the purposes of connecting to the Slack API and to authenticate access to information on the Conclude website. Whenever you visit our Site, we may collect non-identifying information from you, such as referring URL, browser, operating system, cookie information, and Internet Service Provider. Without a subpoena, voluntary compliance on the part of your Internet Service Provider, or additional records from a third party, this information alone cannot usually be used to identify you.The term &quot;personal data &quot;does not include any anonymized and aggregated data made on the basis of personal data, which are wholly owned by Conclude.</p>
                <h3>2. General Terms</h3>
                <h4>Service Provided AS IS:</h4>
                <p>The Service is provided for free during this pilot project, and is provided &quot;as is &quot;with no warranty. Conclude will provide User support for the Service, however; Conclude is not committed to any level of service or availability of the Service. A further description of the Service and our user support is available at the Site.</p>
                <h4>Interoperation with Slack:</h4>
                <p>The Service interoperates with Slack.com, and depends on the continuing availability and access to Slack. If for any reason Conclude cannot access or use Slack (including without limitation, change in terms or increase in fees charged by Slack), Conclude may not be able to provide all of the functions of its Service. No refund or credit, if applicable, will be provided for temporary unavailability of Slack (for example, maintenance windows).</p>
                <h4>Company Liability:</h4>
                <p>If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and omissions conducted by its designated users of the Service.</p>
                <h3>3. Eligibility</h3>
                <p>In order to use our Service, you must meet a number of conditions, including but not limited to:</p>
                <ul>
                    <li>Enhance or improve User experience, our Site, or our Service.</li>
                    <li>Process transactions.</li>
                    <li>Send emails about our Site or respond to inquiries.</li>
                    <li>Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our - Terms of Service.</li>
                    <li>Perform any other function that we believe</li>
                </ul>
                <h3>4. Rules of Use</h3>
                <p>Users of Conclude (i) must keep passwords secure and confidential; (ii) are solely responsible for User Data and all activity in their account while using the Service; (iii) must use commercially reasonable efforts to prevent unauthorized access to their account, and notify Conclude promptly of any such unauthorized access; and (iv) may use the Service only in accordance with Conclude &#x27;s online user guide and all applicable laws and regulations.</p>
                <h4>You must not:</h4>
                <ul>
                    <li>Enhance or improve User experience, our Site, or our Service.</li>
                    <li>Process transactions.</li>
                    <li>Send emails about our Site or respond to inquiries.</li>
                    <li>Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such as this Privacy Policy and our - Terms of Service.</li>
                    <li>Perform any other function that we believe</li>
                </ul>
                <h3>5. Intellectual Property Rights</h3>
                <p>Your information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. If you choose to provide information to us, Conclude transfers Personal Information to Google Cloud Platform and processes it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                <p>
                    <em>Last Modified - 18 April, 2023</em>
                </p>
            </div>
        </div>
    </section>
</main>
  )
}
