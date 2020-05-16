import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

import Home from "./scenes/Home";
import Home2 from "./scenes/Home2";

const Root = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Demo</Link>
                    </li>
                    <li>
                        <Link to="/home-1">home 1</Link>
                    </li>
                    <li>
                        <Link to="/home-2">home 2</Link>
                    </li>
                </ul>

                <hr />

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

function Demo() {
    return (
        <div>
            <h2>Demo</h2>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
