import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 ">
        Welcome to Dura Lopa
      </h1>
      <p className="text-lg text-gray-699 mb-6">
        Learn and preserve the Dura language with interactive lessons, quizes,
        and resources.
      </p>
      <button className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition">
        Get Started
      </button>
    </div>
  );
}
