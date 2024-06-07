import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import { Hamburger, Cross } from "../../constants/icons"
import {
  NavWrapper,
  NavBrandWrapper,
  NavLink,
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
        smallIconWhite {
          file {
            url
          }
          description
        }
      }
    }
  `)

  const navLinks = [
    {
      name: "About",
      link: "/what-we-do",
    },
    {
      name: "Events",
      link: "/whats-happening",
    },
    {
      name: "Team",
      link: "/our-team",
    },
    {
      name: "VVC",
      link: "/vvc",
    },
    {
      name: "Get Involved",
      link: "/get-involved",
    },
  ]

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
          {navbarstyle === "gradient" ? (
            <img
              src={data.contentfulLogos.smallIconWhite.file.url}
              alt={data.contentfulLogos.smallIconWhite.description}
            />
          ) : (
            <img
              src={data.contentfulLogos.smallIcon.file.url}
              alt={data.contentfulLogos.smallIcon.description}
            />
          )}
        </NavBrandWrapper>
      </FlexColumn>
      <FlexColumn>
        {navLinks.slice(0, -1).map((navLink, index) => {
          return (
            <NavLink
              key={navLink.name}
              navbarstyle={navbarstyle}
              hovercolor={navbarstyle}
              to={navLink.link}
            >
              {navLink.name}
            </NavLink>
          )
        })}
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
            {navLinks.map((navLink, index) => {
              return (
                <NavLink
                  key={navLink.name}
                  navbarstyle="gradient"
                  hovercolor="mobile"
                  to={navLink.link}
                >
                  {navLink.name}
                </NavLink>
              )
            })}
          </SmallLinksContainer>
        </SmallMenuContainer>
      )}
    </NavWrapper>
  )
}

export default NavBar
