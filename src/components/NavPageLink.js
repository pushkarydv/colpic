import { NavLink } from "react-router-dom";
export default function NavPageLink({ to, text }) {
  return (
    <NavLink
      className="no-a"
      style={({ isActive }) => {
        return {
          color: isActive ? "#22a7f0" : "#000",
        };
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
}
