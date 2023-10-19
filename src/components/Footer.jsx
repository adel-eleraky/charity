/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row py-3 align-items-center">
                        <div className="col-12 col-md-6">
                            <div className='fs-2 fw-bold mb-3 mb-md-0'>اشترك فى النشرة الاخبارية</div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-group ">
                                <input type="text" className="form-control " placeholder="بريدك الالكترونى" aria-label="بريدك الالكترونى" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text subscribe-span" id="basic-addon2"><button className='btn '>اشترك</button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
