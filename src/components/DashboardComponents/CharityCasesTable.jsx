import CharityCaseTableRow from "./CharityCaseTableRow";
import styles from "./CharityCasesTable.module.css";
function CharityCasesTable() {
  const cases = [
    {
      id: 876123,
      title: "لوريم ابسيم",
      targetAmount: 10000,
      currentCollected: 500,
      dateFinished: "14/02/2024",
      donatinsNum: 20,
      caseStatus: "open" /* open - close */,
    },
    {
      id: 876123,
      title: "لوريم ابسيم",
      targetAmount: 10000,
      currentCollected: 500,
      dateFinished: "14/02/2024",
      donatinsNum: 20,
      caseStatus: "closed" /* open - close */,
    },
    {
      id: 876123,
      title: "لوريم ابسيم",
      targetAmount: 10000,
      currentCollected: 500,
      dateFinished: "14/02/2024",
      donatinsNum: 20,
      caseStatus: "closed" /* open - close */,
    },
    {
      id: 876123,
      title: "لوريم ابسيم",
      targetAmount: 10000,
      currentCollected: 500,
      dateFinished: "14/02/2024",
      donatinsNum: 20,
      caseStatus: "closed" /* open - close */,
    },
    {
      id: 876123,
      title: "لوريم ابسيم",
      targetAmount: 10000,
      currentCollected: 500,
      dateFinished: "14/02/2024",
      donatinsNum: 20,
      caseStatus: "closed" /* open - close */,
    },
    {
      id: 876123,
      title: "لوريم ابسيم",
      targetAmount: 10000,
      currentCollected: 500,
      dateFinished: "14/02/2024",
      donatinsNum: 20,
      caseStatus: "closed" /* open - close */,
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
              عنوان الحالة
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-3"]}`}>
            <button>
              المبلغ المطلوب
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-4"]}`}>
            <button>
              المبلغ المجمع
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-5"]}`}>
            <button>
              تاريخ الانتهاء
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-6"]}`}>
            <button>
              عدد عمليات التبرع
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-7"]}`}>
            <button>
              نوع الحالة
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-8"]}`}>
            <button>
              الاكشن
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
        </li>
      </div>
      <div className={styles.rows}>
        {cases.map((currentCase) => (
          <CharityCaseTableRow currentCase={currentCase} key={currentCase.id} />
        ))}
      </div>
    </ul>
  );
}

export default CharityCasesTable;
