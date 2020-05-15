import React from "react";
import { Helmet } from "react-helmet";

function PageHelmet(props) {
    const { title, children } = props;

    return (
        <Helmet>
            <title>{title} || React Multipurpose Template</title>
            <meta name="description" content="" />
            {children}
        </Helmet>
    );
}

export default PageHelmet;
