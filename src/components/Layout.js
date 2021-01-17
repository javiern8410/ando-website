import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen">
        {children}
        <footer className="flex items-center justify-center py-6 text-center bg-gray-800 text-base text-gray-100 h-16">
          &copy; Ando Software Solutions 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
