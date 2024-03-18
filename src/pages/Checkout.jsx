import React from 'react'
import "./css/Checkout.css"
function Checkout() {
    return (
        <div className="Checkout-page py-4">
            <div className="container">
                <h3 className='text-center text-white'>صفحة الدفع</h3>
                <div className="row">
                    <div className="col-12 col-md-8">
                        {/* inputs here */}
                        <div> اسم المتبرع  </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput"> username </label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        {/* payment method here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
