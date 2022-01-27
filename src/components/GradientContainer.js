import { copyColor, invertColor } from "./BaseFunctions";
export function GradientContainer({ color }) {
  return (
    <div
      className="gradientBox"
      style={{
        background: `linear-gradient(to right,${color[0]}, ${color[1]})`,
        color: `${invertColor(color[0], color[1])}`,
      }}
      onClick={(e) => {
        copyColor(`${color[0]}, ${color[1]}`);
        e.target.innerText = "COPIED";
        setInterval(() => {
          e.target.innerText = `${color[0]} , ${color[1]}`;
        }, 450);
      }}
    >
      {color[0]}, {color[1]}
    </div>
  );
}
