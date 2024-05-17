import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import { AdminContent } from "./AdminContent";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { ReviewContent } from "./ReviewContent";
import hero from "../../images/woman-reg.webp"
import { useTranslation } from "react-i18next";

const ReviewSuggestion = () => {
  const { email } = useContext(AppContext);

  const { t } = useTranslation();

  const [suggestion, setSuggestion] = useState(null);

  const compRef = collection(db, "suggestion");

  const getComplaint = async () => {
    const data = await getDocs(compRef);

    setSuggestion(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getComplaint();
  }, []);

  return (
    <div style={{ backgroundColor: "#fffde8" }}>
      <div>
        <AdminContent Help={true} />
      </div>
      <br />
      <br />

      <div className="text-center  pt-5 pl-10 pr-10 flex flex-col justify-center items-center mt-10">
        <div className="rounded-lg flex justify-center">
          <img
            src={hero}
            alt="hero"
            className=""
            height="450px"
            width="450px"
          />
        </div>
        <h1 className="text-3xl mt-4 font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("feedbackheading")}
        </h1>
        <p className="mt-4">
          {t("feedbackpara")}
        </p>
        <br />
      </div>

      <div>
        {suggestion?.map((post) => {
          if (
            email === "maduraielectricity@gmail.com" &&
            post.type === "Electricity" &&
            post.department === "Madurai"
          ) {
            return <ReviewContent post={post} />;
          } else if (
            email === "maduraiwater@gmail.com" &&
            post.type === "Water" &&
            post.department === "Madurai"
          ) {
            return <ReviewContent post={post} />;
          } else if (
            email === "maduraiproperty@gmail.com" &&
            post.type === "Property Damage" &&
            post.department === "Madurai"
          ) {
            return <ReviewContent post={post} />;
          } else if (
            email === "maduraidrainage@gmail.com" &&
            post.type === "Drainage" &&
            post.department === "Madurai"
          ) {
            return <ReviewContent post={post} />;
          } else if (
            email === "madurairestroom@gmail.com" &&
            post.type === "Public Toilet Maintenance" &&
            post.department === "Madurai"
          ) {
            return <ReviewContent post={post} />;
          } else if (
            email === "maduraigarbage@gmail.com" &&
            post.type === "Garbage" &&
            post.department === "Madurai"
          ) {
            return <ReviewContent post={post} />;
          }
        })}
      </div>

      <div style={{height: "250px"}}></div>
    </div>
  );
};

export default ReviewSuggestion;
