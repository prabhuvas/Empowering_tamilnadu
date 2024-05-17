import React, { useState } from "react";
import { db, auth } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import traash from "../../images/traash.png";
import { useTranslation } from "react-i18next";

export const Complaints = (props) => {
  const { post } = props;

  const [user] = useAuthState(auth);

  const deleteComplaint = async (id) => {
    if (
      window.confirm(
        "Do you want to mark the complaint rectified and delete it?"
      )
    ) {
      const userDoc = doc(db, "addcomplaint", id);
      await deleteDoc(userDoc);
      alert("Complaint will deleted shortly!");
    } else {
    }
  };

  const [statuscount, setStatuscount] = useState(0);

  if (post?.id === user.uid && post?.status === "unseen") {
    setStatuscount(statuscount + 1);
  } else if (post?.id === user.uid && post?.status === "seen") {
    setStatuscount(statuscount + 1);
  } else if (post?.id === user.uid && post?.status === "ongoing") {
    setStatuscount(statuscount + 1);
  } else if (post?.id === user.uid && post?.status === "Issue-Rectified") {
    setStatuscount(statuscount + 1);
  }

  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#FFFDE8" }}>
      {user.uid === post.userId && (
        <>
          <div className="px-6 py-8 lg:px-10 flex justify-center items-center xs:bg-white">
            <div
              className="bg-white shadow-lg p-6 mt-5 sm:mx-auto sm:w-full sm:max-w-sm"
              style={{ borderRadius: "10px", border: "1px solid orange" }}
            >
              <div style={{ float: "right" }} className="pb-5">
                <button
                  onClick={() => {
                    deleteComplaint(post.id);
                  }}
                  className="cursor-pointer"
                >
                  <img src={traash} alt="Delete" className="h-7 w-auto" />
                </button>
              </div>
<br />
              <div className="mt-10 space-y-6">
                <div className="flex items-center justify-center">
                  <img
                    src={post.imgurl}
                    alt="ComplaintPhoto"
                    height="300px"
                    width="300px"
                    className="shadow-lg ring-1 ring-gray-300"
                  />
                </div>
                <div>
                  <div className="grid grid-cols-2 justify-stretch text-left gap-4 m-0">
                    <div>
                      <p>
                        <span className="font-bold">
                          {t("complaintType")}: <br />
                        </span>
                        {post.type}
                      </p>
                    </div>

                    <div>
                      <p>
                        <span className="font-bold">
                          {t("city")}: <br />
                        </span>
                        {post.department}
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="grid grid-rows-2 justify-stretch text-left gap-4 m-0">
                    <div>
                      <p>
                        <span className="font-bold">
                          {t("description")}: <br />
                        </span>
                        {post.description}
                      </p>
                    </div>

                    <div>
                      <p>
                        <span className="font-bold">
                          {t("address")}: <br />
                        </span>
                        {post.address}
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="text-left mb-5">
                    <p>
                      <span className="font-bold"> {t("status")}: </span>
                      {/* <span style={{color: statuscount===1?"green":""}}>unseen</span> &rarr; <span style={{color: statuscount===2?"green":""}}>seen</span> &rarr; <span style={{color: statuscount===3?"green":""}}>On-Going</span> &rarr; <span style={{color: statuscount===4?"green":""}}>Issue-Rectified</span> */}
                      {post?.status}
                    </p>
                  </div>
                  <div className="text-left">
                    <p>
                      <span className="font-bold"> {t("postedOn")} </span>
                      {post.date}
                    </p>
                  </div>
                  {/* <div>{post?.status}</div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
