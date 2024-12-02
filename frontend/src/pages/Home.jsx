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
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 ">{t("welcome")}</h1>
      <p className="text-lg text-gray-699 mb-6">{t("description")}</p>
      <Link
        to="/dictionary"
        className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition"
      >
        {t("getStarted")}
      </Link>
    </div>
  );
}
