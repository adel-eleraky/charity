import React from "react";

const cloudinaryBaseUrl =
  "https://res.cloudinary.com/ddvetozyq/image/upload/v1715928273";
const subDomains = {
  case: "caseCoverImages",
  charity: "charityLogos",
  chDocs: "charityDocs",
  usedItems: "usedItemsImages",
};
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

export function createFormData(data) {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
}

export function cloudinaryUrl(subDomain) {
  return `${cloudinaryBaseUrl}/${subDomains[subDomain]}`;
}

export function prepareChatMessages(messages, receiverId) {
  return messages.map(function (messageObj) {
    const span = document.createElement("span");
    console.log(span);
    span.innerHTML = `${messageObj.message.replace(/\n/g, "<br>")}`;
    return {
      ...messageObj,
      text: span,
      position: messageObj.senderId === receiverId ? "left" : "right",
      type: "text",
    };
  });
}

/**
 *
 * @param {string} dateString
 * @returns current formated date
 * if no date is passed the current date is used
 */
export function getFormattedDate(dateString = new Date()) {
  const date = new Date(dateString);

  // Extract the day, month, and year from the Date object
  const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
  const year = date.getFullYear();

  // Format the date as day/month/year
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
