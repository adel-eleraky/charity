import Popup from "reactjs-popup";
import AdminCharityDocs from "./AdminCharityDocs";
import styles from "./AdminCharityActions.module.css";
import { useEffect } from "react";
function AdminCharityActions({ children }) {
  useEffect(function () {
    document.onclick = function () {
      console.log("hello");
    };
  }, []);
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
        nested
      >
        {children}
      </Popup>
      <Popup
        trigger={
          <button>
            <img src="/images/admin-action-see-more.svg" alt="" />
            <span>مراجعة الوثائق</span>
          </button>
        }
        modal
        nested
        className="docs-popup"
        // docs-popup-overlay, -content
      >
        <AdminCharityDocs />
      </Popup>
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
