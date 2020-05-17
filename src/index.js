import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

import Demo from "./scenes/Demo";
import Home from "./scenes/Home";
import Home2 from "./scenes/Home2";
import Home3 from "./scenes/Home3";
import Home4 from "./scenes/Home4";

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
                    <Route path="/home-3">
                        <Home3 />
                    </Route>
                    <Route path="/home-4">
                        <Home4 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
