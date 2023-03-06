import './SocialMedia.css';
function SocialMedia(props) {
    return (
        <>
            <a href="#" className="socialmedia-icon">
                {props.icon}
            </a>
        </>
    );
}
export default SocialMedia;