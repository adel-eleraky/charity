/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import "./css/Home.css"
import CampaignCard from '../components/CampaignCard'

function Home() {
    return (
        <>
            <Header />
            <div className="Campaigns py-5">
                <div className="container">
                    <h3 className='text-center mb-5'>حملات</h3>
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
        </>
    )
}

export default Home
