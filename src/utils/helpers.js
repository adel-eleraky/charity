export function fetchingErrorHandling(error, process) {
  // Axios throws an error for network errors, so handle it here
  if (error.response) {
    // The request was made, but the server responded with a status code that falls out of the range of 2xx
    throw new Error(error.response?.data?.message || `${process} failed`);
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error("No response received from the server");
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error(`Error during ${process}:` + error.message);
  }
}