import { useSelector } from "react-redux";
import { changeCharityPassword } from "../rtk/features/charity/charityProfileSlice";
import { changePasswordByUser } from "../rtk/features/user/userProfileSlice";

function useEditPwdReducer(type) {
  const { changePasswordStatus, userError } = useSelector(
    (store) => store.userProfile
  );
  const { changeCharityPwdStatus, error: charityError } = useSelector(
    (store) => store.charityProfile
  );
  if (type == "user")
    return [changePasswordByUser, changePasswordStatus, userError];
  else if (type === "charity")
    return [changeCharityPassword, changeCharityPwdStatus, charityError];
}

export default useEditPwdReducer;
