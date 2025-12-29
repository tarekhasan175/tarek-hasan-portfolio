import Image from "next/image";

export default function Resume({ experiences, educations }) {
    return (
        <div id="resume" className="section-resume style-1 pb-0 spacing-5 section">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-section text-center mb_60 split-box">
                            <div className="text-label text-uppercase fw-6 text_primary-color font-3  letter-spacing-1 split-item">
                                Resume
                            </div>
                            <h2 className="heading font-2 fw-7 text_white split-item">
                                Experience
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wrapper-resume-list">
                            {experiences && experiences.length > 0 ? (
                                experiences.map((item, index) => (
                                    <div key={index} className="resume-item hover-box-item">
                                        <div className="date text-label text_white font-3 fw-6">
                                            {item.period}
                                        </div>
                                        <div className="content">
                                            <h5 className="title font-4 fw-6 text_white mb_15">
                                                {item.title}
                                            </h5>
                                            <p className="text-body-1 text_white mb_15">
                                                {item.company}
                                            </p>
                                            <p className="text-body-1 text_white">
                                                {item.description}
                                            </p>
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
                                ))
                            ) : (
                                <div className="resume-item hover-box-item">
                                    <div className="date text-label text_white font-3 fw-6">
                                        2020 - Present
                                    </div>
                                    <div className="content">
                                        <h5 className="title font-4 fw-6 text_white mb_15">
                                            AI Developer
                                        </h5>
                                        <p className="text-body-1 text_white mb_15">
                                            Google Inc.
                                        </p>
                                        <p className="text-body-1 text_white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
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
                            )}
                        </div>
                    </div>
                </div>
                <div className="row mt_60">
                    <div className="col-12">
                        <div className="heading-section text-center mb_60 split-box">
                            <h2 className="heading font-2 fw-7 text_white split-item">
                                Education
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wrapper-resume-list">
                            {educations && educations.length > 0 ? (
                                educations.map((item, index) => (
                                    <div key={index} className="resume-item hover-box-item">
                                        <div className="date text-label text_white font-3 fw-6">
                                            {item.period}
                                        </div>
                                        <div className="content">
                                            <h5 className="title font-4 fw-6 text_white mb_15">
                                                {item.degree}
                                            </h5>
                                            <p className="text-body-1 text_white mb_15">
                                                {item.institution}
                                            </p>
                                            <p className="text-body-1 text_white">
                                                {item.description}
                                            </p>
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
                                ))
                            ) : (
                                <div className="resume-item hover-box-item">
                                    <div className="date text-label text_white font-3 fw-6">
                                        2014 - 2018
                                    </div>
                                    <div className="content">
                                        <h5 className="title font-4 fw-6 text_white mb_15">
                                            Bsc in Computer Science
                                        </h5>
                                        <p className="text-body-1 text_white mb_15">
                                            University of Dhaka
                                        </p>
                                        <p className="text-body-1 text_white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
