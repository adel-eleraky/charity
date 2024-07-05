import { useDispatch, useSelector } from "react-redux";
import {
  activateCharityAccount,
  confirmResetCharityPassword,
  loginCharity,
  logoutCharity,
  registerCharity,
  resetCharityPassword,
} from "../rtk/features/charity/charityAuthSlice";
import { useEffect, useState } from "react";
import {
  changeCharityPassword,
  editCharityProfile,
  getCharityProfile,
} from "../rtk/features/charity/charityProfileSlice";
import { openChat } from "../rtk/features/chatSlice";

function ApiTesting() {
  const dispatch = useDispatch();
  const { getCharityProfileStatus, profile } = useSelector(
    (store) => store.charityProfile
  );
  const { charity } = useSelector((store) => store.charityAuth);
  console.log(getCharityProfileStatus);
  const [charityImage, setCharityImage] = useState("");
  const [token, setToken] = useState("");
  // registerCharity (true)
  // loginCharity
  console.log("chairty from api testing", charity);
  const charityRegisterData = {
    email: "moh.hero4@gmail.com",
    password: "123456",
    name: "abdo",
    "contactInfo[email]": "subul@g.com",
    "contactInfo[phone]": "02131313213",
    "contactInfo[websiteUrl]": "www.subul.org",
    description: "hello charity description",
    "charityInfo[registeredNumber]": "123",
    "charityInfo[establishedDate]": "2001-01-01",
    image: charityImage,
    phone: "02131313213",
    "charityLocation[governorate]": "Helwan",
  };

  const charityLoginData = {
    // email: "moh.hero4@gmail.com",
    // password: "aA@123456",
    email: "mohhero.4@gmail.com",
    password: "123456",
  };

  const confirmResetCharityData = {
    token,
    email: "moh.hero4@gmail.com",
    password: "abdo123",
  };

  // to edit profile charity docs must be aploaded and confirmed
  const editProfileData = {
    // just send what you need to edit
    email: "moh.hero4@gmail.com", // if changed must be verified
    password: "123456",
    name: "abdo",
    "contactInfo[email]": "subul@g.com",
    "contactInfo[phone]": "02131313213",
    "contactInfo[websiteUrl]": "www.subul.org",
    description: "hello charity description",
    "charityInfo[registeredNumber]": "123", // can't be edited
    "charityInfo[establishedDate]": "2001-01-01", // can't be edited
    // image: charityImage, can't be edited here
    phone: "02131313213",
    "charityLocation[governorate]": "Helwan",
  };
  const editProfileDatatest = {
    name: "subul",
    password: "123333",
    contactInfo: { email: "subul111@g.com" },
  };
  function eventHandler() {
    // dispatch(registerCharity(charityRegisterData));
    //  dispatch(activateCharityAccount(token));
    dispatch(loginCharity(charityLoginData));
    // dispatch(resetCharityPassword("moh.hero4@gmail.com"));
  }
  function handleLogout() {
    dispatch(logoutCharity());
  }
  function handleChangePwd() {
    // dispatch(editCharityProfile(editProfileDatatest));
    const profile = dispatch(getCharityProfile());
    console.log(profile);
  }
  useEffect(
    function () {
      // console.log(profile.charity.image);
    },
    [profile]
  );
  return (
    <div>
      hello see the console
      <button
        onClick={() => {
          console.log("hello");
          dispatch(openChat("667deb168463750ac3ab48de"));
        }}
      >
        open chat
      </button>
      <button>close chat</button>
      <input
        type="file"
        onChange={(e) => {
          setCharityImage(e.target.files[0]);
          console.log(e.target.files[0]);
        }}
      />
      <button onClick={eventHandler}>login</button>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleChangePwd}>editProfileData</button>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
    </div>
  );
}

export default ApiTesting;
