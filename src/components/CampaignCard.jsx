/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./css/CampaignCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../rtk/features/CartSlice'
import { toast } from 'react-toastify';


function CampaignCard({ id, title, image, description, cost, paymentMade, moneyRemaining, timeRemaining }) {

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
        dispatch(addToCart({ id, title, image, donationAmount }))
        notify()
    }
    return (
        <>
            <div className="CampaignCard mb-5" data-aos="fade-up" data-aos-duration="1000">
                <img src={image} alt="" className="img-fluid w-100 mb-3" />
                <div className="content p-2">
                    <div className="title text-center mb-3 "> {title} </div>
                    <div className="description mb-3"> {description} </div>
                    <div className="money_section mb-3">
                        <div className="cost fw-bold text-danger">التكلفة {cost} جنيه</div>
                        <strike className="payment_made fw-light">تم سداد {paymentMade} جنيه</strike>
                        <div className="money_remaining">متبقى {moneyRemaining} جنيه</div>
                    </div>
                    <div className="time-left d-flex justify-content-between mb-3 pb-2 border-bottom">
                        <div className="days bg-light text-dark fw-bold">12 <br />يوم</div>
                        <div className="hours bg-light text-dark fw-bold">5<br />ساعات  </div>
                        <div className="minutes bg-light text-dark fw-bold">53 <br />دقيقة</div>
                        <div className="seconds bg-light text-dark fw-bold">10 <br />ثوانى</div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <label htmlFor="email" className="form-label m-0 fs-4 fw-bold" >
                            تبرع بقيمة
                        </label>
                        <div className="input-group has-validation w-25 mx-3 flex-grow-1">
                            <span
                                className="input-group-text  rounded-0 rounded-end"
                                id="basic-addon1"
                            >
                                <i className="fa-solid fa-sack-dollar"></i>
                            </span>
                            <input
                                type="number"
                                id="donation-amount"
                                name="donation-amount"
                                className="form-control rounded-0 rounded-start"
                                placeholder="ادخل قيمة التبرع"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                            />
                        </div>
                        <span className='fs-4 fw-bold'> جنية </span>
                    </div>
                    <div className="donation d-flex justify-content-between">
                        <button className='donate-button btn  rounded-pill'>تبرع الان</button>
                        <button className='addToCart-button btn rounded-pill' onClick={addToCartHandler}><i className="bi bi-cart-plus ms-2"></i>اضف للسلة</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampaignCard
