import React from 'react'
import "./css/Cart.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../rtk/features/CartSlice'
import { toast } from 'react-toastify';

function Cart() {

    const cart = useSelector(state => state.casesCart)
    const dispatch = useDispatch()

    const totalDonationAmount = cart && cart.reduce((total, item) => total + item.donationAmount, 0)

    const notify = () => {
        toast.error(" تمت ازالة الحالة من السلة ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart({ id }))
        notify()
    }
    const cartItems = cart && cart.map((item, index) => {

        const { id, title, image, donationAmount } = item

        return (
            <tr key={id}>
                <td className='d-flex align-items-center'>
                    <i className="fa-solid fa-trash delete-btn fs-6" onClick={() => removeFromCartHandler(id)}></i>
                    <img src={image} alt="" className="img-fluid product-img d-block mx-3" />
                    <Link to={`/case/${id}`} className='text-dark'><p>{title?.substring(0, 20) + "..."}</p></Link>
                </td>
                <td><input type="number" name={`${title}-donationAmount`} value={donationAmount} onChange={e => console.log(e.target.value)} /> جنيه </td>
            </tr>
        )
    })
    console.log(cart)
    console.log(cartItems)

    return (
        <div className="cart-page py-4">
            {cartItems.length === 0 ?
                <div className="empty-cart py-3">
                    <h3 className='text-center text-danger fw-bold mb-4' > السلة فارغة  </h3>
                    <Link to="/cases" className='text-white fs-4 d-block text-center'>الرجوع لتصفح الحالات <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
                :
                <div className="container">
                    <h2 className="mb-3 text-center  position-relative fw-bold mx-auto "> السلة </h2>
                    <div className="row">
                        <div className='col-12 col-lg-7 table-container'>
                            <table className="table text-center ">
                                <thead>
                                    <tr>
                                        <th scope="col" className='w-50'> الحالة </th>
                                        <th scope="col"> قيمة التبرع </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-12 col-lg-5 m-auto">
                            <div className='cart-total text-center '>
                                <h3 className='mb-3 text-center fw-bold '> اجمالى قيمة التبرع : {totalDonationAmount} جنيه </h3>
                                <Link to="/checkout" className='btn checkout-btn d-block m-auto py-2 w-50 fw-bold fs-5 text-white'> الذهاب الى صفحة الدفع <i className='bi bi-arrow-left'></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
