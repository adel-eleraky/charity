import styles from "./CaseStatus.module.css";
// it is mainly for cases in charity but admin must have access to cases
/* open - closed */
function CaseStatus({ statusType }) {
  const statusText = statusType === "open" ? "مفتوح" : "مغلق";
  return (
    <div className={`${styles.status} ${styles[statusType]}`}>{statusText}</div>
  );
}

export default CaseStatus;
