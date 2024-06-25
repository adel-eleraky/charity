import { ThreeDot } from "react-loading-indicators";
import styles from "./SubmitButton.module.css";
function SubmitButton({ isDisabled, isLoading, text }) {
  return (
    // bootstrap handle the disabled button style
    <button className={`btn ${styles["save-btn"]}`} disabled={isDisabled}>
      {isLoading ? (
        <ThreeDot variant="pulsate" color="#E1D4C5" size="small" />
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}

export default SubmitButton;
