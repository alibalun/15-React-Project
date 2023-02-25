import './Navbar.style.css';
import { BsFillSunFill } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

function Navbar() {
    let themeData = useContext(ThemeContext);
    let themeToggle = () => {
        let darkTheme = !themeData.darkTheme;
        themeData.setDarkTheme(darkTheme);
    }
    return (
        <>
            <div className="navbar-container">
                <h1>Notes</h1>
                <span onClick={themeToggle} className="navbar-icon"><BsFillSunFill size="42px" /></span>
            </div>
        </>
    );
}
export default Navbar;