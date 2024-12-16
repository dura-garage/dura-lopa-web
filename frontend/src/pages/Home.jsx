import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ne" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-c6 text-center">
      <h1 className=" text-4xl lg:text-7xl font-bold text-c1 mb-4 ">
        {t("welcome")}
      </h1>
      <p className="text-1xl lg:text-4xl text-c1 mb-6">{t("description")}</p>

      <div className="flex flex-col lg:flex-row justify-center gap-6 my-10">
        <Link
          to="/dictionary"
          className="flex flex-col items-center justify-center w-full max-w-sm p-6 bg-c5 text-c1 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-c1 hover:text-white transform hover:scale-105"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
            {t("getStarted")}
          </h2>
          <p className="text-sm lg:text-base text-c3">
            {t("getStartedDescription")} {/* Optional subtitle */}
          </p>
        </Link>

        <Link
          to="/sentences"
          className="flex flex-col items-center justify-center w-full max-w-sm p-6 bg-c5 text-c1 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-c1 hover:text-white transform hover:scale-105"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
            {t("seeSentences")}
          </h2>
          <p className="text-sm lg:text-base text-c3">
            {t("seeSentencesDescription")} {/* Optional subtitle */}
          </p>
        </Link>
      </div>
    </div>
  );
}
