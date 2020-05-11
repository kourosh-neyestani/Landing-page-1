import React from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";

// Components
import Header from "../../components/header/Header";

// Sections
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function Home() {
    let { path } = useRouteMatch();

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={path}>
                    <Intro />
                </Route>
                {routes.map((item, index) => (
                    <Route exact path={`${path}/${item.link}`} key={index}>
                        {item.component}
                    </Route>
                ))}
            </Switch>
        </div>
    );
}

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

export default Home;
