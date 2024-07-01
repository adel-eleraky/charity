import Popup from "reactjs-popup";
import styles from "./AdminCharityTable.module.css";
import AdminCharityTableRow from "./AdminCharityTableRow";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";
import Error from "../common/Error";
function AdminCharityTable() {
  // todo: get charities from adminSlice
  const { getAllCharitiesStatus, error, charities } = useSelector(
    (store) => store.admin
  );
  // const charities = [
  //   {
  //     "_id": "65f9fb313dbbeaaa8c2afebc",
  //     "email": "saadmu7ammad7@gmail.com",
  //     "name": "test",
  //     "isConfirmed": true,
  //     "isPending": false
  // }
  //   {
  //     _id: 876123,
  //     charityName: "لوريم ابسيم",
  //     charityLogo: "/images/charity-logo.png",
  //     casesNum: 50,
  //     regDate: "14/02/2024",
  //     collectedMoney: 500,
  //     donersNum: 20,
  //     statusType: "accepted" /* accepted - rejected - pending */,
  //   },
  //   {
  //     _id: 876123,
  //     charityName: "لوريم ابسيم",
  //     charityLogo: "/images/charity-logo.png",
  //     casesNum: 50,
  //     regDate: "14/02/2024",
  //     collectedMoney: 500,
  //     donersNum: 20,
  //     statusType: "rejected" /* accepted - rejected - pending */,
  //   },
  //   {
  //     _id: 876123,
  //     charityName: "لوريم ابسيم",
  //     charityLogo: "/images/charity-logo.png",
  //     casesNum: 50,
  //     regDate: "14/02/2024",
  //     collectedMoney: 500,
  //     donersNum: 20,
  //     statusType: "pending" /* accepted - rejected - pending */,
  //   },
  // ];
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
              اسم الجمعية
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-3"]}`}>
            <button>
              عدد الحالات
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-4"]}`}>
            <button>
              تاريخ التسجل علي الموقع
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-5"]}`}>
            <button>
              الاموال المجمعة
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-6"]}`}>
            <button>
              عدد المتبرعين
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
      {getAllCharitiesStatus === "finished" && (
        <div className={styles.rows}>
          {charities.map((e) => (
            <AdminCharityTableRow charity={e} key={e._id} />
          ))}
        </div>
      )}
      {getAllCharitiesStatus === "loading" && <Loader type="mosaic" />}
      {getAllCharitiesStatus === "failed" && <Error msg={error} />}
    </ul>
  );
}

export default AdminCharityTable;
