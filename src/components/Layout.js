import React from "react";
import SEO from "./SEO";
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<SEO />
			<div className="flex flex-col min-h-screen">
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout
