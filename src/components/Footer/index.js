import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {


    return (
        <div class="social-container">
            <a href="https://github.com/edm1001"
                rel="noreferrer"
                target="_blank"
                className="Github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/edmer-valencia-080414227/"
                rel="noreferrer"
                target="_blank"
                className="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    )
}

export default Footer;