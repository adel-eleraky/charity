import styles from "./AdminTransactionsTable.module.css";
import AdminTransactionsTableRow from "./AdminTransactionsTableRow";
function AdminTransactionsTable() {
  const transactions = [
    {
      transactionDate: "14/02/2024",
      transactionAmount: 500,
      donorName: "لوريم ابسيم",
      charityName: "لوريم ابسيم",
      charityLogo: "/images/charity-logo.png",
      statusType: "success" /* success - fail - pending */,
    },
    {
      transactionDate: "14/02/2024",
      transactionAmmount: 500,
      donorName: "لوريم ابسيم",
      charityName: "لوريم ابسيم",
      charityLogo: "/images/charity-logo.png",
      statusType: "success" /* success - fail - pending */,
    },
  ];
  return (
    <ul className={styles.table}>
      <div className={styles["header-wrapper"]}>
        <li className={styles["table-header"]}>
          <div className={`${styles.col} ${styles["col-1"]}`}>
            {/* you can move to new component called TableAttribute. */}
            <button>
              تاريخ التحويل
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-2"]}`}>
            <button>
              المبلغ
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-3"]}`}>
            <button>
              اسم المتبرع
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-4"]}`}>
            <button>
              اسم الجمعية المتبرع لها
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
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
        <AdminTransactionsTableRow transaction={transactions[0]} />
      </div>
    </ul>
  );
}

export default AdminTransactionsTable;
