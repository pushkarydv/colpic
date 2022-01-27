import { copyColor, invertColor } from "./BaseFunctions";
export function ColorContainer({ color }) {
  return (
    <div
      className="colorBox"
      style={{
        backgroundColor: `${color}`,
        color: `${invertColor(color, color)}`,
      }}
      onClick={(e) => {
        copyColor(color);
        e.target.innerText = "COPIED";
        setInterval(() => {
          e.target.innerText = color;
        }, 450);
      }}
    >
      {color}
    </div>
  );
}
