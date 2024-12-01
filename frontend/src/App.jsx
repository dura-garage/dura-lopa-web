import React, { useEffect, useState } from "react";
import { fetchLessons } from "./services/api";

function App() {
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null); // To handle and display errors

  useEffect(() => {
    const getLessons = async () => {
      try {
        const data = await fetchLessons(); // Call the service function
        setLessons(data); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Capture any errors
      }
    };

    getLessons();
  }, []);

  return (
    <div>
      <h1>Lessons</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {lessons}
    </div>
  );
}

export default App;
