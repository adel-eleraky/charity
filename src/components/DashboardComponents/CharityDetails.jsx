import { useDispatch, useSelector } from "react-redux";
import styles from "./CharityDetails.module.css";
import CharityInfo from "./CharityInfo";
import { getCharityById } from "../../rtk/features/user/adminSlice";
import { useEffect } from "react";
import { getFormattedDate } from "../../utils/helpers";
import Loader from "../common/Loader";
function CharityDetails({ charityId, onClosePopup }) {
  // load data here and also add the loader
  const { currentCharity, getCharityByIdStatus } = useSelector(
    (store) => store.admin
  );
  console.log("charity", currentCharity);
  const dispatch = useDispatch();
  useEffect(
    function () {
      if (getCharityByIdStatus === "idle") dispatch(getCharityById(charityId));
    },
    [charityId, dispatch, getCharityByIdStatus]
  );
  if (getCharityByIdStatus !== "finished") return <Loader type="mosaic" />;
  const bankAcountArr = currentCharity.paymentMethods?.bankAccount || [];
  let accNum = "غير مسجل";
  bankAcountArr.forEach((e) => {
    if (e.enable) accNum = e.accNumber;
  });
  return (
    <div className={styles.popup}>
      <button className="close" onClick={onClosePopup}>
        &times;
      </button>
      <div className={styles.heading}></div>
      <div className={styles.info}>
        <div className={styles.head}>
          <div>
            <h3>{currentCharity.name}</h3>
            <span>
              {currentCharity.contactInfo?.phone || "غير مسجل"}
              <img src="/images/phone-icon.svg" alt="" />
            </span>
          </div>
          <p>{currentCharity.description}</p>
        </div>
        <div className={styles.details}>
          <div className={styles.right}>
            <div className={styles.line}></div>
            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="الايميل المتسجل بيه الجمعية"
            >
              {currentCharity.email}
            </CharityInfo>

            <CharityInfo imagePath="/images/charity-mail.svg" title="العنوان">
              {currentCharity.charityLocation[0]?.governorate || "cairo"}
            </CharityInfo>

            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="تاريح الانشاء"
            >
              {getFormattedDate(currentCharity.charityInfo.establishedDate)}
            </CharityInfo>

            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="عدد الحالات التي تم رفعها"
            >
              {currentCharity.numberOfCases}
            </CharityInfo>

            {/*
            //todo: add it in the future 
            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="عدد الحالات المكتملة"
            >
              1500
            </CharityInfo> */}

            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="عدد المتبرعين"
            >
              {currentCharity.totalNumberOfDonors}
            </CharityInfo>

            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="فودافون كاش"
            >
              {currentCharity.paymentMethods?.vodafoneCash[0] ||
                currentCharity.contactInfo?.phone ||
                "غير مسجل"}
            </CharityInfo>
          </div>
          <div className={styles.left}>
            <div className={styles.line}></div>
            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="الايميل الجمعية للتواصل"
            >
              {currentCharity.contactInfo?.email || currentCharity.email}
            </CharityInfo>

            <CharityInfo imagePath="/images/charity-mail.svg" title="العملة">
              {currentCharity.currency[0] || "EGP"}
            </CharityInfo>

            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="تاريح تسجيل الجمعية علي الموقع"
            >
              {getFormattedDate(currentCharity.createdAt)}
            </CharityInfo>

            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="المبلغ الذي تم جمعة"
            >
              {currentCharity.totalDonationsIncome}
            </CharityInfo>
            {/* //! there is no api */}
            {/* <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="عدد الحالات الغير مكتملة"
            >
              1500
            </CharityInfo> */}

            <CharityInfo imagePath="/images/charity-mail.svg" title="رقم فوري">
              {currentCharity.paymentMethods?.fawry[0] || "غير مسجل"}
            </CharityInfo>

            <CharityInfo
              imagePath="/images/charity-mail.svg"
              title="الحساب البنكي"
            >
              {accNum}
            </CharityInfo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharityDetails;
