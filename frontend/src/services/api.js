import axios from "axios";

const API = axios.create({
  baseURL: "https://dura-lopa-web-backend.onrender.com",
});

export const fetchDictionary = async () => {
  try {
    const response = await API.get("/api/dictionary");
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error; // Re-throw the error for handling in the component
  }
};
