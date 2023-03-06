import './NavbarItem.css';
function NavbarItem(props) {
    return (
        <>
            <li className="navbar-item">{props.title}</li>
        </>
    );
}
export default NavbarItem;