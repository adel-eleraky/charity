import Popup from "reactjs-popup";
import styles from "./CharityCaseActions.module.css";
import { useEffect } from "react";
import CharityCaseEdit from "./CharityCaseEdit";
import CaseDetails from "./CaseDetails";
import { useDispatch } from "react-redux";
import { resetGetCaseByIdStatus } from "../../rtk/features/charity/charityCaseSlice";
function CharityCaseActions({ currentCase }) {
  const dispatch = useDispatch();
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
        onClose={() => dispatch(resetGetCaseByIdStatus())}
      >
        {(close) => <CaseDetails caseId={currentCase._id} close={close} />}
      </Popup>
      <Popup
        trigger={
          <button>
            <img src="/images/admin-action-see-more.svg" alt="" />
            <span>تعديل الحالة</span>
          </button>
        }
        modal
        nested
        className="docs-popup"
        // docs-popup-overlay, -content
      >
        <CharityCaseEdit />
      </Popup>
      <button>
        <img src="/images/admin-action-reject.svg" alt="" />
        <span>حذف الحالة</span>
      </button>
    </div>
  );
}

export default CharityCaseActions;
