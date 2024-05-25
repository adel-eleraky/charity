import React from 'react';
import "./css/Checkout.css";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

const validateByLuhn = (number) => {
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i), 10);
    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};

const getCardType = (number) => {
  const cardTypes = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
  };
  return Object.keys(cardTypes).find((type) => cardTypes[type].test(number)) || 'unknown';
};



function Checkout() {
  const cart = useSelector(state => state.casesCart);

  const initialValues = {
    name: '',
    email: '',
    address: '',
    phone: '',
    number: '',
    expiry: '',
    cvc: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("ادخل اسمك"),
    email: yup.string().email("ادخل بريد الكترونى صحيح").required("ادخل بريدك الالكترونى"),
    address: yup.string().required("ادخل عنوانك"),
    phone: yup.string().matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").required("ادخل رقمك"),
    number: yup.string()
      .required('رقم البطاقة مطلوب')
      .test('test-card-number', 'رقم البطاقة غير صالح', (value) => validateByLuhn(value)),
    expiry: yup.date()
      .required('تاريخ الانتهاء مطلوب')
      .min(new Date(), 'تاريخ الانتهاء غير ساري'),
    cvc: yup.string()
      .required('CVC مطلوب')
      .matches(/^[0-9]{3,4}$/, 'CVC يجب أن يكون 3 أو 4 أرقام'),
  });

  const submitHandler = (values) => {
    console.log('Form data', values);
  };

  const totalDonation = cart.reduce((sum, item) => sum + item.donationAmount, 0);

  return (
    <div className='Checkout-page py-5'>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-lg-6 Checkout-form d-flex justify-content-center align-items-center">
            <div className="content rounded bg-white p-3 w-100">
              <h3 className='text-center mb-4 position-relative fw-bold mx-auto' style={{ width: "350px" }}>صفحة الدفع</h3>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
              >
                {({ errors, touched, values }) => {
                  const cardType = getCardType(values.number);
                  return (
                    <Form method='post' className="needs-validation" noValidate>
                      <div className="d-flex justify-content-evenly flex-wrap">
                        <div className='input'>
                          <label htmlFor="name" className="form-label">الاسم</label>
                          <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-end" id="basic-addon1">
                              <i className="fa-regular fa-user"></i>
                            </span>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className={`form-control ${touched.name && errors.name && 'is-invalid'} rounded-0 rounded-start`}
                              placeholder="اكتب اسمك"
                            />
                            <ErrorMessage name="name" component="div" className="invalid-feedback d-block fs-6" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-evenly flex-wrap">
                        <div className='input'>
                          <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                          <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-end" id="basic-addon1">
                              <i className="fa-regular fa-envelope"></i>
                            </span>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className={`form-control ${touched.email && errors.email && 'is-invalid'} rounded-0 rounded-start`}
                              placeholder="اكتب بريدك الالكترونى"
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-evenly flex-wrap">
                        <div className='input'>
                          <label htmlFor="address" className="form-label">العنوان</label>
                          <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-end" id="basic-addon1">
                              <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <Field
                              type="text"
                              id="address"
                              name="address"
                              className={`form-control ${touched.address && errors.address && 'is-invalid'} rounded-0 rounded-start`}
                              placeholder="اكتب عنوانك"
                            />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-evenly flex-wrap">
                        <div className='input'>
                          <label htmlFor="phone" className="form-label">رقم الهاتف</label>
                          <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-end" id="basic-addon1">
                              <i className="fa-solid fa-phone"></i>
                            </span>
                            <Field
                              type="text"
                              id="phone"
                              name="phone"
                              className={`form-control ${touched.phone && errors.phone && 'is-invalid'} rounded-0 rounded-start`}
                              placeholder="اكتب رقمك"
                            />
                            <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-evenly flex-wrap">
                        <div className='input'>
                          <label htmlFor="number" className="form-label">رقم البطاقة</label>
                          <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-end" id="basic-addon1">
                              <i className="fa-regular fa-credit-card"></i>
                            </span>
                            <Field
                              type="text"
                              id="number"
                              name="number"
                              className={`form-control ${touched.number && errors.number && 'is-invalid'} rounded-0 rounded-start`}
                              placeholder="اكتب رقم البطاقة"
                            />
                            <ErrorMessage name="number" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-evenly flex-wrap">
                        <div className='input'>
                          <label htmlFor="expiry" className="form-label">تاريخ الانتهاء (MM/YYYY)</label>
                          <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-end" id="basic-addon1">
                              <i className="fa-regular fa-calendar"></i>
                            </span>
                            <Field
                              type="month"
                              id="expiry"
                              name="expiry"
                              className={`form-control ${touched.expiry && errors.expiry && 'is-invalid'} rounded-0 rounded-start`}
                              placeholder="MM/YYYY"
                            />
                            <ErrorMessage name="expiry" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-evenly flex-wrap">
                        <div className='input'>
                          <label htmlFor="cvc" className="form-label">CVC</label>
                          <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-end" id="basic-addon1">
                              <i className="fa-solid fa-lock"></i>
                            </span>
                            <Field
                              type="text"
                              id="cvc"
                              name="cvc"
                              className={`form-control ${touched.cvc && errors.cvc && 'is-invalid'} rounded-0 rounded-start`}
                              placeholder="CVC"
                            />
                            <ErrorMessage name="cvc" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="submit-btn btn d-block w-50 py-2 mt-4 mx-auto fs-5 text-white">
                        تأكيد الطلب <i className='bi bi-arrow-left'></i>
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="col-12 col-lg-6 Checkout-details mb-3 mb-lg-0">
            <h3 className="text-center mb-4 position-relative fw-bold mx-auto">تفاصيل السلة</h3>
            {cart.length === 0 ? (
              <p className="text-center">لا توجد عناصر في السلة.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">الحالة</th>
                    <th scope="col">قيمة التبرع</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.donationAmount} جنيه</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="col">المجموع</th>
                    <th scope="col">{totalDonation}جنيه</th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;


