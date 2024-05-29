import React, { useState } from 'react';

export default function Tab() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="mt-0 overflow-hidden rounded-md border border-tableborder">
      <ul className="pl-[1.625em] flex border-b m-0 list-none border-tableborder bg-tablenvbg" role="tablist">
        <li
          className={`border-b-[3px] focus:border-dark text-noticep px-8 my-0 py-2 text-lg leading-7 cursor-pointer ${activeTabIndex === 0 ? 'border-dark' : ''}`}
          role="tab"
          tabIndex={0}
          onClick={() => handleClick(0)}
          onFocus={() => handleClick(0)}
        >
          Tab 1
        </li>
        <li
          className={`border-b-[3px] focus:border-dark text-noticep px-8 my-0 py-2 text-lg leading-7 cursor-pointer ${activeTabIndex === 1 ? 'border-dark' : ''}`}
          role="tab"
          tabIndex={-1}
          onClick={() => handleClick(1)}
          onFocus={() => handleClick(1)}
        >
          Tab 2
        </li>
        <li
          className={`border-b-[3px] focus:border-dark text-noticep px-8 my-0 py-2 text-lg leading-7 cursor-pointer ${activeTabIndex === 2 ? 'border-dark' : ''}`}
          role="tab"
          tabIndex={-1}
          onClick={() => handleClick(2)}
          onFocus={() => handleClick(2)}
        >
          Tab 3
        </li>
      </ul>
      <div className={`px-5 ${activeTabIndex === 0 ? 'block' : 'hidden'}`} tabIndex={0}>
        <h4 className='text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5'>Did you come here for something in particular?</h4>
        <p className='text-[18px] mb-8 leading-7'>
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.
        </p>
      </div>
      <div className={`px-5 ${activeTabIndex === 1 ? 'block' : 'hidden'}`} tabIndex={0}>
        <h4 className='text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5'>I wanna talk about the assassination attempt</h4>
        <p className='text-[18px] mb-8 leading-7'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className='text-[18px] mb-8 leading-7'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className={`px-5 ${activeTabIndex === 2 ? 'block' : 'hidden'}`} tabIndex={0}>
        <h4 className='text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5'>We know you’re dealing in stolen ore</h4>
        <p className='text-[18px] mb-8 leading-7'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className='text-[18px] mb-8 leading-7'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
    </div>
  );
}
