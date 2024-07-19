import Link from "next/link";
import ModesToggler from "./modes-toggler";
import { NavLinks } from "@/constants";
import MobileHeader from "./mobile-header";

function Navbar() {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 lg:p-6 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" rx="6" fill="#4F46E5" />
                  <path
                    d="M31.3662 34H25.7427L17.4282 19.4014V34H11.7725V10.5391H17.4282L25.7266 25.1377V10.5391H31.3662V34Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>Nextly</span>
            </span>
          </Link>
          <MobileHeader />
        </div>
        {/* Desktop Nav */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {NavLinks.map((link, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            href="/"
          >
            Get Started
          </Link>
          <ModesToggler />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
