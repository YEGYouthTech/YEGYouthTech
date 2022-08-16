import React from "react";

function Footer() {
    return (
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
                        <svg viewBox="0 0 50 50">
                            <path
                                d="M40 0H9.58A9.59 9.59 0 000 9.58V40a9.59 9.59 0 009.58 9.58H40A9.59 9.59 0 0049.58 40V9.58A9.6 9.6 0 0040 0zm2.74 5.71h1.1v8.4h-8.38v-8.4zm-25 14a8.7 8.7 0 0114.15 0 8.62 8.62 0 011.65 5.09 8.73 8.73 0 11-15.8-5.09zM44.75 40A4.76 4.76 0 0140 44.74H9.58A4.75 4.75 0 014.83 40V19.7h7.4a13.56 13.56 0 1025.11 0h7.41z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;