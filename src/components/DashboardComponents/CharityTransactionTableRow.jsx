import styles from "./CharityTransactionsTable.module.css";
import TransactionStatus from "../common/TransactionStatus";

function CharityTransactionTableRow({ transaction }) {
  // for using normal dom select and adding event to it you should loop over them in the table component and add event to them
  // so use useRef

  return (
    <>
      <li className={styles["table-row"]}>
        <div className={`${styles.col} ${styles["col-1"]}`} data-label="Amount">
          {"#" + transaction.id}
        </div>
        <div
          className={`${styles.col} ${styles["col-2"]}`}
          data-label="Payment Status"
        >
          {transaction.date}
        </div>
        <div
          className={`${styles.col} ${styles["col-3"]}`}
          data-label="Payment Status"
        >
          {transaction.caseTitle}
        </div>
        <div
          className={`${styles.col} ${styles["col-4"]}`}
          data-label="Payment Status"
        >
          {transaction.paidMoney + "جنيه"}
        </div>
        <div
          className={`${styles.col} ${styles["col-5"]}`}
          data-label="Payment Status"
        >
          <TransactionStatus statusType={transaction.statusType} />
        </div>
      </li>
    </>
  );
}

export default CharityTransactionTableRow;
