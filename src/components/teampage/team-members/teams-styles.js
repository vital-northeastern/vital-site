import styled from "styled-components"
import hex from "../../../images/blue_hex.svg"
import { HName, HUpper } from "../../../constants/typography"
import { navyBlue, royalBlue } from "../../../constants/colors"
import { size } from "../../../constants/devices"

const TeamContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  padding-bottom: 16%;

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
  margin-left: ${props => (props.index === 0 ? "7%" : 0)};

  @media only screen and (max-width: ${size.tablet}px) {
    text-align: initial;
    margin-right: 0;
    margin-left: 0;
  }
`

const BackgroundHex = styled.div`
  background-image: url(${hex});
  background-size: 50%;
  background-position: center right;
  height: 600px;
  width: 100%;
  position: absolute;

  left: ${props => (props.index % 2 === 0 ? "45%" : "55%")};
  top: 50%;
  transform: translate(-50%, -50%)
    ${props => (props.index % 2 === 0 ? "rotate(180deg)" : "rotate(0deg)")};

  background-repeat: no-repeat;

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
