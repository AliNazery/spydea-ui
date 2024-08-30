"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { CountUp } from "countup.js";
import SectionMiddleTitle from "../Common/SectionMiddleTitle";
import { listItems as items } from "./ListItems";
import { AcheivementOneSvg, AcheivementTwoSvg } from "../Common/svg";

export default function Acheivement() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  const countUpRefs = [
    useRef<HTMLSpanElement | null>(null),
    useRef<HTMLSpanElement | null>(null),
    useRef<HTMLSpanElement | null>(null),
  ];

  // Assign the refs to the list items
  const listItems = items.map((item, index) => {
    if (index === 0) item.ref = ref1;
    if (index === 1) item.ref = ref2;
    if (index === 2) item.ref = ref3;
    return item;
  });

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
        <SectionMiddleTitle
          subtitle="ACHIEVING EXCELLENCE"
          title="A Few Numbers We are Proud"
          description="Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus
              accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
              elementum."
        />
        <div className="row relative -mx-3 flex flex-wrap">
          <div className="w-full flex-none px-3">
            <ul className="list-dotted-line-separator shadow-default flex flex-col md:h-full justify-center gap-6 rounded-2xl bg-white px-12 py-10 sm:py-14 md:flex-row md:justify-between md:gap-0">
              {listItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <li
                    ref={item.ref}
                    className="text-center md:pr-10 lg:pr-23 xl:pr-27"
                  >
                    <span className="mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
                      <span ref={countUpRefs[index]}>{item.count}</span>
                      {item.suffix}
                    </span>
                    <div className="text-dark md:text-h6 xl:text-h4">
                      {item.description}
                    </div>
                  </li>
                  {index < listItems.length - 1 && (
                    <li className="hidden md:block">
                      <img
                        className="h-[116px] lg:h-[90px] xl:h-[124px]"
                        src="../images/about/line.svg"
                        alt=""
                      />
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <AcheivementOneSvg/>
            <AcheivementTwoSvg/>
          </div>
        </div>
      </div>
    </section>
  );
}
