import styles from "./ProfileImageEdit.module.css";
import Loader from "../common/Loader";
import Error from "../common/Error";
import { useRef } from "react";
import { useDispatch } from "react-redux";
const cloudinaryBaseUrl =
  "https://res.cloudinary.com/ddvetozyq/image/upload/v1715928273";
function ProfileImageEdit({
  currentValue,
  updateProfileImageStatus,
  error,
  updateProfileImage,
}) {
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  // handling file upload
  // const [imageSource, setImageSource] = useState(
  //   `${cloudinaryBaseUrl}/caseCoverImages/${currentCase.coverImage}`
  // );

  function handleChangeCoverImage(e) {
    // handle change image locally
    const file = e.currentTarget.files[0];
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setImageSource(reader.result); // reader.result contains the data URL
    // };
    // reader.readAsDataURL(file); // Read the file as a data URL

    // handle uploading image to server
    const updateCoverData = { id: currentValue._id, image: file };
    dispatch(updateProfileImage(updateCoverData));
  }
  return (
    <>
      {(updateProfileImageStatus === "idle" ||
        updateProfileImageStatus === "finished") && (
        <>
          <div className={styles.image}>
            <img
              // src={`${cloudinaryBaseUrl}/caseCoverImage/${currentCase.coverImage}`}
              src={`${cloudinaryBaseUrl}/caseCoverImages/${currentValue.coverImage}`}
              alt=""
            />
            <img
              src="/images/change-image.svg"
              alt=""
              onClick={() => fileInput.current.click()}
            />

            <input
              style={{ display: "none" }}
              type="file"
              ref={fileInput}
              onChange={handleChangeCoverImage}
            />
          </div>
        </>
      )}
      {updateProfileImageStatus === "loading" && <Loader type="commet" />}
      {updateProfileImageStatus === "failed" && <Error mgs={error} />}
    </>
  );
}

export default ProfileImageEdit;
