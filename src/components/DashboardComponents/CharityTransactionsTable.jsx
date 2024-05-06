import styles from "./CharityTransactionsTable.module.css";
import CharityTransactionTableRow from "./CharityTransactionTableRow";
function CharityTransactionsTable() {
  const transactions = [
    {
      id: 12345,
      date: "14/02/2024",
      caseTitle: "سبل برودكشن",
      paidMoney: 300,
      statusType: "success" /* success - fail - pending */,
    },
    {
      id: 12346,
      date: "14/02/2024",
      caseTitle: "سبل برودكشن",
      paidMoney: 300,
      statusType: "fail" /* success - fail - pending */,
    },
    {
      id: 12346,
      date: "14/02/2024",
      caseTitle: "سبل برودكشن",
      paidMoney: 300,
      statusType: "pending" /* success - fail - pending */,
    },
  ];
  return (
    <ul className={styles.table}>
      <div className={styles["header-wrapper"]}>
        <li className={styles["table-header"]}>
          <div className={`${styles.col} ${styles["col-1"]}`}>
            {/* you can move to new component called TableAttribute. */}
            <button>
              id
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-2"]}`}>
            <button>
              تاريخ التحويل
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-3"]}`}>
            <button>
              اسم الحالة
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-4"]}`}>
            <button>
              مبلغ التحويل
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-5"]}`}>
            <button>
              نوع الحالة
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
        </li>
      </div>
      <div className={styles.rows}>
        {transactions.map((transaction) => (
          <CharityTransactionTableRow
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </div>
    </ul>
  );
}

export default CharityTransactionsTable;
