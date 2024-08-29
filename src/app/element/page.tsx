"use client"

import PageHeader from '@/components/Common/PageHeader/PageHeader';
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
                <svg
                  className="mr-3 text-noticeNote"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
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
                <svg
                  className="mr-3 text-noticetip"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4ZM15.9515 7.55147L9.6 13.9029L8.04853 12.3515C7.5799 11.8828 6.8201 11.8828 6.35147 12.3515C5.88284 12.8201 5.88284 13.5799 6.35147 14.0485L8.75147 16.4485C9.2201 16.9172 9.9799 16.9172 10.4485 16.4485L17.6485 9.24853C18.1172 8.7799 18.1172 8.0201 17.6485 7.55147C17.1799 7.08284 16.4201 7.08284 15.9515 7.55147Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
                <svg
                  className="mr-3 text-noticeinfo"
                  width="20"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16109 0.993016C9.97971 1.03952 10.6611 1.42989 11.0721 2.22339L17.7981 15.8014C18.4502 17.1739 17.4403 19.0208 15.7832 19.0474H2.23859C0.730337 19.0234 -0.507163 17.3108 0.231587 15.7864L7.08321 2.20877C7.21146 1.96502 7.26996 1.89452 7.38059 1.76664C7.82534 1.25102 8.31171 0.975016 9.16109 0.993016ZM9.05046 2.49189C8.79284 2.50464 8.55696 2.64902 8.42834 2.87327C6.06134 7.36539 3.77946 11.9036 1.56546 16.4734C1.36071 16.9328 1.71209 17.5223 2.22621 17.547C6.74871 17.6201 11.2731 17.6201 15.7956 17.547C16.2925 17.523 16.666 16.953 16.459 16.4783C14.2866 11.9093 12.0471 7.37102 9.72171 2.87814C9.58446 2.63402 9.38309 2.48739 9.05046 2.49189Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.61323 13.2153H8.35773L8.21973 7.04688H9.75723L9.61323 13.2153ZM8.17773 15.1015C8.17773 14.8731 8.25161 14.6841 8.39973 14.5338C8.54823 14.3838 8.75036 14.3084 9.00648 14.3084C9.26298 14.3084 9.46511 14.3838 9.61323 14.5338C9.76136 14.6841 9.83561 14.8731 9.83561 15.1015C9.83561 15.3216 9.76323 15.5057 9.61923 15.6539C9.47486 15.802 9.27086 15.8762 9.00648 15.8762C8.74211 15.8762 8.53811 15.802 8.39373 15.6539C8.24973 15.5057 8.17773 15.3216 8.17773 15.1015Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
                <svg
                  className="mr-3 text-noticewarning"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0C15.522 0 20 4.478 20 10C20 15.522 15.522 20 10 20C4.478 20 0 15.522 0 10C0 4.478 4.478 0 10 0ZM10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2ZM12.293 6.293L13.707 7.707L11.414 10L13.707 12.293L12.293 13.707L10 11.414L7.707 13.707L6.293 12.293L8.586 10L6.293 7.707L7.707 6.293L10 8.586L12.293 6.293Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
