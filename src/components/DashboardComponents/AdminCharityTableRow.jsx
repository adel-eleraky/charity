import { useEffect, useState } from "react";
import AdminCharityActions from "./AdminCharityActions";
import styles from "./AdminCharityTable.module.css";
import CharityStatus from "./CharityStatus";
import { useRef } from "react";
import CharityDetails from "./CharityDetails";
import Popup from "reactjs-popup";
function AdminCharityTableRow({ charity }) {
  // for using normal dom select and adding event to it you should loop over them in the table component and add event to them
  // so use useRef
  const [isActionShow, setIsActionShow] = useState(false);
  function handleToggleAction() {
    setIsActionShow((a) => !a);
  }
  return (
    <>
      <li className={styles["table-row"]}>
        <div className={`${styles.col} ${styles["col-1"]}`} data-label="id">
          {"#" + charity.id}
        </div>
        <div
          className={`${styles.col} ${styles["col-2"]}`}
          data-label="اسم الجمعية"
        >
          <img src="/images/charity-logo.png" alt="" />
          {charity.charityName}
        </div>
        <div className={`${styles.col} ${styles["col-3"]}`} data-label="Amount">
          {charity.casesNum}
        </div>
        <div
          className={`${styles.col} ${styles["col-4"]}`}
          data-label="Payment Status"
        >
          {charity.regDate}
        </div>
        <div
          className={`${styles.col} ${styles["col-5"]}`}
          data-label="Payment Status"
        >
          {charity.collectedMoney + "جنيه"}
        </div>
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
          <CharityStatus statusType={charity.statusType} />
        </div>
        <div className={`${styles.col} ${styles["col-8"]}`} data-label="btn">
          <div className={styles["button-action-container"]}>
            <button onClick={handleToggleAction}>
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
            {isActionShow && (
              <AdminCharityActions handleToggleAction={handleToggleAction}>
                <CharityDetails charityId={charity.id} />
              </AdminCharityActions>
            )}
          </div>
        </div>
      </li>
      {/* <CharityDetails /> */}
    </>
  );
}

export default AdminCharityTableRow;
