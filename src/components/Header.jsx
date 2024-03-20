/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Header.css"

function Header() {
    return (
        <>
            <header className='py-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 pe-0 verse-column " data-aos="fade-down" data-aos-duration="2000">
                            <div className="content w-75 mx-auto ">
                                <img src="/images/Group.png" alt="" className="img-fluid mb-3" />
                                <p className="fw-bold fs-1" style={{ color: "#343D40" }}>قــــــــال الله تعالى :</p>
                                <p className='verse'>
                                    <img src="/images/verse.png" alt="" className="img-fluid" />
                                </p>
                                <button className='btn rounded text-white px-4 d-flex align-items-center justify-content-between'> تبرع الان <i className="fa-solid fa-arrow-left me-2" style={{ color: "#ffffff" }}></i> </button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 img-column text-center" data-aos="fade-down" data-aos-duration="2000">
                            <img src="/images/header-img.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
