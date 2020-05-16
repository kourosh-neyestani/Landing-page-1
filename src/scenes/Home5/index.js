import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Route, useRouteMatch } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

// Sections
import Header from "./Header";
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import SinglePost from "./SinglePost";
import PortfolioDetails from "./PortfolioDetails";

const routes = [
    {
        path: "/intro",
        component: <Intro />,
    },
    {
        path: "/about",
        component: <About />,
    },
    {
        path: "/service",
        component: <Service />,
    },
    {
        path: "/portfolio",
        component: <Portfolio />,
    },
    {
        path: "/portfolio/portfolio-details",
        component: <PortfolioDetails />,
    },
    {
        path: "/blog",
        component: <Blog />,
    },
    {
        path: "/blog/single-post",
        component: <SinglePost />,
    },
    {
        path: "/contact",
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

    useEffect(() => {
        document.documentElement.className = "home-5 skin-5";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <>
            <Header />
            <AnimatedSwitch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`} exact>
                        <ScrollAnimation animateIn="fadeIn" duration={1.26}>
                            {item.component}
                        </ScrollAnimation>
                    </Route>
                ))}
            </AnimatedSwitch>
        </>
    );
}

export default Home;
