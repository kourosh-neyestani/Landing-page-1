import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="app-header">
            <div className="header-logo">
                <Link to={`/home-1`}>Mitra.</Link>
            </div>
            <Link to={`/home-1`}>
                <button type="button" className="button button-menu button-open-sidenav">
                    <span></span>
                </button>
            </Link>
            <ul className="header-nav">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>
                            <span className="count">{index + 1}</span>
                            <span className="anchor">{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}

const menuItems = [
    {
        link: "intro",
        title: "Intro",
    },
    {
        link: "about",
        title: "About Me",
    },
    {
        link: "service",
        title: "Service",
    },
    {
        link: "portfolio",
        title: "Portfolio",
    },
    {
        link: "blog",
        title: "Blog",
    },
    {
        link: "contact",
        title: "Contact",
    },
];

export default Header;
