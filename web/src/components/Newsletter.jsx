import React from "react";

function Newsletter() {
    return (
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
                    <input type="email" name="email" placeholder="Email" spellCheck="false" />
                    <button type="submit"><span></span></button>
                </form>
                <div className="loader">
                    <svg viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="1"></circle>
                    </svg>
                </div>

            </div>
        </section>
    );
}

export default Newsletter;