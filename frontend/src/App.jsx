import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import WordDetailsPage from "./pages/WordDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dictionary" element={<Dictionary />} />
      <Route path="/dictionary/word" element={<WordDetailsPage/>}/>
    </Routes>
  );
}
