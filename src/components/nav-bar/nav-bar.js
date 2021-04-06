import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { animations } from "../../constants/animations"
import { Hamburger, Cross } from "../../constants/icons"
import {
  NavWrapper,
  NavBrandWrapper,
  NavLink,
  NavBrand,
  NavButton,
  FlexColumn,
  NavigationLinks,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer,
} from "./nav-bar-styles.js"

const NavBar = ({ navbarStyle }) => {
  const [smallLinks, setSmallLinks] = useState(false)
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        setDelay(false)
        setSmallLinks(false)
      }, animations.navBarFadeLength * 1000)
      return () => clearInterval(interval)
    }
  }, [delay])

  return (
    <NavWrapper navbarStyle={navbarStyle}>
      <NavigationLinks>
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
      </NavigationLinks>
      <SmallNavLinkContainer onClick={() => setSmallLinks(true)}>
        <Hamburger />
      </SmallNavLinkContainer>
      {smallLinks && (
        <SmallMenuContainer out={delay}>
          <CrossContainer onClick={() => setDelay(true)}>
            <Cross />
          </CrossContainer>
          <SmallLinksContainer>
            <NavLink to="/what-we-do">About</NavLink>
            <NavLink to="/whats-happening">Events</NavLink>
            <NavLink to="/get-involved">Get Involved</NavLink>
          </SmallLinksContainer>
        </SmallMenuContainer>
      )}
    </NavWrapper>
  )
}

export default NavBar
