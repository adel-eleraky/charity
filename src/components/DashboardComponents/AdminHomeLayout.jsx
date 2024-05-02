/* eslint-disable no-unused-vars */
import React from "react";
import ShowDate from "./ShowDate";
import styles from "./AdminHomeLayout.module.css";
import AdminHomeBox from "./AdminHomeBox";
import HomeProgress from "./HomeProgress";
function AdminHomeLayout() {
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <ShowDate />
        </div>
      </div>
      <div className={styles.stats}>
        <div className="inner-container">
          <div className={styles.small}>
            <div className={styles.row}>
              <AdminHomeBox
                title="عدد الجمعيات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </AdminHomeBox>
              <AdminHomeBox
                title="عدد الجمعيات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </AdminHomeBox>
            </div>
            <div className={styles.row}>
              <AdminHomeBox
                title="عدد الجمعيات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </AdminHomeBox>
              <AdminHomeBox
                title="عدد الجمعيات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </AdminHomeBox>
            </div>
          </div>
          <div className={styles.big}>
            <AdminHomeBox
              isBig={true}
              title="عدد الجمعيات"
              imagePath="/images/admin-charity.svg"
              value="222"
            >
              <HomeProgress value="10" isPositive={true} />
            </AdminHomeBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeLayout;
