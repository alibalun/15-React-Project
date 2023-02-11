import './Screen.css';
import Celsius from './Celsius/Celsius';
function Screen(props) {
    return (
        <>
            <div className="screen" style={{backgroundColor:props.bgColor}}>
                <span className="screen-degree">{props.degree}</span>
                <Celsius />
            </div>
        </>
    );
}
export default Screen;