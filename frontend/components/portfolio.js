import Image from "next/image";

export default function Portfolio({ projects }) {
  return (
    <section
      id="portfolio"
      className="section-portfolio style-1 spacing-4 section"
    >
      <div className="heading-section mb_42">
        <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_34">
          Portfolio
        </div>
        <h3 className="text_white fw-5 split-text effect-blur-fade">
          Featured Projects
        </h3>
      </div>
      <div className="tabs-content-wrap tf-grid-layout md-col-2">
        {projects && projects.length > 0 ? (
          projects.map((item, index) => (
            <div key={index} className="portfolio-item">
              <a
                href={item.image || "/assets/images/user/crm.png"}
                data-fancybox="gallery"
                className="img-style"
              >
                <Image
                  src={item.image || "/assets/images/user/crm.png"}
                  alt="portfolio"
                  width={600}
                  height={400}
                />
                <div className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">
                  {item.category || "Project"}
                </div>
              </a>
              <h5 className="title font-4 text_white">
                <a href={item.link || "#"} className="link">
                  {item.title}
                </a>
              </h5>
              <div className="item-shape">
                <Image
                  src="/assets/images/item/small-comet.png"
                  alt="item"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="portfolio-item">
            <a
              href="assets/images/user/crm.png"
              data-fancybox="gallery"
              className="img-style"
            >
              <Image
                src="/assets/images/user/crm.png"
                alt="portfolio"
                width={600}
                height={400}
              />
              <div className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">
                Conversational AI
              </div>
            </a>
            <h5 className="title font-4 text_white">
              <a href="#" className="link">
                AI-Powered Chatbot
              </a>
            </h5>
            <div className="item-shape">
              <Image
                src="/assets/images/item/small-comet.png"
                alt="item"
                width={50}
                height={50}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
