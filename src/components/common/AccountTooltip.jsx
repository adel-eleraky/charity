import { NavLink } from "react-router-dom";
import styles from "./AccountTooltip.module.css";
function AccountTooltip() {
  return (
    <div className={styles.action}>
      <NavLink to="profile">
        <img src="/images/admin-action-see-more.svg" alt="" />
        <span>تعديل الحساب</span>
      </NavLink>

      {
        //todo: just temp I think it will be button
      }
      <NavLink to="/">
        <img src="/images/admin-action-accept.svg" alt="" />
        <span>تسجيل الخروج</span>
      </NavLink>
    </div>
  );
}

export default AccountTooltip;
