import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";

import Home from "./scenes/Home";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/home-1`}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
