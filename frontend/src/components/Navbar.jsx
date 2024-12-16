// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ne" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <nav className=" text-c1 p-4 ">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-2xl font-semibold">
          {t("appName")}
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/dictionary" className="text-lg hover:text-c3">
            {t("dictionary")}
          </Link>
          <Link to="/sentences" className="text-lg hover:text-c3">
            {t("sentences")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="text-lg hover:text-c3 px-2 py-1 border border-c3 rounded"
          >
            {i18n.language === "en" ? "ने" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
