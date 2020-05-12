import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const portfolio = [
    {
        name: "Web Design",
        items: [
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                image: "/assets/images/portfolio/1-1.jpg",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                image: "/assets/images/portfolio/1-2.jpg",
                thumbnail: "/assets/images/portfolio/1-2.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                image: "/assets/images/portfolio/1-3.jpg",
                thumbnail: "/assets/images/portfolio/1-3.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                image: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
        ],
    },
    {
        name: "Mobile Apps",
        items: [
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-5.jpg",
                thumbnail: "/assets/images/portfolio/1-5.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-6.jpg",
                thumbnail: "/assets/images/portfolio/1-6.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-7.jpg",
                thumbnail: "/assets/images/portfolio/1-7.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-8.jpg",
                thumbnail: "/assets/images/portfolio/1-8.jpg",
            },
        ],
    },
    {
        name: "Branding",
        items: [
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-9.jpg",
                thumbnail: "/assets/images/portfolio/1-9.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-10.jpg",
                thumbnail: "/assets/images/portfolio/1-10.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-11.jpg",
                thumbnail: "/assets/images/portfolio/1-11.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                image: "/assets/images/portfolio/1-12.jpg",
                thumbnail: "/assets/images/portfolio/1-12.jpg",
            },
        ],
    },
];

function Portfolio() {
    return (
        <section class="section section-portfolio section-portfolio-1">
            <div class="display-spacing bg-gradient-side">
                <span class="bg-color bg-dark-60"></span>
                <div class="display-screen">
                    <div class="section-title-2">
                        <Container>
                            <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                                <TabList className="el-tabs-links">
                                    {portfolio.map((category, categoryIndex) => (
                                        <Tab key={categoryIndex}>{category.name}</Tab>
                                    ))}
                                </TabList>
                                {portfolio.map((category, categoryIndex) => (
                                    <TabPanel key={categoryIndex}>
                                        <Row className="mb--30">
                                            {category.items.map((item, index) => (
                                                <Col key={index} xs={6} sm={6} md={4} lg={3} xl={3}>
                                                    <div className="portfolio-item">
                                                        <div className="portfolio-card">
                                                            <div className="portfolio-image overlay-image" style={{ backgroundImage: `url(${item.image})` }} />
                                                            <div className="content">
                                                                <Link to={item.link}>
                                                                    <span>{item.title}</span>
                                                                    <h3>{item.subtitle}</h3>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </TabPanel>
                                ))}
                            </Tabs>
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
