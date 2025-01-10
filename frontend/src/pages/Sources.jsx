import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingAnimation from "../components/LoadingAnimation";
import { getSourcesBooks } from "../services/api";
import { useTranslation } from "react-i18next";

export default function Sources() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const bookData = await getSourcesBooks();
      setBooks(bookData);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">
          {t("sources")}
        </h1>
        {loading ? (
          LoadingAnimation()
        ) : books.length === 0 ? (
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
