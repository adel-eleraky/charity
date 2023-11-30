/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/AdminHomeComponent.css"

function AdminHomeComponent() {
    return (
        <div className="admin-home-component p-5">
            <div className='d-flex flex-wrap justify-content-evenly'>
                <div className="box users shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="bi bi-person fs-1 "></i></span>
                    <div>
                        <div> عدد المتبرعين </div>
                        <span>215</span>
                    </div>
                </div>
                <div className="box charities shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="fa-solid fa-people-group fs-1"></i></span>
                    <div>
                        <div> عدد الجمعيات </div>
                        <span>215</span>
                    </div>
                </div>
                <div className="box donations shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="fa-solid fa-sack-dollar fs-1"></i></span>
                    <div>
                        <div> عدد التبرعات </div>
                        <span>215</span>
                    </div>
                </div>
                <div className="box donations shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="fa-solid fa-sack-dollar fs-1"></i></span>
                    <div>
                        <div> اجمالى التبرعات </div>
                        <span>250 بلبل</span>
                    </div>
                </div>
                <div className="box cases shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="fa-regular fa-id-card fs-1"></i></span>
                    <div>
                        <div> عدد الحالات </div>
                        <span>215</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHomeComponent
