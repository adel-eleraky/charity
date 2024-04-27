/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <>
      <div
        className={`${styles["sidebar-content"]}  position-relative text-white`}
      >
        <i className="close-sidebar fa-solid fa-xmark fs-1 d-none position-absolute"></i>
        <img className={styles.logo} src="/images/Logo.svg" alt="" />
        <div className={`${styles.links} d-flex flex-column text-white`}>
          <NavLink to="home">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m4 10 8-7 8 7v10h-5v-4a3 3 0 0 0-6 0v4H4V10Z"
              />
            </svg>
            الصفحة الرئيسية
          </NavLink>
          <NavLink to="charities">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 19H1v-1a4.002 4.002 0 0 1 3-3.874M6 10.83a3.001 3.001 0 0 1 0-5.66M21 19h2v-1a4.002 4.002 0 0 0-3-3.874M18 5.17a3.001 3.001 0 0 1 0 5.66M14 14h-4a4 4 0 0 0-4 4v1h12v-1a4 4 0 0 0-4-4ZM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
            </svg>
            الجمعيات
          </NavLink>
          <NavLink to="users">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21.5 8.5v7M4.611 19H19.39c1.166 0 2.111-1.045 2.111-2.333V7.333C21.5 6.045 20.555 5 19.389 5H4.61C3.445 5 2.5 6.045 2.5 7.333v9.334C2.5 17.955 3.445 19 4.611 19Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21.5 9H14a3 3 0 1 0 0 6h7.5M14 12v.01"
              />
            </svg>
            الاعضاء
          </NavLink>
          <NavLink to="users">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M8 8l-4 4 4 4M4 12h12"
              />
            </svg>
            التحويلات
          </NavLink>
          <NavLink to="users">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M8 8l-4 4 4 4M4 12h12"
              />
            </svg>
            الخروج
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
