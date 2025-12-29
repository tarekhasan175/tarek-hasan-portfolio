import Image from "next/image";

export default function Skill({ skills }) {
  const { backend, frontend, tools, database } = skills || {};
  return (
    <section
      id="partners"
      className="section-partner style-2 section spacing-5 mt-2"
    >
      <div className="row">
        <div className="col-lg-7">
          <div className="heading-section ">
            <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_32">
              Skills
            </div>
            <h3 className="text_white fw-5 split-text effect-blur-fade">
              My Skills
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text_primary-color fw-5 p-2">Back-End</h5>
              <ul className="mx-4 ">
                {backend && backend.length > 0 ? (
                  backend.map((item, index) => (
                    <li key={index} className="p-2 text_white">{item}</li>
                  ))
                ) : (
                  <>
                    <li className="p-2 text_white">PHP</li>
                    <li className="p-2 text_white">Laravel</li>
                    <li className="p-2 text_white">Livewire</li>
                    <li className="p-2 text_white">jQuery</li>
                  </>
                )}
              </ul>
              <h5 className="text_primary-color fw-5 p-2">Database</h5>
              <ul className="mx-4">
                {database && database.length > 0 ? (
                  database.map((item, index) => (
                    <li key={index} className="p-2 text_white">{item}</li>
                  ))
                ) : (
                  <>
                    <li className="p-2 text_white">MySQL</li>
                    <li className="p-2 text_white">SQLite</li>
                  </>
                )}
              </ul>
            </div>
            <div className="col-lg-6">
              <h5 className="text_primary-color fw-5 p-2">Front-End</h5>
              <ul className="mx-4">
                {frontend && frontend.length > 0 ? (
                  frontend.map((item, index) => (
                    <li key={index} className="p-2 text_white">{item}</li>
                  ))
                ) : (
                  <>
                    <li className="p-2 text_white">Bootstrap</li>
                    <li className="p-2 text_white">Tailwind</li>
                    <li className="p-2 text_white">Javascript</li>
                    <li className="p-2 text_white">Next JS</li>
                    <li className="p-2 text_white">Vue JS</li>
                  </>
                )}
              </ul>
              <h5 className="text_primary-color fw-5 p-2">Tools</h5>
              <ul className="mx-4">
                {tools && tools.length > 0 ? (
                  tools.map((item, index) => (
                    <li key={index} className="p-2 text_white">{item}</li>
                  ))
                ) : (
                  <>
                    <li className="p-2 text_white">Git</li>
                    <li className="p-2 text_white">Github</li>
                    <li className="p-2 text_white">Postman</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
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
                  className="partner-item item-1 sz-80 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/php_logo.png"
                    alt="PHP"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-2 sz-60 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/laravel_logo.png"
                    alt="Laravel"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-3 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/livewire_logo.png"
                    alt="Livewire"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-4 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/jquery_logo.png"
                    alt="jQuery"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-5 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/mysql_logo.png"
                    alt="MySQL"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-6 sz-80 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/sqlite_logo.png"
                    alt="SQLite"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-7 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/bootstrap_logo.png"
                    alt="Bootstrap"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-8 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/tailwind_logo.png"
                    alt="Tailwind"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-9 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/javascript_logo.webp"
                    alt="Javascript"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-10 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/nextjs_logo.webp"
                    alt="Next JS"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-11 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/vuejs_logo.png"
                    alt="Vue JS"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-12 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/git_logo.png"
                    alt="Git"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-1 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/github_logo.webp"
                    alt="Github"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#"
                  className="partner-item item-2 sz-100 scrolling-effect effectZoomIn"
                  data-delay="0.3"
                >
                  <Image
                    src="/assets/images/logo/postman_logo.webp"
                    alt="Postman"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
