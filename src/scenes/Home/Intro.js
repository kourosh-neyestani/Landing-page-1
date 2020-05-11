import React from "react";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <section className="section section-hero section-hero-1">
            <div className="hero-content"></div>
            <div className="hero-sidebar">
                <div className="display-center">
                    <div className="content">
                        <h1>BUILD YOUR BODY STRONG</h1>
                        <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit.</p>
                        <Link tp="/#">
                            <button className="button button-md button-light text-primary">About Me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
