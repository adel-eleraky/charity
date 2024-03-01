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
  const response = await instance.get(endpoint);
  return response.data;
};

// Function to handle PUT requests
export const putData = async (endpoint, data) => {
  const response = await instance.put(endpoint, data);
  return response.data;
};

// Add more functions for other HTTP methods (DELETE, PATCH, etc.) as needed

export default instance;
