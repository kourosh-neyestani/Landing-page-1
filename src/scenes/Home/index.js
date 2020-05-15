import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Route, useRouteMatch } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

// Components
import Helmet from "../../components/common/Helmet";

// Sections
import Header from "./Header";
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const routes = [
    {
        link: `intro`,
        title: "Intro",
        component: <Intro />,
    },
    {
        link: "about",
        title: "About Me",
        component: <About />,
    },
    {
        link: "service",
        title: "Service",
        component: <Service />,
    },
    {
        link: "portfolio",
        title: "Portfolio",
        component: <Portfolio />,
    },
    {
        link: "blog",
        title: "Blog",
        component: <Blog />,
    },
    {
        link: "contact",
        title: "Contact",
        component: <Contact />,
    },
];

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transition: `all 180ms linear`,
        transform: `scale(${styles.scale}) rotate(${styles.rotate}deg)`,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
        rotate: 0,
    },
    atLeave: {
        opacity: bounce(1),
        scale: bounce(1),
        rotate: 0,
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
        rotate: bounce(0),
    },
};

function Home() {
    let { path } = useRouteMatch();

    return (
        <div>
            <Header />
            <Helmet title="Main Demo"></Helmet>
            <AnimatedSwitch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                {routes.map((item, index) => (
                    <Route exact path={`${path}/${item.link}`} key={index}>
                        <ScrollAnimation animateIn="fadeIn" duration={1.26}>
                            {item.component}
                        </ScrollAnimation>
                    </Route>
                ))}
            </AnimatedSwitch>
        </div>
    );
}

export default Home;
