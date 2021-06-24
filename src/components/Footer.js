import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faLinkedinIn, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center py-6 text-center bg-gray-800 text-base text-gray-100 h-auto">
			<div>
				<img src={logo} className="my-2" alt="AndoPQ Software Solutions" width="150px" />
			</div>
			<div className="social-links">
				<a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faFacebookSquare} size="2x" className="transform hover:scale-110" />
				</a>
				<a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faTwitterSquare} size="2x" className="transform hover:scale-110" />
				</a>
				<a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faInstagramSquare} size="2x" className="transform hover:scale-110" />
				</a>
				<a href="https://www.linkedin.com/in/ando-solutions/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedinIn} size="2x" className="transform hover:scale-110" />
				</a>
				<a href="https://www.facebook.com/Ando-Solutions-101795728404855" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faYoutubeSquare} size="2x" className="transform hover:scale-110" />
				</a>
			</div>
			<div className="my-2">                    
				&copy; Copyright 2021 Ando Solutions
			</div>
        </footer>
    )
}

export default Footer;
