import Popup from "reactjs-popup";
import { useEffect } from "react";
import CharityCaseEdit from "./CharityCaseEdit";
import CaseDetails from "./CaseDetails";
import { useDispatch } from "react-redux";
import {
  deleteCase,
  resetGetCaseByIdStatus,
} from "../../rtk/features/charity/charityCaseSlice";
import styles from "./CharityCaseActions.module.css";
function CharityCaseActions({ currentCase }) {
  const dispatch = useDispatch();
  // useEffect(function () {
  //   document.onclick = function () {
  //     console.log("hello");
  //   };
  // }, []);
  function handleDeleteCase() {
    dispatch(deleteCase(currentCase._id));
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
        // must here to show the loading and not the old data
        onClose={() => dispatch(resetGetCaseByIdStatus())}
      >
        {(close) => <CaseDetails caseId={currentCase._id} close={close} />}
      </Popup>
      {currentCase.finished === false && (
        <>
          <Popup
            trigger={
              <button>
                <img src="/images/admin-action-see-more.svg" alt="" />
                <span>تعديل الحالة</span>
              </button>
            }
            modal
            nested
            className="edit-case"
            // docs-popup-overlay, -content
          >
            <CharityCaseEdit currentCase={currentCase} />
          </Popup>
          <button onClick={handleDeleteCase}>
            <img src="/images/admin-action-reject.svg" alt="" />
            <span>حذف الحالة</span>
          </button>
        </>
      )}
    </div>
  );
}

export default CharityCaseActions;
