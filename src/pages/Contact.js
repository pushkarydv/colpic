import Footer from "../components/Footer";
import GoA from "../components/GoA";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="f500 f1-5 m1">Contact Me</div>
      <p className="m1">
        Heyy if you find any bug or having problem with this product feel free
        to contact me on my socials.
      </p>
      <GoA name="Instagram" link="https://instagram.com/pushkaryadav_" />
      <GoA name="Twitter" link="https://twitter.com/pushkaryadav_" />
      <GoA name="Github" link="https://github.com/pushkarydv" />
      <GoA name="Portfolio" link="https://pushkaryadav.netlify.app/" />
      <Footer />
    </>
  );
}
