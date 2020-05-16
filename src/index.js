import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

// Scenes
import Demo from "./scenes/Demo";
import Home from "./scenes/Home";
import Home2 from "./scenes/Home2";

const routes = [
    // {
    //     path: "/",
    //     component: <Demo />,
    // },
    {
        path: "/home-1",
        component: <Home />,
    },
    {
        path: "/home-2",
        component: <Home2 />,
    },
];

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                {routes.map((item, index) => (
                    <Route key={index} path={`${item.path}`} exact={false}>
                        {item.component}
                    </Route>
                ))}
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
