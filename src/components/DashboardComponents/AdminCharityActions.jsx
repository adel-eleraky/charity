import styles from "./AdminCharityActions.module.css";
function AdminCharityActions() {
  return (
    <div className={styles.action}>
      <button>
        <img src="/images/admin-action-see-more.svg" alt="" />
        <span>رؤية المزيد</span>
      </button>
      <button>
        <img src="/images/admin-action-accept.svg" alt="" />
        <span>قبول الجمعية</span>
      </button>
      <button>
        <img src="/images/admin-action-reject.svg" alt="" />
        <span>رفض الجمعية</span>
      </button>
    </div>
  );
}

export default AdminCharityActions;
