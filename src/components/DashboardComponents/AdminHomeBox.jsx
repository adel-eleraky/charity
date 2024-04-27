import { Children } from "react";
import styles from "./AdminHomeBox.module.css";
function AdminHomeBox({ title, imagePath, value, children }) {
  return (
    <div
      className={`col-sm-4 ${styles.box}`}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="title d-flex gap-3 align-items-center">
        <img src={imagePath} alt="" />
        <span>{title}</span>
      </div>
      <div className="details d-flex gap-3 w-100 mt-2">
        <span className="operations-num">{value}</span>
        <span className="progress">{children}</span>
      </div>
    </div>
  );
}

export default AdminHomeBox;
