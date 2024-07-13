import { memo } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ToastCustomComponent(status) {
  if (status === "loading") {
    console.log("loading");
    toast.loading("loading", {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  }
  const notify = () => {
    console.log("hello for notify");

    toast.success("Success Notification !", {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

    toast.error("Error Notification !", {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

    toast.loading("loading", {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };
  return <ToastContainer />;
}

export default ToastCustomComponent;
