import React from "react";
import { Container, Row, Col } from "react-grid-system";

const demos = [
    {
        hover: true,
        link: "/home-1",
        title: "Demo 1",
        image: "/assets/images/demo/1.jpg",
    },
    {
        hover: true,
        link: "/home-2",
        title: "Demo 2",
        image: "/assets/images/demo/2.jpg",
    },
    {
        hover: true,
        link: "/home-3",
        title: "Demo 3",
        image: "/assets/images/demo/3.jpg",
    },
];

const features = [
    {
        icon: "",
        title: "Fully Responsive Layout",
        subtitle: "Responsive web design is an approach to web design that makes web pages render well on a variety of  screen sizes.",
        image: "/assets/images/demo/feature-1.png",
    },
    {
        icon: "",
        title: "SEO Friendly",
        subtitle: "Our theme is SEO friendly that aligns with your digital marketing strategies to bring more organic traffic to your website.",
        image: "/assets/images/demo/feature-2.png",
    },
    {
        icon: "",
        title: "Faster Loading",
        subtitle: "Moreover, your website speed is very important for your SEO. If your website loads fast, your ranking will be higher.",
        image: "/assets/images/demo/feature-3.png",
    },
    {
        icon: "",
        title: "Google Font",
        subtitle: "A vast collection of Google fonts are integrated with the theme. You can use any of them that goes with your branding.",
        image: "/assets/images/demo/feature-4.png",
    },
    {
        icon: "",
        title: "Creative Design",
        subtitle: "Nuxt is a bold theme that organizing content to follow natural eyes, striking balance between beautiful and visual hierarchy.",
        image: "/assets/images/demo/feature-5.png",
    },
    {
        icon: "",
        title: "Lifetime Update",
        subtitle: "Purchase our theme only once and get lifetime updates. We keep updating our products to stay up to date with latest trends.",
        image: "/assets/images/demo/feature-6.png",
    },
    {
        icon: "",
        title: "Mobile Optimized",
        subtitle: "A mobile optimized site is a far more advanced website. Mobile optimized means that the site will reformat itself for a list of devices.",
        image: "/assets/images/demo/feature-7.png",
    },
    {
        icon: "",
        title: "React Icons",
        subtitle: "This theme comes with high quality icons from React Icons. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-8.png",
    },
    {
        icon: "",
        title: "Themify Icons",
        subtitle: "This theme comes with high quality icons from Themify. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-9.png",
    },
];

function Demo() {
    return (
        <div className="theme-preview">
            <header className="theme-preview-header">
                <div className="header-logo">
                    <a href="#">NUXT</a>
                </div>
                <button type="button" className="button button-lg button-primary">
                    <span className="wave"></span>
                    <span className="text">BYU NOW</span>
                </button>
            </header>
            <div className="theme-preview-hero">
                <Container className="container">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="display-full-screen">
                                <div className="display-center">
                                    <header className="el-heading el-heading-side">
                                        <span className="label">ReactJS Template.</span>
                                        <h1>Creating Easier Solutions</h1>
                                        <p>Let's Work Together. We can help to develop your business. We provide the best service that comes with the best results.</p>
                                    </header>
                                    <button type="button" className="button button-lg button-line-light text-primary">
                                        <span className="text">LIVE DEMO</span>
                                    </button>
                                    <button type="button" className="button button-lg button-primary">
                                        <span className="wave"></span>
                                        <span className="text">PURCHASE</span>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ul className="mockups mockups-1">
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/1.jpg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/2.jpg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/3.jpg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/4.jpg" alt="Mockup" />
                        </div>
                    </li>
                </ul>
                <ul className="mockups mockups-2">
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/5.jpg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/6.jpg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/7.jpg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/8.jpg" alt="Mockup" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="theme-preview-empty overlay-color">
                <div className="bg-image overlay-image" style={{ backgroundImage: `url(/assets/images/demo/demo.jpg)` }}></div>
                <span className="bg-color bg-dark-60"></span>
                <div className="display-spacing"></div>
            </div>
            <div className="theme-preview-demos">
                <div className="display-spacing">
                    <Container className="container">
                        <div className="theme-preview-heading">
                            <h2>Choose your Concept</h2>
                            <h3>Multi Demos for Your Purposes.</h3>
                        </div>
                        <Row>
                            {demos.map((item, index) => (
                                <Col key={index} xs={12} md={12} lg={6} xl={4}>
                                    <div className="item">
                                        <a href={item.link}>
                                            <img src={item.image} alt={item.title} />
                                            <h4>{item.title}</h4>
                                        </a>
                                    </div>
                                </Col>
                            ))}
                            <Col xs={12} md={12} lg={6} xl={4}>
                                <div className="item">
                                    <img src="/assets/images/demo/0.jpg" alt="Coming Soon" />
                                    <h4>
                                        Demo 4 <small>| Coming Soon</small>
                                    </h4>
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={6} xl={4}>
                                <div className="item">
                                    <img src="/assets/images/demo/0.jpg" alt="Coming Soon" />
                                    <h4>
                                        Demo 5 <small>| Coming Soon</small>
                                    </h4>
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={6} xl={4}>
                                <div className="item">
                                    <img src="/assets/images/demo/0.jpg" alt="Coming Soon" />
                                    <h4>
                                        Demo 6 <small>| Coming Soon</small>
                                    </h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="theme-preview-ca overlay-color" style={{ backgroundImage: `url(/assets/images/demo/demo.jpg)` }}>
                <span className="bg-color bg-dark-60"></span>
                <div className="display-center">
                    <h4>
                        Create your dream
                        <br />
                        site with <span>Nuxt</span> Template!
                    </h4>
                    <a href="#" className="button button-md button-primary">
                        <span className="wave"></span>
                        <span className="text">PURCHASE NOW</span>
                    </a>
                </div>
            </div>
            <div className="theme-preview-features">
                <div className="display-spacing">
                    <Container className="container">
                        <div className="theme-preview-heading">
                            <h2>Why Choose Us?</h2>
                            <h3>Our Awesome key features.</h3>
                        </div>
                        <Row>
                            {features.map((item, index) => (
                                <Col key={index} xs={12} md={12} lg={6} xl={4}>
                                    <div className="item">
                                        <div className="image overlay-image" style={{backgroundImage: `url(${item.image})`}}></div>
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Demo;