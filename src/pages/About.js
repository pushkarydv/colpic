import Footer from "../components/Footer";
import GoA from "../components/GoA";
import Nav from "../components/Nav";

export default function About() {
  return (
    <>
      <Nav />
      <div className="f500 f1-5 m1">About COLPIC</div>
      <p className="m1">
        This is basically a free color and gradient picker, you just have to
        click on colors or gradients to copy them and paste them into your
        projects directly. <br />
        This colorpicker is dedicated to make use on these amazing color codes
        easy, we remember them so that you don't have to remember them everyday.{" "}
        <br />
        Build Some Great Projects Now😎
      </p>

      <p className="f500 m1">
        This project is open source check my Github for this and more such cool
        projects
      </p>
      <p className="m1">
        <GoA
          name="https://github.com/pushkarydv"
          link="https://github.com/pushkarydv"
        />
      </p>
      <Footer />
    </>
  );
}
