/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./css/CaseCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../rtk/features/CartSlice'
import { toast } from 'react-toastify';


function CaseCard({ id, title, img, description, cost, paymentMade, moneyRemaining, timeRemaining }) {

    const [donationAmount, setDonationAmount] = useState(10)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.casesCart)

    const notify = () => {
        toast.success("تمت اضافة الحالة للسلة", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const addToCartHandler = () => {
        dispatch(addToCart({ id, title, img, donationAmount }))
        notify()
    }
    return (
        <>
            <div className="CaseCard mb-5" data-aos="fade-up" data-aos-duration="1000">
                <img src={`/images/${img}.png`} alt="" className="img-fluid w-100 mb-3" />
                <div className="content p-2">
                    <div className="title text-center mb-3 "> {title} </div>
                    <div className="description text-center mb-3"> {description} </div>
                    <div className="money_section mb-3">
                        <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "20%"}}></div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className='m-0'> EGP 50.000 </p>
                                <p className='m-0 fw-bold'> الهدف </p>
                            </div>
                            <div>
                                <p className='m-0'> EGP 25.000</p>
                                <p className='m-0 fw-bold'> المتبقى </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="time-left d-flex justify-content-between mb-3 pb-2 border-bottom">
                        <div className="days text-dark fw-bold">12 <br />يوم</div>
                        <div className="hours text-dark fw-bold">5<br />ساعات  </div>
                        <div className="minutes text-dark fw-bold">53 <br />دقيقة</div>
                        <div className="seconds text-dark fw-bold">10 <br />ثوانى</div>
                    </div>
                    <div className="donation d-flex justify-content-between">
                        <button className='donate-button btn text-white'>تبرع الان</button>
                        <button className='addToCart-button btn ' onClick={addToCartHandler}><i className="bi bi-cart-plus " style={{ color: "#91683A"}}></i> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseCard
