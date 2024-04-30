import styles from "./AdminCharitiesLayout.module.css";
import AdminCharityTable from "./AdminCharityTable";
function AdminCharitiesLayout() {
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>الجمعيات</div>
          <div className={styles["search-filter"]}>
            <input type="text" name="" id="" placeholder="ابحث" />
            <button className={styles["btn-filter"]}>
              <img src="/images/filter-icon.svg" alt="" />
              <span>اضافة فلتر</span>
            </button>
          </div>
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

export default AdminCharitiesLayout;
