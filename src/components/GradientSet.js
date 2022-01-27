import { GradientContainer } from "./GradientContainer";

export function GradientSet({ set }) {
  const gradientContainers = set.map((currentColor) => (
    <GradientContainer key={currentColor} color={currentColor} />
  ));
  return (
    <>
      <div className="gradientBoxSet">{gradientContainers}</div>
    </>
  );
}
