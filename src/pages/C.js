import { Outlet, useParams } from "react-router-dom";
import Nav from "../components/Nav";

export default function C() {
  return (
    <>
      <Nav />
      <div className="t-c f1-5">Select color</div>
      {/* <canvas
        id="#colorCanvas"
        width="1920"
        height="1080"
        style={{ width: "100%" }}
      ></canvas> */}
      <Outlet />
    </>
  );
}
export function FetchColor() {
  const { colorName } = useParams();
  return (
    <div>
      <div
        style={{
          width: "90%",
          margin: "0.5rem 5%",
          aspectRatio: "1.6",
          backgroundColor: `#${colorName}`,
          borderRadius: "1rem",
        }}
      ></div>
      <div style={{ padding: "1rem", fontSize: "1.5rem" }}>
        Color Coming is: #{colorName}
      </div>
    </div>
  );
}
