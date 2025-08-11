export default function Portfolio() {
    return (
        <section id="portfolio" className="section-portfolio style-1 spacing-4 section">
            <div className="heading-section mb_42">
                <div
                    className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_34">
                    Portfolio</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">
                    Featured Projects</h3>
            </div>
            <div className="tabs-content-wrap tf-grid-layout md-col-2">
                <div className="portfolio-item  "><a
                    href="assets/images/user/portfolio-item-1-1.webp"
                    data-fancybox="gallery"
                    className="img-style"><img
                        src="assets/images/user/portfolio-item-1-1.webp"
                        alt="portfolio"
                        loading="lazy" />
                    <div
                        className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">
                        Conversational AI</div>
                </a>
                    <h5 className="title font-4 text_white"><a
                        href="#"
                        className="link">AI-Powered
                        Chatbot</a></h5>
                    <div className="item-shape"><img
                        src="assets/images/item/small-comet.png"
                        alt="item" /></div>
                </div>
                <div className="portfolio-item  "><a
                    href="assets/images/user/portfolio-item-3-1.webp"
                    data-fancybox="gallery"
                    className="img-style"><img
                        src="assets/images/user/portfolio-item-3-1.webp"
                        alt="portfolio"
                        loading="lazy" />
                    <div
                        className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">
                        Predictive Analytics</div>
                </a>
                    <h5 className="title font-4 text_white"><a
                        href="#"
                        className="link">Sales Forecast
                        Dashboard</a></h5>
                    <div className="item-shape"><img
                        src="assets/images/item/small-comet.png"
                        alt="item" /></div>
                </div>
                <div className="portfolio-item  "><a
                    href="assets/images/user/portfolio-item-2-1.webp"
                    data-fancybox="gallery"
                    className="img-style"><img
                        src="assets/images/user/portfolio-item-2-1.webp"
                        alt="portfolio"
                        loading="lazy" />
                    <div
                        className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">
                        Computer Vision</div>
                </a>
                    <h5 className="title font-4 text_white"><a
                        href="#"
                        className="link">Real-Time Object
                        Detection</a></h5>
                    <div className="item-shape"><img
                        src="assets/images/item/small-comet.png"
                        alt="item" /></div>
                </div>
                <div className="portfolio-item  "><a
                    href="assets/images/user/portfolio-item-4-1.webp"
                    data-fancybox="gallery"
                    className="img-style"><img
                        src="assets/images/user/portfolio-item-4-1.webp"
                        alt="portfolio"
                        loading="lazy" />
                    <div
                        className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">
                        Resume Pro</div>
                </a>
                    <h5 className="title font-4 text_white"><a
                        href="#"
                        className="link">Resume ZenG
                        pro</a></h5>
                    <div className="item-shape"><img
                        src="assets/images/item/small-comet.png"
                        alt="item" /></div>
                </div>
            </div>
        </section>
    );
}