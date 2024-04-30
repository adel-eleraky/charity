import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
/* eslint-disable  */
function NavBar({ isOpenSidebar, onToggleSidebar }) {
  const showBorder = isOpenSidebar ? "show-border" : "";
  return (
    <div
      className={`${styles["dashboard-nav"]} ${
        isOpenSidebar ? styles["show-border"] : ""
      }`}
    >
      <div className="inner-container">
        <svg
          onClick={() => onToggleSidebar((isOpen) => !isOpen)}
          className={`sidebar-toggler fa-solid fa-bars fs-4 ms-4 d-none`}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            fill="#000"
            fill-rule="evenodd"
            d="M4.8 8a1.6 1.6 0 0 1 1.6-1.6h19.2a1.6 1.6 0 0 1 0 3.2H6.4A1.6 1.6 0 0 1 4.8 8Zm0 8a1.6 1.6 0 0 1 1.6-1.6H16a1.6 1.6 0 0 1 0 3.2H6.4A1.6 1.6 0 0 1 4.8 16Zm0 8a1.6 1.6 0 0 1 1.6-1.6h19.2a1.6 1.6 0 0 1 0 3.2H6.4A1.6 1.6 0 0 1 4.8 24Z"
            clip-rule="evenodd"
          />
        </svg>
        <div
          className={`${styles["user-info-container"]} d-flex align-items-center flex-row-reverse`}
        >
          <span className={styles.avatar}>
            <img src="/images/Avatar.png" alt="" />
          </span>
          <span className={styles.bell}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 17v1a3 3 0 0 0 6 0v-1M20 17s-2-5-2-8c0-3.268-2.732-6-6-6S6 5.732 6 9c0 4-2 8-2 8h16Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
