import { useState } from "react";
import AdminCharityActions from "./AdminCharityActions";
import styles from "./CharityCasesTable.module.css";
import CharityDetails from "./CharityDetails";
import CaseStatus from "../common/CaseStatus";
import Popup from "reactjs-popup";
import CaseDetails from "./CaseDetails";
import CharityCaseActions from "./CharityCaseActions";
function CharityCaseTableRow({ currentCase }) {
  // for using normal dom select and adding event to it you should loop over them in the table component and add event to them
  // so use useRef
  [
    {
      currentDonationAmount: 0,
      finished: false,
      freezed: false,
      mainType: "BloodDonation",
      nestedSubType: "General Support",
      privateNumber: "none",
      subType: "BloodDonation",
      targetDonationAmount: 5,
      title: "sick2222",
      _id: "6647518c0b806b6bea1d62ef",
    },
    {
      id: 876123,
      title: "لوريم ابسيم",
      targetAmount: 10000,
      currentCollected: 500,
      dateFinished: "14/02/2024",
      donatinsNum: 20,
      caseStatus: "open" /* open - close */,
    },
  ];

  return (
    <>
      <li className={styles["table-row"]}>
        <div className={`${styles.col} ${styles["col-1"]}`} data-label="id">
          {"#" + currentCase._id}
        </div>
        <div
          className={`${styles.col} ${styles["col-2"]}`}
          data-label="اسم الجمعية"
        >
          {currentCase.title}
        </div>
        <div className={`${styles.col} ${styles["col-3"]}`} data-label="Amount">
          {currentCase.targetDonationAmount + "جنيه"}
        </div>
        <div
          className={`${styles.col} ${styles["col-4"]}`}
          data-label="Payment Status"
        >
          {currentCase.currentDonationAmount + "جنيه"}
        </div>
        <div
          className={`${styles.col} ${styles["col-5"]}`}
          data-label="Payment Status"
        >
          {currentCase.mainType}
        </div>
        <div
          className={`${styles.col} ${styles["col-6"]}`}
          data-label="Payment Status"
        >
          {currentCase.subType}
        </div>
        <div
          className={`${styles.col} ${styles["col-7"]}`}
          data-label="Payment Status"
        >
          <CaseStatus statusType={currentCase.finished ? "close" : "open"} />
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
              <CharityCaseActions currentCase={currentCase} />
            </Popup>
          </div>
        </div>
      </li>
      {/* <CharityDetails /> */}
    </>
  );
}

export default CharityCaseTableRow;
