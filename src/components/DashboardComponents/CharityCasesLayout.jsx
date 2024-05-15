/* eslint-disable no-unused-vars */
import AddCase from "../AddCase";
import styles from "./CharityCasesLayout.module.css";
import CharityCasesTable from "./CharityCasesTable";

function CharityCasesLayout() {

  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>الحالات</div>
          <div className={styles["search-filter"]}>
            <input type="text" name="" id="" placeholder="ابحث" />
            <button className={styles["btn-filter"]}>
              <img src="/images/filter-icon.svg" alt="" />
              <span>اضافة فلتر</span>
            </button>
          </div>
          <AddCase />
        </div>
      </div>

      <div>
        <div className="inner-container">
          <CharityCasesTable />
        </div>
      </div>
    </div>
  );
}

export default CharityCasesLayout;
