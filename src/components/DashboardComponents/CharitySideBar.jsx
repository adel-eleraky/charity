/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CharitySideBar.module.css";
function CharitySideBar({ isOpenSidebar, onToggleSidebar, isCharityApproved }) {
  return (
    <div
      className={`${styles["sidebar-content"]}  position-relative text-white`}
    >
      <i className="fa-solid fa-xmark fs-1" onClick={onToggleSidebar}></i>
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
          <span>الصفحة الرئيسية</span>
        </NavLink>
        {isCharityApproved ? (
          <>
            <NavLink to="cases">
              <svg
                className={styles.building}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <g clip-path="url(#a)">
                  <path d="M4 13h3v2H4v-2Zm5 2h3v-2H9v2Zm-5 4h3v-2H4v2Zm5 0h3v-2H9v2ZM4 7h3V5H4v2Zm5 0h3V5H9v2Zm-5 4h3V9H4v2Zm5 0h3V9H9v2Zm15-3v16H0V3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h5a3 3 0 0 1 3 3ZM14 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v19h12V3Zm8 5a1 1 0 0 0-1-1h-5v15h6V8Zm-4 7h2v-2h-2v2Zm0 4h2v-2h-2v2Zm0-8h2V9h-2v2Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span>الحالات</span>
            </NavLink>
            <NavLink to="transactions">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#C8C8C8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21.5 8.5v7M4.611 19H19.39c1.166 0 2.111-1.045 2.111-2.333V7.333C21.5 6.045 20.555 5 19.389 5H4.61C3.445 5 2.5 6.045 2.5 7.333v9.334C2.5 17.955 3.445 19 4.611 19Z"
                />
                <path
                  stroke="#C8C8C8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21.5 9H14a3 3 0 1 0 0 6h7.5M14 12v.01"
                />
              </svg>
              <span>التحويلات</span>
            </NavLink>
            <NavLink to="campaigns">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#C8C8C8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 19H1v-1a4.002 4.002 0 0 1 3-3.874M6 10.83a3.001 3.001 0 0 1 0-5.66M21 19h2v-1a4.002 4.002 0 0 0-3-3.874M18 5.17a3.001 3.001 0 0 1 0 5.66M14 14h-4a4 4 0 0 0-4 4v1h12v-1a4 4 0 0 0-4-4ZM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
              </svg>
              <span>الحملات</span>
            </NavLink>
            <NavLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M8 8l-4 4 4 4M4 12h12"
                />
              </svg>
              <span>الرجوع الى الموقع</span>
            </NavLink>
          </>
        ) : (
          <NavLink to="upload-docs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#C8C8C8"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21.5 8.5v7M4.611 19H19.39c1.166 0 2.111-1.045 2.111-2.333V7.333C21.5 6.045 20.555 5 19.389 5H4.61C3.445 5 2.5 6.045 2.5 7.333v9.334C2.5 17.955 3.445 19 4.611 19Z"
              />
              <path
                stroke="#C8C8C8"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21.5 9H14a3 3 0 1 0 0 6h7.5M14 12v.01"
              />
            </svg>
            <span>رفع الوثائق</span>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default CharitySideBar;
