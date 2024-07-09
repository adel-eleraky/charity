/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Header.css"

function Header() {
    return (
        <>
            <header className='py-5 position-relative'>
                <div className="container-fluid">
                    <div className="row align-items-center" style={{ paddingTop: "100px" }}>
                        <div className="col-12 col-lg-6 pe-0 verse-column  mt-lg-0 mt-4 pt-lg-0 pt-4" data-aos="fade-down" data-aos-duration="2000">
                            <div className="content w-75 mx-auto ">
                                <img src="/images/Group.png" alt="" className="img-fluid mb-3" />
                                <p className="fw-bold fs-1" style={{ color: "#343D40" }}>قــــــــال الله تعالى :</p>
                                <p className='verse'>
                                    <img src="/images/verse.png" alt="" className="img-fluid" />
                                </p>
                                <button className='btn rounded text-white px-4 d-flex align-items-center justify-content-between'> تبرع الان <i className="fa-solid fa-arrow-left me-2" style={{ color: "#ffffff" }}></i> </button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 img-column text-center position-relative" style={{ zIndex: 2 }} data-aos="fade-down" data-aos-duration="2000">
                            <div className="header-img mx-auto">
                                <img src="/images/header-img.png" alt="" className="img-fluid " />
                                <img src="/images/header-img-badge-1.png" alt="" className="img-fluid header-img-badge badge-1" />
                                <img src="/images/header-img-badge-2.png" alt="" className="img-fluid header-img-badge badge-2" />
                                <img src="/images/header-img-badge-3.png" alt="" className="img-fluid header-img-badge badge-3" />
                                <p className="quote quote-1 bg-white"> ما نقص مالٌ من صدقةٍ </p>
                                <p className="quote quote-2 bg-white"> الصدقة تطفئ الخطيئة كما يطفئ الماء النار </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/images/header-bg-img-1.png" alt="" className="img-fluid position-absolute top-0 start-0" />
                <img src="/images/header-bg-img-2.png" alt="" className="img-fluid position-absolute top-0 start-0" />
            </header>
        </>
    )
}

export default Header
