import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

// Scenes
import Home from "./scenes/home/Home";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route exact path="/">
                    <h1>Hello</h1>
                </Route>
                <Route path="/home-1" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
