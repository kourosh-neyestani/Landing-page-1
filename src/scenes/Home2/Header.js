import React, { useState } from "react";
import { useRouteMatch, NavLink, Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

// Components
import DemoOptions from "../../components/common/DemoOptions";

const menuItems = [
    {
        link: `/intro`,
        title: "Intro",
    },
    {
        link: "/about",
        title: "About Me",
    },
    {
        link: "/service",
        title: "Service",
    },
    {
        link: "/portfolio",
        title: "Portfolio",
    },
    {
        link: "/blog",
        title: "Blog",
    },
    {
        link: "/contact",
        title: "Contact",
    },
];

function Header() {
    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    let { url } = useRouteMatch();

    return (
        <>
            <header className="app-header app-header-2">
                <div className="header-logo">
                    <Link to={`/home-1`}>NUXT</Link>
                </div>
                <Link to={`/home-1`}>
                    <button className="button button-menu" onClick={(e) => handleClick(e)}>
                        <span></span>
                    </button>
                </Link>
                <ul className="header-nav">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.link}`} activeClassName="active">
                                <span className="count">0{index + 1}</span>
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </header>
            <div className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-menu">
                    <div className="logo">
                        <Link to={`${url}/home-1`}>NUXT</Link>
                    </div>
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <ul className="sidenav-nav">
                        {menuItems.map((item, index) => (
                            <li key={index} onClick={(e) => handleClick(e)}>
                                <NavLink to={`${url}${item.link}`} activeClassName="active">
                                    <span className="anchor">{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="sidenav-links">
                        <ul>
                            <li>
                                <a href="!#">
                                    <FaTwitter className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <FaGithub className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <FaInstagram className="icon" />
                                </a>
                            </li>
                        </ul>
                        <p>Follow Me</p>
                    </div>
                </div>
                <span className="sidenav-close" />
            </div>
            <DemoOptions />
        </>
    );
}

export default Header;
