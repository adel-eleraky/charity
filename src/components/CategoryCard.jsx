/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/CategoryCard.css"

function CategoryCard() {
    return (
        <>
            <div className="category-card mb-5 rounded" data-aos="fade-up">
                <img src="/images/category-1.png" alt="" className="img-fluid mb-3" />
                <div className="content text-center p-3">
                    <div className="title text-center fw-bold fs-2 mb-3">صدقات</div>
                    <div className="verse mb-3">
                        (إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ)    [التوبة:60] 
                    </div>
                    <button className='donate-button btn rounded-pill d-block mx-auto px-4' > دفع صدقة </button>
                </div>
            </div>
        </>
    )
}

export default CategoryCard
