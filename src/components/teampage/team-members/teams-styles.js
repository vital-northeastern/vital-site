import styled from "styled-components"
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
  margin: 60px 0 90px 0;
`

const TitleHolder = styled.div`
  position: relative;
  overflow-x: clip;
  padding: 0 7%;
`

const TeamTitle = styled(HName)`
  color: ${navyBlue};
  text-align: ${props => (props.index % 2 === 0 ? "left" : "right")};
  margin-bottom: 60px;
  margin-right: ${props => (props.index % 2 === 0 ? "0" : "calc(25% - 120px)")};

  @media only screen and (max-width: ${size.tablet}px) {
    text-align: initial;
    margin-right: 0;
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
  left: ${props => (props.index % 2 === 0 ? "-180px" : "180px")};

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
