export default function Header() {
  return (
    <div>
      <header className="header style-1">
        <div className="tf-container w-6">
          <div className="header-sidebar style-1">
            <div className="box">
              <div className="avatar">
                <img
                  alt="avatar"
                  loading="lazy"
                  width="68"
                  height="68"
                  decoding="async"
                  data-nimg="1"
                  src="assets/images/logo/th-logo-invert.png"
                />
              </div>
              <div className="info">
                <h6 className="font-4 mb_4">Tarek H</h6>
                <div className="text-label text-uppercase fw-6 text_primary-color font-3  letter-spacing-1">
                  Full Stuck Developer
                </div>
              </div>
            </div>
            <ul className="nav-menu style-1 lg-hide ">
              <li className="text-menu text_white ">
                <a
                  href="#about"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    About
                  </span>
                  <span className="text" data-splitting="true">
                    About
                  </span>
                </a>
              </li>
              <li className="text-menu text_white ">
                <a
                  href="#resume"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Resume
                  </span>
                  <span className="text" data-splitting="true">
                    Resume
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#portfolio"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Portfolio
                  </span>
                  <span className="text" data-splitting="true">
                    Portfolio
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#portfolio"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Testimonial
                  </span>
                  <span className="text" data-splitting="true">
                    Testimonial
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#partners"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Skills
                  </span>
                  <span className="text" data-splitting="true">
                    Skills
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#contact"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Contact
                  </span>
                  <span className="text" data-splitting="true">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
            <div className="d-flex gap_12 align-items-center">
              <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                <span>Hire Me</span>
              </a>
              <a
                className="menu-button show-menu-mobile d-lg-none link-no-action"
                data-target="#menu-«Rhtb»"
                href="#"
              >
                <i className="icon-CirclesFour"></i>
              </a>
              <div className="popup-menu-mobile" id="menu-«Rhtb»">
                <ul className="nav-menu style-3">
                  <li className="menu-item menu-item-has-children-mobile">
                    <a
                      href="#dropdown-menu-one"
                      className="item-menu-mobile collapsed text-button font-3 fw-6 text_white"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="dropdown-menu-one"
                    >
                      Demos
                    </a>
                    <div
                      id="dropdown-menu-one"
                      className="collapse"
                      data-bs-parent="#menu-mobile-menu"
                    >
                      <ul className="sub-mobile">
                        <li>
                          <a href="">Home Default</a>
                        </li>
                        <li>
                          <a href="home-vertical">Home Menu Vertical</a>
                        </li>
                        <li>
                          <a href="home-horizontal">Home Menu horizontal</a>
                        </li>
                        <li>
                          <a href="home-background-video">
                            Home Backgroud Video
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="text-menu text_white ">
                    <a
                      href="#about"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        About
                      </span>
                      <span className="text" data-splitting="true">
                        About
                      </span>
                    </a>
                  </li>
                  <li className="text-menu text_white ">
                    <a
                      href="#resume"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Resume
                      </span>
                      <span className="text" data-splitting="true">
                        Resume
                      </span>
                    </a>
                  </li>

                  <li className="text-menu text_white ">
                    <a
                      href="#portfolio"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Portfolio
                      </span>
                      <span className="text" data-splitting="true">
                        Portfolio
                      </span>
                    </a>
                  </li>

                  <li className="text-menu text_white ">
                    <a
                      href="#testimonial"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Testimonial
                      </span>
                      <span className="text" data-splitting="true">
                        Testimonial
                      </span>
                    </a>
                  </li>

                  <li className="text-menu text_white ">
                    <a
                      href="#partners"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Skills
                      </span>
                      <span className="text" data-splitting="true">
                        Skills
                      </span>
                    </a>
                  </li>

                  <li className="text-menu text_white ">
                    <a
                      href="#contact"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Contact
                      </span>
                      <span className="text" data-splitting="true">
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header header-fixed style-1">
        <div className="tf-container w-6">
          <div className="header-sidebar style-1">
            <div className="box">
              <div className="avatar">
                <img
                  alt="avatar"
                  loading="lazy"
                  width="68"
                  height="68"
                  decoding="async"
                  data-nimg="1"
                  srcSet=""
                  src="/assets/images/user/Profile.jpeg"
                />
              </div>
              <div className="info">
                <h6 className="font-4 mb_4">Tarek H</h6>
                <div className="text-label text-uppercase fw-6 text_primary-color font-3  letter-spacing-1">
                  Full Stuck Developer
                </div>
              </div>
            </div>
            <ul className="nav-menu style-1 lg-hide ">
              <li className="text-menu text_white ">
                <a
                  href="#about"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    About
                  </span>
                  <span className="text" data-splitting="true">
                    About
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#resume"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Resume
                  </span>
                  <span className="text" data-splitting="true">
                    Resume
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#portfolio"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Portfolio
                  </span>
                  <span className="text" data-splitting="true">
                    Portfolio
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#testimonial"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Testimonial
                  </span>
                  <span className="text" data-splitting="true">
                    Testimonial
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#partners"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Skills
                  </span>
                  <span className="text" data-splitting="true">
                    Skills
                  </span>
                </a>
              </li>

              <li className="text-menu text_white ">
                <a
                  href="#contact"
                  className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                >
                  <span className="text" data-splitting="true">
                    Contact
                  </span>
                  <span className="text" data-splitting="true">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
            <div className="d-flex gap_12 align-items-center">
              <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                <span>Hire Me</span>
              </a>
              <a
                className="menu-button show-menu-mobile d-lg-none link-no-action"
                data-target="#menu-«Rltb»"
                href="#"
              >
                <i className="icon-CirclesFour"></i>
              </a>
              <div className="popup-menu-mobile" id="menu-«Rltb»">
                <ul className="nav-menu style-3">
                  <li className="text-menu text_white ">
                    <a
                      href="#about"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        About
                      </span>
                      <span className="text" data-splitting="true">
                        About
                      </span>
                    </a>
                  </li>
                  <li className="text-menu text_white ">
                    <a
                      href="#resume"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Resume
                      </span>
                      <span className="text" data-splitting="true">
                        Resume
                      </span>
                    </a>
                  </li>

                  <li className="text-menu text_white ">
                    <a
                      href="#portfolio"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Portfolio
                      </span>
                      <span className="text" data-splitting="true">
                        Portfolio
                      </span>
                    </a>
                  </li>

                  <li className="text-menu text_white ">
                    <a
                      href="#contact"
                      className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                    >
                      <span className="text" data-splitting="true">
                        Contact
                      </span>
                      <span className="text" data-splitting="true">
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
