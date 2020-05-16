import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

import Demo from "./scenes/Demo";
import Home from "./scenes/Home";
import Home2 from "./scenes/Home2";

const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Demo />
                    </Route>
                    <Route path="/home-1">
                        <Home />
                    </Route>
                    <Route path="/home-2">
                        <Home2 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
