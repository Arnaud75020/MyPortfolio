import React from 'react';
import "./Footer.css";

const Footer = () => {
    return ( 
        <div>
            <ul>
                <li><a href="https://www.linkedin.com/in/arnaud-duh%C3%A9-05a00b41/" target="_blank" rel="noopener noreferrer" className="footer-link">{/* <img className="about-icon" src={aedin} alt="Arnaud Photo" /> */}IN</a></li>
                <li><a href="https://www.instagram.com/arnaudduhe/?hl=fr" target="_blank" rel="noopener noreferrer" className="footer-link">IG</a></li>
                <li><a href="https://github.com/Arnaud75020" target="_blank" rel="noopener noreferrer" className="footer-link">Git</a></li>
            </ul>
        </div>
        );
}
 
export default Footer;