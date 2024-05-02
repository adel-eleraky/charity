import styles from "./AdminUsersTable.module.css";
import AdminUsersTableRow from "./AdminUsersTableRow";
function AdminUsersTable() {
  const admins = [
    {
      id: 876123,
      userName: "لوريم ابسيم",
      email: "abdohello@gmail.com",
      phoneNum: "01030931139",
      donatedAmount: "500",
      casesNum: 16,
      charitiesNum: 4,
    },
  ];
  const users = [
    {
      id: 876123,
      userName: "لوريم ابسيم",
      email: "abdohello@gmail.com",
      phoneNum: "01030931139",
      donatedAmount: "500",
      casesNum: 16,
      charitiesNum: 4,
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
              اسم المستخدم
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-3"]}`}>
            <button>
              الايميل
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-4"]}`}>
            <button>
              رقم الموبايل
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-5"]}`}>
            <button>
              المبلغ المتبرع به
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-6"]}`}>
            <button>
              عدد الحالات التبرع لها
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
          <div className={`${styles.col} ${styles["col-7"]}`}>
            <button>
              عدد الجمعيات تم التبرع دا
              <img src="/images/admin-arrow-down.svg" alt="" />
            </button>
          </div>
        </li>
      </div>
      <div className={styles.rows}>
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
        <AdminUsersTableRow user={admins[0]} />
      </div>
    </ul>
  );
}

export default AdminUsersTable;
