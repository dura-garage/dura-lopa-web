import axios from "axios";

const API = axios.create({
  // baseURL: "https://dura-lopa-web-backend.onrender.com",
  baseURL:"http://localhost:5000"
});

export const fetchDictionary = async () => {
  try {
    const response = await API.get("/api/dictionary");
    return response.data;
  } catch (error) {
    console.error("Error fetching dictionary:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export const fetchSentences = async () => {
  try {
    const response = await API.get("/api/sentences/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching sentences:", error);
    throw error;
  }
};
