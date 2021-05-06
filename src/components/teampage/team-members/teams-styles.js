import styled from "styled-components"
import { H2, HUpper } from "../../../constants/typography"
import { navyBlue, royalBlue } from "../../../constants/colors"
import { size } from "../../../constants/devices"

const TeamContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  padding-bottom: 16%;

  @media only screen and (max-width: ${size.tablet}px) {
    padding-bottom: 30vw;
  }
  @media only screen and (max-width: ${size.mobileMax}px) {
    padding-bottom: 10vw;
  }
`

const TeamPageTitle = styled(HUpper)`
  color: ${royalBlue};
  text-align: center;
  margin: 60px 0 90px 0;
`

const TitleHolder = styled.div`
  position: relative;

  padding: 0 7%;
`

const TeamTitle = styled(H2)`
  color: ${navyBlue};
  text-align: ${props => (props.index % 2 === 0 ? "left" : "right")};
  margin-bottom: 2em;
  margin-right: ${props => (props.index % 2 === 0 ? "0" : "calc(25% - 120px)")};
  margin-left: ${props => (props.index === 0 ? "7%" : 0)};

  @media only screen and (max-width: ${size.tablet}px) {
    text-align: initial;
    margin-bottom: 1.5em;
    margin-right: 0;
    margin-left: 0;
  }
`

const BgHexImg = styled.img`
  position: absolute;
  z-index: -1;
  top: -350px;
  transform: ${props =>
    props.index % 2 === 0 ? "rotate(30deg)" : "rotate(0deg)"};
  ${props => (props.index % 2 === 0 ? "left: -10%;" : "")}
  ${props => (props.index % 2 === 0 ? "" : "right: -10%;")}
  @media only screen and (max-width: ${size.laptop}px) {
    ${props => (props.index % 2 === 0 ? "left: -20%;" : "")}
    ${props => (props.index % 2 === 0 ? "" : "right: -20%;")}
    transform: ${props =>
      props.index % 2 === 0 ? "rotate(30deg)" : "rotate(0deg)"}
      scale(0.7, 0.7);
  }
  @media only screen and (max-width: ${size.tablet}px) {
    display: none;
  }
`

const TeamMembersContainer = styled.div``

export {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
  TitleHolder,
  TeamPageTitle,
  BgHexImg,
}
