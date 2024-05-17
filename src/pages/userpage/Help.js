import React, { useContext, useState } from "react";
import { ContentPage } from "./ContentPage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppContext } from "../../App";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";
import hero from "../../images/FeedbackImage-removebg-preview.png";

export const Help = () => {
  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    type: yup.string().required("Without type you can't submit!"),
    department: yup.string().required("Enter the city name for suggestion!"),
    suggestion: yup.string().required("Enter your suggestion!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [typename, setTypename] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [date, setDate] = useState(moment());
  
  const { city } = useContext(AppContext);

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const addRef = collection(db, "suggestion");

      await addDoc(addRef, {
        type: type === "Others" ? typename : type,
        department: department === null ? city : department,
        suggestion: suggestion,
        username: user?.displayEmail || user?.email,
        date: date.format("DD/MM/YYYY, hh:mm:ss A"),
      });

      alert("Complient is posted successfully");
    } catch (err) {
      console.error(err);
    }
    navigate("/userDashboard");
  };

  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#FFFDE8" }}>
      <div>
        <ContentPage Help={true} />
      </div>
      <br />
      <br />

      <div className="p-6">
        <br />
        <div className="grid md:mx-auto md:w-full md:max-w-sm grid-cols-1 lg:max-w-7xl lg:grid-cols-2">
          {/* <div>
          <h1 style={{fontSize:"25px"}}> {t("suggestionForm")} </h1>
        </div> */}

          <div className="text-left mt-10">
            <div className="rounded-lg mb-5">
              <img
                src={hero}
                alt="hero"
                className=""
                height="500px"
                width="500px"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("suggestionheading")}
            </h1>
            <p className="mt-4 ">
              {t("suggestionpara")}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className="min-h-full min-h-screen xs:bg-white"
              style={{
                background: "#FFFDE8",
              }}
            >
              <div
                className="bg-white rounded-lg shadow-lg p-6 mt-5"
                style={{
                  borderRadius: "10px",
                  border: "1px solid orange",
                }}
              >
                <div className="mt-5 mb-5">
                  <div>
                    <div className="flex items-center justify-center">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        {t("type")}
                      </label>
                    </div>

                    <div className="mt-2 flex items-center justify-center">
                      <select
                        {...register("type")}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-none outline-none sm:max-w-xs sm:text-sm sm:leading-6"
                        style={{ marginLeft: "20px", marginRight: "20px" }}
                      >
                        <option value="">--SELECT--</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Water">Water</option>
                        <option value="Property Damage">Property Damage</option>
                        <option value="Drainage">Drainage</option>
                        <option value="Public Toilet Maintenance">
                          Public Toilet Maintenance
                        </option>
                        <option value="Garbage">Garbage</option>
                        <option value="Others">Others </option>
                      </select>
                    </div>

                    <div className="flex items-center justify-center">
                      <input
                        type="text"
                        style={{
                          display: type === "Others" ? "grid" : "none",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          marginTop: "10px",
                          marginBottom: "5px",
                        }}
                        placeholder="Others complaint type..."
                        onChange={(e) => {
                          setTypename(e.target.value);
                        }}
                      />
                    </div>

                    {type === "Others" ? (
                      <span className="mt-3 text-sm leading-6 text-gray-600">
                        Type your Other complaint-type in the text box
                      </span>
                    ) : (
                      <span className="mt-3 text-sm leading-6 text-gray-600">
                        {t("typeContent")}
                      </span>
                    )}

                    <p style={{ color: "red" }}>{errors.type?.message}</p>
                  </div>

                  <br />

                  <div>
                    <div className="flex items-center justify-center">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        {t("City")}
                      </label>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <select
                        {...register("department")}
                        onChange={(e) => {
                          setDepartment(e.target.value);
                        }}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-none outline-none sm:max-w-xs sm:text-sm sm:leading-6"
                        style={{ marginLeft: "20px", marginRight: "20px" }}
                        defaultValue={!city ? "" : city}
                      >
                        {/* api website=> https://opencagedata.com/dashboard#geocoding */}
                        <option value="">--SELECT--</option>
                        <option value="Ariyalur">Ariyalur</option>
                        <option value="Chengalpattu">Chengalpattu</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Cuddalore">Cuddalore</option>
                        <option value="Dharmapuri">Dharmapuri</option>
                        <option value="Dindigul">Dindigul</option>
                        <option value="Erode">Erode</option>
                        <option value="Kallakurichi">Kallakurichi</option>
                        <option value="Kanchipuram">Kanchipuram</option>
                        <option value="Kanniyakumari">Kanniyakumari</option>
                        <option value="Karur">Karur</option>
                        <option value="Krishnagiri">Krishnagiri</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Mayiladuthurai">Mayiladuthurai</option>
                        <option value="Nagapattinam">Nagapattinam</option>
                        <option value="Namakkal">Namakkal</option>
                        <option value="Nilgiris">Nilgiris</option>
                        <option value="Perambalur">Perambalur</option>
                        <option value="Pudukkottai">Pudukkottai</option>
                        <option value="Ramanathapuram">Ramanathapuram</option>
                        <option value="Ranipet">Ranipet</option>
                        <option value="Salem">Salem</option>
                        <option value="Sivaganga">Sivaganga</option>
                        <option value="Tenkasi">Tenkasi</option>
                        <option value="Thanjavur">Thanjavur</option>
                        <option value="Theni">Theni</option>
                        <option value="Thiruvallur">Thiruvallur</option>
                        <option value="Thiruvarur">Thiruvarur</option>
                        <option value="Thoothukudi">Thoothukudi</option>
                        <option value="Tiruchirappalli">Tiruchirappalli</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Tirupathur">Tirupathur</option>
                        <option value="Tiruppur">Tiruppur</option>
                        <option value="Tiruvannamalai">Tiruvannamalai</option>
                        <option value="Vellore">Vellore</option>
                        <option value="Viluppuram">Viluppuram</option>
                        <option value="Virudhunagar">Virudhunagar</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <span className="mt-3 text-sm leading-6 text-gray-600">
                      {t("cityContent")}
                    </span>
                    <p style={{ color: "red" }}>{errors.department?.message}</p>
                  </div>

                  <br />

                  <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      {" "}
                      {t("Suggestion")}{" "}
                    </label>
                    <div className="mt-2 flex items-center justify-center">
                      <textarea
                        rows="3"
                        placeholder="Address details for track the exact street location..."
                        {...register("suggestion")}
                        onChange={(e) => {
                          setSuggestion(e.target.value);
                        }}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-none outline-none sm:max-w-xs sm:text-sm sm:leading-6"
                        style={{ marginLeft: "20px", marginRight: "20px" }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{errors.suggestion?.message}</p>
                  </div>

                  <br />

                  <div>
                    <input
                      type="submit"
                      value={t("submit")}
                      className="rounded-md bg-white-600 px-3 py-2 text-sm font-semibold text-black cursor-pointer shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};
