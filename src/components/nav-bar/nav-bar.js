import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import { Hamburger, Cross } from "../../constants/icons"
import {
  NavWrapper,
  NavBrandWrapper,
  NavLogo,
  NavLink,
  NavBrand,
  NavButton,
  FlexColumn,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer,
} from "./nav-bar-styles.js"

const NavBar = ({ navbarstyle }) => {
  const data = useStaticQuery(graphql`
    query logoQuery {
      contentfulLogos {
        smallIcon {
          file {
            url
          }
          description
        }
      }
    }
  `)

  const [smallLinks, setSmallLinks] = useState(false)
  const [crossClose, setCrossClose] = useState(false)

  useEffect(() => {
    if (crossClose) {
      const interval = setInterval(() => {
        setCrossClose(false)
        setSmallLinks(false)
      })
      return () => clearInterval(interval)
    }
  }, [crossClose])

  return (
    <NavWrapper navbarstyle={navbarstyle}>
      <FlexColumn>
        <NavBrandWrapper to="/">
          <NavLogo
            src={data.contentfulLogos.smallIcon.file.url}
            alt={data.contentfulLogos.smallIcon.description}
          />
        </NavBrandWrapper>
      </FlexColumn>
      <FlexColumn>
        <NavLink
          navbarstyle={navbarstyle}
          hoverColor={navbarstyle}
          to="/what-we-do"
        >
          About
        </NavLink>
        <NavLink
          navbarstyle={navbarstyle}
          hoverColor={navbarstyle}
          to="/whats-happening"
        >
          Events
        </NavLink>
        <NavLink
          navbarstyle={navbarstyle}
          hoverColor={navbarstyle}
          to="/our-team"
        >
          Team
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
      <SmallNavLinkContainer onClick={() => setSmallLinks(true)}>
        <FlexColumn>
          <Hamburger navbarstyle={navbarstyle} />
        </FlexColumn>
      </SmallNavLinkContainer>
      {smallLinks && (
        <SmallMenuContainer out={crossClose}>
          <CrossContainer onClick={() => setCrossClose(true)}>
            <Cross />
          </CrossContainer>
          <SmallLinksContainer>
            <NavLink
              navbarstyle="gradient"
              hoverColor="mobile"
              to="/what-we-do"
            >
              About
            </NavLink>
            <NavLink
              navbarstyle="gradient"
              hoverColor="mobile"
              to="/whats-happening"
            >
              Events
            </NavLink>
            <NavLink navbarstyle="gradient" hoverColor="mobile" to="/our-team">
              Team
            </NavLink>
            <NavLink
              navbarstyle="gradient"
              hoverColor="mobile"
              to="/get-involved"
            >
              Get Involved
            </NavLink>
          </SmallLinksContainer>
        </SmallMenuContainer>
      )}
    </NavWrapper>
  )
}

export default NavBar
