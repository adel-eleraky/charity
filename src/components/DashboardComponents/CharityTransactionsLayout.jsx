import styles from "./CharityTransactionsLayout.module.css";
import AdminTransactionsTable from "./CharityTransactionsTable";
function CharityTransactionsLayout() {
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>الجمعيات</div>
        </div>
      </div>

      <div>
        <div className="inner-container">
          <AdminTransactionsTable />
        </div>
      </div>
    </div>
  );
}

export default CharityTransactionsLayout;
