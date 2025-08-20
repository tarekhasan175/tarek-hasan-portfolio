

export default function Footer() {
  return (
    <footer className="footer-landing style-1">
      <div className="content ">
        <p>
          All Rights Reserved &copy; Tarek Hasan - {new Date().getFullYear()}
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
