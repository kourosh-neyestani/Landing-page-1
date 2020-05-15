import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";
// Scenes
import Home from "./scenes/Home";

const routes = [
    {
        path: "/home-1",
        component: <Home />,
    },
];

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                {routes.map((item, index) => (
                    <Route key={index} path={`${item.path}`}>
                        {item.component}
                    </Route>
                ))}
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
