import Popup from "reactjs-popup";
import AdminCharityDocs from "./AdminCharityDocs";
import styles from "./AdminCharityActions.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmCharity,
  rejectCharity,
  resetCurrentCharity,
} from "../../rtk/features/user/adminSlice";
import CharityDetails from "./CharityDetails";
import useToastCustomReducer from "../../hooks/useToastCustomReducer";

// todo: handle loading using library
function AdminCharityActions({ charity, onSpaceBelow }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // rejectCharityStatus;
  const { rejectCharityStatus } = useSelector((store) => store.admin);
  useToastCustomReducer(
    rejectCharityStatus,
    "جاري رفض الجمعية",
    "تم رفض الجمعية بنجاح",
    "حدث خطأ اثناء رفض الجمعية"
  );

  function handleClosePopup() {
    setOpen(false);
    console.log(open);
    console.log("closed");
  }
  function handleConfirmCharity() {
    dispatch(confirmCharity(charity._id));
  }
  function handleRejectCharity() {
    dispatch(rejectCharity(charity._id));
  }
  return (
    <div
      className={`${styles.action} ${
        onSpaceBelow() < 100 ? styles.upward : ""
      }`}
    >
      <Popup
        trigger={
          <button>
            <img src="/images/admin-action-see-more.svg" alt="" />
            <span>رؤية المزيد</span>
          </button>
        }
        modal
        nested
        onClose={() => dispatch(resetCurrentCharity())}
      >
        {(close) => (
          <CharityDetails charityId={charity._id} onClosePopup={close} />
        )}
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
          <button onClick={handleConfirmCharity}>
            <img src="/images/admin-action-accept.svg" alt="" />
            <span>قبول الجمعية</span>
          </button>
          <button onClick={handleRejectCharity}>
            <img src="/images/admin-action-reject.svg" alt="" />
            <span>رفض الجمعية</span>
          </button>
        </>
      )}
    </div>
  );
}

export default AdminCharityActions;
