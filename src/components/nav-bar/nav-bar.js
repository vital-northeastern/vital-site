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

const NavBar = ({ navbarstyle }) => {
  return (
    <NavWrapper navbarstyle={navbarstyle}>
      <FlexColumn>
        <NavBrandWrapper to="/">
          <NavBrand>ViTAL</NavBrand>
        </NavBrandWrapper>
      </FlexColumn>
      <FlexColumn>
        <NavLink navbarstyle={navbarstyle} to="/">
          Home
        </NavLink>
        <NavLink navbarstyle={navbarstyle} to="/what-we-do">
          About
        </NavLink>
        <NavLink navbarstyle={navbarstyle} to="/whats-happening">
          Events
        </NavLink>
      </FlexColumn>
      <FlexColumn>
        <NavButton
          navbarstyle={navbarstyle}
          onClick={() => navigate("/get-involved")}
        >
          Get Involved
        </NavButton>
      </FlexColumn>
    </NavWrapper>
  )
}

export default NavBar
