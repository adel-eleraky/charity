/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/DashboardComponents/SideBar.jsx";
import NavBar from "../../components/DashboardComponents/NavBar.jsx";
import styles from "./AdminDashboard.module.css";
function AdminDashboard() {
  // use useRef instead
  function handleToggleSidebar() {
    setIsOpenSidebar((o) => !o);
  }
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div className={styles.dashboard}>
      <div
        className={`${isOpenSidebar ? styles.open : styles.close} ${
          styles["sidebar-column"]
        }`}
      >
        <SideBar
          isOpenSidebar={isOpenSidebar}
          onToggleSidebar={handleToggleSidebar}
        />
      </div>
      <div className={`${styles["main-content"]} `}>
        <NavBar
          isOpenSidebar={isOpenSidebar}
          onToggleSidebar={handleToggleSidebar}
        />
        <Outlet />
      </div>
    </div>
  );
}

import "../../assets/js/dashboard.js";
export default AdminDashboard;
