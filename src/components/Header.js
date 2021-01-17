import React from 'react';
import { Link } from "gatsby"

const Header = () => {
    return (
        <header className="m-0 bg-gray-800 text-white font-semibold flex items-center justify-center h-16 w-full">
            <h1 className="">
                <Link to="/" className="mr-2">
                    Ando Solutions
                </Link>
            </h1>
            <h1>
                <Link to="/about" className="mr-2">
                    About
                </Link>
            </h1>
        </header>
    )
}

export default Header;