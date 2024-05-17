import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/namelogomathan-removebg-preview.png";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../components/LanguageSelector";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const HomeContent = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="h-9 w-auto" src={logo} alt="Your Company" />
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <AnchorLink href="#service">
                        <button className="bg-white-900 text-black-200 px-3 py-3 text-sm font-medium hover:border-b-2 border-black">
                          {t("ourservice")}
                        </button>
                      </AnchorLink>

                      <AnchorLink href="#aboutus">
                        <button className="bg-white-900 text-black-200 px-3 py-3 text-sm font-medium hover:border-b-2 border-black">
                          {t("aboutus")}
                        </button>
                      </AnchorLink>

                      <button
                        onClick={() => {
                          navigate("/adminlogin");
                        }}
                        className="bg-white-900 text-black-200 px-3 py-2 text-sm font-medium hover:border-b-2 border-black hover:bg-amber-300 "
                        style={{
                          border: "1px solid black",
                          height: "43px",
                          width: "auto",
                        }}
                      >
                        {t("admin")}
                      </button>

                      <button
                        onClick={() => {
                          navigate("/askinguser");
                        }}
                        className="bg-white-900 text-black-200 px-3 py-2 text-sm font-medium hover:border-b-2 border-black hover:bg-amber-200"
                        style={{
                          border: "1px solid black",
                          height: "43px",
                          width: "auto",
                        }}
                      >
                        {t("user")}
                      </button>
                    </div>
                  </div>

                  {/* Profile dropdown */}

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>

                        <LanguageSelector />
                      </Menu.Button>
                    </div>

                    {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                   
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-55 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      
                      <Menu.Item className="flex items-center justify-center">
                        {({ active }) => (
                          <a
                            href="#"
                            className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition> */}
                  </Menu>
                </div>
              </div>
            </div>

            <hr className="border-black-100" />
            <Disclosure.Panel className="ring-1 ring-gray-400">
              <div className="flex justify-center flex-col space-y-1 px-2 pb-3 pt-2">
                <button
                  onClick={() => {
                    navigate("/adminlogin");
                  }}
                  className="bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium border-black"
                >
                  {t("admin")}
                </button>

                <button
                  onClick={() => {
                    navigate("/askinguser");
                  }}
                  className="bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium border-black"
                >
                  {t("user")}
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
