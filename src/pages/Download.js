import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function Download() {
  return (
    <>
      <Nav />
      <div className="p2 f1-5 f500 t-c">
        <div>
          Download 1920x1080 images of colors and gradients <br />
        </div>
        <div className="mtb-3">
          <Link to="/download/c" className="no-a">
            <button className="download-btn">Download Color</button>
          </Link>{" "}
          <br />
          <Link to="/download/g" className="no-a">
            <button className="download-btn">Download Gradient</button>
          </Link>
        </div>
      </div>
    </>
  );
}
