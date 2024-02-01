import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount } from "../rtk/features/userAuthSlice";

function AccountActivation() {
  const [token, setToken] = useState("");
  const { user, error } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  function handleVerify(e) {
    e.preventDefault();
    if (!token) return;
    console.log({ token });
    dispatch(activateAccount(token));
  }
  useEffect(() => {
    console.log(error);
  }, [error]);
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
