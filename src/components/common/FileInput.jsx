import { Field } from "formik";
import styles from "./FileInput.module.css";
// make sure that you use this component in Formik component
function FileInput({ name, children }) {
  const handleUploadClick = () => {
    document.querySelector(`.${name}`).click();
  };
  return (
    <div className={`${styles["file-input"]} `} onClick={handleUploadClick}>
      <img src="/images/upload-icon.png" alt="" className="" />
      {children}
      <Field
        type="file"
        id={name}
        name={name}
        className={`d-none ${name}`}
        aria-label="images"
        aria-describedby="basic-addon1"
      />
      {/* you can also add error message */}
    </div>
  );
}

export default FileInput;
