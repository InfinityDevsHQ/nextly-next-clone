import Image from "next/image";
import SmileEmojiSvg from "./svgs/smile-emoji-svg";
import SignalSvg from "./svgs/signals-svg";

function Highlight() {
  return (
    <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div className="flex items-center justify-center w-full lg:w-1/2 ">
        <div>
          <Image
            alt="Benefits"
            width="521"
            height="521"
            className="object-cover"
            src="/benefit-one.webp"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full lg:w-1/2 ">
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              Highlight your benefits
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              You can use this space to highlight your first benefit or a
              feature of your product. It can also contain an image or
              Illustration like in the example along with some bullet points.
            </p>
          </div>
          <div className="w-full mt-5">
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                <SmileEmojiSvg />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Understand your customers
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Then explain the first point breifly in one or two lines.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                <SignalSvg />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Improve acquisition
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Here you can add the next benefit point.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-7 h-7 text-indigo-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Drive customer retention
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  This will be your last bullet point in this section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
