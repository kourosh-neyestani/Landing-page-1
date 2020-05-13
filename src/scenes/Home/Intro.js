import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <section className="section section-hero section-hero-1">
            <div className="hero-content">
                <Slider className="el-slider">
                    <div className="slide">
                        <div className="image overlay-image" style={{backgroundImage: `url(/assets/images/hero/1-1.jpg)`}}></div>
                    </div>
                    <div className="slide">
                        <div className="image overlay-image" style={{backgroundImage: `url(/assets/images/hero/1-2.jpg)`}}></div>
                    </div>
                    <div className="slide">
                        <div className="image overlay-image" style={{backgroundImage: `url(/assets/images/hero/1-3.jpg)`}}></div>
                    </div>
                </Slider>
            </div>
            <div className="hero-sidebar">
                <div className="display-center">
                    <div className="content">
                        <h1>BUILD YOUR BODY STRONG YOUR BODY</h1>
                        <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit.</p>
                        <Link to="/#">
                            <button className="button button-md button-light text-primary">About Me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
