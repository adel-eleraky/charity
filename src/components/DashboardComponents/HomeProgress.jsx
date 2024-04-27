import styles from "./HomeProgress.module.css";
function HomeProgress({ value, status }) {
  let arrowPath = "/images/arrowsmalldown.svg";
  if (status === "positive") {
    arrowPath = "/images/arrowsmallup.svg";
  }
  return (
    <div
      className={`${status == "positive" ? styles.positive : styles.negative} ${
        styles.progress
      }`}
    >
      <span>{value}%</span>
      <img src={arrowPath} alt="" />
    </div>
  );
}

export default HomeProgress;
