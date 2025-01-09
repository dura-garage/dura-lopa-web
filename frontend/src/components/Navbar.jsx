import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ne" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-c1 p-4 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-2xl font-semibold">
          {t("appName")}
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/dictionary" className="text-lg hover:text-c3">
            {t("dictionary")}
          </Link>
          <Link to="/sentences" className="text-lg hover:text-c3">
            {t("sentences")}
          </Link>
          <Link to="/timelines" className="text-lg hover:text-c3">
            {t("seeAllTimelines")}
          </Link>
          <Link to="/sources" className="text-lg hover:text-c3">
            {t("sources")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="text-lg hover:text-c3 px-2 py-1 border border-c3 rounded"
          >
            {i18n.language === "en" ? "ने" : "EN"}
          </button>
        </div>
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link
            to="/dictionary"
            className="block text-lg hover:text-c3 px-4"
            onClick={toggleMenu}
          >
            {t("dictionary")}
          </Link>
          <Link
            to="/sentences"
            className="block text-lg hover:text-c3 px-4"
            onClick={toggleMenu}
          >
            {t("sentences")}
          </Link>
          <Link
            to="/timelines"
            className="block text-lg hover:text-c3 px-4"
            onClick={toggleMenu}
          >
            {t("seeAllTimelines")}
          </Link>

          <Link
            to="/sources"
            className="block text-lg hover:text-c3 px-4"
            onClick={toggleMenu}
          >
            {t("sources")}
          </Link>
          <button
            onClick={() => {
              toggleLanguage();
              toggleMenu();
            }}
            className="block text-lg hover:text-c3 px-4 py-2 border border-c3 rounded mx-4"
          >
            {i18n.language === "en" ? "ने" : "EN"}
          </button>
        </div>
      )}
    </nav>
  );
}
