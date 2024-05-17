import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const UserLogin = () => {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const onSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/addComplaint");
        }
      );
    } catch (error) {
      setErrorCode(error.code);

      console.log(error);
    }
  };

  const { t } = useTranslation();

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="flex">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              {t("emailAddress")}
            </label>
          </div>
          <div className="mt-2">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 px-1 py-2 mr-2 items-center justify-between focus:ring-1 focus:ring-inset focus:ring-indigo-600"
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
          <div className="flex">
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
              className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1 py-2"
            />
          </div>

          <p style={{ color: "red" }} class="text-red-500">
            {errors.password?.message}
          </p>
        </div>

        <div>
          {errorCode && <p style={{ color: "red" }}>{t("userIncorrect")}</p>}
        </div>

        <div class="flex items-center justify-center">
          <input
            type="submit"
            value="Login"
            className="flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            style={{ border: "1px solid black", cursor: "pointer" }}
          />
        </div>
      </form>
    </div>
  );
};
