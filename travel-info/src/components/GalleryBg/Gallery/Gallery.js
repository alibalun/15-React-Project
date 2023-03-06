import './Gallery.css';
import { RiCloseCircleFill } from 'react-icons/ri';
import { RoutesContext } from '../../../App';
import { useContext } from 'react';

function Gallery() {
    let gallery_data = useContext(RoutesContext);
    let clickedClose = () => {
        gallery_data.setOpened(false);
        document.body.style.overflow = 'visible';
    }
    return (
        <>
            <div className="gallery">
                <img src={gallery_data.infobox.image} className="gallery-image" />
                <div className="gallery-location">{gallery_data.infobox.header}</div>
                <div className="gallery-information">{gallery_data.infobox.about}</div>
                <div className="gallery-close" onClick={clickedClose}><RiCloseCircleFill size="24px" /></div>
            </div>
        </>
    );
}
export default Gallery;