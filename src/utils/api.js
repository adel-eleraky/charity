import axios from "axios";

const baseURL = "http://localhost:5000/api"; // Adjust the base URL as per your API

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Function to handle POST requests
export const postData = async (endpoint, data) => {
  const response = await instance.post(endpoint, data);
  return response.data;
};

// Function to handle GET requests
export const getData = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

// Function to handle PUT requests
export const putData = async (endpoint, data) => {
  try {
    const response = await instance.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error.message);
    throw error;
  }
};

// Add more functions for other HTTP methods (DELETE, PATCH, etc.) as needed

export default instance;
