import React from "react";
import Navbar from "./Navbar";

function App() {
    return (
        <div className="home en" data-scroll-container>
            <Navbar />

            <main>
                <section id="section-hero" className="section-hero" data-set-section="hero">
                    <div className="bg"></div>
                    <div className="bg-overlay"></div>
                    <div className="catchphrase" data-aos>
                        <span className="wrapper-mask">
                            <span className="word word-1" style={{"--index": "0"}}>Edmonton's</span>
                            <span className="word word-2" style={{"--index": "1"}}>Youth</span>
                        </span>
                        <span className="wrapper-mask">
                            <span className="word word-3" style={{"--index": "2"}}>is going</span>
                        </span>
                        <span className="wrapper-mask">
                            <span className="word word-4" style={{"--index": "3"}}>DIGITAL!</span>
                        </span>
                    </div>
                    <div className="gallery">
                        <div className="item" style={{"--index": "0"}}></div>
                        <div className="item" style={{"--index": "1"}}>
                            <div className="container-img magic-hover">
                                <img src="../img/osa.jpg" alt="" />
                            </div>
                            <span className="label">Old Scona Academic</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 106 106" fill="none"
                                style={{position: "absolute", top: "3rem", right: "0"}} className="magic-hover">
                                {/* <!-- Asset borrowed from Hack the North --> */}
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M79.5891 0.138645C79.8594 0.286297 81.204 0.924696 82.5771 1.55739C83.9502 2.19008 86.1271 3.47188 87.415 4.40594L89.7564 6.10395L91.3385 5.31682C94.8444 3.57174 96.6768 2.88947 98.4048 2.68476C101.255 2.34701 101.561 3.02179 100.358 6.9813C100.226 7.41605 100.293 7.56478 100.55 7.40607C101.087 7.07367 101.05 7.66963 100.499 8.21887C100.253 8.46317 99.7319 10.286 99.3395 12.2697C98.7892 15.0526 98.4633 15.9656 97.9129 16.2659C96.7581 16.8965 96.6754 17.2745 97.5428 17.9568C98.4005 18.6316 101.688 24.3736 103.867 29.005L105.147 31.7248L103.712 32.5316C102.354 33.2948 102.031 33.3251 97.7763 33.0926C95.3015 32.9571 92.5333 32.7224 91.6249 32.5708C89.9868 32.298 88.8184 32.681 88.8184 33.4909C88.8184 33.6842 88.5331 34.1005 88.1843 34.4161C87.8355 34.7317 87.5145 35.4222 87.4706 35.9504C87.4268 36.4786 86.9499 37.6145 86.4107 38.4748C85.4663 39.9819 85.3718 40.0354 83.8343 39.9384L82.2379 39.8375L80.4136 34.7745C78.3608 29.0771 77.3204 27.4354 75.3589 26.7995C73.5225 26.2043 69.3112 24.0737 69.0113 23.5886C68.87 23.36 70.0627 21.9602 71.8288 20.2807C76.2591 16.0676 76.5058 15.3839 76.1521 8.29554C75.7009 -0.742631 75.54 0.279518 77.4492 0.0598229C78.3561 -0.0443184 79.3191 -0.00900727 79.5891 0.138645ZM100.588 8.80912C100.588 8.9072 100.508 8.98744 100.409 8.98744C100.311 8.98744 100.231 8.9072 100.231 8.80912C100.231 8.71104 100.311 8.63079 100.409 8.63079C100.508 8.63079 100.588 8.71104 100.588 8.80912ZM72.7964 16.6087C71.8309 17.6565 71.6405 17.7588 71.8958 17.0933C71.9914 16.844 72.4276 16.4218 72.8652 16.155C73.6242 15.6924 73.6209 15.7135 72.7964 16.6087ZM71.3427 18.082C71.3427 18.18 71.2624 18.2603 71.1643 18.2603C71.0663 18.2603 70.986 18.18 70.986 18.082C70.986 17.9839 71.0663 17.9036 71.1643 17.9036C71.2624 17.9036 71.3427 17.9839 71.3427 18.082Z"
                                    fill="#FFE04A" />
                            </svg>
                        </div>
                        <div className="item" style={{"--index": "2"}}>
                            <div className="container-img magic-hover">
                                <img src="../img/lillian.jpg" alt="" />
                            </div>
                            <span className="label">Lillian Osborne</span>
                        </div>
                        <div className="item" style={{"--index": "3"}}>
                            <div className="container-img magic-hover">
                                <img src="../img/mac.jpg" alt="" />
                            </div>
                            <span className="label">Archbishop MacDonald</span>
                        </div>
                        <div className="item" style={{"--index": "4"}}>
                            <div className="container-img magic-hover">
                                <img src="../img/daahs.jpg" alt="" />
                            </div>
                            <span className="label">Dr. Anne Anderson</span>
                        </div>
                        <div className="item" style={{"--index": "5"}}>
                            <div className="container-img magic-hover">
                                <img src="../img/ainlay.jpg" alt="" />
                            </div>
                            <span className="label">Harry Ainlay</span>
                        </div>
                        <div className="item" style={{"--index": "6"}}>
                            <div className="container-img magic-hover">
                                <img src="../img/gvh.jpg" alt="" />
                            </div>
                            <span className="label">Grandview Heights</span>
                        </div>
                    </div>
                </section>
                <section id="section-pitch" className="section-pitch" data-set-section="pitch">
                    <div className="container">
                        <div className="catchphrase" data-aos>
                            <span className="wrapper-mask line-1">
                                <span className="word word-1" style={{"--index": "0"}}>Technology</span>
                                <span className="word word-3" style={{"--index": "1"}}>generates</span>
                            </span>
                            <span className="wrapper-mask line-2">
                                <span className="word word-4" style={{"--index": "2"}}>positive</span>
                                <span className="word word-5" style={{"--index": "3"}}>impacts</span>
                                {/* <!-- Positive impacts, happy faces, satisfied customers --> */}
                            </span>
                            <span className="wrapper-mask line-3">
                                <span className="word word-6" style={{"--index": "4"}}>at</span>
                                <span className="word word-7" style={{"--index": "5"}}>scale</span>
                            </span>
                        </div>
                        <div className="container-img">
                            <div className="wrapper-mask">
                                <img src="../img/lillian.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-container" data-aos _='="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"
            data-aos-delay="300"'>
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
                <section id="section-newsletter" className="section-newsletter">
                    <div className="info">
                        <h3>
                            Subscribe to
                            <br />
                            our newsletter
                        </h3>
                        <p>
                            <span className="white">Giveaways! 🎉</span> Stay up to date with our latest news, events, and projects!
                            We'll email you about exciting new opportunities to improve your skills. We'll send you a free gift
                            every month!
                        </p>
                    </div>
                    <div className="form">
                        <form>
                            <input type="email" name="email" placeholder="Email" spellcheck="false" />
                            <button type="submit"><span></span></button>
                        </form>
                        <div className="loader">
                            <svg viewBox="0 0 50 50">
                                <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="1"></circle>
                            </svg>
                        </div>

                    </div>
                </section>
                <section id="section-algo" className="section-algo">
                    <canvas id="donut" width="600" height="480"
                        style={{position: "fixed; top: 40%; left: 50%", transform: "translate(-50%, calc(-50% + var(--translateY))) scale(1.0)", zIndex: "-1"}}></canvas>
                </section>
            </main>

            <footer>
                <div className="container">
                    <div className="logo">
                        <span className="logo">YEGYouth.Tech</span>
                    </div>
                    <div className="copyright">
                        &copy; 2022 YEGYouth.Tech
                    </div>
                    <div className="socials">
                        <a href="https://google.ca" target="_blank" rel="noreferrer">
                            <svg viewbox="0 0 50 50">
                                <path
                                    d="M40 0H9.58A9.59 9.59 0 000 9.58V40a9.59 9.59 0 009.58 9.58H40A9.59 9.59 0 0049.58 40V9.58A9.6 9.6 0 0040 0zm2.74 5.71h1.1v8.4h-8.38v-8.4zm-25 14a8.7 8.7 0 0114.15 0 8.62 8.62 0 011.65 5.09 8.73 8.73 0 11-15.8-5.09zM44.75 40A4.76 4.76 0 0140 44.74H9.58A4.75 4.75 0 014.83 40V19.7h7.4a13.56 13.56 0 1025.11 0h7.41z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>

            <div className="cursor-wrapper" id="wrapper-cursor">
                <div className="pointer"></div>
            </div>
        </div>
    );
}

export default App;