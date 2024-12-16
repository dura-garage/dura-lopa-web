import React, { useEffect, useState } from "react";
import { fetchSentences } from "../services/api";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SentencesPage() {
  const [sentenceList, setSentenceList] = useState([]);
  const [filteredSentences, setFilteredSentences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const getAllSentences = async () => {
      try {
        setLoading(true);
        const data = await fetchSentences();

        // Sort sentences by Nepali text alphabetically
        const sortedData = data.sort((a, b) =>
          a.nepali.localeCompare(b.nepali)
        );
        setSentenceList(sortedData);
        setFilteredSentences(sortedData); // Initialize filtered list
      } catch (error) {
        setError("An error occurred while fetching sentences.");
      } finally {
        setLoading(false);
      }
    };

    getAllSentences();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter sentences based on query
    const filtered = sentenceList.filter(
      (pair) =>
        pair.nepali.toLowerCase().includes(query) ||
        pair.dura.toLowerCase().includes(query)
    );
    setFilteredSentences(filtered);
  };

  if (loading) {
    return (
      <div className="text-center mt-10 text-blue-500">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col w-4/5 items-center mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl font-extrabold text-center mb-4 w-full"
          style={{ color: "#223030" }}
        >
          {t("sentencesTitle")}
        </h1>
        <p className="text-center" style={{ color: "#223030" }}>
          {t("totalSentences")}:{" "}
          <span className="font-semibold" style={{ color: "#223030" }}>
            {filteredSentences.length}
          </span>
        </p>

        {/* Search Input */}
        <div className="flex items-center gap-4 mb-6 w-full lg:w-4/5">
          <input
            type="text"
            placeholder={t("searchSentencesPlaceholder")}
            value={searchQuery}
            onChange={handleSearch}
            className="flex-grow mx-4 p-4 border border-c1 rounded-full focus:outline-none focus:ring-2 focus:ring-c1"
          />
        </div>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
            <thead>
              <tr style={{ backgroundColor: "#223030", color: "#efefe9" }}>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  #
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Nepali
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Dura
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSentences.map((pair, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#523d35] transition-colors duration-200"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#959d90" : "#efefe9", // Alternating row colors
                  }}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td
                    className="border border-gray-300 px-4 py-2"
                    style={{ color: "#223030" }}
                  >
                    {pair.nepali}
                  </td>
                  <td
                    className="border border-gray-300 px-4 py-2"
                    style={{ color: "#223030" }}
                  >
                    {pair.dura}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
