import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

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

// Components
import Switch from "../../components/common/Switch";
import RedirectAs404 from "../../components/common/RedirectAs404";

const routes = [
    {
        exact: true,
        path: "",
        component: <Intro />,
    },
    {
        exact: false,
        path: "/about",
        component: <About />,
    },
    {
        exact: false,
        path: "/service",
        component: <Service />,
    },
    {
        exact: false,
        path: "/portfolio",
        component: <Portfolio />,
    },
    {
        exact: false,
        path: "/portfolio-details",
        component: <PortfolioDetails />,
    },
    {
        exact: false,
        path: "/blog",
        component: <Blog />,
    },
    {
        exact: false,
        path: "/single-post",
        component: <SinglePost />,
    },
    {
        exact: false,
        path: "/contact",
        component: <Contact />,
    },
];

function Home() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-2 skin-2";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Header />
            <Switch>
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`} exact={item.exact}>
                        {item.component}
                    </Route>
                ))}
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
}

export default Home;
