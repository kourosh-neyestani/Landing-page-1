import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Lines } from "react-preloaders";

// Stylesheet
import "./index.scss";

// Scenes
import Home from "./scenes/Home";
import Home2 from "./scenes/Home2";
import Home4 from "./scenes/Home4";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route path="/home-1" component={Home} />
                <Route path="/home-2" component={Home2} />
                <Route path="/home-4" component={Home4} />
            </Switch>
            <Lines />
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
