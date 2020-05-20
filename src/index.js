import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

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
        <BrowserRouter>
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
                    <Route path="/home-5">
                        <Home5 />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
