/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../components/DashboardComponents/NavBar.jsx";
import styles from "./CharityDashboard.module.css";
import CharitySideBar from "../../components/DashboardComponents/CharitySideBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCharityProfile } from "../../rtk/features/charity/charityProfileSlice.js";
import Loader from "../../components/common/Loader.jsx";
import Error from "../../components/common/Error.jsx";

//todo: consider the isPending status
function CharityDashboard() {
  // use useRef instead
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  // const [isCharityApproved, setIsCharityApproved] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    charityProfile,
    getCharityProfileStatus,
    isEmailVerified,
    error,
    editCharityImgStatus,
  } = useSelector((store) => store.charityProfile);
  //* if not verfied go to activate
  if (!isEmailVerified) navigate("/account/activate");
  useEffect(() => {
    if (
      Object.keys(charityProfile).length === 0 &&
      getCharityProfileStatus !== "loading"
    )
      dispatch(getCharityProfile());
  }, [dispatch, charityProfile, getCharityProfileStatus]);
  function handleToggleSidebar() {
    setIsOpenSidebar((o) => !o);
  }
  if (getCharityProfileStatus === "loading") return <Loader />;
  if (getCharityProfileStatus === "failed") return <Error msg={error} />;
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
          isCharityApproved={charityProfile.isConfirmed}
        />
      </div>
      <div className={`${styles["main-content"]} `}>
        <NavBar
          isOpenSidebar={isOpenSidebar}
          onToggleSidebar={handleToggleSidebar}
        />
        <Outlet
          context={[charityProfile.isConfirmed, charityProfile.isPending]}
        />
      </div>
    </div>
  );
}

export default CharityDashboard;
