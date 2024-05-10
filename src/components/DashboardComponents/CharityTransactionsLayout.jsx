import styles from "./CharityTransactionsLayout.module.css";
import CharityTransactionsTable from "./CharityTransactionsTable";
function CharityTransactionsLayout() {
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>التحويلات</div>
        </div>
      </div>

      <div>
        <div className="inner-container">
          <CharityTransactionsTable />
        </div>
      </div>
    </div>
  );
}

export default CharityTransactionsLayout;
