import styles from "./AdminHomeBox.module.css";
function AdminHomeBox({ title, imagePath, value, isBig, children }) {
  return (
    <div className={`${styles.box} ${isBig ? styles.big : ""}`}>
      <div className={styles.title}>
        <span>
          <img src={imagePath} alt="" />
        </span>
        <span>{title}</span>
      </div>
      <div className={styles.stats}>
        <span className={styles["opt-num"]}>{value}</span>
        {children}
      </div>
    </div>
  );
}

export default AdminHomeBox;
