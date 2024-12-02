import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function WordDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { wordDetails } = location.state || {};
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-xl">
        <button
          onClick={() => navigate("/dictionary")}
          className="text-blue-500 underline hover:text-blue-700 mb-6"
        >
          ← Back to Dictionary
        </button>
        <h1 className="text-8xl font-bold text-gray-800 mb-10 text-center">
          {wordDetails.dura}
        </h1>
        <div className="text-2xl text-gray-700 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className=" text-gray-900">IPA</div>
            <div className="text-gray-700 text-left">{wordDetails.ipa}</div>

            <div className=" text-gray-900">नेपाली</div>
            <div className="text-gray-700 text-left">{wordDetails.nepali}</div>

            <div className=" text-gray-900">शब्द प्रकार</div>
            <div className="text-gray-700 text-left">
              {wordDetails.nepaliPos}
            </div>

            <div className=" text-gray-900">English</div>
            <div className="text-gray-700 text-left">{wordDetails.english}</div>

            <div className=" text-gray-900">Parts of Speech</div>
            <div className="text-gray-700 text-left">
              {wordDetails.englishPos}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
