/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/CategoryCard.css"

function CategoryCard({ img, title, description, borderStyle }) {
    return (
        <>
            <div className={`category-card ${borderStyle} pt-5`} data-aos="fade-up">
                <img src={`/images/${img}`} alt="" className="img-fluid mb-3" />
                <div className="content text-center pt-4 px-0 px-sm-2 px-xxl-4">
                    <div className="title text-center fw-bold fs-2 mb-xl-4 mb-3">{title}</div>
                    <div className="verse mb-3">
                        {description}
                    </div>
                    <div className='donate-btn'>
                        <img src="/images/arrowright.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCard
