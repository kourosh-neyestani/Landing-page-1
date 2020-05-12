import React from "react";
import { Container, Row, Col } from "react-grid-system";

function About() {
    return (
        <section class="section section-about section-about-1">
            <div class="display-full-screen">
                <div class="display-center">
                    <div class="section-title-1">
                        <Container>
                            <div class="my-avatar">
                                <img src="/assets/images/person/1.jpg" alt="My Avatar" />
                            </div>
                            <h2>I'am Miranda Smith.</h2>
                            <h3>Your new Yoga Coach.</h3>
                            <p>I'am a fitness coach base in New York since 2008, and i'am very passionate and dedicated to my work.</p>
                            <button type="button" class="button button-md button-primary">
                                Download CV
                            </button>
                        </Container>
                    </div>
                </div>
            </div>
            <div class="section-resume section-resume-1 my-resume">
                <Container>
                    <div class="box">
                        <Row nogutter>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6} className="bg-primary">
                                <div class="inner">
                                    <div class="resume-row resume-dark">
                                        <h4 class="resume-title">Resume</h4>
                                        <ul>
                                            <li>
                                                <div class="resume-item">
                                                    <div class="resume-head">
                                                        <span class="resume-icon ti-pencil-alt"></span>
                                                        <h5>Yoga Club Coach</h5>
                                                        <h6>
                                                            New York <small>(2016-2018)</small>
                                                        </h6>
                                                    </div>
                                                    <div class="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="resume-item">
                                                    <div class="resume-head">
                                                        <span class="resume-icon ti-heart"></span>
                                                        <h5>Neo Club Coach</h5>
                                                        <h6>
                                                            New York <small>(2016-2018)</small>
                                                        </h6>
                                                    </div>
                                                    <div class="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="resume-item">
                                                    <div class="resume-head">
                                                        <span class="resume-icon ti-paint-bucket"></span>
                                                        <h5>Fitness Trainer</h5>
                                                        <h6>
                                                            New York <small>(2016-2018)</small>
                                                        </h6>
                                                    </div>
                                                    <div class="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                                <div class="inner">
                                    <div class="resume-row resume-light">
                                        <h4 class="resume-title">Experience</h4>
                                        <ul>
                                            <li>
                                                <div class="resume-item">
                                                    <div class="resume-head">
                                                        <span class="resume-icon ti-pencil-alt"></span>
                                                        <h5>Yoga Club Coach</h5>
                                                        <h6>
                                                            New York <small>(2016-2018)</small>
                                                        </h6>
                                                    </div>
                                                    <div class="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="resume-item">
                                                    <div class="resume-head">
                                                        <span class="resume-icon ti-heart"></span>
                                                        <h5>Neo Club Coach</h5>
                                                        <h6>
                                                            New York <small>(2016-2018)</small>
                                                        </h6>
                                                    </div>
                                                    <div class="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="resume-item">
                                                    <div class="resume-head">
                                                        <span class="resume-icon ti-paint-bucket"></span>
                                                        <h5>Fitness Trainer</h5>
                                                        <h6>
                                                            New York <small>(2016-2018)</small>
                                                        </h6>
                                                    </div>
                                                    <div class="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default About;
