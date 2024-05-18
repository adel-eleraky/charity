/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { getAllCases } from "../../rtk/features/charity/charityCaseSlice";
import AddCase from "../AddCase";
import styles from "./CharityCasesLayout.module.css";
import CharityCasesTable from "./CharityCasesTable";
import { useEffect } from "react";

function CharityCasesLayout() {
  const dispatch = useDispatch();
  // you can use it anywhere so no prob-drilling
  const { cases, getAllCasesStatus } = useSelector(
    (store) => store.charityCase
  );
  useEffect(
    function () {
      if (getAllCasesStatus === "idle") dispatch(getAllCases());
    },
    [dispatch, getAllCasesStatus]
  );

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
