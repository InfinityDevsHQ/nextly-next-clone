"use client"
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.style.colorScheme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
    }
  }, [darkMode])

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 lg:p-6 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          {/* Logo */}
          <a href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                  src="/logo.svg"
                />
              </span>
              <span>Nextly</span>
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
            onClick={() => setIsShow(!isShow)}
          >
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
          <div className="flex items-center lg:hidden ml-1">
            <button
              className="text-gray-300 rounded-full outline-none focus:outline-none"
              onClick={() => setDarkMode(!darkMode)}
            >
              <span className="sr-only">Light Mode</span>

              {!darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="gray"
                  className="w-5 h-5 "
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-5 h-5 "
                  width="20"
                  height="20"
                  stroke="yellow"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
                </svg>
              )}
            </button>
          </div>
          {/* Mobile Nav */}
          <div
            className={`flex flex-wrap w-full my-5 lg:hidden ${
              isShow ? "block" : "hidden"
            }`}
            id="headlessui-disclosure-panel-:R39ja:"
            data-headlessui-state="open"
            data-open=""
          >
            <a
              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              href="/"
            >
              Product
            </a>
            <a
              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              href="/"
            >
              Features
            </a>
            <a
              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              href="/"
            >
              Pricing
            </a>
            <a
              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              href="/"
            >
              Company
            </a>
            <a
              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              href="/"
            >
              Blog
            </a>
            <a
              className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
              href="/"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Desktop Nav */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <a
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                Product
              </a>
            </li>
            <li className="mr-3 nav__item">
              <a
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                Features
              </a>
            </li>
            <li className="mr-3 nav__item">
              <a
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                Pricing
              </a>
            </li>
            <li className="mr-3 nav__item">
              <a
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                Company
              </a>
            </li>
            <li className="mr-3 nav__item">
              <a
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <a
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            href="/"
          >
            Get Started
          </a>
          <div className="flex items-center">
            <button
              className="text-gray-300 rounded-full outline-none focus:outline-none"
              onClick={() => setDarkMode(!darkMode)}
            >
              <span className="sr-only">Light Mode</span>

              {!darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="gray"
                  className="w-5 h-5 "
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width="24"
                  height="24"
                  stroke="yellow"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
