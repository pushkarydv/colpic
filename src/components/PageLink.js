import { Link } from "react-router-dom";
export default function PageLink({ to, text }) {
  return (
    <Link to={to} className="no-a">
      {text}
    </Link>
  );
}
