import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useTranslation } from "react-i18next";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const UrgentUnresolved = (props) => {
  const { post } = props;

  const [details, setDetails] = useState(false);

  const [state, setState] = useState(false);

  const [ComplaintStatus, setComplaintStatus] = useState(false);

  const [issueRectified, setIssueRectified] = useState(false);

  const handleDetails = async (id, status) => {
    if (post.status === "unseen") {
      const userDoc = doc(db, "addcomplaint", id);
      const newField = { status: "seen" };
      await updateDoc(userDoc, newField);
    }

    setDetails(true);
  };

  const setStatus = async (id) => {
    if (state) {
      const userDocc = doc(db, "addcomplaint", id);
      const anothernewField = { status: "on-going" };
      await updateDoc(userDocc, anothernewField);
      alert("Status Updated!");
    } else if (issueRectified) {
      const userDoccc = doc(db, "addcomplaint", id);
      const issueresolvedField = { status: "Issue-Rectified" };
      await updateDoc(userDoccc, issueresolvedField);
      alert("Issued Rectified Status Updated!");
    }
  };

  const handleOnGoing = () => {
    setState(!state);
    setIssueRectified(false);
  };

  const handleIssueRectified = () => {
    setIssueRectified(!issueRectified);
    setState(false);
  };

  const { t } = useTranslation();

  return (
    <div className="flex px-6 py-5 lg:px-8 text-left xs:bg-white" 
    style={{backgroundColor:"#fffde8", borderRadius:"15px"}}>

      {post?.status !== "Issue-Rectified" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-5 sm:mx-auto sm:w-full sm:max-w-sm"
        style={{border:"1px solid orange"}}>
          <div className="mt-10 space-y-6">
            <div
              className="flex items-center justify-center"
            >
              <img
                src={post?.imgurl}
                alt="ComplaintPhoto"
                height="300px"
                width="300px"
                className="shadow-lg ring-1 ring-gray-400"
              />
            </div>

            <div>
              <h1>
                <span className="font-bold"> {t("username")}: </span>
                {post?.username}
              </h1>
            </div>

            <div className="grid grid-cols-2 text-left gap-4 m-0">
            <div>
              <h1>
                <span className="font-bold"> {t("complaintType")}: </span>
                {post?.type}
              </h1>
            </div>

            <div>
              <h3>
                <span className="font-bold"> {t("city")}: </span>
                {post?.department}
              </h3>
            </div>
            </div>

            <div style={{ display: details ? "" : "none" }}>
              <p>
                <span className="font-bold"> {t("description")}: <br /></span>
                {post?.description}
              </p>
            </div>

            <div style={{ display: details ? "" : "none" }}>
              <p>
                <span className="font-bold"> {t("address")}: <br /></span>
                {post?.address}
              </p>
            </div>

            <div style={{ display: details ? "" : "none" }}>
              <p>
                <span className="font-bold"> {t("currentStatus")}:</span>
                {post?.status}
              </p>
            </div>

            <div style={{ display: details ? "" : "none" }}>
              <p>
                <span className="font-bold"> {t("postedOn")}:</span>
                {post?.date}
              </p>
            </div>

            <div 
             className="flex flex-col items-center justify-center"
             style={{ display: details ? "" : "none" }}>
              <button
                className=""
                onClick={() => setComplaintStatus(!ComplaintStatus)}
              >
                <div className="flex justify-center space-x-1 hover:text-amber-700">
                  <ArrowRightIcon className="h-5 w-5 mt-1" />
                  <p style={{ textDecoration: details ? "underline" : "" }}>
                    {t("setComplaintStatus")}
                  </p>
                </div>
              </button>
            </div>

            {(post?.status === "seen" ||
              post?.status === "unseen" ||
              post?.status === "on-going" ||
              post?.status === "Issue-Rectified") &&
              ComplaintStatus && (
                <div
                  className="flex items-center justify-center flex-col"
                  style={{ display: details ? "" : "none" }}
                >
                  <div className="rounded-lg">
                    <div className="">
                    <div className="flex justify-start space-x-1">
                      <input
                        type="checkbox"
                        checked={state}
                        className="mb-5"
                        onChange={(e) => {
                          handleOnGoing();
                        }}
                        value="On-Going"
                      />
                      <label style={{ color: state ? "#228B22" : "" }}>
                        {t("onGoing")}
                      </label>
                      <br />
                      <br />
                    </div>

                    <div className="flex justify-start space-x-1">
                      <input
                        type="checkbox"
                        checked={issueRectified}
                        className="mb-6"
                        onChange={(e) => {
                          handleIssueRectified();
                        }}
                        value="Issue-Rectified"
                        />
                      <label style={{ color: issueRectified ? "#228B22" : "" }}>
                        {t("issueRectified")}
                      </label>
                      <br />
                      <br />
                    </div>
                    </div>

                    <div className="flex justify-center items-center ring-1 ring-amber-700 hover:ring-amber-400 hover:text-gray-500 rounded-lg">
                      <button
                        onClick={() => {
                          setStatus(post?.id);
                        }}
                        className="rounded-lg p-1"
                      >
                        {t("setTheStatus")}
                      </button>
                    </div>
                  </div>
                </div>
              )}

            <div
             className="flex flex-col items-center justify-center"
             style={{ display: details ? "none" : "" }}>
              <button
                onClick={() => handleDetails(post?.id, post?.status)}
              >
               <div className="flex space-x-1 text-amber-700 hover:text-amber-500">
                  <p>{t("moreDetails")}</p>
                  <ChevronDownIcon className="h-5 w-5 mt-1" />
                </div>
              </button>
            </div>

            <div
            className="flex justify-center"
             style={{ display: !details ? "none" : "" }}>
              <button
                onClick={() => {
                  setDetails(false);
                }}
              >
                <div className="flex space-x-1 text-orange-700 hover:text-amber-500">
                  <p>{t("hideDetails")}</p>
                  <ChevronUpIcon className="h-5 w-5 mt-1" />
                </div>
              </button>
            </div>
          </div>
          <br />
        </div>
      )}
    </div>
  );
};

export default UrgentUnresolved;
