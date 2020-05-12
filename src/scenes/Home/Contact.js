import React from "react";
import { Container, Row, Col } from "react-grid-system";

function Contact() {
    return (
        <section class="section section-contact section-contact-1">
            <div class="sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/contact/1.jpg)` }}>
                <div class="social-links">
                    <ul>
                        <li>
                            <a href="/#">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i class="fa fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i class="fa fa-vimeo"></i>
                            </a>
                        </li>
                    </ul>
                    <p>Follow Me:</p>
                </div>
            </div>
            <div class="content">
                <div class="display-spacing">
                    <Container>
                        <form class="form form-1">
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <div class="form-item">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div class="form-item">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <div class="form-item">
                                        <textarea placeholder="Your Message"></textarea>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <button type="button" class="button button-block button-primary">
                                        Send Message
                                    </button>
                                </Col>
                            </Row>
                        </form>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <div class="card-icon">
                                    <span class="icon ti-mobile"></span>
                                    <span class="title">PHONE</span>
                                    <span class="subtitle">+123 456-789-000</span>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <div class="card-icon">
                                    <span class="icon ti-email"></span>
                                    <span class="title">EMAIL</span>
                                    <span class="subtitle">Example@domain.com</span>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <div class="card-icon">
                                    <span class="icon ti-direction"></span>
                                    <span class="title">ADDRESS</span>
                                    <span class="subtitle">California, USA</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;
