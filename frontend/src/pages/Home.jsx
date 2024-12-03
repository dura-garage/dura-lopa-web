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
      <h1 className=" text-4xl lg:text-8xl font-bold text-c1 mb-4 ">{t("welcome")}</h1>
      <p className="text-1xl lg:text-4xl text-c1 mb-6">{t("description")}</p>
      <Link
        to="/dictionary"
        className="px-4 py-2 lg:px-8  lg:py-4  bg-c5 text-c1 text-1xl lg:text-2xl rounded-lg shadow-lg hover:text-white hover:bg-c1 transition"
      >
        {t("getStarted")}
      </Link>
    </div>
  );
}
