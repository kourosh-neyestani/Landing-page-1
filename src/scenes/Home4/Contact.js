import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaTwitter, FaGithub, FaVimeo } from "react-icons/fa";

// Components
import Icon from "../../components/common/Icon";
import Headline from "../../components/common/Headline";

function Contact() {
    return (
        <section className="section section-contact section-contact-2 display-fit-screen">
            <div className="display-spacing">
                <Container className="container">
                    <Row>
                        <Col xl={8}>
                            <Headline title="Contact Us" divider_2={true} />
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
                        </Col>
                        <Col xl={4}>
                            <div className="display-center pl-30">
                                <Icon title="PHONE" subtitle="+123 456-789-000">
                                    <span className="ti-mobile"></span>
                                </Icon>
                                <Icon title="EMAIL" subtitle="Example@domain.com">
                                    <span className="ti-email"></span>
                                </Icon>
                                <Icon title="ADDRESS" subtitle="California, USA">
                                    <span className="ti-direction"></span>
                                </Icon>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
