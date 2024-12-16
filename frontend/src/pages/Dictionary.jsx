import React, { useEffect, useState } from "react";
import { fetchDictionary } from "../services/api";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordList, setWordList] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedWord(null);

    const filterWords = wordList.filter((entry) => {
      return (
        entry.dura.includes(value) ||
        entry.nepali.includes(value) ||
        entry.english.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredWords(filterWords);
  };

  // Fetch the dictionary data
  useEffect(() => {
    const getDictionaryData = async () => {
      try {
        const data = await fetchDictionary();
        setWordList(data);
        setFilteredWords(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDictionaryData();
  }, []);

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
      <div className="flex flex-col items-center justify-between flex-grow bg-white">
        <div className="w-full max-w-screen-lg mb-5">
          {" "}
          {/* Added margin bottom to make room for footer */}
          <h1 className="text-2xl lg:text-4xl font-bold text-c1 text-center my-5">
            {t("dictionaryTitle")}
          </h1>
          {/* Search Input */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder={t("searchTerm")}
              value={searchTerm}
              onChange={handleSearch}
              className="flex-grow mx-4 p-4 border border-c1 rounded-full focus:outline-none focus:ring-2 focus:ring-c1"
            />
          </div>
          {/* Main Layout */}
          <div className="flex flex-col-reverse lg:flex-row lg:gap-5 lg:h-[calc(100vh-250px)] mx-4">
            {/* Word List */}
            <ul className="flex-1 mt-4 overflow-y-auto lg:h-auto lg:max-h-screen p-2">
              {filteredWords.map((entry, index) => (
                <li
                  key={index}
                  className="p-4 border-b border-c4 odd:bg-c6-50 even:bg-c6-100 hover:bg-gray-50 transition duration-200 cursor-pointer"
                  onClick={() => setSelectedWord(entry)}
                >
                  <div className="flex flex-col">
                    <strong className="text-lg text-blue-600">
                      {entry.dura}
                    </strong>
                    <span className="text-sm text-gray-500">({entry.ipa})</span>
                    <p className="text-gray-700 mt-1">
                      {entry.nepali}{" "}
                      <span className="text-sm">({entry.nepaliPos})</span>
                    </p>
                    <p className="text-gray-700">
                      {entry.english}{" "}
                      <span className="text-sm">({entry.englishPos})</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Word Details */}
            {selectedWord && (
              <div className="bg-c1 shadow-lg rounded-3xl p-6 w-full lg:w-2/5 overflow-y-auto my-2">
                <h1 className="text-2xl lg:text-4xl font-bold text-c6-100 mt-4 mb-6 text-center">
                  {selectedWord.dura}
                </h1>
                <div className="text-sm lg:font-semibold text-c6-50 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>IPA</div>
                    <div className="italic font-normal">
                      /{selectedWord.ipa}/
                    </div>

                    <div>नेपाली</div>
                    <div>{selectedWord.nepali}</div>

                    <div>शब्द प्रकार</div>
                    <div className="italic font-normal">
                      {selectedWord.nepaliPos}
                    </div>

                    <div>English</div>
                    <div>{selectedWord.english}</div>

                    <div>Parts of Speech</div>
                    <div className="italic font-normal">
                      {selectedWord.englishPos}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}
