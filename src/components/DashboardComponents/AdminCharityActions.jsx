import Popup from "reactjs-popup";
import styles from "./AdminCharityActions.module.css";
import CharityDetails from "./CharityDetails";
function AdminCharityActions({ children, handleToggleAction }) {
  return (
    <div className={styles.action}>
      <Popup
        trigger={
          <button>
            <img src="/images/admin-action-see-more.svg" alt="" />
            <span>رؤية المزيد</span>
          </button>
        }
        modal
      >
        {children}
      </Popup>

      <button onClick={handleToggleAction}>
        <img src="/images/admin-action-accept.svg" alt="" />
        <span>قبول الجمعية</span>
      </button>
      <button onClick={handleToggleAction}>
        <img src="/images/admin-action-reject.svg" alt="" />
        <span>رفض الجمعية</span>
      </button>
    </div>
  );
}

export default AdminCharityActions;
