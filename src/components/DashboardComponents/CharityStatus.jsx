import styles from "./CharityStatus.module.css";
/* accepted - rejected - pending */
function CharityStatus({ statusType }) {
  // todo: add another status: غير موثق
  let statusText;
  if (statusType === "accepted") statusText = "مقبول";
  else if (statusType === "rejected") statusText = "غير مقبول";
  else if (statusType === "pending") statusText = "قيد المراجعة";
  else if (statusType === "not-uploaded") statusText = "بانتظار الوثائق";

  return (
    <div className={`${styles.status} ${styles[statusType]}`}>{statusText}</div>
  );
}

export default CharityStatus;
