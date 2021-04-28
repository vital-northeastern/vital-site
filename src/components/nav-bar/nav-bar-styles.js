import { Link } from "gatsby"
import styled from "styled-components"
import { fonts } from "../../constants/typography"
import { white, navyBlue, royalBlue } from "../../constants/colors"
import { devices, padding } from "../../constants/devices"

const NavWrapper = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  background-color: transparent;
  @media ${devices.mobile} {
    padding: 10px ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding: 10px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 15px ${padding.laptop};
  }
  @media ${devices.desktop} {
    padding: 22px 120px 15px;
  }
  align-items: center;
  font-family: ${fonts.nav};
  height: 90px;
  width: 100%;
`

const NavBrandWrapper = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

const FlexColumn = styled.div`
  flex: 1;
  display: flex;
  &:nth-child(1) {
    justify-content: flex-start;
  }
  &:nth-child(2) {
    justify-content: center;
  }
  &:nth-child(3) {
    justify-content: flex-end;
  }
  @media ${devices.tabletMax} {
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(4) {
      justify-content: flex-end;
    }
  }
`

const NavLink = styled(Link)`
  color: ${props => (props.navbarstyle === "gradient" ? white : navyBlue)};
  font-size: 14px;
  letter-spacing: 0.1em;
  line-height: 16px;
  font-family: ${fonts.nav};
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s;
  margin-left: 25px;
  margin-right: 25px;
  z-index: 10;
  :hover {
    transition: all 0.2s;
    color: ${props => (props.hoverColor === "gradient" ? navyBlue : royalBlue)};
  }
  @media ${devices.tabletMax} {
    line-height: 12px;
  }
  @media ${devices.desktop} {
    font-size: 16px;
  }
`

const NavLogo = styled.img`
  @media ${devices.mobile} {
    width: 18%;
  }
  @media ${devices.tablet} {
    width: 20%;
  }
  margin-top: 3rem;
`

const NavButton = styled.button`
  justify-self: flex-end;
  background-color: transparent;
  font-family: ${fonts.button};
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => (props.navbarstyle === "gradient" ? white : navyBlue)};
  font-weight: 300;
  border: 1px solid;
  border-color: ${props =>
    props.navbarstyle === "gradient" ? white : navyBlue};
  padding: 9px 28px;
  border-radius: 20px;
  z-index: 10;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  @media ${devices.desktop} {
    font-size: 14px;
    padding: 10px 30px;
  }
`

const SmallNavLinkContainer = styled.div`
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobile} {
    position: relative;
    display: inline-flex;
    float: right;
    margin: 0.7rem 0.1rem 0rem 0rem;
    z-index: 1;
  }
  @media ${devices.laptop} {
    display: none;
  }
`

const SmallMenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  transition: all 0.25s;
  background: ${navyBlue};
  top: 1rem;
  right: 1rem;
  border-radius: 9%;
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media ${devices.laptop} {
    display: none;
  }
`

const SmallLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 0.9rem 0;
  > * {
    margin: 0.9rem;
  }
`

const CrossContainer = styled.div`
  position: relative;
  margin: 0.4rem auto auto 85%;
  &:hover {
    cursor: pointer;
  }
`

export {
  NavWrapper,
  NavBrandWrapper,
  NavLogo,
  NavLink,
  NavButton,
  FlexColumn,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer,
}
