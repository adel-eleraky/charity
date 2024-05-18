import { Mosaic } from "react-loading-indicators";

function Loader() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem", direction: "rtl" }}>
      <Mosaic color="#91683a" size="small" text="يامسهل" textColor="#91683a" />
    </div>
  );
}

export default Loader;
