import styles from "./AdminHomeBox.module.css";
function AdminHomeBox({ title, imagePath, value, children }) {
  return (
    <div className={`${styles.box}`}>
      <div className={styles.title}>
        <img src={imagePath} alt="" />
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
