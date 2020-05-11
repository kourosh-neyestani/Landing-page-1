import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

function Header() {
    let { url } = useRouteMatch();
    const [displaySidenav, setDisplaySidenav] = useState(false);

    console.log(url);

    return (
        <>
            <header className="app-header">
                <div className="header-logo">
                    <Link to={`/home-1`}>Mitra</Link>
                </div>
                <Link to={`/home-1`}>
                    <button type="button" className="button button-menu button-open-sidenav" onClick={() => setDisplaySidenav(true)}>
                        <span></span>
                    </button>
                </Link>
                <ul className="header-nav">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={`${url}/${item.link}`}>
                                <span className="count">{index + 1}</span>
                                <span className="anchor">{item.title}</span>
                            </Link>
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
                    <Link to={`/home-1`}>Mitra</Link>
                </div>
                <button className="button button-close-sidenav" onClick={() => setDisplaySidenav(false)}></button>
                <ul className="sidenav-nav">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={`${url}/${item.link}`}>
                                <span className="anchor">{item.title}</span>
                            </Link>
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
