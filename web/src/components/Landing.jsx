import React from "react";

function Landing() {
    return (
        <section id="section-hero" className="section-hero" data-set-section="hero">
            <div className="bg"></div>
            <div className="bg-overlay"></div>
            <div className="catchphrase" data-aos>
                <span className="wrapper-mask">
                    <span className="word word-1" style={{ "--index": 0 }}>Edmonton's</span>
                    <span className="word word-2" style={{ "--index": 1 }}>Youth</span>
                </span>
                <span className="wrapper-mask">
                    <span className="word word-3" style={{ "--index": 2 }}>is going</span>
                </span>
                <span className="wrapper-mask">
                    <span className="word word-4" style={{ "--index": 3 }}>DIGITAL!</span>
                </span>
            </div>
            
            <div className="gallery">
                <div className="item" style={{ "--index": 0 }}></div>
                <div className="item" style={{ "--index": 1 }}>
                    <div className="container-img magic-hover">
                        <img src="../img/osa.jpg" alt="" />
                    </div>
                    <span className="label">Old Scona Academic</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 106 106" fill="none"
                        style={{ position: "absolute", top: "3rem", right: "0" }} className="magic-hover">
                        {/* <!-- Asset borrowed from Hack the North --> */}
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M79.5891 0.138645C79.8594 0.286297 81.204 0.924696 82.5771 1.55739C83.9502 2.19008 86.1271 3.47188 87.415 4.40594L89.7564 6.10395L91.3385 5.31682C94.8444 3.57174 96.6768 2.88947 98.4048 2.68476C101.255 2.34701 101.561 3.02179 100.358 6.9813C100.226 7.41605 100.293 7.56478 100.55 7.40607C101.087 7.07367 101.05 7.66963 100.499 8.21887C100.253 8.46317 99.7319 10.286 99.3395 12.2697C98.7892 15.0526 98.4633 15.9656 97.9129 16.2659C96.7581 16.8965 96.6754 17.2745 97.5428 17.9568C98.4005 18.6316 101.688 24.3736 103.867 29.005L105.147 31.7248L103.712 32.5316C102.354 33.2948 102.031 33.3251 97.7763 33.0926C95.3015 32.9571 92.5333 32.7224 91.6249 32.5708C89.9868 32.298 88.8184 32.681 88.8184 33.4909C88.8184 33.6842 88.5331 34.1005 88.1843 34.4161C87.8355 34.7317 87.5145 35.4222 87.4706 35.9504C87.4268 36.4786 86.9499 37.6145 86.4107 38.4748C85.4663 39.9819 85.3718 40.0354 83.8343 39.9384L82.2379 39.8375L80.4136 34.7745C78.3608 29.0771 77.3204 27.4354 75.3589 26.7995C73.5225 26.2043 69.3112 24.0737 69.0113 23.5886C68.87 23.36 70.0627 21.9602 71.8288 20.2807C76.2591 16.0676 76.5058 15.3839 76.1521 8.29554C75.7009 -0.742631 75.54 0.279518 77.4492 0.0598229C78.3561 -0.0443184 79.3191 -0.00900727 79.5891 0.138645ZM100.588 8.80912C100.588 8.9072 100.508 8.98744 100.409 8.98744C100.311 8.98744 100.231 8.9072 100.231 8.80912C100.231 8.71104 100.311 8.63079 100.409 8.63079C100.508 8.63079 100.588 8.71104 100.588 8.80912ZM72.7964 16.6087C71.8309 17.6565 71.6405 17.7588 71.8958 17.0933C71.9914 16.844 72.4276 16.4218 72.8652 16.155C73.6242 15.6924 73.6209 15.7135 72.7964 16.6087ZM71.3427 18.082C71.3427 18.18 71.2624 18.2603 71.1643 18.2603C71.0663 18.2603 70.986 18.18 70.986 18.082C70.986 17.9839 71.0663 17.9036 71.1643 17.9036C71.2624 17.9036 71.3427 17.9839 71.3427 18.082Z"
                            fill="#FFE04A" />
                    </svg>
                </div>
                <div className="item" style={{ "--index": "2" }}>
                    <div className="container-img magic-hover">
                        <img src="../img/lillian.jpg" alt="" />
                    </div>
                    <span className="label">Lillian Osborne</span>
                </div>
                <div className="item" style={{ "--index": "3" }}>
                    <div className="container-img magic-hover">
                        <img src="../img/mac.jpg" alt="" />
                    </div>
                    <span className="label">Archbishop MacDonald</span>
                </div>
                <div className="item" style={{ "--index": "4" }}>
                    <div className="container-img magic-hover">
                        <img src="../img/daahs.jpg" alt="" />
                    </div>
                    <span className="label">Dr. Anne Anderson</span>
                </div>
                <div className="item" style={{ "--index": "5" }}>
                    <div className="container-img magic-hover">
                        <img src="../img/ainlay.jpg" alt="" />
                    </div>
                    <span className="label">Harry Ainlay</span>
                </div>
                <div className="item" style={{ "--index": "6" }}>
                    <div className="container-img magic-hover">
                        <img src="../img/gvh.jpg" alt="" />
                    </div>
                    <span className="label">Grandview Heights</span>
                </div>
            </div>
        </section>
    );
}

export default Landing;