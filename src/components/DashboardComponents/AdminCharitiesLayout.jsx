import { useEffect, useState } from "react";
import styles from "./AdminCharitiesLayout.module.css";
import AdminCharityTable from "./AdminCharityTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharities } from "../../rtk/features/user/adminSlice";
import ShowDate from "../common/ShowDate";
function AdminCharitiesLayout() {
  const { getAllCharitiesStatus, charities } = useSelector(
    (store) => store.admin
  );
  const [charitiesSort, setCharitiesSort] = useState([]);
  const dispatch = useDispatch();
  useEffect(
    function () {
      if (getAllCharitiesStatus === "idle") dispatch(getAllCharities());
      else if (getAllCharitiesStatus === "finished")
        setCharitiesSort(() => {
          return charities
            .map((e) => e)
            .sort((ch1, ch2) => ch2.isPending - ch1.isPending);
        });
    },
    [charities, dispatch, getAllCharitiesStatus]
  );

  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>الجمعيات</div>
          <div className={styles["search-filter"]}>
            <input type="text" name="" id="" placeholder="ابحث" />
            {/* //! romoved */}
            {/* <button className={styles["btn-filter"]}>
              <img src="/images/filter-icon.svg" alt="" />
              <span>اضافة فلتر</span>
            </button> */}
            <ShowDate />
          </div>
        </div>
      </div>

      <div>
        <div className="inner-container">
          <AdminCharityTable
            charitiesSort={charitiesSort}
            setCharitiesSort={setCharitiesSort}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminCharitiesLayout;
