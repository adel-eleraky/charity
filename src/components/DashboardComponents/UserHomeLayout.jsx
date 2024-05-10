/* eslint-disable no-unused-vars */
import React from "react";
import ShowDate from "../common/ShowDate";
import styles from "./UserHomeLayout.module.css";
import HomeBox from "../common/HomeBox";
import HomeProgress from "../common/HomeProgress";
function UserHomeLayout() {
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
                title="عدد التبرعات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </HomeBox>
              <HomeBox
                title="عدد الحالات"
                imagePath="/images/admin-users.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </HomeBox>
            </div>
          </div>
          <div className={styles.big}>
            <HomeBox
              isBig={true}
              title="المبلغ الكلي"
              imagePath="/images/admin-charity.svg"
              value="222"
            >
              <HomeProgress value="10" isPositive={true} />
            </HomeBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHomeLayout;
