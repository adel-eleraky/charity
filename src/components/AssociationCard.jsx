/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/AssociationCard.css"

function AssociationCard() {
    return (
        <>
            <div className="association-card mb-5" data-aos="fade-up">
                <img src="images/association-1.png" alt="" className="img-fluid  w-100 mb-3" />
                <div className="content">
                    <button className='donate-button btn rounded-pill d-block mx-auto'>تبرع الان</button>
                </div>
            </div>
        </>
    )
}

export default AssociationCard
