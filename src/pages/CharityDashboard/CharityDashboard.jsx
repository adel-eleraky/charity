/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/DashboardComponents/NavBar.jsx";
import styles from "./CharityDashboard.module.css";
import CharitySideBar from "../../components/DashboardComponents/CharitySideBar.jsx";
function CharityDashboard() {
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
        <CharitySideBar
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

export default CharityDashboard;
