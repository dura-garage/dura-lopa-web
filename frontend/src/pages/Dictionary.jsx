import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDictionary } from "../services/api";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Nepali");
  const [wordList, setWordList] = useState([
    // {
    //   word: "टो",
    //   ipa: "/teu/",
    //   nepali: "हिजो",
    //   english: "yesterday",
    //   pos: "adv",
    // },
    // { word: "सार", ipa: "/saar/", nepali: "सार", english: "summary", pos: "n" },
    // {
    //   word: "पानी",
    //   ipa: "/pɑːni/",
    //   nepali: "पानी",
    //   english: "water",
    //   pos: "n",
    // },
  ]);
  const [filteredWords, setFilteredWords] = useState(wordList);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filterWords = wordList.filter((entry) => {
      return (
        entry.dura.includes(value) ||
        entry.nepali.includes(value) ||
        entry.english.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredWords(filterWords);
  };

  const handleLanguageChange = (e) => {
    e.target.value
      ? setSelectedLanguage(e.target.value)
      : setSelectedLanguage("");
  };

  // lets fetch the dictionary on entry to the page
  useEffect(() => {
    const getDictionaryData = async () => {
      try {
        const data = await fetchDictionary();
        setWordList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDictionaryData();
  }, []);

  // TODO:
  // Work on this later
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full sm:max-w-sm md:max-w-sm lg:max-w-screen-lg text-center">
        <h1 className="text-6xl font-bold m-30">Dictionary</h1>
        <div className="my-20"></div>
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Term"
            value={searchTerm}
            onChange={handleSearch}
            className="flex-grow p-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="p-5 border border-gray-300 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-white shadow-sm appearance-none"
          >
            <option value="">Choose Language</option>
            <option value="Nepali">नेपाली</option>
            <option value="English">English</option>
            <option value="Dura">दुरा</option>
          </select>
        </div>
        {/* showing the list of the search results */}
        <ul className="mt-4 list-none p-0 text-left h-[calc(100vh-400px)] overflow-y-auto">
          {filteredWords.map((entry, index) => (
            <li
              key={index}
              className="py-2 border-b border-gray-300 odd:bg-gray-100 even:bg-white"
            >
              <div className="ml-5">
                <Link to={`/dictionary/word`} state={{ wordDetails: entry }}>
                  <strong className="font-semibold">{entry.dura}</strong>
                  <span className="text-sm text-gray-500">
                    {" "}
                    ({entry.ipa})
                  </span>{" "}
                  - {entry.nepali}
                  <span className="text-sm text-gray-500">
                    {" "}
                    ({entry.nepaliPos})
                  </span>
                  , {entry.english}
                  <span className="text-sm text-gray-500">
                    {" "}
                    ({entry.englishPos})
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
