import { Commet, Mosaic } from "react-loading-indicators";

function Loader({ type = "mosaic" }) {
  return (
    <>
      {type === "mosaic" && (
        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            direction: "rtl",
          }}
        >
          <Mosaic
            color="#91683a"
            size="small"
            text="يامسهل"
            textColor="#91683a"
          />
        </div>
      )}
      {type === "commet" && (
        <Commet color="#91683a" size="small" text="" textColor="" />
      )}
    </>
  );
}

export default Loader;
