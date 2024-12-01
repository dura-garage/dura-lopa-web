import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/lessons");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  return <h1>Hello {data}</h1>;
};

export default Home;
