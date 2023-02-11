import { FaRegCircle } from 'react-icons/fa';
import './Celsius.css';
function Celcius() {
    return (
        <>
            <div className="celsius-container">
                <FaRegCircle size="8px" className="celsius-icon" strokeWidth="25px"/>
                <span>C</span>
            </div>
        </>
    );
}
export default Celcius;