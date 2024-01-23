/* eslint-disable no-unused-vars */
import React from 'react'
import SideBar from "./SideBar"
import NavBar from "./NavBar"
import { Outlet } from 'react-router-dom'


function CharityDashboard() {
    return (
        <>
            <div className="dashboard">
                <div className="container-fluid ">
                    <div className="row" style={{ minHeight: "100vh" }}>
                        <div className="sidebar-column col-lg-3 col-xxl-2 p-0">
                            <SideBar />
                        </div>
                        <div className="col-12 col-lg-9 col-xxl-10 p-0">
                            <div className="main-content">
                                <NavBar />
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharityDashboard
