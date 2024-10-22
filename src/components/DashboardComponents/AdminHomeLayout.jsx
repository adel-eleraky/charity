/* eslint-disable no-unused-vars */
import React from "react";
import ShowDate from "../common/ShowDate";
import HomeBox from "../common/HomeBox";
import HomeProgress from "../common/HomeProgress";
import styles from "./AdminHomeLayout.module.css";
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
              <HomeBox
                title="عدد المتبرعين"
                imagePath="/images/admin-users.svg"
                value="25"
              >
                <HomeProgress value="10" isPositive={true} />
              </HomeBox>
              <HomeBox
                title="عدد التبرعات"
                imagePath="/images/money.svg"
                value="65"
              >
                <HomeProgress value="10" isPositive={true} />
              </HomeBox>
            </div>
            <div className={styles.row}>
              <HomeBox
                title="عدد الجمعيات"
                imagePath="/images/organization-building.svg"
                value="13"
              >
                <HomeProgress value="10" isPositive={true} />
              </HomeBox>
              <HomeBox
                title="اجمالي التبرعات"
                imagePath="/images/coin.svg"
                value="4150"
              >
                <HomeProgress value="10" isPositive={true} />
              </HomeBox>
            </div>
          </div>
          <div className={styles.big}>
            <HomeBox
              isBig={true}
              title="عدد الحالات"
              imagePath="/images/admin-charity.svg"
              value="43"
            >
              <HomeProgress value="10" isPositive={true} />
            </HomeBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeLayout;
