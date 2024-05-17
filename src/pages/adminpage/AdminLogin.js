import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import letter from "../../images/logoooo-removebg-preview.png";
import { AppContext } from "../../App";
import { useTranslation } from "react-i18next";
// import { LanguageSelector } from '../../components/LanguageSelector';

export const AdminLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Enter Your Email..."),
    password: yup.string().required("Enter Your Password..."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const { email, setEmail, password, setPassword } = useContext(AppContext);

  const [chk, setChk] = useState(0);

  const onSubmit = async () => {
    try {
      (email === "maduraielectricity@gmail.com" && password === "123456789") ||
      (email === "maduraiwater@gmail.com" && password === "123456789") ||
      (email === "maduraiproperty@gmail.com" && password === "123456789") ||
      (email === "maduraidrainage@gmail.com" && password === "123456789") ||
      (email === "madurairestroom@gmail.com" && password === "123456789") ||
      (email === "maduraigarbage@gmail.com" && password === "123456789")
        ? navigate("/admindashboard") && setChk(0)
        : setChk(1);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  const { t } = useTranslation();

  return (
    <div
      className="flex min-h-full flex-1 flex-col justify-center min-h-screen flex flex-col justify-center items-center xs:bg-white"
      style={{
        background: "#FFFDE8",
      }}
    >
      <div
        className="rounded-lg shadow-lg p-12 lg:p-6 mt-2 sm:mx-auto sm:w-full sm:max-w-sm"
        style={{ background: "white", border: "1px solid orange" }}
      >
        <div className="">
          <img src={letter} alt="logo" className="mx-auto h-10 w-auto" />

          <h2
            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight"
            style={{ color: "#FEA128" }}
          >
            {t("adminLogin")}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t("adminID")}
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-1 py-2"
                  {...register("email")}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <p style={{ color: "red" }} class="text-red-500">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t("password")}
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  {...register("password")}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1 py-2"
                />
              </div>

              <p style={{ color: "red" }} class="text-red-500">
                {errors.password?.message}
              </p>
            </div>
            <div>
              {chk === 1 && email !== "" && password !== "" && (
                <p style={{ color: "red" }}>{t("incorrect")}</p>
              )}
            </div>
            <div class="flex items-center justify-center">
              <input
                type="submit"
                value={t("login")}
                className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-200"
                style={{ cursor: "pointer", border: "1px solid black" }}
                onClick={onSubmit}
              />
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};
