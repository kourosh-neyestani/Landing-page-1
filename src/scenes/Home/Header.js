import React, { useState, useEffect } from "react";
import { useRouteMatch, NavLink, Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

function Header() {
    let { url } = useRouteMatch();
    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setDisplaySidenav(true);
    }

    return (
        <>
            <header className="app-header">
                <div className="header-logo">
                    <Link to={`/home-1`}>NUXT</Link>
                </div>
                <Link to={`/home-1`}>
                    <button className="button button-menu" onClick={(e) => handleClick}>
                        <span></span>
                    </button>
                </Link>
                <ul className="header-nav">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}/${item.link}`} activeClassName="active">
                                <span className="count">0{index + 1}</span>
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </header>
            <Sidenav display={displaySidenav} />
        </>
    );
}

function Sidenav(props) {
    const [displaySidenav, setDisplaySidenav] = useState(props.display);

    useEffect(() => {
        setDisplaySidenav(props.display);
    }, [props]);

    let { url } = useRouteMatch();

    return (
        <div className={`app-sidenav ${displaySidenav && "active"}`}>
            <div className="sidenav-menu">
                <div className="logo">
                    <Link to={`/home-1`}>NUXT</Link>
                </div>
                <button className="button" onClick={() => setDisplaySidenav(false)}></button>
                <ul className="sidenav-nav">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}/${item.link}`} activeClassName="active">
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="sidenav-links">
                    <ul>
                        <li>
                            <a href="/">
                                <FaTwitter className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaGithub className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaInstagram className="icon" />
                            </a>
                        </li>
                    </ul>
                    <p>Follow Me</p>
                </div>
            </div>
            <span className="sidenav-close" />
        </div>
    );
}

const menuItems = [
    {
        link: `intro`,
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
