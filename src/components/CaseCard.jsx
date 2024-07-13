/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./css/CaseCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../rtk/features/CartSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { createTransaction } from '../rtk/features/TransactionSlice';


function CaseCard({ caseId, title, img, description, targetDonationAmount, currentDonationAmount, charityImage, charityName, charityId }) {

    const [donationAmount, setDonationAmount] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userProfile } = useSelector((store) => store.userProfile);
    const { transactionStatus, transactionData } = useSelector((store) => store.transaction)

    const caseProgress = (currentDonationAmount / targetDonationAmount) * 100

    const handleDonation = () => {
        console.log(userProfile)
        if (!userProfile || !userProfile.emailVerification.isVerified) {
            toast.error("يجب عليك تسجيل الدخول اولا");
            setTimeout(() => {

                return navigate("/account/login");
            }, 4000);
        } else {
            if (donationAmount === 0) {
                toast.error("يجب عليك تحديد المبلغ المطلوب للتبرع");
            } else {
                dispatch(createTransaction({ caseId, charityId, caseTitle: title, amount: +donationAmount, mainTypePayment: "onlineCard" }))
            }
            // console.log({caseId ,charityId , caseTitle: title ,amount: donationAmount})
        }
    }

    if(transactionStatus === "finished" && transactionData.url){
        console.log("paymentUrl: ", transactionData.url)
        window.open(transactionData.url , "_blank")
    }

    return (
        <>
            <div className="CaseCard mb-5" data-aos="fade-up" data-aos-duration="1000">
                <img src={`https://res.cloudinary.com/ddvetozyq/image/upload/v1720813891/caseCoverImages/${img}`} alt="" className="img-fluid w-100 mb-3" />
                <div className="content p-2">
                    <div className="title text-center mb-3 fw-bold"> {title} </div>
                    <div className="description text-center mb-3"> {description} </div>
                    <div className="money_section mb-3">
                        <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: `${caseProgress}%` }}></div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className='m-0'> EGP {targetDonationAmount} </p>
                                <p className='m-0 fw-bold'> الهدف </p>
                            </div>
                            <div>
                                <p className='m-0'> EGP {targetDonationAmount - currentDonationAmount}</p>
                                <p className='m-0 fw-bold'> المتبقى </p>
                            </div>
                        </div>

                    </div>
                    {/* <div className="time-left d-flex justify-content-between mb-3 pb-2 border-bottom">
                        <div className="days text-dark fw-bold">12 <br />يوم</div>
                        <div className="hours text-dark fw-bold">5<br />ساعات  </div>
                        <div className="minutes text-dark fw-bold">53 <br />دقيقة</div>
                        <div className="seconds text-dark fw-bold">10 <br />ثوانى</div>
                    </div> */}
                    <div className="donation">
                        <div className="input-group mb-3">
                            <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"> <i className="fa-solid fa-money-bill-1-wave"></i> </span>
                            <input type="number" onChange={(e) => setDonationAmount(e.target.value)} className="form-control rounded-0 rounded-start" placeholder="ادخل قيمة التبرع  " />
                        </div>
                        <button className='donate-button btn text-white w-100' onClick={handleDonation}>تبرع الان</button>
                        {/* <button className='addToCart-button btn ' onClick={addToCartHandler}><i className="bi bi-cart-plus " style={{ color: "#91683A"}}></i> </button> */}
                    </div>
                    <div className="charity-sec d-flex justify-content-between align-items-center mt-3">
                        <img src={`https://res.cloudinary.com/ddvetozyq/image/upload/v1720813891/charityLogos/${charityImage}`} alt="" className="img-fluid d-block charity-img" />
                        <p className="charity-name mb-0 ms-auto me-2 fw-bold">{charityName}</p>
                        <button className='btn chat-btn'>  تحدث الان  </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseCard
