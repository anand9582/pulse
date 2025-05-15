import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavItems from "../data/NavItems";

const Navbar = () => {
const [scrolled, setScrolled] = useState(false);
    const [toggler, setToggler] = useState(false);

    const changeToggle = () => {
        setToggler(!toggler);
    }

    const goToTopOfPage = () => {
        window.scrollTo(0, 0);
    }

    const closingNavItemAfterCLick = () => {
        setToggler(false);
        goToTopOfPage();
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="container">
                    <Link className="navbar__logo" to="/" onClick={closingNavItemAfterCLick}>
                        <img src="./assets/images/logo.png" alt="Woox Logo" />
                    </Link>

              <ul className={`navbar__list ${toggler ? "active" : ""}`}>
                {NavItems.map(({ id, itemName, itemURL }) => (
                    <li key={id} className="navbar__list__item">
                    <Link to={itemURL} onClick={closingNavItemAfterCLick}>
                        {itemName}
                    </Link>
                    </li>
                ))}

                <li className="navbar__list__item">
                    <Link to="#" className="navbar__action-btn login-btn d-block d-md-none">
                    Login
                    </Link>
                </li>
                </ul>



                    {/* Login and Book Now Buttons at the right end */}
                <div className="navbar__actions align-items-center">
                <Link to="#" className="navbar__action-btn login-btn d-none d-md-block">Login</Link>
                <div>
                    <Link to="#" className="navbar__action-btn booknow-btn">Book Now</Link>
                </div>
</div>

                    {/* Navbar Toggle for Mobile */}
                    <div className={`navbar__toggler ${toggler ? "active" : ""}`} onClick={changeToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;
