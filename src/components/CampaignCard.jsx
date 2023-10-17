/* eslint-disable no-unused-vars */
import React from 'react'

function CampaignCard() {
    return (
        <>
            <div className="CampaignCard mb-4">
                <img src="images/campaign-image.png" alt="" className="img-fluid w-100" />
                <div className="content">
                    <div className="title">غذاء للجميع</div>
                    <div className="description">وفرلهم احتيجاتهم الاساسية من الغذاء</div>
                    <div className="money">التكلفة  1000 جنيه</div>
                    <div className="time-left">
                        <div className="days">12 يوم</div>
                        <div className="hours">5 ساعات</div>
                        <div className="minutes">53 دقيقة</div>
                        <div className="seconds">10 ثوانى</div>
                    </div>
                    <div className="donation">
                        <button className='btn btn-primary'>تبرع الان</button>
                        <button className='btn btn-primary'>اضف للسلة</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampaignCard
