import styles from "./AdminTransactionsLayout.module.css";
import AdminCharityTable from "./AdminCharityTable";
function AdminTransactionsLayout() {
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>الجمعيات</div>
        </div>
      </div>

      <div>
        <div className="inner-container">
          <AdminCharityTable />
        </div>
      </div>
    </div>
  );
}

export default AdminTransactionsLayout;
