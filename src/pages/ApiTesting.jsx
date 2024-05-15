import { useDispatch } from "react-redux";
import {
  activateCharityAccount,
  confirmResetCharityPassword,
  loginCharity,
  logoutCharity,
  registerCharity,
  resetCharityPassword,
} from "../rtk/features/charity/charityAuthSlice";
import { useState } from "react";

function ApiTesting() {
  const dispatch = useDispatch();
  const [charityImage, setCharityImage] = useState("");
  const [token, setToken] = useState("");
  // registerCharity (true)
  // loginCharity
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
    email: "moh.hero4@gmail.com",
    password: "abdo123",
  };

  const confirmResetCharityData = {
    token,
    email: "moh.hero4@gmail.com",
    password: "abdo123",
  };
  function eventHandler() {
    // dispatch(registerCharity(charityRegisterData));
    //  dispatch(activateCharityAccount(token));
    dispatch(loginCharity(charityLoginData));
    // dispatch(resetCharityPassword("moh.hero4@gmail.com"));
  }
  function handleLogout() {
    dispatch(confirmResetCharityPassword(confirmResetCharityData));
    // dispatch(logoutCharity());
  }

  return (
    <div>
      hello see the console
      <input
        type="file"
        onChange={(e) => {
          setCharityImage(e.target.files[0]);
          console.log(e.target.files[0]);
        }}
      />
      <button onClick={eventHandler}>trigger api</button>
      <button onClick={handleLogout}>confirmReset</button>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
    </div>
  );
}

export default ApiTesting;
