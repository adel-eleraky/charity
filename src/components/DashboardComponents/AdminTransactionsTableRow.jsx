import styles from "./AdminTransactionsTable.module.css";
import TransactionStatus from "../common/TransactionStatus";

function AdminTransactionsTableRow({ transaction }) {
  // for using normal dom select and adding event to it you should loop over them in the table component and add event to them
  // so use useRef

  return (
    <>
      <li className={styles["table-row"]}>
        <div className={`${styles.col} ${styles["col-1"]}`} data-label="Amount">
          {transaction.transactionDate}
        </div>
        <div
          className={`${styles.col} ${styles["col-2"]}`}
          data-label="Payment Status"
        >
          {transaction.transactionAmount}
        </div>
        <div
          className={`${styles.col} ${styles["col-3"]}`}
          data-label="Payment Status"
        >
          {transaction.donorName}
        </div>
        <div
          className={`${styles.col} ${styles["col-4"]}`}
          data-label="Payment Status"
        >
          <img src="/images/charity-logo.png" alt="" />
          {transaction.charityName}
        </div>
        <div
          className={`${styles.col} ${styles["col-5"]}`}
          data-label="Payment Status"
        >
          <TransactionStatus statusType={transaction.statusType} />
        </div>
      </li>
      {/* <CharityDetails /> */}
    </>
  );
}

export default AdminTransactionsTableRow;
