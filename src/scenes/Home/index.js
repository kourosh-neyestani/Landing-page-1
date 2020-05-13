import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

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

function Home() {
    let { path } = useRouteMatch();

    return (
        <div>
            <Header />
            <Switch>
                {routes.map((item, index) => (
                    <Route exact path={`${path}/${item.link}`} key={index}>
                        {item.component}
                    </Route>
                ))}
            </Switch>
        </div>
    );
}

export default Home;
