import React from "react"
import { navigate } from "gatsby"
import {
  NavWrapper,
  NavBrandWrapper,
  NavLinkGroup,
  NavLink,
  NavBrand,
  NavButton,
} from "./nav-bar-styles.js"

const NavBar = () => {
  return (
    <NavWrapper>
      <NavBrandWrapper to="/">
        <NavBrand>ViTAL</NavBrand>
      </NavBrandWrapper>
      <NavLinkGroup>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/what-we-do">About</NavLink>
        <NavLink to="/whats-happening">Events</NavLink>
        <NavButton onClick={() => navigate("/get-involved")}>
          Get Involved
        </NavButton>
      </NavLinkGroup>
    </NavWrapper>
  )
}

export default NavBar
