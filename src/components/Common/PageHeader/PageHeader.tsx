// components/PageHeader.tsx

import React from "react";
import Link from "next/link";
import { HeaderIconOne, HeaderIconTwo } from "../Icons/PageHeaderIcon/HeaderIcon";

interface PageHeaderProps {
  title: string;
  currentPage: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  currentPage,
  description,
}) => {
    return (
      <section className="section page-header relative overflow-hidden pt-[60px] md:pt-[100px] pb-96 dark:bg-[#121212] dark:bg-[z-40] after:z-10 after:dark:bg-[#222222] after:absolute after:left-0 after:top-0  after:h-full after:w-full after:bg-quaternary/20 after:content-[''] after:clip-path-abtafter-polygon">
        <div className="container relative z-30 sm:px-6">
          <div className="row items-center">
            <div className="lg:mx-auto text-center px-3 lg:w-7/12 box-border flex-shrink-0 w-full max-w-[100%]">
              <h1
                className="mb-6 font-bold text-[35px] sm:text-[50px] xl:text-[65px] dark:text-[#e5dede]"
                data-aos="fade-up-sm"
              >
                {title}
              </h1>
              <div data-aos="fade-up-sm" data-aos-delay="50">
                <nav
                  aria-label="Breadcrumb"
                  className="breadcrumb mx-auto mb-6 flex w-fit gap-10"
                >
                  <ol className="inline-flex" role="list">
                    <li
                      className="breadcrumb-list-item relative pl-8 align-middle text-[20px] font-medium text-dark after:content-['']  after:absolute after:left-0 after:top-[10%] after:h-[20px] after:w-[20px] after:bg-abthome "
                      role="listitem"
                    >
                      <Link className="text-dark align-middle " href="/">
                        Home
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-list-item align-middle text-[20px] text-dark"
                      role="listitem"
                    >
                      <span className="ml-3 mr-2 inline-block align-middle dark:text-[#e8e8e8]">
                        /
                      </span>
                      <span className="text-dark align-middle dark:text-[#e8e8e8]">
                        {currentPage}
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
              <hr
                className="mx-auto mb-6 h-[1px] w-[100px] border-0 border-b border-t border-dark border-opacity-50 bg-transparent"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              />
              <p
                className="mb-6 text-[20px] dark:text-[#e2e2e2]"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                {description}
              </p>
            </div>
          </div>
        </div>
        <HeaderIconOne />
        <HeaderIconTwo />
      </section>
    );
};

export default PageHeader;
