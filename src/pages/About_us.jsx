/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/About_us.css"
import CountUp from 'react-countup';


function About_us() {
    return (
        <div className='about-us-page py-5'>
            <div className="intro-sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='bg-dark text-white text-center fs-2 h-100'> هنا صورة </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h2 className="sec-title fw-bold mb-5"> التعريف بمؤسسة سبل  </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus totam possimus illum distinctio esse enim accusamus omnis voluptas! Similique rerum deleniti optio quas facilis ullam minima error cumque eveniet sequi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistics-sec py-5">
                <h1 className='sec-title text-center mx-auto mb-5 fw-bold' style={{ width: "230px" }}> احصائيات الموقع </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="content">
                                <h2> عدد الجمعيات  </h2>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={4}
                                        enableScrollSpy={true}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="content">
                                <h2> اجمالى الحالات  </h2>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={4}
                                        enableScrollSpy={true}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="content">
                                <h2> عدد المتبرعين  </h2>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={4}
                                        enableScrollSpy={true}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="content">
                                <h2> اجمالى التبرعات  </h2>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={4}
                                        enableScrollSpy={true}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-sec py-5">
                <h1 className='sec-title text-center mx-auto mb-5 fw-bold' style={{ width: "270px" }}> خدمات الموقع </h1>
                <div className="container">
                    <div className="row">
                        <div className="service-card col-12 col-md-6 col-lg-4 mb-4">
                            <div className="content">
                                <div className='bg-dark text-white text-center fs-2' style={{ height: "150px"}}> هنا صورة </div>
                                <h2> service heading </h2>
                                <p> service content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium quasi, sed fuga repellendus a hic at deserunt veniam, exercitationem veritatis odio voluptates ipsa pariatur recusandae dolore mollitia assumenda voluptatum.</p>
                                <button className="btn "> المزيد </button>
                            </div>
                        </div>
                        <div className="service-card col-12 col-md-6 col-lg-4 mb-4">
                            <div className="content">
                                <div className='bg-dark text-white text-center fs-2' style={{ height: "150px"}}> هنا صورة </div>
                                <h2> service heading </h2>
                                <p> service content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium quasi, sed fuga repellendus a hic at deserunt veniam, exercitationem veritatis odio voluptates ipsa pariatur recusandae dolore mollitia assumenda voluptatum.</p>
                                <button className="btn "> المزيد </button>
                            </div>
                        </div>
                        <div className="service-card col-12 col-md-6 col-lg-4 mb-4">
                            <div className="content">
                                <div className='bg-dark text-white text-center fs-2' style={{ height: "150px"}}> هنا صورة </div>
                                <h2> service heading </h2>
                                <p> service content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium quasi, sed fuga repellendus a hic at deserunt veniam, exercitationem veritatis odio voluptates ipsa pariatur recusandae dolore mollitia assumenda voluptatum.</p>
                                <button className="btn "> المزيد </button>
                            </div>
                        </div>
                        <div className="service-card col-12 col-md-6 col-lg-4 mb-4">
                            <div className="content">
                                <div className='bg-dark text-white text-center fs-2' style={{ height: "150px"}}> هنا صورة </div>
                                <h2> service heading </h2>
                                <p> service content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium quasi, sed fuga repellendus a hic at deserunt veniam, exercitationem veritatis odio voluptates ipsa pariatur recusandae dolore mollitia assumenda voluptatum.</p>
                                <button className="btn "> المزيد </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_us
