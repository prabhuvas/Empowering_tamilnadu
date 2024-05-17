import React from 'react';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { LanguageIcon } from "@heroicons/react/24/outline";

const languages = [
    {code: "en", lang: "English"},
    {code: "ta", lang: "தமிழ்"},
]

const feature = {
  icon: LanguageIcon,
}

export const LanguageSelector = () => {

    const {i18n} = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

  return (
    <Menu as="div" className="relative inline-block text-center mt-1">
        
      <div>
        <Menu.Button className="flex justify-center px-2 py-2 text-sm font-semibold">
          {/* <img src={lanlogo} alt="language logo" height="28px" width="28px" style={{borderRadius: "20px"}} /> */}
          <feature.icon className="h-8 w-8 text-gray-600 rounded-3xl p-1 ring-1 ring-gray-600"  aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-20 mt-1 rounded-md bg-white shadow-lg ring-1 ring-orange-400 focus:outline-none">
          <div className="my-0">
            <button>
            {
            languages.map((lng) => (
                <button 
                className='flex hover:bg-amber-200 pl-5 pr-5 border-b-2' 
                style={{borderRadius:"6px"}}
                key={lng.code} 
                onClick={() => changeLanguage(lng.code)}>{lng.lang}</button> 
                
            )) 
        } 

            </button>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LanguageSelector