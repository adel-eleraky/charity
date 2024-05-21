import { useEffect } from "react";
import styles from "./CaseDetails.module.css";
import CharityInfo from "./CharityInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  finishGetCaseByIdStatus,
  getCaseById,
  resetGetCaseByIdStatus,
} from "../../rtk/features/charity/charityCaseSlice";
import Loader from "../common/Loader";
function CaseDetails({ caseId, close }) {
  const dispatch = useDispatch();
  const { currentCase, getCaseByIdStatus } = useSelector(
    (store) => store.charityCase
  );

  useEffect(
    function () {
      dispatch(getCaseById(caseId));
      // if (getCaseByIdStatus === "idle") {
      //   dispatch(getCaseById(caseId));
      // }
    },
    [caseId, dispatch]
  );

  return (
    <div className={styles.popup}>
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className={styles.heading}></div>
      {(getCaseByIdStatus === "loading" || getCaseByIdStatus === "idle") && (
        <Loader />
      )}
      {getCaseByIdStatus === "finished" && (
        <div className={styles.info}>
          <div className={styles.head}>
            <div>
              <h3>
                {currentCase.title}
                <img
                  src="https://res.cloudinary.com/ddvetozyq/image/upload/v1715928273/charityDocs/bankDocs-abdo--6643a88f94d1dfa828c97f78--0--f4ad0205-00f6-4cb1-a3d1-3e0e6429ff8f.jpg"
                  alt="image"
                />
              </h3>
              <span>
                01112120215
                <img src="/images/phone-icon.svg" alt="" />
              </span>
            </div>
            <p>{currentCase.description}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.right}>
              <div className={styles.line}></div>
              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="الايميل المتسجل بيه الجمعية"
              >
                abdorabea1@gmail.com
              </CharityInfo>

              <CharityInfo imagePath="/images/charity-mail.svg" title="العنوان">
                هو ببساطة نص شكلي
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="تاريح الانشاء"
              >
                هو ببساطة نص شكلي
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="عدد الحالات التي تم رفعها"
              >
                1500
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="عدد الحالات المكتملة"
              >
                1500
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="عدد المتبرعين"
              >
                4000
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="فودافون كاش"
              >
                010254162
              </CharityInfo>
            </div>
            <div className={styles.left}>
              <div className={styles.line}></div>
              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="الايميل الجمعية للتواصل"
              >
                abdorabea1@gmail.com
              </CharityInfo>

              <CharityInfo imagePath="/images/charity-mail.svg" title="العملة">
                هو ببساطة نص شكلي
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="تاريح تسجيل الجمعية علي الموقع"
              >
                هو ببساطة نص شكلي
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="المبلغ الذي تم جمعة"
              >
                1500
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="عدد الحالات الغير مكتملة"
              >
                1500
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="رقم فوري"
              >
                4000
              </CharityInfo>

              <CharityInfo
                imagePath="/images/charity-mail.svg"
                title="الحساب البنكي"
              >
                010254162
              </CharityInfo>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseDetails;
