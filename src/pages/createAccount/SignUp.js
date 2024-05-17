import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const SignUp = () => {

  const schema = yup.object().shape({
    email: yup.string().email().required("Enter Email..."),
    password: yup.string().required("Enter Password...").min(8).max(20),
    rewritePassword: yup.string().oneOf([yup.ref("password"), null], "Password Don't Match").required("Enter RewritePassword..."),
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try{
      // data.preventDefault()

      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/loginContainer");
      })
    } catch(err) {
      console.error(err);
    }
  }

  const navigate = useNavigate();

  const {t} = useTranslation();

  return (
    <div className='p-1'>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t("emailAddress")}
                </label>
              </div>
          <div className='mt-2'>
            <input type="text" {...register("email")} onChange={(e) => {setEmail(e.target.value)}}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 px-1 py-2 mr-2 items-center justify-between focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
          </div>
        <p style={{color: "red"}} className='text-red-500'>{errors.email?.message}</p>
        </div>

        <div>
              <div className="flex">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t("password")}
                </label>
              </div>

              <div className="mt-2">
                <input
                type='password'
                  className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1 py-2" {...register("password")} onChange={(e) => {setPassword(e.target.value)}}
                />
          <p style={{color: "red"}}>{errors.password?.message}</p>
              </div>
            </div>

            <div>
              <div className="flex">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t("rewritePassword")}
                </label>
              </div>

              <div className="mt-2">
                <input
                type='password'
                  className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1 py-2" {...register("rewritePassword")}
                />
        <p style={{color: "red"}}>{errors.rewritePassword?.message}</p>
              </div>
            </div>

        <div className='flex items-center justify-center'>
        <input type="submit" value="Create Account" onChange={onSubmit} className="flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{border: "1px solid black", cursor: "pointer"}} />
        </div>
      </form>
    </div>
  )
}
