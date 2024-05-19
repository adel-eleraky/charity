import { useEffect } from "react";
import styles from "./CaseDetails.module.css";
import CharityInfo from "./CharityInfo";
import { useDispatch, useSelector } from "react-redux";
import {
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
      if (getCaseByIdStatus === "idle") {
        dispatch(getCaseById(caseId));
      }
      // return function () {
      //   getCaseByIdStatus = "idle";
      // };
    },
    [caseId, dispatch, getCaseByIdStatus]
  );

  return (
    <div className={styles.popup}>
      <button
        onClick={() => {
          close();
        }}
      >
        x
      </button>
      {/* https://res.cloudinary.com/${cloudName}/image/upload/${publicId} */}
      <img
        src="https://res.cloudinary.com/ddvetozyq/image/upload/caseCoverImagedb5adb98-a6fe-4c0b-a8cd-266204803ff0-1715959479251--subul.jpeg"
        alt="image"
      />
      <div className={styles.heading}></div>
      {(getCaseByIdStatus === "loading" || getCaseByIdStatus === "idle") && (
        <Loader />
      )}
      {getCaseByIdStatus === "finished" && (
        <div className={styles.info}>
          <div className={styles.head}>
            <div>
              <h3>{currentCase.title}</h3>
              <span>
                01112120215
                <img src="/images/phone-icon.svg" alt="" />
              </span>
            </div>
            <p>
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس النشر. الشكل وليس
              النشرهو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس النشر. الشكل
            </p>
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
