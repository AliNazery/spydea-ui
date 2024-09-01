"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { tabs } from "./ExperienceData";
import { ExperienceOneSvg, ExperienceTwoSvg } from "../Common/svg";
import SectionMiddleTitle from "../Common/Title/SectionMiddleTitle";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="section relative z-20 overflow-hidden py-[60px] md:py-[100px]">
      <div className="container relative z-30 sm:px-6">
        <SectionMiddleTitle
          subtitle="EXPERIENCE SPEAKS"
          title="Don't Take Our Word For It"
          description="Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt."
        />
        <div className="row flex flex-wrap -mt-6" data-tab-group="">
          <div className="flex flex-wrap gap-4 mt-6 px-3 xl:w-4/12 lg:gap-6">
            {tabs.map((tab, index) => (
              <div key={index} data-aos="fade-up-sm">
                <button
                  className={`group ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div
                    className={`h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left ${
                      activeTab === index
                        ? "border-white shadow-md"
                        : "group-[.active]:border-white group-[.active]:shadow-md"
                    } xl:px-8 xl:py-10`}
                  >
                    <h3 className="text-sm font-semibold xl:mb-6 xl:text-2xl">
                      {tab.title}
                    </h3>
                    <p className="hidden xl:block">{tab.description}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div
            className="relative xl:w-8/12 lg:w-full mt-6 px-3"
            data-aos="fade-in"
          >
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index
                    ? "visible opacity-100"
                    : "hidden opacity-0"
                } transition-opacity duration-300`}
              >
                <Image
                  alt="feature image"
                  width="840"
                  height="610"
                  className="h-full w-full rounded-xl"
                  src={tab.imageSrc}
                />
              </div>
            ))}
            <ExperienceOneSvg />
            <ExperienceTwoSvg />
          </div>
        </div>
      </div>
    </section>
  );
}
