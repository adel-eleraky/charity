/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import "./css/Home.css"
import CampaignCard from '../components/CampaignCard'
import CategoryCard from '../components/CategoryCard'
import AssociationCard from '../components/AssociationCard'

function Home() {
    return (
        <div className='home-page'>
            <Header />
            <div className="Campaigns py-5">
                <div className="container">
                    <h1 className='text-center mb-5' data-aos="fade-up" data-aos-duration="1000">حملات</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard {...{ id: 1, title: "غذاء للجميع", image: "/images/campaign-image.png", description: "وفرلهم احتيجاتهم الاساسية من الغذاء", cost: 1000, paymentMade: 600, moneyRemaining: 400, timeRemaining: 10 }} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard {...{ id: 2, title: "غذاء لسعد", image: "/images/campaign-image.png", description: "وفرلهم احتيجاتهم الاساسية من الغذاء", cost: 1000, paymentMade: 600, moneyRemaining: 400, timeRemaining: 10 }} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard {...{ id: 3, title: "غذاء لسعد برضه", image: "/images/campaign-image.png", description: "وفرلهم احتيجاتهم الاساسية من الغذاء", cost: 1000, paymentMade: 600, moneyRemaining: 400, timeRemaining: 10 }} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard {...{ id: 4, title: "غذاء لسعد كلاكيت تالت مرة", image: "/images/campaign-image.png", description: "وفرلهم احتيجاتهم الاساسية من الغذاء", cost: 1000, paymentMade: 600, moneyRemaining: 400, timeRemaining: 10 }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="donation_opportunities py-5 position-relative">
                <img src="/images/donation-opportunity-bg-main.png" alt="" className="img-fluid position-absolute w-100 h-100 top-0" style={{ zIndex: -3 }} />
                <img src="/images/donation-opportunity-bg-1.png" alt="" className="img-fluid position-absolute bottom-0" />
                <img src="/images/donation-opportunity-bg-2.png" alt="" className="img-fluid position-absolute bottom-0 start-0" />
                <div className="container">
                    <p className='text-center'>فرص التبرع</p>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="zakat.png" title="زكاة" description=" { وَالْمُقِيمِينَ الصَّلَاةَ ۚ وَالْمُؤْتُونَ الزَّكَاةَ وَالْمُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ أُولَٰئِكَ سَنُؤْتِيهِمْ أَجْرًا عَظِيمًا } [النساء:162]" borderStyle="bottom"/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="sadakat.png" title="صدقات" description="{ إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ } [التوبة:60]" borderStyle="bottom"/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="kafarat.png" title="كفارات" description="{ وَالْجُرُوحَ قِصَاصٌ فَمَن تَصَدَّقَ بِهِ فَهُوَ كَفَّارَةٌ لَّهُ ۚ وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَـٰئِكَ هُمُ الظَّالِمُونَ } [المائدة:45] " borderStyle="top" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="blood-donation.png" title="تبرع بالدم" description="{ وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا } [المائدة:32]" borderStyle="bottom"/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="used-donation.png" title="التبرعات العينية" description="﴿ وَيُؤثِرونَ عَلى أَنفُسِهِم وَلَو كانَ بِهِم خَصاصَةٌ وَمَن يوقَ شُحَّ نَفسِهِ فَأُولئِكَ هُمُ المُفلِحونَ﴾" borderStyle="top" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="urgent-cases py-5">
                <div className="container">
                    <h1 className='text-center mb-5'>حالات سريعه</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CampaignCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="associations py-5">
                <h1 className='text-center mb-5'>جمعيات </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <AssociationCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <AssociationCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <AssociationCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <AssociationCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <div className="row justify-content-evenly">
                    <div className="col-12 col-lg-4 report-case text-center pt-4 mb-lg-0 mb-5">
                        <p className='fs-3 fw-normal'> الابلاغ عن حالة مستحقة </p>
                        <button className="btn report-btn mb-3 d-block mx-auto"> ابلاغ الان <i className="fa-solid fa-arrow-left me-2"></i> </button>
                        <img src="/images/report-case.png" alt="" className="img-fluid py-2" />
                    </div>
                    <div className="col-12 col-lg-7 used p-4 d-flex justify-content-between">
                        <div className="content w-50">
                            <p className='fw-normal fs-2'> ملابس او اجهزة مستعملة </p>
                            <p style={{ lineHeight: 2 }}> هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان  </p>
                            <button className="btn donate-btn"> تبرع الان <i className="fa-solid fa-arrow-left me-2"></i> </button>
                        </div>
                        <img src="/images/used-img.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
