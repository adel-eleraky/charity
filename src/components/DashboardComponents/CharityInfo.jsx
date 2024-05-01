import styles from "./CharityInfo.module.css";
function CharityInfo({ imagePath, title, children }) {
  return (
    <div className={styles["charity-info"]}>
      <span className={styles.image}>
        <img src={imagePath} alt="" />
      </span>
      <div>
        <span className={styles.title}>{title}</span>
        <span className={styles.data}>{children}</span>
      </div>
    </div>
  );
}

export default CharityInfo;
