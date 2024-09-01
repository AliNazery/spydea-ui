import React from "react";
import SectionMiddleTitle from "../Common/Title/SectionMiddleTitle";
import { AboutHourIcon, AboutLocationIcon, AboutRightArrowIcon } from "../Common/Icons/AboutIcon/AboutIcon";
import Link from "next/link";
import { AboutTeamOneSvg, AboutTeamTwoSvg } from "../Common/AboutSvg";


const positions = [
  {
    href: "careers/position-1",
    title: "Sr. React Native Developer",
    description:
      "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
    location: "San Francisco",
  },
  {
    href: "careers/position-2",
    title: "Lead UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
    location: "San Francisco",
  },
  {
    href: "careers/position-3",
    title: "Head of Inbound Marketing",
    description:
      "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
    location: "San Francisco",
  },
  {
    href: "careers/position-4",
    title: "Lead Brand Designer",
    description:
      "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
    location: "San Francisco",
  },
];

export default function JoinOurTeam() {
  return (
    <div>
      <section className="section-md relative z-30 overflow-hidden pt-0 pb-[100px] md:pb-[200px]">
        <div className="container relative px-4 sm:px-6">
          <SectionMiddleTitle
            subtitle="JOIN OUR TEAM"
            title="Spydea Open Positions"
            description="Pellen tesque in ipsum id orci porta dapibus. titor nibh.
                Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam
                vehicula elementum"
          />
          <div className="row gy-4 relative justify-center -mt-6">
            {positions.map((position, index) => (
              <div
                key={index}
                data-aos="fade-up-sm"
                className="md:w-8/12 lg:w-6/12 xl:w-5/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
              >
                <Link href={position.href}>
                  <div className="shadow-default relative h-full rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-12">
                    <h3 className="mb-6 text-xl font-semibold text-dark sm:text-2xl">
                      {position.title}
                    </h3>
                    <p className="text-zinc opacity-70">
                      {position.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-end justify-between gap-y-4">
                      <ul className="mr-4 inline-flex flex-wrap gap-x-4 gap-y-2 font-medium text-dark">
                        <li className="capitalize">
                          <AboutHourIcon />
                          fulltime
                        </li>
                        <li className="capitalize">
                          <AboutLocationIcon />
                          {position.location}
                        </li>
                      </ul>
                      <button className="font-semibold text-red-400">
                        Read More
                        <AboutRightArrowIcon />
                        <span className="sr-only">details</span>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <AboutTeamOneSvg />
        </div>
        <AboutTeamTwoSvg />
      </section>
    </div>
  );
}
