import { useEffect } from "react";
import styles from "./AdminCharitiesLayout.module.css";
import AdminCharityTable from "./AdminCharityTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharities } from "../../rtk/features/user/adminSlice";
function AdminCharitiesLayout() {
  const { getAllCharitiesStatus, charities } = useSelector(
    (store) => store.admin
  );
  const dispatch = useDispatch();
  useEffect(
    function () {
      if (getAllCharitiesStatus === "idle") dispatch(getAllCharities());
    },
    [dispatch, getAllCharitiesStatus]
  );

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
