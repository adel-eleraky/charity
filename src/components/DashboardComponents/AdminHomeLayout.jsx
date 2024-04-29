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
      <div className="stats">
        <div className="inner-container">
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
          <div
            className="col-sm-4 box"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <span className="img">
              <img src="/images/charity.svg" alt="" />
            </span>
            <div>
              <div> عدد الحالات </div>
              <span>215</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeLayout;
