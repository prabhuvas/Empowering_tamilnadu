import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import logo from "../../images/logoooo-removebg-preview.png";
import profileLogo from "../../images/profilelogo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../../components/LanguageSelector";

export const AdminContent = (props) => {
  const navigate = useNavigate();

  const { email, setEmail, setPassword } = useContext(AppContext);

  const handleLogout = async () => {
    navigate("/");
    setEmail("");
    setPassword("");
    alert("Signed out successfully");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("email"));

    if (items) {
      setEmail(items);
    }
  }, []);

  const { t } = useTranslation();

  return (
    <div
      className="fixed w-full top-0 left-0"
      style={{ backgroundColor: "#fffde8" }}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <img className="h-8 w-auto" src={logo} alt="Your Company" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <button
                        className="bg-white-900 text-black-200 px-3 py-2 text-sm font-medium  border-black hover:border-b-2"
                        onClick={() => {
                          navigate("/admindashboard");
                        }}
                        style={{
                          borderTop: props.color ? "black" : "",
                          borderWidth: props.color ? "2px" : "",
                          borderLeft: props.color ? "black" : "",
                          borderRight: props.color ? "black" : "",
                        }}
                      >
                        {t("generalComplaint")}
                      </button>

                      <button
                        className="bg-white-900 text-black-200 px-3 py-2 text-sm font-medium hover:border-b-2 border-black"
                        onClick={() => {
                          navigate("/admin/urgentComplaint");
                        }}
                        style={{
                          borderTop: props.DashboardPage ? "black" : "",
                          borderWidth: props.DashboardPage ? "2px" : "",
                          borderLeft: props.DashboardPage ? "black" : "",
                          borderRight: props.DashboardPage ? "black" : "",
                        }}
                      >
                        {t("urgentComplaint")}
                      </button>

                      <button
                        className="bg-white-900 text-black-200 px-3 py-2 text-sm font-medium hover:border-b-2 border-black"
                        onClick={() => {
                          navigate("/admin/reviewSuggestion");
                        }}
                        style={{
                          borderTop: props.Help ? "black" : "",
                          borderWidth: props.Help ? "2px" : "",
                          borderLeft: props.Help ? "black" : "",
                          borderRight: props.Help ? "black" : "",
                        }}
                      >
                        {t("feedback")}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <LanguageSelector />
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button
                        className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-800"
                        style={{ border: "1px solid black" }}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>

                        <img
                          src={profileLogo}
                          alt="DefaultProfilePhoto"
                          className="h-8 w-8 rounded-full"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white ring-1 ring-orange-400 focus:outline-none">
                        <Menu.Item>
                          <p className="block px-1 py-2 text-sm text-gray-700">
                            {email}
                          </p>
                        </Menu.Item>
                        <hr />
                        <Menu.Item className="flex items-center justify-center">
                          {({ active }) => (
                            <a
                              href="#"
                              className={
                                (active ? "bg-gray-100" : "",
                                "hover:bg-amber-200 block px-4 py-2 text-sm text-gray-700")
                              }
                              onClick={handleLogout}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            {/* <hr className='border-black-400' /> */}
            <Disclosure.Panel
              className="sm:hidden bg-white rounded-lg mr-5 ml-1 ring-1 ring-amber-400"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                <button
                  className="bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium"
                  onClick={() => {
                    navigate("/admindashboard");
                  }}
                >
                  {t("generalComplaint")}
                </button>
                {/* style={{borderTop: props.color?"black":"", borderWidth: props.color?"2px":"", borderLeft: props.color?"black":"", borderRight: props.color?"black":""}} */}

                <button
                  className="bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium"
                  onClick={() => {
                    navigate("/admin/urgentComplaint");
                  }}
                >
                  {t("urgentComplaint")}
                </button>
                {/* style={{borderTop: props.DashboardPage?"black":"", borderWidth: props.DashboardPage?"2px":"", borderLeft: props.DashboardPage?"black":"", borderRight: props.DashboardPage?"black":""}} */}

                <button
                  className="bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium"
                  onClick={() => {
                    navigate("/admin/reviewSuggestion");
                  }}
                >
                  {t("feedback")}
                </button>
                {/* style={{borderTop: props.Help?"black":"", borderWidth: props.Help?"2px":"", borderLeft: props.Help?"black":"", borderRight: props.Help?"black":""}} */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
