import { Link } from "gatsby"
import styled from "styled-components"

const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  height: 90px;
  background-color: #b2d1de;
  width: 100%;
  top: 0;
`

const NavBrandWrapper = styled(Link)`
  margin-left: 80px;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 38%;
  justify-content: space-between;
  margin-right: 80px;
`

const NavLink = styled(Link)`
  color: #3d3939;
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    transition: all 0.2s;
    color: black;
  }
`

const NavBrand = styled.span`
  color: #3d3939;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none
  margin-left: 20px;
  vertical-align: middle;
`

const NavButton = styled.button`
  background-color: transparent;
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3d3939;
  font-weight: 600;
  border: 1px solid black;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 20px;
  :hover {
    transition: all 0.2s;
    color: black;
    background-color: white;
  }
`

export {
  NavWrapper,
  NavBrandWrapper,
  NavLinkGroup,
  NavLink,
  NavBrand,
  NavButton,
}
