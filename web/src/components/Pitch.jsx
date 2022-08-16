import React from "react";

function Pitch() {
    return (
        <section id="section-pitch" className="section-pitch" data-set-section="pitch">
            <div className="container">
                <div className="catchphrase" data-aos>
                    <span className="wrapper-mask line-1">
                        <span className="word word-1" style={{ "--index": 0 }}>Technology</span>
                        <span className="word word-3" style={{ "--index": 1 }}>generates</span>
                    </span>
                    <span className="wrapper-mask line-2">
                        <span className="word word-4" style={{ "--index": 2 }}>positive</span>
                        <span className="word word-5" style={{ "--index": 3 }}>impacts</span>
                        {/* <!-- Positive impacts, happy faces, satisfied customers --> */}
                    </span>
                    <span className="wrapper-mask line-3">
                        <span className="word word-6" style={{ "--index": 4 }}>at</span>
                        <span className="word word-7" style={{ "--index": 5 }}>scale</span>
                    </span>
                </div>
                <div className="container-img">
                    <div className="wrapper-mask">
                        <img src="../img/lillian.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="text-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"
                data-aos-delay="300">
                <p className="text-short">We inspire youth to pursue careers in technology.</p>
                <div className="text-small">
                    <p className="text-description" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"
                        data-aos-delay="300">
                        Technology is a combination of emerging subjects with growing job markets, and there has never
                        been a greater need for greater talent.
                    </p>
                    <br />
                    <p className="text-scroll" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"
                        data-aos-delay="400">
                        See how we promote growth in each of these subjects.
                    </p>
                </div>
                <span className="scroll-arrow" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"
                    data-aos-delay="500">
                    <span className="scroll-arrowhead"></span>
                    <span className="scroll-arrowhead"></span>
                    <span className="scroll-arrowhead"></span>
                </span>
            </div>
            <div className="background"></div>
        </section>
    );
}

export default Pitch;