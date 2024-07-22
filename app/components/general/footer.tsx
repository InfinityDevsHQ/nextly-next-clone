import { LegalLinks, NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import TwitterSvg from "../svgs/icons/twitter-svg";
import FacebookSvg from "../svgs/icons/facebook-svg";
import InstagramSvg from "../svgs/icons/instagram-svg";
import LinkedinSvg from "../svgs/icons/linkedin-svg";
function Footer() {
  return (
    <div className="relative">
      <div className="container p-4 lg:p-12 mx-auto xl:px-0">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 md:grid-cols-5">
          <div className="md:col-span-2">
            <div>
              <Link
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                href="/"
              >
                <Image
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                  src="/logo.svg"
                />
                <span>Nextly</span>
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Nextly is a free landing page &amp; marketing website template for
              startups and indie projects. Its built with Next.js &amp;
              TailwindCSS. And it’s completely open-source.
            </div>
            <div className="mt-5">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-44"
              >
                <Image
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                  src="/poweredvercel.svg"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {NavLinks.map((link, index) => (
                <Link
                  key={index}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  href={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {LegalLinks.map((link, index) => (
                <Link
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  key={index}
                  href={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Follow us</div>
            <div className="md:flex-col lg:flex-row md:gap-3 space-x-5 md:space-x-0 md:items-center md:justify-center lg:items-start lg:justify-normal flex mt-5 lg:space-x-5 text-gray-400 dark:text-gray-500">
              <Link
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <TwitterSvg />
              </Link>
              <Link
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <FacebookSvg />
              </Link>
              <Link
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <InstagramSvg />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Linkedin</span>
                <LinkedinSvg />
              </Link>
            </div>
          </div>
        </div>
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © 2024. Made with ♥ by{" "}
          <Link
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web3Templates
          </Link>
          . Illustrations from{" "}
          <Link
            href="https://www.glazestock.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glazestock
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default Footer;
