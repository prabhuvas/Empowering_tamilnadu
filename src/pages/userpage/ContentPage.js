import React, { useEffect, useContext } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../config/firebase';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import profileLogo from "../../images/profilelogo.png";
import logo from "../../images/logoooo-removebg-preview.png";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { AppContext } from "../../App";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "../../components/LanguageSelector";
   
export const ContentPage = (props) => {
 
    const navigate = useNavigate();

    const [user] = useAuthState(auth);
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
    
              //console.log("uid", uid)
            } else {
              navigate("/");
            }
          });

    }, []);

    const handleLogout = async () => {          
      try {
        await signOut(auth).then(() => {
          // Sign-out successful.
          navigate("/");
          alert("Signed out successfully");
        })
      }  catch(err) {
        console.error(err);
      }
      
    }

    // const [photo, setPhoto] = useState(user?.displayName);
    // const [booleans, setBooleans] = useState(false);

    //   if(photo!="") {
    //     setBooleans(false);
    //   } else {
    //     setBooleans(true);
    //   }

    const { setCity, setLoading } = useContext(AppContext);
    
    const {t} = useTranslation();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const {latitude , longitude} = position.coords;
        try {
          const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=d7c3ed100f81466698c3a201ef138ba5`);
          const data = response.data;
          if (data.results.length > 0) {
            setCity(data.results[0].components.city);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching location:', error);
          setLoading(false);
        }
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);


  return (
    // className='fixed w-full top-0 left-0' style={{backgroundColor:"#F0F0F0"}}
    <div className='fixed w-full top-0 left-0' style={{backgroundColor:"#FFFDE8"}}>
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
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
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button onClick={() => {navigate("/addComplaint")}} className='bg-white-900 text-black-200  px-3 py-2 text-sm font-medium hover:border-b-2 border-black' style={{borderTop: props.color?"black":"", borderWidth: props.color?"2px":"", borderLeft: props.color?"black":"", borderRight: props.color?"black":""}}>
                      {t("addComplaint")}
                    </button>

                    <button onClick={() => {navigate("/userDashboard")}} className='bg-white-900 text-black-200 px-3 py-2 text-sm font-medium hover:border-b-2 border-black' style={{borderTop: props.DashboardPage?"black":"", borderWidth: props.DashboardPage?"2px":"", borderLeft: props.DashboardPage?"black":"", borderRight: props.DashboardPage?"black":""}}>
                      {t("myComplaint")}
                    </button>

                    <button onClick={() => {navigate("/help")}} className='bg-white-900 text-black-200 px-3 py-2 text-sm font-medium hover:border-b-2 border-black' style={{borderTop: props.Help?"black":"", borderWidth: props.Help?"2px":"", borderLeft: props.Help?"black":"", borderRight: props.Help?"black":""}}> {t("suggestion")} </button>
                  </div>
                
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <LanguageSelector />
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100" style={{border: "2px solid gray"}}>
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      
                      {user?.displayName ? <img src={user.photoURL} alt="AccountImage" className='h-8 w-8 rounded-full' /> : <img src={profileLogo} alt='AccountImage' className="h-8 w-8 rounded-full" />}
                    
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
                   
                    <Menu.Items className="absolute right-0 z-10 mt-3 w-55 rounded-md bg-white mb-1 shadow-lg ring-1 ring-orange-400 focus:outline-none">
                      <Menu.Item>
                      
                          <p className=' block px-1 py-2 text-sm text-black-700'>
                           {user?.displayEmail || user?.email}
                          </p>
                      
                      </Menu.Item> <hr />
                      <Menu.Item className="flex items-center justify-center">
                        {({ active }) => (
                          <a
                            href="#"
                            className={(active ? 'bg-gray-100 hover:bg-amber-300' : '', 'hover:bg-amber-200 block px-0 py-2 text-sm text-black-700')}
                            onClick={handleLogout}>
                            SIGN OUT
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
          <Disclosure.Panel className="bg-white rounded-lg mr-5 ml-1 ring-1 ring-amber-400">
            <div className="space-y-1 px-2 pb-3 pt-2">

            <button onClick={() => {navigate("/addComplaint")}} className='bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium'>Add Complaint</button>

            <button onClick={() => {navigate("/userDashboard")}} className='bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium'>My Complaint</button>

            <button onClick={() => {navigate("/help")}} className='bg-white-900 text-black-200 block rounded-md px-3 py-2 text-sm font-medium'>Suggestion</button>
            
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>  
    </div>    
  );
}