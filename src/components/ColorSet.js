import { ColorContainer } from "./ColorContainer";
export default function ColorSet({ set, name }) {
  const colorContainers = set.map((currentColor) => (
    <ColorContainer color={currentColor} key={currentColor} />
  ));
  return (
    <>
      <div
        className="f1-5"
        style={{
          paddingLeft: "1rem",
          paddingTop: "2rem",
          fontWeight: "500",
        }}
      >
        {" "}
        {name}
      </div>
      <div className="colorBoxSet">{colorContainers}</div>
    </>
  );
}
