import React from 'react'

function UserHomeComponent() {
    return (
        <>
            <div className="dashboard-main-content p-5">
                <div className='d-flex flex-wrap justify-content-evenly'>
                    <div className="box users shadow" data-aos="zoom-in" data-aos-duration="1000">
                        <span className='img'><i className="bi bi-person fs-1 "></i></span>
                        <div>
                            <div> اجمالى التبرعات </div>
                            <span> 100 بلبل </span>
                        </div>
                    </div>
                    <div className="box cases shadow" data-aos="zoom-in" data-aos-duration="1000">
                        <span className='img'><i className="fa-regular fa-id-card fs-1"></i></span>
                        <div>
                            <div>  عدد الحالات المتبرع لها </div>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHomeComponent
