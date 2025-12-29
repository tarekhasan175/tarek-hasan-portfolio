import Image from "next/image";

export default function Service({ services }) {
    return (
        <div id="services" className="section-service section spacing-5">
            <div className="heading-section mb_43">
                <div
                    className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_33">
                    Services</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">AI
                    Solutions That Matter</h3>
            </div>
            {services && services.length > 0 ? (
                services.map((item, index) => (
                    <div key={index} className="service-item area-effect scrolling-effect effectBottom">
                        <div className="content-inner d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center content">
                                <span className="number text-label text_muted-color font-3">
                                    {String(index + 1).padStart(2, '0')}/
                                </span>
                                <h5 className="text_white font-4">
                                    <a href="#contact" className="link">
                                        {item.title}
                                    </a>
                                </h5>
                            </div>
                            <a href="#contact" className="btn-arrow" aria-label="See service">
                                <i className="icon-ArrowRight"></i>
                            </a>
                            <div className="item-shape spotlight">
                                <Image
                                    src="/assets/images/item/small-comet.webp"
                                    alt="item"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="img-hover">
                            <Image
                                alt="item"
                                width={140}
                                height={140}
                                src={item.image || "/assets/images/item/service-item-1.webp"}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className="service-item area-effect scrolling-effect effectBottom">
                    <div className="content-inner d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center content">
                            <span className="number text-label text_muted-color font-3">01/</span>
                            <h5 className="text_white font-4">
                                <a href="#contact" className="link">
                                    Custom AI Solutions
                                </a>
                            </h5>
                        </div>
                        <a href="#contact" className="btn-arrow" aria-label="See service">
                            <i className="icon-ArrowRight"></i>
                        </a>
                        <div className="item-shape spotlight">
                            <Image
                                src="/assets/images/item/small-comet.webp"
                                alt="item"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <div className="img-hover">
                        <Image
                            alt="item"
                            width={140}
                            height={140}
                            src="/assets/images/item/service-item-1.webp"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}