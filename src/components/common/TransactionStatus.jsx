import styles from "./TransactionStatus.module.css";
/* accepted - rejected - pending */
function TransactionStatus({ statusType }) {
  const statusText =
    statusType === "success"
      ? "بنجاح"
      : statusType === "fail"
      ? "فشل"
      : "قيد المراجعة";
  return (
    <div className={`${styles.status} ${styles[statusType]}`}>{statusText}</div>
  );
}

export default TransactionStatus;
