/* eslint-disable no-unused-vars */
import React from "react";
import ShowDate from "../common/ShowDate";
import HomeBox from "../common/HomeBox";
import HomeProgress from "../common/HomeProgress";
import { Link, useOutletContext } from "react-router-dom";
import styles from "./CharityHomeLayout.module.css";
//todo: show the uploaded docs. to the user
function CharityHomeLayout() {
  const [isCharityApproved, isPending] = useOutletContext();
  console.log(isCharityApproved);
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <ShowDate />
        </div>
      </div>
      {isCharityApproved ? (
        // move to another component better
        <div className={styles.stats}>
          <div className="inner-container">
            <div className={styles.small}>
              <div className={styles.row}>
                <HomeBox
                  title="عدد المتبرعين"
                  imagePath="/images/admin-users.svg"
                  value="222"
                >
                  <HomeProgress value="10" isPositive={true} />
                </HomeBox>
                <HomeBox
                  title="عدد التبرعات"
                  imagePath="/images/admin-users.svg"
                  value="222"
                >
                  <HomeProgress value="10" isPositive={true} />
                </HomeBox>
              </div>
              <div className={styles.row}>
                <HomeBox
                  title="عدد الحملات"
                  imagePath="/images/admin-users.svg"
                  value="222"
                >
                  <HomeProgress value="10" isPositive={true} />
                </HomeBox>
                <HomeBox
                  title="اجمالي التبرعات"
                  imagePath="/images/admin-users.svg"
                  value="222"
                >
                  <HomeProgress value="10" isPositive={true} />
                </HomeBox>
              </div>
            </div>
            <div className={styles.big}>
              <HomeBox
                isBig={true}
                title="عدد الحالات"
                imagePath="/images/admin-charity.svg"
                value="222"
              >
                <HomeProgress value="10" isPositive={true} />
              </HomeBox>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles["upload-warning"]}>
          <div className="inner-container">
            {!isPending && (
              <>
                <div className="message">ارفع الوثائق يلا</div>
                <Link to="/charity-dashboard/upload-docs">
                  ارفع الوثائق من هنا
                  <i className="fa-solid fa-chevron-left fa-xs fa-beat"></i>
                </Link>
              </>
            )}
            {isPending && (
              <>
                <div className="message">بانتظار تأكيد الوثائق</div>
                <Link to="/charity-dashboard/upload-docs">
                  لتعديل الوثائق
                  <i className="fa-solid fa-chevron-left fa-xs fa-beat"></i>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CharityHomeLayout;
