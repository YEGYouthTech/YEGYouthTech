import React, { useState } from "react";
import Helmet from "react-helmet";
import AnimatedCursor from "react-animated-cursor";
import { Waypoint } from "react-waypoint";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Pitch from "./Pitch";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function App() {
    const [currentSection, setCurrentSection] = useState("");
    const [isScroll, setIsScroll] = useState(false);

    function handleScroll(e) {
        if (e.target.scrollY >= 80) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    return (
        <div
            className="home en"
            data-scroll-container
            onScroll={handleScroll}
        >
            <AnimatedCursor
                trailingSpeed={4}
                innerSize={8}
                outerSize={15}
                innerScale={1}
                outerScale={7}
                innerStyle={{
                    backgroundColor: "#fff"
                }}
                outerStyle={{
                    backgroundColor: "rgba(150, 150, 150, 0.6)",
                    transition: "0.07s transform linear"
                }}
                clickables={[
                    ".magic-hover"
                ]}
            />

            <Helmet>
                <script defer src="./js/scroll.js"></script>
                <script defer src="./js/index.js"></script>
                <script defer src="./js/donut.js"></script>
            </Helmet>

            <Navbar currentSection={currentSection} isScroll={isScroll} />

            <main>
                <React.Fragment>
                    <Waypoint
                        onEnter={() => setCurrentSection("hero")}
                    />

                    <Landing />
                </React.Fragment>

                <React.Fragment>
                    <Waypoint
                        onEnter={() => setCurrentSection("pitch")}
                    />

                    <Pitch />
                </React.Fragment>

                <React.Fragment>
                    <Waypoint
                        onEnter={() => setCurrentSection("newsletter")}
                    />

                    <Newsletter />
                </React.Fragment>

                <section id="section-algo" className="section-algo">
                    <canvas id="donut" width="600" height="480"
                        style={{ position: "fixed; top: 40%; left: 50%", transform: "translate(-50%, calc(-50% + var(--translateY))) scale(1.0)", zIndex: "-1" }}></canvas>
                </section>
            </main>

            <React.Fragment>
                <Waypoint
                    onEnter={() => setCurrentSection("footer")}
                />

                <Footer />
            </React.Fragment>

            <div className="cursor-wrapper" id="wrapper-cursor">
                <div className="pointer"></div>
            </div>
        </div>
    );
}

export default App;