import { useEffect, useRef } from "react";
import { Bounce, toast } from "react-toastify";

function useToastCustomReducer(status, loadingMsg, successMsg, failedMsg) {
  const previousStatusRef = useRef(null);

  useEffect(
    function () {
      toast.dismiss();
      if (previousStatusRef.current === status) return; // to handle re-render the components
      if (status === "loading")
        toast.loading(loadingMsg, {
          position: "top-right",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      if (status === "finished")
        toast.success(successMsg, {
          position: "top-right",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      if (status === failedMsg)
        toast.error("فشل ", {
          position: "top-right",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      previousStatusRef.current = status;
    },
    [status]
  );
}

export default useToastCustomReducer;
