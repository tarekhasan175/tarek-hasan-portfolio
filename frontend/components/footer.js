export default function Footer({ profile }) {
  const { name } = profile || {};
  return (
    <footer className="footer-landing style-1">
      <div className="content ">
        <p>
          © {new Date().getFullYear()} {name || "Tarek H"} - All rights reserved.
        </p>
        <ul className="list-icon d-flex justify-center mt-4">
          <li>
            <a href="#" className="icon-LinkedIn"></a>
          </li>
          <li>
            <a href="#" className="icon-GitHub"></a>
          </li>
          <li>
            <a href="#" className="icon-X"></a>
          </li>
          <li>
            <a href="#" className="icon-dribbble"></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
