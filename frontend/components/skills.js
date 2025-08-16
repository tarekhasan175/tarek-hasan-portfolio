export default function Skill() {
  return (
    <section
      id="partners"
      className="section-partner style-2 section spacing-5 "
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="heading-section ">
            <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_32">
              Skills
            </div>
            <h3 className="text_white fw-5 split-text effect-blur-fade">
              My Skills
            </h3>
          </div>
          <div className="">
            <ul className="mx-4 mt-4">
              <li className="p-2 text_white">PHP</li>
              <li className="p-2 text_white">Laravel</li>
              <li className="p-2 text_white">Node JS</li>
              <li className="p-2 text_white">Vue JS</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7">
          <div
            className="swiper tf-sw-partner wrap-partner position-2"
            data-preview="8"
            data-tablet="8"
            data-mobile-sm="6"
            data-mobile="4"
            data-space="15"
            data-space-md="30"
            data-space-lg="30"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-1 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <img
                    src="assets/images/logo/bootstrap_logo.png"
                    alt="partner"
                    loading="lazy"
                    width={100}
                  />
                  <div className="item-shape">
                    <img
                      src="assets/images/item/small-comet.webp"
                      alt="item"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-1 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <img
                    src="assets/images/logo/php_logo.png"
                    alt="partner"
                    loading="lazy"
                    width={100}
                  />
                  <div className="item-shape">
                    <img
                      src="assets/images/item/small-comet.webp"
                      alt="item"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-1 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <img
                    src="assets/images/logo/postman_logo.webp"
                    alt="partner"
                    loading="lazy"
                    width={100}
                  />
                  <div className="item-shape">
                    <img
                      src="assets/images/item/small-comet.webp"
                      alt="item"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-1 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <img
                    src="assets/images/logo/nextjs_logo.svg"
                    alt="partner"
                    loading="lazy"
                    width={100}
                  />
                  <div className="item-shape">
                    <img
                      src="assets/images/item/small-comet.webp"
                      alt="item"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
