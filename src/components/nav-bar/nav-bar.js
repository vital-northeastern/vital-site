import React from "react"
import { navigate } from "gatsby"
import {
  NavWrapper,
  NavBrandWrapper,
  NavLink,
  NavBrand,
  NavButton,
  FlexColumn,
} from "./nav-bar-styles.js"

const NavBar = ({ navbarStyle }) => {
  return (
    <NavWrapper navbarStyle={navbarStyle}>
      <FlexColumn>
        <NavBrandWrapper to="/">
          <NavBrand>ViTAL</NavBrand>
        </NavBrandWrapper>
      </FlexColumn>
      <FlexColumn>
        <NavLink navbarStyle={navbarStyle} to="/">
          Home
        </NavLink>
        <NavLink navbarStyle={navbarStyle} to="/what-we-do">
          About
        </NavLink>
        <NavLink navbarStyle={navbarStyle} to="/whats-happening">
          Events
        </NavLink>
      </FlexColumn>
      <FlexColumn>
        <NavButton
          navbarStyle={navbarStyle}
          onClick={() => navigate("/get-involved")}
        >
          Get Involved
        </NavButton>
      </FlexColumn>
    </NavWrapper>
  )
}

export default NavBar
