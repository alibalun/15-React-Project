import './Footer.css';
import SocialMedia from './SocialMedia/SocialMedia';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialFacebook } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="copyright">Copyright © 2020 Tüm Hakları Saklıdır.  </div>
                <div className="socialmedia">
                    <SocialMedia icon={<SlSocialInstagram />} />
                    <SocialMedia icon={<SlSocialLinkedin />} />
                    <SocialMedia icon={<SlSocialFacebook />} />
                    <SocialMedia icon={<SlSocialGithub />} />
                </div>
            </div>
        </>
    );
}
export default Footer;