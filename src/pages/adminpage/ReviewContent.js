import React from "react";
import { useTranslation } from "react-i18next";

export const ReviewContent = (props) => {
  const { post } = props;

  const { t } = useTranslation();

  return (
    <div className="flex px-6 py-5 lg:px-8 justify-center items-center xs:bg-white">
      {
        <div className="bg-white ring-1 ring-amber-400 text-left rounded-lg shadow-lg p-6 mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-5 space-y-6">
            <div>
              <p>
                <span className="font-bold"> {t("username")}: </span>
                {post?.username}
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold"> {t("suggestion")}: </span>
                {post?.suggestion}
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold"> {t("postedOn")}: </span>
                {post?.date}
              </p>
            </div>
          </div>
          <br />
        </div>
      }
    </div>
  );
};
