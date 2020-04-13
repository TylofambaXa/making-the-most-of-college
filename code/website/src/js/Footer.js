import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return (
        <div className="foot">
            <a href="https://www.facebook.com/BoiseStateUniversity"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="https://twitter.com/BoiseState" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a href="https://www.instagram.com/boisestateuniversity/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a href="https://www.youtube.com/user/BoiseStateUniversity"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
            <br/>
           <a href="https://www.boisestate.edu/contact/"className="contact"> Contact Us </a>
            
        </div>
    );
}
export default Footer;