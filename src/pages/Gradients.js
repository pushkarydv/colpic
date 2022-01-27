import HomeLinks from "../components/HomeLinks";
import Nav from "../components/Nav";
import { gradients } from "../components/GradientList";
import { GradientSet } from "../components/GradientSet";
export default function Gradients() {
  return (
    <>
      <Nav />
      <HomeLinks />
      <GradientSet set={gradients} />
    </>
  );
}
