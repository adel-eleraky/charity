import styles from "./CharityStatus.module.css";
/* accepted - rejected - pending */
function CharityStatus({ statusType }) {
  // todo: add another status: غير موثق
  const statusText =
    statusType === "accepted"
      ? "مقبول"
      : statusType === "rejected"
      ? "غير مقبول"
      : "قيد المراجعة";
  return (
    <div className={`${styles.status} ${styles[statusType]}`}>{statusText}</div>
  );
}

export default CharityStatus;
