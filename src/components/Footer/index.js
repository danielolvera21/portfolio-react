import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {


    return (
        <div class="social-container">
            <a href="https://github.com/danielolvera21"
                rel="noreferrer"
                target="_blank"
                className="Github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-olvera-214a2a210/"
                rel="noreferrer"
                target="_blank"
                className="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/dj_tonedef21/"
                rel="noreferrer"
                target="_blank"
                className="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )
}

export default Footer;