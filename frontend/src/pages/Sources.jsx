import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Sources() {
  const { t } = useTranslation();

  const books = [
    {
      id: 1,
      title: "दुरा भाषाको व्याकरण",
      description:
        "भाषा आयोगको आर्थिक सहयोगमा दुरा भाषाको व्याकरण निर्माण गरेर ३,००० प्रति प्रकाशित, एक घर एक पुस्तकको अभियान संचालन।",
      url: "grammer.png",
      fileName: "Dura Language Grammar.pdf",
    },
    {
      id: 2,
      title: "दुरा भाषाको शब्दकोश",
      description:
        "भाषा आयोगको आर्थिक सहयोगमा २,००० प्रति शब्दकोश प्रकाशित, एक घर एक पुस्तकको अभियान संचालन।",
      url: "dictionary.png",
      fileName: "Dura Language Dictionary.pdf",
    },
    {
      id: 3,
      title: "दुरा लोपा आधारभुत पाठ्यसामग्री १",
      description:
        "भाषा आयोगको सहयोगमा दुरा भाषाको पाठ्य सामग्री 'दुरा लोपा' प्रकाशित।",
      url: "part1.png",
      fileName: "Dura Lopa Part 1.pdf",
    },
    {
      id: 4,
      title: "दुरा लोपा आधारभुत पाठ्यसामग्री २",
      description:
        '२०८० सालमा भाषा आयोगको सहयोगमा "दुरा मातृभाषा कक्षा सञ्चालनका लागि पाठ्यसामग्री" र "दुरा लोपा (दुरा भाषा कक्षा) आधारभुत पाठ्यसामग्री २" नामक पुस्तक प्रकाशन गरिएको ।',
      url: "part2.png",
      fileName: "Dura Lopa Part 2.pdf",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">
          {t("sources")}
        </h1>
        {books.length === 0 ? (
          <div className="text-center text-lg">No books available.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/images/books/${book.url}`}
                  alt={book.title}
                  className="w-full h-48 object-contain bg-gray-100 p-2"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <a
                    href={`/pdfs/books/${book.fileName}`}
                    download={book.title}
                    className="px-4 py-2 bg-c1 text-white rounded hover:bg-blue-700"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
