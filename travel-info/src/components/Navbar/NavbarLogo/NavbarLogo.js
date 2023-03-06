import './NavbarLogo.css';
import { Link } from 'react-router-dom';

function NavbarLogo() {
    return (
        <>
            <Link to='/'>
                <span className="navbar-logo">City travel</span>
            </Link>
        </>
    );
}
export default NavbarLogo;