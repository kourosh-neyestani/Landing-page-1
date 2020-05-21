import React from "react";

function error404() {
    return (
        <section className="section section-error-404">
            <div className="display-center">
                <div className="error-content text-center">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <span>The page you were looking for could not be found.</span>
                </div>
            </div>
        </section>
    );
}

export default error404;
