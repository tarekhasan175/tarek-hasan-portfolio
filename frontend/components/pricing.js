import Image from "next/image";

export default function Pricing({ pricing }) {
    return (
        <section id="pricing"
            className="section-pricing flat-animate-tab spacing-5 section">
            <div className="heading-section mb_42">
                <div
                    className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_30">
                    Pricing</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">My
                    Pricing</h3>
            </div>
            <div className="tab-slide mb_32">
                <ul className="menu-tab d-flex align-items-center"
                    role="tablist">
                    <li className="item-slide-effect"></li>
                    <li className="nav-tab-item active"
                        role="presentation"><a
                            href="#standard-plan"
                            className="text-button tab-link fw-6 font-3 active">Standard
                            Plan</a></li>
                    <li className="nav-tab-item " role="presentation"><a
                        href="#premium-plan"
                        className="text-button tab-link fw-6 font-3 ">Premium
                        Plan</a></li>
                </ul>
            </div>
            <div className="tab-content">
                {pricing && pricing.length > 0 ? (
                    pricing.map((plan, index) => (
                        <div key={index} className={`tab-pane ${index === 0 ? 'active show' : ''}`} id={`plan-${index}`} role="tabpanel">
                            <div className="pricing-item style-1 bs-light-mode area-effect">
                                <h4 className="title" dangerouslySetInnerHTML={{ __html: plan.name }}></h4>
                                <ul className="list-check d-grid gap_8">
                                    {plan.features && plan.features.map((feature, i) => (
                                        <li key={i} className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                            <i className="icon-check"></i>{feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="wrap-pricing">
                                    <h3 className="text_white d-flex align-items-center gap_4 mb_20">
                                        {plan.price} <span className="text-caption-1 text_muted-color">{plan.unit}</span>
                                    </h3>
                                    <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                                        <span>Get Started !</span>
                                    </a>
                                </div>
                                <div className="item-shape spotlight">
                                    <Image
                                        src="/assets/images/item/small-comet.webp"
                                        alt="item"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="tab-pane active show" id="standard-plan" role="tabpanel">
                        <div className="pricing-item style-1 bs-light-mode area-effect">
                            <h4 className="title">Standard <br />Plan</h4>
                            <ul className="list-check d-grid gap_8">
                                <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                    <i className="icon-check"></i>60 keywords
                                </li>
                                <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                    <i className="icon-check"></i>6,000 monthly website visitors
                                </li>
                                <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                    <i className="icon-check"></i>8 blogs / month
                                </li>
                                <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                    <i className="icon-check"></i>10 quality backlinks / month
                                </li>
                            </ul>
                            <div className="wrap-pricing">
                                <h3 className="text_white d-flex align-items-center gap_4 mb_20">
                                    $29 <span className="text-caption-1 text_muted-color">/per hour</span>
                                </h3>
                                <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                                    <span>Get Started !</span>
                                </a>
                            </div>
                            <div className="item-shape spotlight">
                                <Image
                                    src="/assets/images/item/small-comet.webp"
                                    alt="item"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}