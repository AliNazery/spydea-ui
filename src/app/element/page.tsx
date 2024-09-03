"use client"

import PageHeader from '@/components/Common/PageHeader/PageHeader';
import { InfoSvg, NoteSvg, TipSvg, WarningSvg } from '@/components/Common/PagesSvg';
import Collapes from '@/components/element/Collapes';
import CustomeVideo from '@/components/element/CustomeVideo';
import Tab from '@/components/element/Tab';
import YouTubeLite from '@/components/element/YouTubeLite';
import React, {useState} from 'react'


export default function Elements() {
    const [isVisible, setIsVisible] = useState(false);
    // const [, setIsVisible] = useState(false);


    const handleClick = () => {
        setIsVisible(true);
      };
    
      const handleBlur = () => {
        setIsVisible(false);
      };

      const CollapesHandle = () =>{

      }
  return (
    <main>
      <PageHeader
        title="Elements"
        currentPage="Elements"
        description=""
      />
      
      <section className="section-md relative z-20 mt-[-25rem] pb-40">
        <div className="container">
          <div className="content shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-20 lg:py-16">
            <h1 className="text-[2.8153056842999997rem] font-semibold font-primary">
              Heading 1
            </h1>
            <p className="text-[18px] mb-8 leading-7">
              Here is an example of headings. You can use this heading by the
              following markdown rules. For example: use <code>#</code>
              for heading 1 and use <code>######</code>
              for heading 6.
            </p>
            <h2 className="text-[2.28886641rem] font-semibold font-primary mt-2 mb-1.5">
              Heading 2
            </h2>
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Heading 3
            </h3>
            <h4 className="text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5">
              Heading 4
            </h4>
            <h5 className="text-[1.23rem] font-semibold font-primary mt-2 mb-1.5">
              Heading 5
            </h5>
            <h6 className="text-[1rem] font-semibold font-primary mt-2 mb-1.5">
              Heading 6
            </h6>
            <hr />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Paragraph
            </h3>
            <p className="text-[18px] mb-8 leading-7">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf. Could someone
              survive inside a transporter buffer for 75 years? Fate. It
              protects fools, little children, and ships.
            </p>
            <p className="text-[18px] mb-8 leading-7">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf. Could someone
              survive inside a transporter buffer for 75 years? Fate. It
              protects fools, little children, and ships.
            </p>
            <hr />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Emphasis
            </h3>
            <ol className="mb-8 pl-[1.625em] list-decimal ">
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  Did you come here for something in <strong>particular</strong>
                  or just general
                </p>
              </li>
              <li className=" pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  Did you come here for something in <ins>particular</ins>
                </p>
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  <em>Did you come here</em>
                </p>
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  Did you come here for <strong>something</strong>
                  in particular
                </p>
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  Did you come here for something in particular
                </p>
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  Did you come here for something in particular
                </p>
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  URLs and URLs in angle brackets will automatically get turned
                  into links.{" "}
                  <a href="http://www.example.com" className="font-semibold">
                    http://www.example.com
                  </a>
                  or
                </p>
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                <p className="text-[18px] mb-8 leading-7">
                  <a href="http://www.example.com" className="font-semibold">
                    http://www.example.com
                  </a>
                  and sometimes example.com (but not on Github, for example).
                </p>
              </li>
            </ol>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Button
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn mb-4 me-4 btn-primary border-primary no-underline"
              href="#"
            >
              Primary
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn mb-4 me-4 btn-primary border-primary no-underline"
              href="#"
            >
              Secondary
            </a>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Link
            </h3>
            <p className="text-[18px] mb-8 leading-7">
              <a
                href="https://www.google.com"
                className="hover:underline font-medium text-linkBlack "
              >
                I &#x27;m an inline-style link
              </a>
            </p>
            <p className="text-[18px] mb-8 leading-7">
              <a
                href="https://www.google.com"
                title="Google&#x27;s Homepage"
                className="hover:underline font-medium text-linkBlack"
              >
                I &#x27;m an inline-style link with title
              </a>
            </p>
            <p className="text-[18px] mb-8 leading-7">
              <a
                href="https://www.themefisher.com"
                className="hover:underline font-medium text-linkBlack"
              >
                I &#x27;m a reference-style link
              </a>
            </p>
            <p className="text-[18px] mb-8 leading-7">
              <a
                href="../blob/master/LICENSE"
                className="hover:underline font-medium text-linkBlack"
              >
                I &#x27;m a relative reference to a repository file
              </a>
            </p>
            <p className="mb-8">
              <a
                href="https://gethugothemes.com"
                className="hover:underline font-medium text-linkBlack "
              >
                You can use numbers for reference-style link definitions
              </a>
            </p>
            <p className="text-[18px] mb-8 leading-7">
              Or leave it empty and use the{" "}
              <a
                href="https://www.getjekyllthemes.com"
                className="hover:underline font-medium text-linkBlack"
              >
                link text itself
              </a>
              .
            </p>
            <p className="text-[18px] mb-8 leading-7">
              example.com (but not on Github, for example).
            </p>
            <p className="text-[18px] mb-8 leading-7">
              Some text to show that the reference links can follow later.
            </p>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Ordered List
            </h3>
            <ol className="mb-8 pl-[1.625em] list-decimal">
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
            </ol>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Unordered List
            </h3>
            <ul className="mt-0 mb-8 pl-[1.625em] list-disc">
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
              <li className="pl-[.375em] my-2 marker:text-custom-gray-marker marker:text-customMarker marker:leading-customMarker">
                List item
              </li>
            </ul>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Code and Syntax Highlighting
            </h3>
            <h4 className="text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5">
              HTML
            </h4>
            <pre className="bg-hoverCo overflow-x-auto font-normal text-sm rounded-lg leading-relaxed mb-8 p-3.5 px-4.5">
              <code className="language-html px-1 bg-transparent border-0  p-0 font-inherit text-inherit leading-inherit">
                &lt;ul &gt; <br /> &lt;li className=&quot;nav-item &quot;&gt;
                <br /> &lt;a className=&quot;nav-link
                &quot;href=&quot;/&quot;&gt;Home &lt;/a &gt; <br /> &lt;/li &gt;
                <br /> &lt;li className=&quot;nav-item &quot;&gt;
                <br /> &lt;a className=&quot;nav-link
                &quot;href=&quot;about/&quot;&gt;About &lt;/a &gt;
                <br /> &lt;/li &gt;
                <br />
                &lt;/ul &gt;
              </code>
            </pre>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h4 className="text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5">
              CSS
            </h4>
            <pre className="bg-hoverCo overflow-x-auto font-normal text-sm rounded-lg leading-relaxed mb-8 p-3.5 px-4.5">
              <code className="language-css px-1 bg-transparent border-0 p-0 font-inherit text-inherit leading-inherit">
                img &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;vertical-align: middle;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;border: 0;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;max-width: 100%;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;height: auto;
                <br />
                &#125;
              </code>
            </pre>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h4 className="text-[1.5129rem] font-semibold font-primary mt-2 mb-1.5">
              JavaScript
            </h4>
            <pre className="bg-hoverCo overflow-x-auto font-normal text-sm rounded-lg leading-relaxed mb-8 p-3.5 px-4.5">
              <code className="language-javascript px-1 bg-transparent border-0 p-0 font-inherit text-inherit leading-inherit">
                window.addEventListener(&quot;load&quot;, (e) =&gt;&#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;document.querySelector(&quot;.preloader&quot;).style.display
                = &quot;none&quot;;
                <br />
                &#125;);
              </code>
            </pre>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.5129rem] font-semibold mb-8 font-primary">
              Quote
            </h3>
            <blockquote className="py-14 pt-10 my-10 rounded-lg mt-10 mb-10 border-l-8 border-black bg-quote pb-10">
              <span className="inline-block ml-2">
                <img src="../images/blog/quote.svg" alt="" />
              </span>
              <p className="text-[22px] mb-8 leading-7 pl-10 font-semibold">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once.
              </p>
              <cite className="pl-10 font-medium">Esther Howard</cite>
              <br />
              <span className="pl-10 font-medium">CEO &amp;Founder</span>
            </blockquote>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.5129rem] font-semibold mb-8 font-primary">
              Notice
            </h3>
            <div className="mb-6 rounded-md border p-6 px-8 border-noticeNote">
              <div className="flex items-center">
                <NoteSvg/>
                <p className="my-0 ml-1.5 font-semibold text-lg text-dark font-secondary">
                  Note
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[18px] my-0 leading-7 text-noticep">
                  This is a simple note.
                </p>
              </div>
            </div>
            <div className="mb-6 rounded-md border p-6 px-8 border-noticetip">
              <div className="flex items-center">
                <TipSvg/>
                <p className="my-0 ml-1.5 font-semibold text-lg text-dark font-secondary ">
                  Tip
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[18px] my-0 leading-7 text-noticep">
                  This is a simple note.
                </p>
              </div>
            </div>
            <div className="mb-6 rounded-md border p-6 px-8 border-noticeinfo">
              <div className="flex items-center">
                <InfoSvg/>
                <p className="my-0 ml-1.5 font-semibold text-lg text-dark font-secondary">
                  Info
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[18px] my-0 leading-7 text-noticep">
                  This is a simple note.
                </p>
              </div>
            </div>
            <div className="mb-6 rounded-md border p-6 px-8 border-noticewarning">
              <div className="flex items-center">
                <WarningSvg/>
                <p className="my-0 ml-1.5 font-semibold text-lg text-dark font-secondary">
                  Warning
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[18px] my-0 leading-7 text-noticep">
                  This is a simple note.
                </p>
              </div>
            </div>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Tab
            </h3>
            <Tab />
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5">
              Table
            </h3>
            <table className="mt-0 overflow-hidden border border-tableborder indent-0 border-collapse w-full table-auto text-left mb-8 text-sm leading-7">
              <thead className="border border-b-[1px]">
                <tr>
                  <th className="p-4 text-dark text-left">#</th>
                  <th className="text-center">First</th>
                  <th className="text-center">Last</th>
                  <th className="text-right p-4">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-tableborder ">
                  <td className="p-4 text-dark text-left">1</td>
                  <td className="text-center">Row:1 Cell:1</td>
                  <td className="text-center">Row:1 Cell:2</td>
                  <td className="text-right p-4">Row:1 Cell:3</td>
                </tr>
                <tr className="border border-tableborder">
                  <td className="text-left text-dark p-4">2</td>
                  <td className="text-center">Row:2 Cell:1</td>
                  <td className="text-center">Row:2 Cell:2</td>
                  <td className="text-right p-4">Row:2 Cell:3</td>
                </tr>
                <tr className="border border-tableborder">
                  <td className="text-left text-dark p-4">3</td>
                  <td className="text-center">Row:3 Cell:1</td>
                  <td className="text-center">Row:3 Cell:2</td>
                  <td className="text-right p-4">Row:3 Cell:3</td>
                </tr>
              </tbody>
            </table>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <Collapes />
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <h3 className="text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-8">
              Image
            </h3>
            <p className="text-[18px] mb-8 leading-7">
              <img src="/images/elements/image-placeholder.png" alt="image" />
            </p>
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <YouTubeLite />
            <hr className="border-t border-t-1 mt-12 mb-12" />
            <CustomeVideo src={undefined} poster={undefined} />
            {/* <video className="overflow-hidden rounded-lg" width="100%" height="auto" controls="">
                        <source src="https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_61516692993d77.04238324_preview.mp4" type="video/mp4"/>
                    </video> */}
          </div>
        </div>
      </section>
    </main>
  );
}
