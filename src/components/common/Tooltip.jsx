import Popup from "reactjs-popup";

function Tooltip({ trigger, children }) {
  return (
    <Popup trigger={trigger} arrow={false} position="center center">
      {children}
    </Popup>
  );
}

export default Tooltip;
