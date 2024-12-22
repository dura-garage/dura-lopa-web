import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import WordDetailsPage from "./pages/WordDetailsPage";
import SentencesPage from "./pages/Sentences";
import Timeline from "./pages/Timeline";
import TimelineHome from "./pages/TimelineHome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dictionary" element={<Dictionary />} />
      <Route path="/dictionary/word" element={<WordDetailsPage />} />
      <Route path="/sentences" element={<SentencesPage />} />
      <Route path="/timelines" element={<TimelineHome />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
  );
}
