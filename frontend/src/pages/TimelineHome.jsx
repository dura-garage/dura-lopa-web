// src/pages/Home.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import books_timeline from "../assets/json/dura_language_books_materials_research.json";
import campaign_timeline from "../assets/json/dura_language_campaigns.json";
import classes_timeline from "../assets/json/dura_language_classes.json";

export default function TimelineHome() {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ne" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-c6 text-center">
      <Navbar />

      <main className="flex flex-col justify-center items-center h-full mt-10">
        <h3 className="text-4xl lg:text-7xl font-bold text-c1 mb-4">
          दुरा भाषा संरक्षणमा भइका कामहरु
        </h3>

        <div className="flex flex-col lg:flex-col items-center justify-center  gap-6 my-10">
          <Link
            to="/timeline"
            state={{
              timelineData: books_timeline,
              title:
                "दुरा भाषा सम्बन्धि प्रकाशन भएका विभिन्न पुस्तक, सामग्री तथा शोधपत्रहरु",
            }}

            className="flex flex-col items-start justify-center w-4/5 max-w-full p-6 bg-c5 text-c1 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-c1 hover:text-white transform hover:scale-105"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
              १. दुरा भाषा सम्बन्धि प्रकाशन भएका विभिन्न पुस्तक, सामग्री तथा
              शोधपत्रहरु
            </h2>
          </Link>

          <Link
            to="/timeline"
            state={{
              timelineData: campaign_timeline,
              title:
                "दुरा भाषाको संरक्षण संवर्द्धनका लागि संस्थागत रुपमा भएका गरिएका अभियानहरु",
            }}
            className="flex flex-col items-start justify-center w-4/5 max-w-full p-6 bg-c5 text-c1 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-c1 hover:text-white transform hover:scale-105"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
              २. दुरा भाषाको संरक्षण संवर्द्धनका लागि संस्थागत रुपमा भएका गरिएका
              अभियानहरु
            </h2>
          </Link>

          <Link
            to="/timeline"
            state={{
              timelineData: classes_timeline,
              title:
                "आन्तरिक सहयोगहरुबाट विद्यालयहरुमा दुरा भाषाको कक्षा संचालन",
            }}
            className="flex flex-col items-start justify-center w-4/5 max-w-full p-6 bg-c5 text-c1 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-c1 hover:text-white transform hover:scale-105"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
              ३. आन्तरिक सहयोगहरुबाट विद्यालयहरुमा दुरा भाषाको कक्षा संचालन
            </h2>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
