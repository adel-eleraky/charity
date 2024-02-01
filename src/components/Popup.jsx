function Popup({ isOpen, children }) {
  if (!isOpen) return;
  return <div>{children}</div>;
}

export default Popup;
