import React from "react"
import PropTypes from "prop-types"
import NavBar from "../nav-bar/nav-bar"
import "./layout.css"

const Layout = ({ children, navbarStyle }) => {
  return (
    <>
      <NavBar navbarStyle={navbarStyle} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
