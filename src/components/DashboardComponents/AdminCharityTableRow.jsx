import React, { useEffect, useState } from "react";
import AdminCharityActions from "./AdminCharityActions";
import styles from "./AdminCharityTable.module.css";
import CharityStatus from "./CharityStatus";
import { useRef } from "react";
import CharityDetails from "./CharityDetails";
import Popup from "reactjs-popup";
import Tooltip from "../common/Tooltip";
import { cloudinaryUrl, getFormattedDate } from "../../utils/helpers";
function AdminCharityTableRow({ charity }) {
  // "accepted" /* accepted - rejected - pending*/
  //   {
  //     "_id": "65f9fb313dbbeaaa8c2afebc",
  //     "email": "saadmu7ammad7@gmail.com", not used
  //     "name": "test",
  //     "isConfirmed": true,
  //     "isPending": false
  // }
  // todo: the rejected condition must be isRejected(from api) and //
  const charityStatus = charity.isConfirmed
    ? "accepted"
    : charity.isPending
    ? "pending"
    : "not-uploaded";

  //! leave it for more important tasks
  const buttonRef = React.useRef(null);
  function calcSpaceBelow() {
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      console.log("from button1", window.innerHeight - rect.bottom);
      return window.innerHeight - rect.bottom;
    }
    return 100;
  }
  return (
    <>
      <li className={styles["table-row"]}>
        <div className={`${styles.col} ${styles["col-1"]}`} data-label="id">
          {"#" + charity._id}
        </div>
        <div
          className={`${styles.col} ${styles["col-2"]}`}
          data-label="اسم الجمعية"
        >
          {/* //todo: ask for the logo to be reterned #backend */}
          {charity.image ? (
            <img
              src={`${cloudinaryUrl("charity")}/${charity.image}`}
              alt="logo not found"
              className={styles.chLogo}
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if default image fails
                e.target.src = "/images/organization-building.svg";
              }}
            />
          ) : (
            ""
          )}
          {charity.name}
        </div>
        {/* //todo: ask for the casesNum to be reterned #backend */}
        <div className={`${styles.col} ${styles["col-3"]}`} data-label="Amount">
          {charity.numberOfCases}
        </div>
        {/* //todo: remove it */}
        <div
          className={`${styles.col} ${styles["col-4"]}`}
          data-label="Payment Status"
        >
          {getFormattedDate(charity.createdAt)}
        </div>
        {/* //todo: ask to return it */}
        <div
          className={`${styles.col} ${styles["col-5"]}`}
          data-label="Payment Status"
        >
          {charity.totalDonationsIncome + "جنيه"}
        </div>
        {/* //todo: ask to return it */}
        <div
          className={`${styles.col} ${styles["col-6"]}`}
          data-label="Payment Status"
        >
          {charity.totalNumberOfDonors}
        </div>
        <div
          className={`${styles.col} ${styles["col-7"]}`}
          data-label="Payment Status"
        >
          <CharityStatus statusType={charityStatus} />
        </div>
        <div className={`${styles.col} ${styles["col-8"]}`} data-label="btn">
          <div className={styles["button-action-container"]}>
            <Popup
              arrow={false}
              position="center center"
              trigger={
                <button
                  ref={buttonRef}
                  onClick={() => {
                    console.log("hello");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="4"
                    fill="none"
                  >
                    <path
                      fill="rgba(153, 153, 153, 1)"
                      d="M13.487.513a1.75 1.75 0 1 0-2.474 2.474A1.75 1.75 0 0 0 13.487.513ZM8.237.513a1.75 1.75 0 1 0-2.474 2.474A1.75 1.75 0 0 0 8.237.513ZM2.987.513A1.75 1.75 0 1 0 .513 2.987 1.75 1.75 0 0 0 2.987.513Z"
                    />
                  </svg>
                </button>
              }
              nested
            >
              <AdminCharityActions
                charity={charity}
                onSpaceBelow={calcSpaceBelow}
              >
                <CharityDetails charityId={charity._id} />
              </AdminCharityActions>
            </Popup>
          </div>
        </div>
      </li>
      {/* <CharityDetails /> */}
    </>
  );
}

export default AdminCharityTableRow;
