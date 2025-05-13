import { useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "../data/NavItems";

const Navbar = () => {

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

    return (
        <nav className="navbar" id="navbar">
            <div className="container">
                <div className="row">
                    <Link className="navbar__logo" to="/" onClick={closingNavItemAfterCLick}>
                        <img src="./assets/images/logo.png" alt="Woox Logo" />
                    </Link>

                    {/* Centered Menu Items */}
                    <ul className={`navbar__list ${toggler ? "active" : ""}`}>
                        {
                            NavItems.map(({ id, itemName, itemURL }) => (
                                <li key={id} className="navbar__list__item">
                                    <Link to={itemURL} onClick={closingNavItemAfterCLick}>{itemName}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Login and Book Now Buttons at the right end */}
                <div className="navbar__actions">
  <Link to="#" className="navbar__action-btn login-btn">Login</Link>
  <Link to="#" className="navbar__action-btn booknow-btn">Book Now</Link>
</div>

                    {/* Navbar Toggle for Mobile */}
                    <div className={`navbar__toggler ${toggler ? "active" : ""}`} onClick={changeToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
