//alert this component is only for testing and will not be in the production
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmResetPass,
  forgotPassword,
} from "../rtk/features/userAuthSlice";
import { useNavigate } from "react-router-dom";
function ConfirmResetPass() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleVerify(e) {
    e.preventDefault();
    const values = {
      token,
      email,
      password,
    };
    dispatch(confirmResetPass(values));
    navigate("/account/login");
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
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>reset</button>
    </form>
  );
}

export default ConfirmResetPass;
