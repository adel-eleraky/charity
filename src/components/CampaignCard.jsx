/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/CampaignCard.css"


function CampaignCard() {
    return (
        <>
            <div className="CampaignCard mb-5" data-aos="fade-up">
                <img src="images/campaign-image.png" alt="" className="img-fluid w-100 mb-3" />
                <div className="content p-2">
                    <div className="title text-center mb-3 ">غذاء للجميع</div>
                    <div className="description mb-3">وفرلهم احتيجاتهم الاساسية من الغذاء</div>
                    <div className="money_section mb-3">
                        <div className="cost fw-bold text-danger">التكلفة 1000 جنيه</div>
                        <strike className="payment_made fw-light">تم سداد 600 جنيه</strike>
                        <div className="money_remaining">متبقى 400 جنيه</div>
                    </div>
                    <div className="time-left d-flex justify-content-between mb-3">
                        <div className="days bg-light text-dark fw-bold">12 <br/>يوم</div>
                        <div className="hours bg-light text-dark fw-bold">5<br/>ساعات  </div>
                        <div className="minutes bg-light text-dark fw-bold">53 <br/>دقيقة</div>
                        <div className="seconds bg-light text-dark fw-bold">10 <br/>ثوانى</div>
                    </div>
                    <div className="donation d-flex justify-content-between">
                        <button className='donate-button btn  rounded-pill'>تبرع الان</button>
                        <button className='addToCart-button btn rounded-pill'><i className="bi bi-cart-plus ms-2"></i>اضف للسلة</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampaignCard
