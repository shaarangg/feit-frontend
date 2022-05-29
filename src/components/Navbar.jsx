import { useState, useEffect, useRef } from "react";
import { GoThreeBars } from "react-icons/go";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const navCenterContainer = useRef(null);
    const closeLinks = () => {
        setShowLinks(false);
    };
    useEffect(() => {
        if (showLinks) {
            navCenterContainer.current.style.height = `100vh`;
            document.body.style.overflow = "hidden";
        } else {
            navCenterContainer.current.style.height = "0px";
            document.body.style.overflow = "visible";
        }
    }, [showLinks]);

    return (
        <nav className="nav">
            <div className="navHead">
                <Link to="/" className="logo">
                    The Feit
                </Link>
                <button
                    className="navToggle"
                    onClick={() => {
                        setShowLinks(!showLinks);
                    }}
                >
                    <GoThreeBars />
                </button>
            </div>
            <div className="navCenter" ref={navCenterContainer}>
                <NavLink to="/" onClick={closeLinks}>
                    Home
                </NavLink>
                <Link to="/api" className="toggleNavEnd" onClick={closeLinks}>
                    Customer Sign In
                </Link>
                <Link to="/api" className="toggleNavEnd" onClick={closeLinks}>
                    Customer Log In
                </Link>
                <Link to="/api" className="toggleNavEnd" onClick={closeLinks}>
                    Company Sign In
                </Link>
                <Link to="/api" className="toggleNavEnd" onClick={closeLinks}>
                    Company Log In
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
