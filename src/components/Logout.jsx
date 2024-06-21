import { useDispatch } from "react-redux";
import { logoutUser } from "../rtk/features/user/userAuthSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dipatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    dipatch(logoutUser());
    navigate("login");
  }
  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
