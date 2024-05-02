import styles from "./HomeProgress.module.css";
function HomeProgress({ value, isPositive }) {
  let arrowPath = "/images/arrowsmalldown.svg";
  if (isPositive) {
    arrowPath = "/images/arrowsmallup.svg";
  }
  const classValue = isPositive ? "positive" : "negative";
  return (
    <div className={`${styles[classValue]} ${styles.progress}`}>
      <span>{value}%</span>
      <img src={arrowPath} alt="" />
    </div>
  );
}

export default HomeProgress;
