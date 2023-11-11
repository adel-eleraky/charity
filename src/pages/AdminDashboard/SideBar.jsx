/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./css/SideBar.css"

function SideBar() {
    return (
        <>
            <div className="sidebar-column col-lg-3 col-xl-2 p-0">
                <div className="sidebar-content position-relative text-white pe-5 pt-5">
                    <i className="close-sidebar fa-solid fa-xmark fs-1 d-none position-absolute"></i>
                    <div className="admin-details d-flex align-items-center gap-15 mb-5">
                        <img src="/images/admin-img.png" alt="" className="img-fluid" />
                        <div><span className="">Admin</span><br />3dola</div>
                    </div>
                    <div className="tabs d-flex flex-column gap-20 text-white">
                        <NavLink to=""> <i className="bi bi-house-door fs-4 ms-2"></i> الصفحة الرئيسية</NavLink>
                        <NavLink to="users"> <i className="bi bi-person fs-4 ms-2"></i> المتبرعين </NavLink>
                        <NavLink to="charities"> <i className="fa-solid fa-people-group fs-4 ms-2 "></i>الجمعيات الخيرية</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
