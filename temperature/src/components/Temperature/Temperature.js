import './Temperature.css';
function Temperature(props) {
    // green yellow orange red
    return (
        <>
            <div className="temperature">
                {props.children}
            </div>
        </>
    );
}

export default Temperature;