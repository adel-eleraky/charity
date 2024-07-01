import Popup from "reactjs-popup";
import AdminCharityDocs from "./AdminCharityDocs";
import styles from "./AdminCharityActions.module.css";
import { useEffect, useState } from "react";
function AdminCharityActions({ children, charity }) {
  const [open, setOpen] = useState(false);
  function handleClosePopup() {
    setOpen(false);
    console.log(open);
    console.log("closed");
  }
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
      {charity.isPending && (
        <>
          <button onClick={() => setOpen(true)}>
            <img src="/images/admin-action-see-more.svg" alt="" />
            <span>مراجعة الوثائق</span>
          </button>
          <Popup modal nested className="docs-popup" open={open}>
            <AdminCharityDocs
              charity={charity}
              onClosePopup={handleClosePopup}
            />
          </Popup>
          <button>
            <img src="/images/admin-action-accept.svg" alt="" />
            <span>قبول الجمعية</span>
          </button>
          <button>
            <img src="/images/admin-action-reject.svg" alt="" />
            <span>رفض الجمعية</span>
          </button>
        </>
      )}
    </div>
  );
}

export default AdminCharityActions;
