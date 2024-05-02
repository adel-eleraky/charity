import { useState } from "react";
import styles from "./AdminUsersTable.module.css";
import CharityStatus from "./CharityStatus";

function AdminUsersTableRow({ user }) {
  // for using normal dom select and adding event to it you should loop over them in the table component and add event to them
  // so use useRef

  return (
    <>
      <li className={styles["table-row"]}>
        <div className={`${styles.col} ${styles["col-1"]}`} data-label="id">
          {"#" + user.id}
        </div>
        <div
          className={`${styles.col} ${styles["col-2"]}`}
          data-label="اسم الجمعية"
        >
          {user.userName}
        </div>
        <div className={`${styles.col} ${styles["col-3"]}`} data-label="Amount">
          {user.email}
        </div>
        <div
          className={`${styles.col} ${styles["col-4"]}`}
          data-label="Payment Status"
        >
          {user.phoneNum}
        </div>
        <div
          className={`${styles.col} ${styles["col-5"]}`}
          data-label="Payment Status"
        >
          {user.donatedAmount + "جنيه"}
        </div>
        <div
          className={`${styles.col} ${styles["col-6"]}`}
          data-label="Payment Status"
        >
          {user.casesNum}
        </div>
        <div
          className={`${styles.col} ${styles["col-7"]}`}
          data-label="Payment Status"
        >
          {user.charitiesNum}
        </div>
      </li>
      {/* <CharityDetails /> */}
    </>
  );
}

export default AdminUsersTableRow;
