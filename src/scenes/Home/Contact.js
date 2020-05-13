import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { IoIosBasket, IoIosBasketball, IoIosColorPalette, IoIosCode, IoIosDesktop, IoIosCube, IoIosFlask, IoIosFitness, IoIosFingerPrint, IoIosHeartEmpty, IoIosMusicalNotes, IoIosRocket, IoMdPlanet, IoMdSchool, IoMdTv, IoMdWine } from "react-icons/io";

// Components
import Icon from "../../components/common/Icon";
import Headline from "../../components/common/Headline";

function Contact() {
    return (
        <section className="section section-contact section-contact-1">
            <div className="sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/contact/1.jpg)` }}>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="/#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i className="fa fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i className="fa fa-vimeo"></i>
                            </a>
                        </li>
                    </ul>
                    <p>Follow Me:</p>
                </div>
            </div>
            <div className="content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Get In Touch" divider_2={true} />
                        <form className="form form-1">
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <div className="form-item">
                                        <textarea placeholder="Your Message"></textarea>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <button type="button" className="button button-block button-primary">
                                        Send Message
                                    </button>
                                </Col>
                            </Row>
                        </form>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="PHONE" subtitle="+123 456-789-000">
                                    <IoIosDesktop />
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="EMAIL" subtitle="Example@domain.com">
                                    <IoIosDesktop />
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <Icon title="ADDRESS" subtitle="California, USA">
                                    <IoIosDesktop />
                                </Icon>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;
