/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/DashboardComponents/SideBar.jsx";
import NavBar from "../../components/DashboardComponents/NavBar.jsx";
import styles from "./AdminDashboard.module.css";
function AdminDashboard() {
  // use useRef instead
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div className={styles.dashboard}>
      <div className="container-fluid ">
        <div className="row" style={{ minHeight: "100vh" }}>
          {/* just to decide the number of column sidebar and main content will take for lg screan and above*/}
          <div
            className={`${isOpenSidebar ? styles.open : styles.close} ${
              styles["sidebar-column"]
            } col-lg-3 col-xxl-2 p-0`}
          >
            <SideBar isOpenSidebar />
          </div>
          <div
            className={`${styles["main-content"]} col-12 col-lg-9 col-xxl-10 p-0 `}
          >
            <NavBar onToggleSidebar={setIsOpenSidebar} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

import "../../assets/js/dashboard.js";
export default AdminDashboard;
