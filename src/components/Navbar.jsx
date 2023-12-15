"use client";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { MdOutlineNotifications } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar sideBarHandler={open} />
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex sm:flex-row-reverse items-center justify-start">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="sm:hidden inline-flex items-center p-2 text-sm text-gray-500 hover:text-sky-500 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-blue-600 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                href="https://flowbite.com"
                className="flex justify-center items-center ms-0 sm:me-24"
              >
                <Image
                  height={100}
                  width={50}
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 me-0"
                  alt="FlowBite Logo"
                />
                <span className="hidden sm:inline-block self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Delivery
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-4 ms-3">
                <button
                  type="button"
                  className="relative inline-flex items-center p-3 text-sm font-medium text-center"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 21"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"
                    />
                  </svg>
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full top-1 end-1">
                    20
                  </div>
                </button>

                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      height={100}
                      width={100}
                      class="w-8 h-8 rounded-full"
                      src="/vercel.svg"
                      alt="user photo"
                    />
                  </button>
                </div>

                {/* Navbar Profile menu */}
                <div
                  className="z-50 hidden absolute right-0 top-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
