/* eslint-disable no-unused-vars */
import React from "react";
import ShowDate from "../common/ShowDate";
import styles from "./CharityHomeLayout.module.css";
import AdminHomeBox from "../common/HomeBox";
import HomeProgress from "../common/HomeProgress";
function CharityHomeLayout() {
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
                title="عدد المتبرعين"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </AdminHomeBox>
              <AdminHomeBox
                title="عدد التبرعات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </AdminHomeBox>
            </div>
            <div className={styles.row}>
              <AdminHomeBox
                title="عدد الحملات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </AdminHomeBox>
              <AdminHomeBox
                title="اجمالي التبرعات"
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
              title="عدد الحالات"
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

export default CharityHomeLayout;
