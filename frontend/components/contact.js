export default function Contact() {
    return (
        <div id="contact" className="section-contact style-1 section spacing-6">
            <div className="row">
                <div className="col-lg-5">
                    <div className="heading-section mb_44">
                        <div
                            className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_33">
                            Contact</div>
                        <div className="title mb_40">
                            <h3
                                className="text_white fw-5 animationtext clip">
                                Lets <span
                                    className="tf-text s1 cd-words-wrapper text_primary-color"><span
                                        className="item-text is-visible">Design</span><span
                                            className="item-text is-hidden">Create</span><span
                                                className="item-text is-hidden">Craft</span></span>
                                Incredible
                            </h3>
                            <h3
                                className="text_white title fw-5">
                                Work Together</h3>
                        </div>
                        <div className="heading-title">
                            <div className="mb_12">
                                <h4
                                    className="text_white fw-4 mb_4">
                                    <a href="mailto:themesflat@gmail.com"
                                        className="hover-underline-link link">themesflat@gmail.com</a>
                                </h4>
                                <p
                                    className="text-caption-2 text_secondary-color font-3">
                                    Based in
                                    San
                                    Francisco,
                                    CA</p>
                            </div>
                            <ul className="list-icon d-flex">
                                <li><a href="#"
                                    className="icon-LinkedIn"></a>
                                </li>
                                <li><a href="#"
                                    className="icon-GitHub"></a>
                                </li>
                                <li><a href="#"
                                    className="icon-X"></a>
                                </li>
                                <li><a href="#"
                                    className="icon-dribbble"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <form className="form-contact bs-light-mode">
                        <div className="d-grid gap_24 mb_24">
                            <fieldset><input
                                type="text"
                                placeholder="Enter your name"
                                required=""
                                name="name"
                                value="" />
                            </fieldset>
                            <fieldset><input id="email"
                                type="email"
                                placeholder="Enter your email"
                                required=""
                                name="email"
                                value="" />
                            </fieldset>
                            <fieldset><textarea id="message"
                                rows="4"
                                placeholder="Message..."
                                name="message"
                                required=""></textarea>
                            </fieldset>
                        </div>
                        <ul className="list-tag">
                            <li><a href="#"
                                className="text_white text-body-1 font-3 ">&lt;
                                $1,000</a>
                            </li>
                            <li><a href="#"
                                className="text_white text-body-1 font-3 ">$1,000
                                -
                                $5,000</a>
                            </li>
                            <li><a href="#"
                                className="text_white text-body-1 font-3 ">$5,000
                                -
                                $10,000</a>
                            </li>
                            <li><a href="#"
                                className="text_white text-body-1 font-3 ">$10,000
                                -
                                20,000</a>
                            </li>
                            <li><a href="#"
                                className="text_white text-body-1 font-3 ">&lt;
                                $20,000</a>
                            </li>
                        </ul>
                        <div className="button-submit"><button
                            className="tf-btn style-1 animate-hover-btn"
                            type="submit"><span>Get
                                Started
                                !</span></button>
                        </div>
                        <div className="item-shape"><img
                            src="assets/images/item/small-comet.webp"
                            loading="lazy"
                            decoding="async"
                            alt="item" /></div>
                    </form>
                </div>
            </div>
        </div>
    );
}