import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

// Sections
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Header from "./Header";
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
        path: "/portfolio-details",
        component: <PortfolioDetails />,
    },
    {
        path: "/blog",
        component: <Blog />,
    },
    {
        path: "/single-post",
        component: <SinglePost />,
    },
    {
        path: "/contact",
        component: <Contact />,
    },
];

function Home() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-3 skin-3";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Header />
            <AnimatedSwitch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                <Route exact path={path}>
                    <h3>Welcome to Home</h3>
                </Route>
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`}>
                        {item.component}
                    </Route>
                ))}
            </AnimatedSwitch>
        </div>
    );
}

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

export default Home;
