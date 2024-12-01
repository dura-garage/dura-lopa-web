import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", 
});


export const fetchLessons = async () => {
  try {
    const response = await API.get("/api/lessons");
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error; // Re-throw the error for handling in the component
  }
};
