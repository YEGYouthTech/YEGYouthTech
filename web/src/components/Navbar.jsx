import React, { useState } from "react";

function Navbar(props) {
    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

    function handleHamburgerClick() {
        setIsHamburgerClicked((prev) => !prev);
    }

    return (
        <nav data-get-section={props.currentSection} data-aos="fade-down" data-aos-duration="800" data-aos-delay="1000"
            data-aos-easing="ease-out-sine">
            <div className={props.isScroll ? "nav-wrapper navbar-scroll" : "nav-wrapper"}>
                <div className="navbar-section">
                    <div className={isHamburgerClicked ? "hamburger magic-hover clicked" : "hamburger magic-hover"} onClick={handleHamburgerClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    <div className="menu-wrap">
                        <a href="/#" className="menu-text menu-text-menu magic-hover">Menu</a>
                        <a href="/#" className="menu-text menu-text-pitch magic-hover">Pitch</a>
                        <a href="/#" className="menu-text menu-text-newsletter magic-hover">Newsletter</a>
                        <a href="/#" className="menu-text menu-text-footer magic-hover">Footer</a>
                    </div>

                    <div className={isHamburgerClicked ? "navbar-links show" : "navbar-links"}>
                        <ul>
                            <li><a href="/#" className="nav-link magic-hover" style={{ "--index": 1 }}>Home</a></li>
                            <li><a href="/#" className="nav-link magic-hover" style={{ "--index": 2 }}>Projects</a></li>
                            <li><a href="/#" className="nav-link magic-hover" style={{ "--index": 3 }}>About</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-section navbar-section-logo magic-hover">
                    <a href="/#" className="logo">YEGYouth.Tech</a>
                </div>

                <div className="navbar-section magic-hover">
                    <a className="button" href="/#">Join!</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

