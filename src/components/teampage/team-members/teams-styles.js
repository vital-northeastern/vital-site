import styled from "styled-components"
// import background from "./gatsby-icon.png"
import hex from "../../../images/blue_hex.svg"
import { HName, HUpper } from "../../../constants/typography"
import { navyBlue, royalBlue } from "../../../constants/colors"
import { size } from "../../../constants/devices"

const TeamContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  padding-bottom: 200px;

  @media only screen and (max-width: ${size.tablet}px) {
    padding-bottom: 30vw;
  }
`

const TeamPageTitle = styled(HUpper)`
  color: ${royalBlue};
  text-align: center;
  margin-top: 60px;
`

const TitleHolder = styled.div`
  position: relative;
`

const TeamTitle = styled(HName)`
  color: ${navyBlue};
  text-align: ${props => (props.index % 2 === 0 ? "left" : "right")};
  margin-bottom: 60px;

  @media only screen and (max-width: ${size.tablet}px) {
    text-align: initial;
  }
`

const BackgroundHex = styled.div`
  background-image: url(${hex});
  background-size: 56%;
  background-position: ${props => (props.index % 2 === 0 ? "left" : "right")};
  height: 400px;
  width: 100%;
  position: absolute;

  top: ${props => (props.index % 2 === 0 ? "-50px" : "-140px")};
  left: ${props => (props.index % 2 === 0 ? "-140px" : "40px")};
  right: ${props => (props.index % 2 === 0 ? "0" : "-80px")};

  background-repeat: no-repeat;
  transform: ${props =>
    props.index % 2 === 0 ? "rotate(25deg)" : "rotate(0deg)"};

  @media only screen and (max-width: ${size.tablet}px) {
    display: none;
  }
`

const TeamMembersContainer = styled.div``

export {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
  BackgroundHex,
  TitleHolder,
  TeamPageTitle,
}
