/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Header.css"

function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row position-relative">
                        <div className="col-12 col-md-6 pe-0 img-column" data-aos="fade-left">
                            <img src="images/header-img.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 verse-column" data-aos="fade-right">
                            <div className="content w-75 text-center mx-auto ">
                                <p>قــــــــال الله تعالى :</p>
                                <p className='verse'>
                                    مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ
                                </p>
                                <p>[البقرة:261]</p>
                                <button className='btn  px-4 rounded-pill' >تبرع الان</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
