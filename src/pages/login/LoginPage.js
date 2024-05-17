import React from "react";
import logo from "../../images/logoooo-removebg-preview.png";
import { UserLogin } from "./UserLogin";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {

  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-h-screen flex flex-col justify-center items-center xs:bg-white" 
    style={{
      background: "#FFFDE8",
      }}>
      {/* <LanguageSelector /> */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-2 sm:mx-auto sm:w-full sm:max-w-sm" style={{border: "1px solid orange"}}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="logo" className="mx-auto h-10 w-auto" />

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight"
          style={{color:"#FEA128"}}>
            {t("signintoyourAccount")}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <UserLogin />
          {/* <br />
          <p>or</p>
          <br />
          <button
            style={{ border: "1px solid black" }}
            type="button"
            onClick={signInWithGoogle}
            className="text-black w-full  bg-white hover:bg-blue focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <img
              class="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            {t("signinwithGoogle")} <div></div>
          </button> */}
        </div>
      </div>
    </div>
  );
};
