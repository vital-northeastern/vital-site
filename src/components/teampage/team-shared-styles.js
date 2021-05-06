import styled from "styled-components"
import { royalBlue, navyBlue } from "../../constants/colors"
import {
  fontWeights,
  HName,
  P,
  PCard,
  Connect,
} from "../../constants/typography"
import { devices } from "../../constants/devices"

const TeamPageContentContainer = styled.div`
  overflow: hidden;
`

const MemberName = styled(HName)`
  margin-bottom: 0.5em;
`

const MemberPosition = styled(P)`
  color: ${navyBlue};
  margin: 0;
  font-weight: ${fontWeights.medium};
`

const Overlay = styled.div`
  width: 100%;

  height: 100%;
  background-color: ${royalBlue};
  opacity: 0.8;
  z-index: 4;

  position: absolute;
  top: 0;

  overflow-y: auto;
  display: none;

  @media only screen and ${devices.mobileMax} {
    ${props => (props.index % 2 === 0 ? "left: 100%;" : "")}
    ${props => (props.index % 2 === 0 ? "" : "right:100%;")}
    opacity: 0.95;
  }
`

const OverlayText = styled(PCard)`
  padding: 10%;
  color: white;
  position: absolute;
  top: 0;
`

const MemberImg = styled.div`
  min-width: 50%;
  align-self: flex-start;

  position: relative;
  &:hover ${Overlay} {
    display: initial;
  }
`

const ConnectLink = styled(Connect)`
  z-index: 2;
  display: inline-block;
  align-self: flex-start;
  color: ${royalBlue};
  margin-top: 12px;
`

const MemberInfo = styled(PCard)`
  margin: 0;
`

export {
  TeamPageContentContainer,
  MemberName,
  MemberPosition,
  Overlay,
  OverlayText,
  MemberImg,
  ConnectLink,
  MemberInfo,
}
