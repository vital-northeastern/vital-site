import React from "react"
import PropTypes from "prop-types"
import NavBar from "../nav-bar/nav-bar"
import "./layout.css"
import Footer from "../footer/footer"

const Layout = ({ children, navbarstyle }) => {
  return (
    <>
      <div id="scrollTop"></div>
      <NavBar navbarstyle={navbarstyle} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
