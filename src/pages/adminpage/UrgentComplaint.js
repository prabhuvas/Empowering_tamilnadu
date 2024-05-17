import React, { useContext, useState, useEffect } from "react";
import { AdminContent } from "./AdminContent";
import { AppContext } from "../../App";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { UrgentCompCont } from "./UrgentCompCont";
import UrgentUnresolved from "./UrgentUnresolved";
import { useTranslation } from "react-i18next";
import { DocumentCheckIcon, DocumentIcon } from "@heroicons/react/24/outline";
import hero from "../../images/urgent complaints.png";

const UrgentComplaint = () => {
  const { email } = useContext(AppContext);

  const [complaint, setComplaint] = useState(null);
  const [resolvedComp, setResolvedComp] = useState(false);
  const [unResolvedComp, setUnresolvedComp] = useState(false);

  const compRef = collection(db, "addcomplaint");

  const getComplaint = async () => {
    const data = await getDocs(compRef);

    setComplaint(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getComplaint();
  }, []);

  const handleResolvedComp = () => {
    setResolvedComp(true);
    setUnresolvedComp(false);
  };

  const handleUnresolvedComp = () => {
    setResolvedComp(false);
    setUnresolvedComp(true);
  };

  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#fffde8" }}>
      <div>
        <AdminContent DashboardPage={true} />
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
          {t("urgentComplaint")}
        </h1>
        <p className="mt-4">
          {t("adminpara")}
        </p> <br />
      </div> 

      <div className="grid grid-cols-1 gap-3 lg:gap-0 lg:grid-cols-2 flex justify-center text-sm pr-20 pl-20 lg:mr-20 lg:ml-20">
        <div className="flex lg:ml-20 justify-start md:justify-center lg:justify-center gap-0">
          <div className="flex underline hover:text-amber-500">
          <DocumentCheckIcon
            className="h-5 w-5 mt-1 mr-1"
            style={{ color: resolvedComp ? "#b45309" : "" }}
          />
          <button
            onClick={() => handleResolvedComp()}
            style={{
              color: resolvedComp ? "#b45309" : "",
            }}
            >
            {t("resolvedComplaint")}
          </button>
            </div>
        </div>

        <div className="flex gap-0 lg:mr-20 justify-start md:justify-center lg:justify-center">
          <div className="flex underline hover:text-amber-500">
          <DocumentIcon
            className="h-5 w-5 mt-1 mr-1"
            style={{ color: unResolvedComp ? "#b45309" : "" }}
            />
          <button
            onClick={() => handleUnresolvedComp(true)}
            style={{
              color: unResolvedComp ? "#b45309" : "",
            }}
          >
            {t("unresolvedComplaint")}
          </button>
            </div>
        </div>
      </div>

      <div>
        {unResolvedComp &&
          complaint?.map((post) => {
            if (
              email === "maduraielectricity@gmail.com" &&
              post.type === "Electricity" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentUnresolved post={post} />;
            } else if (
              email === "maduraiwater@gmail.com" &&
              post.type === "Water" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentUnresolved post={post} />;
            } else if (
              email === "maduraiproperty@gmail.com" &&
              post.type === "Property Damage" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentUnresolved post={post} />;
            } else if (
              email === "maduraidrainage@gmail.com" &&
              post.type === "Drainage" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentUnresolved post={post} />;
            } else if (
              email === "madurairestroom@gmail.com" &&
              post.type === "Public Toilet Maintenance" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentUnresolved post={post} />;
            } else if (
              email === "maduraigarbage@gmail.com" &&
              post.type === "Garbage" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentUnresolved post={post} />;
            }
          })}
      </div>

      <div>
        {resolvedComp &&
          complaint?.map((post) => {
            if (
              email === "maduraielectricity@gmail.com" &&
              post.type === "Electricity" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              if (post.type === "") {
                return <div>No Complaints</div>;
              } else {
                return <UrgentCompCont post={post} />;
              }
            } else if (
              email === "maduraiwater@gmail.com" &&
              post.type === "Water" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              if (post === "") {
                return <div>No Complaints</div>;
              } else {
                return <UrgentCompCont post={post} />;
              }
            } else if (
              email === "maduraiproperty@gmail.com" &&
              post.type === "Property Damage" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentCompCont post={post} />;
            } else if (
              email === "maduraidrainage@gmail.com" &&
              post.type === "Drainage" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentCompCont post={post} />;
            } else if (
              email === "madurairestroom@gmail.com" &&
              post.type === "Public Toilet Maintenance" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentCompCont post={post} />;
            } else if (
              email === "maduraigarbage@gmail.com" &&
              post.type === "Garbage" &&
              post.department === "Madurai" &&
              post.urgentComplaint === true
            ) {
              return <UrgentCompCont post={post} />;
            }
          })}

        {/* {complaint?.map((post) => {
              return post;
            })} */}

<div style={{ backgroundColor: "#fffde8", height:"300px" }}></div>
      </div>
    </div>
  );
};

export default UrgentComplaint;
