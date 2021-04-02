import { Link } from "gatsby"
import styled from "styled-components"
import { fonts } from "../../constants/typography"
import { white, navyBlue, darkGray } from "../../constants/colors"

const NavWrapper = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  background-color: transparent;
  padding: 15px 0;
  align-items: center;
  font-family: ${fonts.body};
  height: 90px;
  width: 100%;
`

const NavBrandWrapper = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
  margin-left: 50px;
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
`

const NavLink = styled(Link)`
  color: ${props => (props.navbarStyle === "gradient" ? white : navyBlue)};
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 22px;
  :hover {
    transition: all 0.2s;
    color: black;
  }
`

const NavBrand = styled.span`
  color: ${darkGray};
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none
  margin-left: 20px;
  vertical-align: middle;
`

const NavButton = styled.button`
  justify-self: flex-end;
  background-color: transparent;
  font-family: ${fonts.body};
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => (props.navbarStyle === "gradient" ? white : navyBlue)};
  font-weight: 400;
  border: 1px solid;
  border-color: ${props =>
    props.navbarStyle === "gradient" ? white : navyBlue};
  padding: 10px 27px;
  border-radius: 20px;
  margin-right: 50px;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

export { NavWrapper, NavBrandWrapper, NavLink, NavBrand, NavButton, FlexColumn }
