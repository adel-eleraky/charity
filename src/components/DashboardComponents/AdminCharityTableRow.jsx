import { useEffect, useState } from "react";
import AdminCharityActions from "./AdminCharityActions";
import styles from "./AdminCharityTable.module.css";
import CharityStatus from "./CharityStatus";
import { useRef } from "react";
import CharityDetails from "./CharityDetails";
import Popup from "reactjs-popup";
import Tooltip from "../common/Tooltip";
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
    : "rejected";

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
          <img src="/images/charity-logo.png" alt="" />
          {charity.name}
        </div>
        {/* //todo: ask for the casesNum to be reterned #backend */}
        <div className={`${styles.col} ${styles["col-3"]}`} data-label="Amount">
          {charity.casesNum}
        </div>
        {/* //todo: remove it */}
        <div
          className={`${styles.col} ${styles["col-4"]}`}
          data-label="Payment Status"
        >
          {charity.regDate}
        </div>
        {/* //todo: ask to return it */}
        <div
          className={`${styles.col} ${styles["col-5"]}`}
          data-label="Payment Status"
        >
          {charity.collectedMoney + "جنيه"}
        </div>
        {/* //todo: ask to return it */}
        <div
          className={`${styles.col} ${styles["col-6"]}`}
          data-label="Payment Status"
        >
          {charity.donersNum}
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
                <button>
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
              <AdminCharityActions charity={charity}>
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
