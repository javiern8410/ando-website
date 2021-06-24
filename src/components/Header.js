import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "gatsby"
import logo from "../images/logo.png";


const Header = () => {
    return (
        <header className="container mx-auto m-0 text-white font-semibold flex items-center justify-between h-16 w-full">
            <Link to="/" className="mr-2">
                <img
                    src={logo}
                    className="h-12 my-auto"
                    alt="Ando Logo"
                    title="Ando Software Solutions"
                />
            </Link>
            <a href="tel:59896800461" class="header-phone"><FontAwesomeIcon icon={faWhatsapp} size="1x" /> + (598) 96 800 461</a>
        </header>
    )
}

export default Header;