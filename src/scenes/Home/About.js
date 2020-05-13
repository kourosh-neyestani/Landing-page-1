import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { IoIosBasket, IoIosBasketball, IoIosColorPalette, IoIosCode, IoIosDesktop, IoIosCube, IoIosFlask, IoIosFitness, IoIosFingerPrint, IoIosHeartEmpty, IoIosMusicalNotes, IoIosRocket, IoMdPlanet, IoMdSchool, IoMdTv, IoMdWine } from "react-icons/io";

// Components
import Icon from "../../components/common/Icon";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-full-screen">
                <div className="display-center">
                    <div className="section-title-1">
                        <Container>
                            <div className="my-avatar">
                                <img src="/assets/images/person/1.jpg" alt="My Avatar" />
                            </div>
                            <h2>I'am Miranda Smith.</h2>
                            <h3>Your new Yoga Coach.</h3>
                            <p>I'am a fitness coach base in New York since 2008, and i'am very passionate and dedicated to my work.</p>
                            <button type="button" className="button button-md button-primary">
                                Download CV
                            </button>
                        </Container>
                    </div>
                </div>
            </div>
            <div className="section-resume section-resume-1 my-resume">
                <Container>
                    <div className="box">
                        <Row nogutter>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6} className="bg-primary">
                                <div className="inner">
                                    <div className="resume-row resume-dark">
                                        <h4 className="resume-title">Resume</h4>
                                        <ul>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Yoga Club Coach" subtitle="New York" small="(2016-2018)">
                                                            <IoIosBasket />
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Neo Club Coach" subtitle="New York" small="(2016-2018)">
                                                            <IoIosBasket />
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Fitness Trainer" subtitle="New York" small="(2016-2018)">
                                                            <IoIosColorPalette />
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                                <div className="inner">
                                    <div className="resume-row resume-light">
                                        <h4 className="resume-title">Experience</h4>
                                        <ul>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Yoga Club Coach" subtitle="New York" className="el-icon-dark">
                                                            <IoIosCode />
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Neo Club Coach" subtitle="New York" className="el-icon-dark">
                                                            <IoIosDesktop />
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Neo Club Coach" subtitle="New York" className="el-icon-dark">
                                                            <IoIosCube />
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
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
