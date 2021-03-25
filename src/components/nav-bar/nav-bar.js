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

// possible varaints are 'blue' and 'white', referring to text color etc
export default ({ variant = "blue" }) => {
  return (
    <NavWrapper>
      <FlexColumn>
        <NavBrandWrapper to="/">
          <NavBrand>ViTAL</NavBrand>
        </NavBrandWrapper>
      </FlexColumn>
      <FlexColumn>
        <NavLink variant={variant} to="/">
          Home
        </NavLink>
        <NavLink variant={variant} to="/what-we-do">
          About
        </NavLink>
        <NavLink variant={variant} to="/whats-happening">
          Events
        </NavLink>
      </FlexColumn>
      <FlexColumn>
        <NavButton variant={variant} onClick={() => navigate("/get-involved")}>
          Get Involved
        </NavButton>
      </FlexColumn>
    </NavWrapper>
  )
}
