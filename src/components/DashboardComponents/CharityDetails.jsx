import styles from "./CharityDetails.module.css";
function CharityDetails() {
  return (
    <div className={styles.popup}>
      <div className={styles.heading}></div>
      <div className={styles.info}>
        <div className={styles.head}>
          <div>
            <h3>اسم الجمعية</h3>
            <span>
              01030931139
              <img src="/images/phone-icon.svg" alt="" />
            </span>
          </div>
          <p>
            هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس النشر. الشكل وليس
            النشرهو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس النشر. الشكل
          </p>
        </div>
        <div className={styles.details}>
          <div className={styles.right}></div>
          <div className={styles.left}></div>
        </div>
      </div>
    </div>
  );
}

export default CharityDetails;
