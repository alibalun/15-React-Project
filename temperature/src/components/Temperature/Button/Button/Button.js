import './Button.css';

function Button(props) {
    return (
        <>
            <div className="button" style={{ backgroundColor: props.bgColor }} onClick={props.onClick}>
                {props.icon}
            </div>
        </>
    );
}
export default Button;