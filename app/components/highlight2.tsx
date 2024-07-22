import Image from "next/image";
import SmartPhoneSvg from "./svgs/smart-phone-svg";
import DottedMenuSvg from "./svgs/doted-menu-svg";
import SunSvg from "./svgs/sun-svg";

function Highlight2() {
  return (
    <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
        <div>
          <Image
            alt="Benefits"
            width="521"
            height="521"
            className="object-cover"
            src="/benefit-two.webp"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full lg:w-1/2 ">
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              Offer more benefits here
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              You can use this same layout with a flip image to highlight your
              rest of the benefits of your product. It can also contain an image
              or Illustration as above section along with some bullet points.
            </p>
          </div>
          <div className="w-full mt-5">
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                <SmartPhoneSvg />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Mobile Responsive Template
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Nextly is designed as a mobile first responsive template.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                <DottedMenuSvg />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Powered by Next.js &amp; TailwindCSS
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  This template is powered by latest technologies and tools.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                <SunSvg />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Dark &amp; Light Mode
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Nextly comes with a zero-config light &amp; dark mode.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight2;
