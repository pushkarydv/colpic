import ColorSet from "../components/ColorSet";
import {
  favouriteColors,
  colorSet1,
  colorSet2,
  colorSet3,
  colorSet4,
  colorSet5,
  colorSet6,
} from "../components/ColorList.js";
export default function Colors() {
  return (
    <>
      <ColorSet set={colorSet3} name="Blue" />
      <ColorSet set={colorSet4} name="Green" />
      <ColorSet set={colorSet2} name="Purple" />
      <ColorSet set={colorSet5} name="Yellow" />
      <ColorSet set={colorSet6} name="White" />
      <ColorSet set={colorSet1} name="Red" />
      <ColorSet set={favouriteColors} name="My Favourite" />
    </>
  );
}
