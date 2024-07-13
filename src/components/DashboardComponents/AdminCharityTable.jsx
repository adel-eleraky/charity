import Popup from "reactjs-popup";
import styles from "./AdminCharityTable.module.css";
import AdminCharityTableRow from "./AdminCharityTableRow";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";
import Error from "../common/Error";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToastCustomReducer from "../../hooks/useToastCustomReducer";
import { memo, useState } from "react";

//* you are here so charities always exist or no charities
const AdminCharityTable = memo(function AdminCharityTable({
  charitiesSort,
  setCharitiesSort,
}) {
  console.log("re-render");
  const { getAllCharitiesStatus } = useSelector((store) => store.admin);

  useToastCustomReducer(
    getAllCharitiesStatus,
    "جاري تحميل الجمعيات",
    "تم تحميل الجمعيات بنجاح",
    "فشل تحميل الجمعيات"
  );
  // const charitiesTemp = charities.map((e) => e);
  // charitiesTemp.sort((ch1, ch2) => ch2.isPending - ch1.isPending);
  // console.log(charitiesSort);
  return (
    <ul className={styles.table}>
      {/* <ToastCustomComponent status={getAllCharitiesStatus} /> */}
      <ToastContainer rtl />
      <div className={styles["header-wrapper"]}>
        <li className={styles["table-header"]}>
          <div className={`${styles.col} ${styles["col-1"]}`}>
            {/* you can move to new component called TableAttribute. */}
            <button
              onClick={() => {
                setCharitiesSort((oldCharities) => {
                  return oldCharities
                    .map((e) => e)
                    .sort((c1, c2) => {
                      if (c1._id < c2._id) return 1;
                      if (c1._id > c2._id) return -1;
                      return 0;
                    });
                });
              }}
            >
              id
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-2"]}`}>
            <button
              onClick={() => {
                setCharitiesSort((oldCharities) => {
                  return oldCharities
                    .map((e) => e)
                    .sort((c1, c2) => {
                      if (c1.name < c2.name) return 1;
                      if (c1.name > c2.name) return -1;
                      return 0;
                    });
                });
              }}
            >
              اسم الجمعية
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-3"]}`}>
            <button
              onClick={() => {
                setCharitiesSort((oldCharities) => {
                  return oldCharities
                    .map((e) => e)
                    .sort(
                      (c1, c2) =>
                        Number(c2.numberOfCases) - Number(c1.numberOfCases)
                    );
                });
              }}
            >
              عدد الحالات
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-4"]}`}>
            <button
              onClick={() => {
                setCharitiesSort((oldCharities) => {
                  return oldCharities
                    .map((e) => e)
                    .sort((a, b) => {
                      const dateA = new Date(a.createdAt);
                      const dateB = new Date(b.createdAt);

                      // Compare dates
                      if (dateA < dateB) return 1;
                      if (dateA > dateB) return -1;
                      return 0;
                    });
                });
              }}
            >
              تاريخ التسجل علي الموقع
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-5"]}`}>
            <button
              onClick={() => {
                setCharitiesSort((oldCharities) => {
                  return oldCharities
                    .map((e) => e)
                    .sort(
                      (c1, c2) =>
                        Number(c2.totalDonationsIncome) -
                        Number(c1.totalDonationsIncome)
                    );
                });
              }}
            >
              الاموال المجمعة
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-6"]}`}>
            <button
              onClick={() => {
                setCharitiesSort((oldCharities) => {
                  return oldCharities
                    .map((e) => e)
                    .sort(
                      (c1, c2) =>
                        Number(c2.totalNumberOfDonors) -
                        Number(c1.totalNumberOfDonors)
                    );
                });
              }}
            >
              عدد المتبرعين
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-7"]}`}>
            <button
              onClick={() => {
                setCharitiesSort((oldCharities) => {
                  return oldCharities
                    .map((e) => e)
                    .sort((a, b) => {
                      if (a.isPending && !b.isPending) return -1;
                      if (!a.isPending && b.isPending) return 1;
                      if (a.isConfirmed && !b.isConfirmed) return -1;
                      if (!a.isConfirmed && b.isConfirmed) return 1;
                      return 0;
                    });
                });
              }}
            >
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
      {getAllCharitiesStatus === "finished" && (
        <div className={styles.rows}>
          {charitiesSort.map((e) => (
            <AdminCharityTableRow charity={e} key={e._id} />
          ))}
        </div>
      )}
      {getAllCharitiesStatus === "loading" && <Loader type="mosaic" />}
      {getAllCharitiesStatus === "failed" && (
        <Error msg={"حدث خطأ اثناء تحميل الجمعيات"} />
      )}
    </ul>
  );
});

export default AdminCharityTable;
