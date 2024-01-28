/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import "./css/Home.css"
import CampaignCard from '../components/CampaignCard'
import CategoryCard from '../components/CategoryCard'
import AssociationCard from '../components/AssociationCard'

function Home() {
    return (
        <>
            <Header />
            <div className="Campaigns py-5">
                <div className="container">
                    <h1 className='text-center mb-5' data-aos="fade-up" data-aos-duration="1000">حملات</h1>
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
            <div className="donation_opportunities py-5">
                <div className="container">
                    <h1 className='text-center mb-5'>فرص التبرع</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <CategoryCard />
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
        </>
    )
}

export default Home
