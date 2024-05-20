// components/MainSection.js
import React from 'react';

const MainSection = () => {
    return (
        <main>
            <section className="relative overflow-hidden pb-96 z-10">
                <div className="container relative z-30">
                    <div className="flex items-center justify-center">
                        <div className="mx-auto text-center lg:w-7/12">
                            <h1 className="mb-6 text-4xl sm:text-5xl xl:text-6xl" data-aos="fade-up-sm">About Spydea</h1>
                            <div data-aos="fade-up-sm" data-aos-delay="50">
                                <nav aria-label="Breadcrumb" className="breadcrumb">
                                    <ol className="inline-flex" role="list">
                                        <li className="breadcrumb-list-item" role="listitem">
                                            <a className="text-primary" href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-list-item" role="listitem">
                                            <span className="ml-3 mr-2 inline-block">/</span>
                                            <span className="text-primary">About</span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <hr className="mx-auto mb-6 h-px w-24 border-0 border-b border-t border-dark border-opacity-50 bg-transparent" data-aos="fade-up-sm" data-aos-delay="50" />
                            <p className="mb-6 text-lg" data-aos="fade-up-sm" data-aos-delay="100">Vivamus accu msan tincidunt. Vestib ulum ac diam sit amet quam vehicula elementum sed suscipit tortor eget felis porttitor volut</p>
                        </div>
                    </div>
                </div>
                <div className="absolute z-20">
                    <div className="container flex justify-between">
                        {[...Array(6)].map((_, i) => (
                            <span key={i} className="bg-line-yellow inline-block h-full opacity-50 md:opacity-100"></span>
                        ))}
                    </div>
                </div>
                <div className="pointer-events-none absolute left-0 top-1/20 z-30 hidden select-none lg:block" data-aos="fade-up-sm">
                    <svg className="text-secondary" width="132" height="248" viewBox="0 0 132 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M84.8369 98.7143C73.0417 89.9416 53.0536 89.4378 49.2422 75.2285C46.8091 66.1611 53.0155 55.3164 47.5979 47.6366C45.8015 45.0799 42.9882 43.4451 40.2033 42.0289C30.29 37.001 18.9226 33.8075 8.04929 36.1076C-0.143669 37.8374 -7.80436 43.35 -11.4066 50.6971C-24.2663 54.5845 -38.3521 54.2043 -51.1263 58.6144C-66.8184 64.0225 -79.9823 77.4335 -83.2138 93.7054C-86.4359 109.987 -78.471 128.369 -63.5013 135.545C-48.6836 142.645 -29.3893 138.881 -16.7007 149.307"></path>
                    </svg>
                </div>
            </section>
        </main>
    );
}

export default MainSection;
