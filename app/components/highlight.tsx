import Image from "next/image";
import SmileEmojiSvg from "./svgs/icons/smile-emoji-svg";
import SignalSvg from "./svgs/icons/signals-svg";
import BlinkingCursorSvg from "./svgs/icons/blinking-cursor-svg";

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
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md size-11 ">
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
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md size-11 ">
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
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md size-11 ">
                <BlinkingCursorSvg />
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
