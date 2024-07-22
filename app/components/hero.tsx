import Image from "next/image";
import Link from "next/link";
import GithubSvg from "./svgs/icons/github-svg";

function Hero() {
  return (
    <div>
      <div className="container p-4 py-10 md:p-8 lg:p-12 mx-auto xl:px-0 flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-center md:text-start text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Free Landing Page Template for startups
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 text-center md:text-start">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </p>
            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0  sm:flex-row">
              <Link
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-4 py-1 md:px-8 md:py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
              >
                Download for Free
              </Link>
              <Link
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <GithubSvg />
                <span> View on Github</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              alt="Hero Illustration"
              width="616"
              height="617"
              className="object-cover"
              src="/hero.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
