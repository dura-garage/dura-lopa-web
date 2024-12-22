// src/pages/Timeline.js
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

export default function Timeline() {
  const location = useLocation();
  const { timelineData, title } = location.state || {timelineData:[],title:""};
  console.log("showing timeline", location.state);

  if (!timelineData) {
    return (
      <div className="text-center mt-10 text-blue-500">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-h-screen bg-c6">
      <Navbar /> {/* Include Navbar */}
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-c1 mb-6">{title}</h1>
        <div className="border-l-4 border-c1 pl-6 space-y-6">
          {timelineData.map((event, index) => (
            <div key={index} className="relative">
              <div className="relative -left+10 bg-white text-c1 flex items-center justify-center">
              </div>
              <h2 className="text-xl font-semibold text-c1">{event.Title}</h2>
              <p className="text-gray-600">{event.Description}</p>
              <time className="text-sm text-c2">{event.Year}</time>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Include Footer */}
    </div>
  );
}
