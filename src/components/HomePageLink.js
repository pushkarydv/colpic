import { NavLink } from "react-router-dom";
export default function HomePageLink({ to, text }) {
  return (
    <>
      <NavLink
        className="no-a home-page-link"
        style={({ isActive }) => {
          return {
            display: isActive ? "none" : "inline-block",
          };
        }}
        to={to}
      >
        Go to {text} &#8620;
      </NavLink>
    </>
  );
}
