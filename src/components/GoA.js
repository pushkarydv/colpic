export default function GoA({ name, link }) {
  return (
    <a
      className="go-a block m1"
      target="_blank"
      href={link}
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}
