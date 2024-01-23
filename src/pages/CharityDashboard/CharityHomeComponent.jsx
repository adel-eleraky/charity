/* eslint-disable no-unused-vars */
import React from 'react'

function CharityHomeComponent() {
    return (
        <div className="dashboard-main-content p-5">
            <div className='d-flex flex-wrap justify-content-evenly'>
                <div className="box users shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="bi bi-person fs-1 "></i></span>
                    <div>
                        <div> عدد الحالات </div>
                        <span>سعد واحد بس </span>
                    </div>
                </div>
                <div className="box cases shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="fa-regular fa-id-card fs-1"></i></span>
                    <div>
                        <div> عدد الحالات المكتملة</div>
                        <span>0</span>
                    </div>
                </div>
                <div className="box donations shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="fa-solid fa-sack-dollar fs-1"></i></span>
                    <div>
                        <div> عدد المتبرعين </div>
                        <span>مش لاقيين حد </span>
                    </div>
                </div>
                <div className="box donations shadow" data-aos="zoom-in" data-aos-duration="1000">
                    <span className='img'><i className="fa-solid fa-sack-dollar fs-1"></i></span>
                    <div>
                        <div> اجمالى التبرعات </div>
                        <span>مفلسيين</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharityHomeComponent
