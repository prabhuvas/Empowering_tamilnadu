import React, { useState, useEffect } from "react";
import { db, auth } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Complaints } from "./Complaints";
import { ContentPage } from "./ContentPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { NoComplaint } from "./NoComplaint";
import { useTranslation } from "react-i18next";

export const UserDashboard = () => {
  const [user] = useAuthState(auth);

  const { t } = useTranslation();

  const [postComplaints, setPostComplaints] = useState(null);
  const [noComplaints, setNoComplaints] = useState(false);

  const postRef = collection(db, "addcomplaint");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostComplaints(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    if (!postComplaints && user?.uid === postComplaints?.userId) {
      setNoComplaints(true);
    } else {
      setNoComplaints(false);
    }
    // setNoComplaints(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={{ backgroundColor: "#fffde8" }}>
      <div>
        <ContentPage DashboardPage={true} />
      </div>
      <br />
      <br />
      <div className="text-left pt-10 pl-10 pr-10 flex justify-center flex-col items-center mt-10">
        {/* <div className="rounded-lg">
          <img
            src={hero}
            alt="hero"
            className=""
            height="300px"
            width="300px"
          />
        </div> */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("userdashboardheading")}
        </h1>
        <p className="mt-4">
          {t("userdashboardpara")}
        </p>
      </div>
      <div>
        {!noComplaints === true ? (
          postComplaints != null ? (
            postComplaints.map((post) => (
              <div>
                <Complaints post={post} />
              </div>
            ))
          ) : (
            <>
              <div style={{ marginTop: "10px" }} className="font-bold">
                Loading...
              </div>
            </>
          )
        ) : (
          <>
            <div style={{ marginTop: "10px", fontSize: "25px" }}>
              <NoComplaint />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
