import './InfoBox.css';
import { RoutesContext } from '../../../App';
import { useContext } from 'react';

function InfoBox(props) {
    const routes_data = useContext(RoutesContext);
    const sendDataToBox = () => {
        routes_data.setInfobox({ header: props.header, about: props.about, image: props.image });
        routes_data.setOpened(true);
        document.body.style.overflow = 'hidden';
    }

    return (
        <>
            <div className="infobox">
                <img src={props.image} className="infobox-image" />
                <div className="infobox-header">{props.header}</div>
                <div className="infobox-about">{props.about}</div>
                <button className="infobox-detail" onClick={sendDataToBox}>See details</button>
            </div>
        </>
    );
}
export default InfoBox;