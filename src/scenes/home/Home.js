import React from "react";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

// Components
import Header from "../../components/header/Header";

function Home() {
    let { path } = useRouteMatch();

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}






function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div className="display-spacing">
            <h3>{topicId}</h3>
        </div>
    );
}

export default Home;
