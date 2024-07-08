/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from '../components/Header'
import "./css/Home.css"
import { Link } from 'react-router-dom'
import CampaignCard from '../components/CampaignCard'
import CategoryCard from '../components/CategoryCard'
import CaseCard from '../components/CaseCard'
import AssociationCard from '../components/AssociationCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux'
import { getCases } from '../rtk/features/CasesSlice'

function Home() {


    const dispatch = useDispatch()
    const { cases } = useSelector(state => state.cases)

    // dispatch(getCases())
    console.log(cases)
    useEffect(() => {
        dispatch(getCases())
    }, [])

    return (
        <div className='home-page'>
            <Header />
            <div className="Campaigns py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 mb-5 mb-lg-0">
                            <p className="sec-title mb-3 mt-5"> الحملات </p>
                            <p className="content"> هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان  </p>
                            <button className="btn more-btn"> رؤية المزيد <i className='bi bi-arrow-left'></i>  </button>
                        </div>
                        <div className="col-12 col-lg-7 d-flex justify-content-between">
                            <CampaignCard
                                img={"campaign-img"}
                                title={"هو ببساطة نص شكلي "}
                                description={"هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم  "}
                            />
                            <CampaignCard
                                img={"campaign-img"}
                                title={"هو ببساطة نص شكلي "}
                                description={"هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم  "}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="donation_opportunities py-5 position-relative">
                <img src="/images/donation-opportunity-bg-main.png" alt="" className="img-fluid position-absolute w-100 h-100 top-0" style={{ zIndex: -3 }} />
                <img src="/images/donation-opportunity-bg-1.png" alt="" className="img-fluid position-absolute bottom-0" />
                <img src="/images/donation-opportunity-bg-2.png" alt="" className="img-fluid position-absolute bottom-0 start-0" />
                <div className="container">
                    <p className='text-center sec-title mx-auto'>فرص التبرع</p>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="zakat.png" title="زكاة" description=" { وَالْمُقِيمِينَ الصَّلَاةَ ۚ وَالْمُؤْتُونَ الزَّكَاةَ وَالْمُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ أُولَٰئِكَ سَنُؤْتِيهِمْ أَجْرًا عَظِيمًا } [النساء:162]" borderStyle="top" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="sadakat.png" title="صدقات" description="{ إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ } [التوبة:60]" borderStyle="bottom" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="kafarat.png" title="كفارات" description="{ وَالْجُرُوحَ قِصَاصٌ فَمَن تَصَدَّقَ بِهِ فَهُوَ كَفَّارَةٌ لَّهُ ۚ وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَـٰئِكَ هُمُ الظَّالِمُونَ } [المائدة:45] " borderStyle="top" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="blood-donation.png" title="تبرع بالدم" description="{ وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا } [المائدة:32]" borderStyle="bottom" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard img="used-donation.png" title="التبرعات العينية" description="﴿ وَيُؤثِرونَ عَلى أَنفُسِهِم وَلَو كانَ بِهِم خَصاصَةٌ وَمَن يوقَ شُحَّ نَفسِهِ فَأُولئِكَ هُمُ المُفلِحونَ﴾" borderStyle="top" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cases py-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className='mb-0 sec-title '>حالات التبرع </p>
                        <button className="btn more-btn"> رؤية المزيد <i className='bi bi-arrow-left'></i>  </button>
                    </div>
                    <>
                        <Swiper
                            spaceBetween={20}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1
                                },
                                600: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                },
                                1200: {
                                    slidesPerView: 4
                                }
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <CaseCard
                                    img={"case-img"}
                                    title={" تبرع بالملابس "}
                                    description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CaseCard
                                    img={"case-img"}
                                    title={" تبرع بالملابس "}
                                    description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CaseCard
                                    img={"case-img"}
                                    title={" تبرع بالملابس "}
                                    description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CaseCard
                                    img={"case-img"}
                                    title={" تبرع بالملابس "}
                                    description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CaseCard
                                    img={"case-img"}
                                    title={" تبرع بالملابس "}
                                    description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CaseCard
                                    img={"case-img"}
                                    title={" تبرع بالملابس "}
                                    description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
            <div className='container py-5'>
                <div className="row justify-content-evenly">
                    <div className="col-12 col-lg-4 report-case text-center pt-4 mb-lg-0 mb-5">
                        <p className='fs-3 fw-normal'> الابلاغ عن حالة مستحقة </p>
                        <Link to="report-case" className="btn report-btn mb-3 d-block mx-auto"> ابلاغ الان <i className="fa-solid fa-arrow-left me-2"></i> </Link>
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
