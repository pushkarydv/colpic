import NavPageLink from "./NavPageLink";
import PageLink from "./PageLink";
export default function Nav() {
  function navState() {
    document.querySelector(".l1").classList.toggle("l1-click");
    document.querySelector(".l2").classList.toggle("l2-click");
    document.querySelector(".nav-links").classList.toggle("display-nav");
  }
  return (
    <nav>
      <div className="nav-logo">
        <PageLink to="/home" text="COLPIC" />
      </div>
      <button
        className="mobile-toggle"
        onClick={() => {
          navState();
        }}
      >
        <div className="line l1"></div>
        <div className="line l2"></div>
      </button>
      <div className="nav-links">
        <NavPageLink to="/" text="Home" />
        <NavPageLink to="/gradients" text="Gradients" />
        {/* <NavPageLink to="/download" text="Download" /> */}
        <NavPageLink to="/about" text="About" />
        <NavPageLink to="/contact" text="Contact" />
      </div>
    </nav>
  );
}
