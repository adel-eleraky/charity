import axios from "axios";

// const baseURL = "http://localhost:5000/api"; // Adjust the base URL as per your API
const baseURL = "https://subul.onrender.com/api"; // Adjust the base URL as per your API

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
const instanceFormData = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

// Function to handle POST requests
export const postData = async (endpoint, data, formData = false) => {
  const response = formData
    ? await instanceFormData.post(endpoint, data)
    : await instance.post(endpoint, data);

  return response.data;
};

// Function to handle GET requests
export const getData = async (endpoint) => {
  const response = await instance.get(endpoint);

  return response.data;
};

// Function to handle PUT requests
export const putData = async (endpoint, data, formData = false) => {
  const response = formData
    ? await instanceFormData.put(endpoint, data)
    : await instance.put(endpoint, data);

  return response.data;
};
export const deleteData = async (endpoint) => {
  const response = await instance.delete(endpoint);
  return response.data;
};

// Add more functions for other HTTP methods (DELETE, PATCH, etc.) as needed

export default instance;
