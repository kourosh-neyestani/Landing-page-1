import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Lines } from 'react-preloaders';

// Stylesheet
import "./index.scss";

// Scenes
import Home from "./scenes/Home";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route path="/home-1" component={Home} />
            </Switch>
            <Lines />
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
