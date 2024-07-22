import AmazonSvg from "./svgs/companies/amazo-svg";
import MicrosoftSvg from "./svgs/companies/microsoft-svg";
import NetflixSvg from "./svgs/companies/netlix-svg";
import SonySvg from "./svgs/companies/sony-svg";
import VerizonSvg from "./svgs/companies/verizon-svg";

function Trusted() {
  return (
    <div>
      <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0 ">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600"> 2000+</span> customers
            worldwide
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonSvg />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonSvg />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftSvg />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixSvg />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonySvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
