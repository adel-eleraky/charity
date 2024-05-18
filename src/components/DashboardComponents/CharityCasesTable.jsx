import { useSelector } from "react-redux";
import CharityCaseTableRow from "./CharityCaseTableRow";
import styles from "./CharityCasesTable.module.css";
import Loader from "../common/Loader";
import Error from "../common/Error";
function CharityCasesTable() {
  const { cases, getAllCasesStatus, error } = useSelector(
    (store) => store.charityCase
  );

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
              النوع الرئيسي
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-6"]}`}>
            <button>
              النوع الفرعي
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
        {getAllCasesStatus === "finished" &&
          cases.map((currentCase) => (
            <CharityCaseTableRow
              currentCase={currentCase}
              key={currentCase._id}
            />
          ))}
        {getAllCasesStatus === "loading" && <Loader />}
        {getAllCasesStatus === "failed" && <Error msg={error} />}
      </div>
    </ul>
  );
}

export default CharityCasesTable;
