import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount } from "../rtk/features/userAuthSlice";
import { activateCharityAccount } from "../rtk/features/charityAuthSlice";

function AccountActivation() {
  const [token, setToken] = useState("");
  const { charity, charityError } = useSelector((store) => store.charityAuth);
  const dispatch = useDispatch();
  function handleVerify(e) {
    e.preventDefault();
    if (!token) return;
    dispatch(activateCharityAccount(token));
  }
  useEffect(() => {
    console.log(charityError);
    console.log(charity);
  }, [charityError, charity]);
  return (
    <form onSubmit={handleVerify}>
      <p>copy token from email</p>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      ></input>
      <button>Verify</button>
    </form>
  );
}

export default AccountActivation;
