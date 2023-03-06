import './Navbar.css';
import NavbarItem from "./NavbarItem/NavbarItem";
import NavbarLogo from './NavbarLogo/NavbarLogo';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar-container">
                <NavbarLogo />
                <ul className="navbar-list">
                    <Link to='/'>
                        <NavbarItem title="Home" />
                    </Link>
                    <Link to='/about'>
                        <NavbarItem title="About" />
                    </Link>
                    <Link to='/cities'>
                        <NavbarItem title="Cities" />
                    </Link>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;