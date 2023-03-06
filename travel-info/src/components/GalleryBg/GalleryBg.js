import './GalleryBg.css';
import { useState } from 'react';
import Gallery from './Gallery/Gallery';
function GalleryBg() {
    let [scrollY, setScrollY] = useState(window.scrollY);
    return (
        <>
            <div className="gallerybg" style={{ top: scrollY + 'px' }}>
                <Gallery />
            </div>
        </>
    );
}
export default GalleryBg;