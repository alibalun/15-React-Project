import './ButtonContainer.css'
function ButtonContainer(props) {
    return (
        <>
            <div className="buttoncontainer-container">
                {props.children}
            </div>
        </>
    );
}

export default ButtonContainer;