/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar.jsx'
import NavBar from './NavBar.jsx'

function AdminDashboard() {



    return (
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
    )
}

export default AdminDashboard
