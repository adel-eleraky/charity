/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/DashboardComponents/SideBar.jsx";
import NavBar from "../../components/DashboardComponents/NavBar.jsx";
import AdminCharityDocs from "../../components/DashboardComponents/AdminCharityDocs.jsx";
import styles from "./AdminDashboard.module.css";
function AdminDashboard() {
  // use useRef instead

  function handleToggleSidebar() {
    setIsOpenSidebar((o) => !o);
  }
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div className={`${styles.dashboard} `}>
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
      <div className={`${styles["main-content"]} dsh_test`}>
        <NavBar
          isOpenSidebar={isOpenSidebar}
          onToggleSidebar={handleToggleSidebar}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
