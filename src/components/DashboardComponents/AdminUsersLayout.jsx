import styles from "./AdminUsersLayout.module.css";
import AdminCharityTable from "./AdminCharityTable";
import { useEffect } from "react";
import AdminUsersTable from "./AdminUsersTable";
let slider;
function AdminUsersLayout() {
  // you can use useRef. instead
  // you need it because you want to select element based another element
  useEffect(() => {
    slider = document.querySelector(`.${styles.slider}`);
  }, []);

  function handleSliderRight() {
    if (slider.classList.contains("right")) return;
    console.log("test1");
    slider.classList.remove("left");
    slider.classList.add("right");
  }
  function handleSliderLeft() {
    if (slider.classList.contains("left")) return;
    console.log("test2");
    slider.classList.remove("right");
    slider.classList.add("left");
  }
  // handleSliderRight();
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>الاعضاء</div>
          <div className={`${styles.slider} right`}>
            <button onClick={handleSliderRight}>المستخدمين</button>
            <button onClick={handleSliderLeft}>الادمن</button>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container">
          <AdminUsersTable />
        </div>
      </div>
    </div>
  );
}

export default AdminUsersLayout;
