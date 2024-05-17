import React, { useState, useContext, useRef } from "react";
import { ContentPage } from "./ContentPage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, storage, auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";
import { AppContext } from "../../App";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "../../Home.css";
import hero from "../../images/cx8-26-61-removebg-preview.png";

export const AddComplaint = () => {
  const [typename, setTypename] = useState("");

  const form = useRef();

  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    type: yup.string().required("Select the Complaint Type..."),
    department: yup.string().required("Select the City..."),
    description: yup.string().required("Enter the Description..."),
    address: yup.string().required("Enter the Address..."),
  });

  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [fileUpload, setFileUpload] = useState("");
  const [type, setType] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [date] = useState(moment());
  const [address, setAddress] = useState("");

  const uploadFile = async (e) => {
    const imgs = ref(storage, `complaintPhotos/${fileUpload.name + v4()}`);
    await uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        setFileUpload(val);
      });
    });
  };

  const addComplaint = async (e) => {
    try {
      const addRef = collection(db, "addcomplaint");

      if (
        window.confirm('Are you mark this complaint as "Urgent Complaint" ')
      ) {
        await addDoc(addRef, {
          type: type === "Others" ? typename : type,
          department: department === "" ? city : department,
          description: description,
          address: address,
          urgentComplaint: true,
          username: user?.displayEmail || user?.email,
          userId: user?.uid,
          imgurl: fileUpload || null,
          status: "unseen",
          date: date.format("DD/MM/YYYY, hh:mm:ss A"),
        });
      } else {
        await addDoc(addRef, {
          type: type === "Others" ? typename : type,
          department: department === "" ? city : department,
          description: description,
          address: address,
          urgentComplaint: false,
          username: user?.displayEmail || user?.email,
          userId: user?.uid,
          imgurl: fileUpload || null,
          status: "unseen",
          date: date.format("DD/MM/YYYY, hh:mm:ss A"),
        });
      }

      const serviceId = "service_dia16uq";
      const templateId = "template_ixo54gc";
      const publicKey = "Akb_HPP_7Lwzu6PLj";

      const templateParams = {
        from_name: user?.displayEmail || user?.email,
        from_email: address,
        user_name: "Admin of Electricity in madurai",
        message: description,
        file: fileUpload,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });

      alert("Complient is posted successfully");
    } catch (err) {
      console.error(err);
    }

    navigate("/userDashboard");
  };

  const { city } = useContext(AppContext);

  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#fffde8" }}>
      <div>
        <ContentPage color={true} />
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit(addComplaint)}
        className="p-5"
        style={{ color: "black", backgroundColor: "#fffde8" }}
      >
        {" "}
        <br /> <br />
        <div className="grid md:mx-auto md:w-full md:max-w-sm grid-cols-1 lg:max-w-7xl lg:grid-cols-2">
          <div className="text-left mt-10">
            <div className="rounded-lg">
              <img
                src={hero}
                alt="hero"
                className=""
                height="300px"
                width="300px"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("addcomplaintheading")}
            </h1>
            <p className="mt-4">{t("addcomplaintpara")}</p>
          </div>

          <div
            className="text-sm lg:text-xl shadow-lg mt-10 bg-white addcomplaint-content"
            style={{
              borderRadius: "10px",
              border: "1px solid orange",
            }}
          >
            <div className="mt-10">
              <div>
                <div className="flex items-center justify-center">
                  <label className="block text-sm font-medium leading-6">
                    {t("type")}
                  </label>
                </div>

                <div className="mt-2 flex items-center justify-center">
                  <select
                    {...register("type")}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:border-none outline-none sm:max-w-xs sm:text-sm sm:leading-6"
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
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
                      border: "1px solid orange",
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
                  <span className="mt-3 text-sm leading-6">
                    Type your Other complaint-type in the text box
                  </span>
                ) : (
                  <span className="mt-3 text-sm leading-6">
                    {t("typeContent")}
                  </span>
                )}

                <p style={{ color: "red" }}>{errors.type?.message}</p>
              </div>
              <br />
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6">
                  {t("typeDescription")}
                </label>
                <div className="mt-2 flex items-center justify-center">
                  <textarea
                    rows="3"
                    placeholder="Complaint details..."
                    {...register("description")}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-none outline-none sm:max-w-xs sm:text-sm sm:leading-6"
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.description?.message}</p>
              </div>
              <br />
              <div>
                <div className="flex items-center justify-center">
                  <label className="block text-sm font-medium leading-6">
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
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                      border: "1px solid #fffde8",
                    }}
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
                <span className="mt-3 text-sm leading-6">
                  {t("cityContent")}
                </span>
                <p style={{ color: "red" }}>{errors.department?.message}</p>
              </div>
              <br />
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6">
                  {t("Address")}
                </label>
                <div className="mt-2 flex items-center justify-center">
                  <textarea
                    rows="3"
                    placeholder="Address details for track the exact street location..."
                    {...register("address")}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-none outline-none sm:max-w-xs sm:text-sm sm:leading-6"
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                      border: "1px solid #fffde8",
                    }}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.address?.message}</p>
              </div>
              <br />
              <div className="flex items-center justify-center">
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6"
                  >
                    {t("UploadPhoto")}
                  </label>
                  <div
                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-400 px-5 py-5"
                    style={{
                      backgroundColor: "white",
                    }}
                  >
                    <div className="text-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Choose a Photo</span>
                          <input
                            type="file"
                            className="sr-only"
                            {...register("file")}
                            onChange={(e) => {
                              uploadFile(e);
                            }}
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <br />
              <div className="flex items-center justify-center">
                {!fileUpload && <h3>Upload Image</h3>}
                {fileUpload && (
                  <img
                    src={fileUpload}
                    alt="complaintPhoto"
                    height="50"
                    width="50"
                  />
                )}
                {fileUpload && (
                  <h3 className="text-red-900">-Image Uploaded</h3>
                )}
              </div>
              <p style={{ color: "red" }}>{errors.file?.message}</p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <input
                  type="submit"
                  value={t("submit")}
                  onChange={uploadFile}
                  className="rounded-md bg-white-600 px-3 py-2 text-sm font-semibold text-black cursor-pointer shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  style={{ border: "1px solid black", color: "black" }}
                />
              </div>
              <br />
              <br />
              {isSubmitting && <div>Loading...</div>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
