"use client";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "@/constants";
import ModesToggler from "./modes-toggler";
export default function MobileHeader() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {/* Mobile menu button */}
      <button
        aria-label="Navbar open and close toggle"
        type="button"
        className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden font-bold hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700"
        onClick={() => setIsShow(!isShow)}
      >
        <span className="sr-only">Navbar open and close toggle</span>
        {isShow ? (
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        )}
      </button>
      {/* Mobile Darkmode */}
      <ModesToggler className="lg:hidden ml-1" />
      {/* Mobile Nav */}
      <div
        className={`flex flex-wrap w-full my-5 lg:hidden ${
          isShow ? "block" : "hidden"
        }`}
        id="headlessui-disclosure-panel-:R39ja:"
        data-headlessui-state="open"
        data-open=""
      >
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
            href={link.link}
          >
            {link.name}
          </Link>
        ))}

        <Link
          className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
          href="/"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
