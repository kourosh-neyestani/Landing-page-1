import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, HashRouter, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

// Stylesheet
import "./index.scss";

import Demo from "./scenes/Demo";
import Home from "./scenes/Home";
import Home2 from "./scenes/Home2";
import Home3 from "./scenes/Home3";
import Home4 from "./scenes/Home4";
import Home5 from "./scenes/Home5";

const Root = () => {
    return (
        <Router>
            <Route exact path="/">
                <Link to="/ali">ali</Link><hr />
                <Link to="/home-1">h</Link><hr />
                <Link to="/home-2">2</Link><hr />
                <Link to="/home-3">3</Link><hr />
                <Link to="/home-4">4</Link><hr />
                <Link to="/home-5">5</Link><hr />
                <Link to="/demo">demo</Link><hr />
            </Route>
            <Route path="/demo">
                <Demo />
            </Route>
            <Route path="/ali">
                <Ali />
            </Route>
            <Route path="/home-1">
                <Home />
            </Route>
            <Route path="/home-3">
                <Home3 />
            </Route>
            <Route path="/home-2">
                <Home2 />
            </Route>
            <Route path="/home-4">
                <Home4 />
            </Route>
            <Route path="/home-5">
                <Home5 />
            </Route>
        </Router>
    );
};

const Ali = () => {
    return (
        <div>
            <h1>Ali</h1>
        </div>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
