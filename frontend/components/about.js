export default function About() {
  return (
    <div className="wrap-section">
      <div className="row">
        <div className="col-lg-4">
          <div className="user-bar text-center style-1">
            <div className="box-author mb_12">
              <div className="img-style mb_16">
                <img src="assets/images/user/Profile.jpeg" alt="feature post" />
              </div>
              <div className="info">
                <div className="name font-3 text_white mb_8">
                  Md. Tarek Hasan
                </div>
                <div className="text-label text-uppercase fw-6 text_primary-color font-2 mb_16 letter-spacing-1">
                  Full Stack Web Developer
                </div>
                <a
                  href="mailto:tarekhn175@gmail.com"
                  className="hover-underline-link text_white text-body-2 mb_4"
                >
                  tarekhn175@gmail.com
                </a>
                <p className="text-caption-2 text_secondary-color font-3">
                  Live in Shewrapara, Dhaka
                </p>
              </div>
            </div>
            <ul className="list-icon d-flex justify-content-center mb_28">
              <li>
                <a href="https://github.com/tarekhasan175" className="link">
                  <span className="icon-GitHub"></span>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/">
                  <span className="icon-LinkedIn"></span>
                </a>
              </li>

              <li>
                <a href="https://x.com">
                  <span className="icon-X"></span>
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/">
                  <span className="icon-dribbble"></span>
                </a>
              </li>
            </ul>
            <a href="#" className="tf-btn btn-w-full style-border mb_20">
              <span className="bg_btn"></span>
              <span className="title">
                <i className="icon-ReadCvLogo"></i>View My CV
              </span>
              <span className="effect-shine"></span>
            </a>
            <a
              href="#contact"
              className="tf-btn style-1 animate-hover-btn btn-w-full"
            >
              <span className="title">
                <i className="icon-EnvelopeSimple"></i>
                <span>Contact Me</span>
              </span>
            </a>
            <div className="item-shape">
              <img src="assets/images/item/small-comet.png" alt="item" />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div id="about" className="section-about style-1 section">
            <div className="heading-section mb_45">
              <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_32">
                About
              </div>
              <div className="title-border-shape">
                <h4 className="animationtext clip">
                  Hello! I&#x27;m
                  <span className="tf-text s1 cd-words-wrapper text_primary-color">
                    <span className="item-text is-visible">Tarek Hasan</span>
                    <span className="item-text is-hidden">
                      Backend Developer
                    </span>
                    <span className="item-text is-hidden">
                      Frontend Developer
                    </span>
                    <span className="item-text is-hidden">
                      Full Stack Web Developer
                    </span>
                  </span>
                </h4>
                <div className="shape">
                  <span className="shape-1"></span>
                  <span className="shape-2"></span>
                  <span className="shape-3"></span>
                  <span className="shape-4"></span>
                </div>
                <div className="line">
                  <span className="line-horizontal horizontal-1"></span>
                  <span className="line-horizontal horizontal-2"></span>
                  <span className="line-vertical vertical-1"></span>
                  <span className="line-vertical vertical-2"></span>
                </div>
              </div>
            </div>
            <h1 className="title mb_16 split-text effect-blur-fade">
              Empower Code Intelligence
            </h1>
            <p className="text_muted-color font-3 mb_43 split-text split-lines-transform">
              Hello! I&#x27;m Tarek Hasan, a full-stack software developer
              specializing in backend systems. Experienced in building scalable
              web applications, I blend problem-solving with clean, efficient
              code to deliver impactful solutions.
            </p>
            <div className="wrap-counter tf-grid-layout md-col-3">
              <div className="counter-item bs-light-mode">
                <div className="counter-number h2 text_white mb_7">
                  <template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template>
                  <span className="sub">2+</span>
                </div>
                <p className="text-body-1 text_muted-color font-3">
                  Years in Development
                </p>
                <div className="item-shape">
                  <img
                    src="assets/images/item/small-comet.webp"
                    alt="item"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="counter-item bs-light-mode">
                <div className="counter-number h2 text_white mb_7">
                  <template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template>
                  <span className="sub">+</span>
                </div>
                <p className="text-body-1 text_muted-color font-3">
                  Satisfied Clients
                </p>
                <div className="item-shape">
                  <img
                    src="assets/images/item/small-comet.webp"
                    alt="item"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="counter-item bs-light-mode">
                <div className="counter-number h2 text_white mb_7">
                  <template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template>
                  <span className="sub">20+</span>
                </div>
                <p className="text-body-1 text_muted-color font-3">
                  Projects Completed
                </p>
                <div className="item-shape">
                  <img
                    src="assets/images/item/small-comet.webp"
                    alt="item"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
