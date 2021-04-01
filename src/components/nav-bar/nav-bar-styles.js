import { Link } from "gatsby"
import styled from "styled-components"

const NavWrapper = styled.nav`
  display: flex;
  background-color: ${props =>
    props.navbarStyle === "gradient" ? "red" : "transparent"};
  padding: 15px 0;
  align-items: center;
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
`
//   margin-left: ${props => (props.index % 2 === 0 ? "0" : "60px")};

const NavLink = styled(Link)`
  color: ${props => (props.navbarStyle === "gradient" ? "white" : "#001049")};
  font-family: "Work Sans", sans-serif;
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
  justify-self: flex-end;
  background-color: transparent;
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${props => (props.navbarStyle === "gradient" ? "white" : "001049")};
  font-weight: 600;
  border: 1px solid;
  border-color: ${props =>
    props.navbarStyle === "gradient" ? "white" : "001049"};
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 20px;
`

export { NavWrapper, NavBrandWrapper, NavLink, NavBrand, NavButton, FlexColumn }
