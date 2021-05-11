import styled from "styled-components"
import { devices } from "../../constants/devices"

const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  position: relative;
`

const HexShape = styled.img`
  position: absolute;
  z-index: -1;
  transform: scale(0.9, 0.9)
    ${props => (props.side === "left" ? "rotate(-15deg)" : "rotate(40deg)")};
  ${props => (props.side === "left" ? "left: -10%; top: -35%;" : "")}
  ${props => (props.side === "left" ? "" : "right: -10%; bottom: -30%;")}
  @media only screen and ${devices.mobileMax} {
    display: none;
  }
`

const CalendarFrameLarge = styled.iframe`
  border: none;
  max-width: 775px;
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`

const CalendarFrameSmall = styled.iframe`
  border: none;
  display: block;
  width: 90%;
  @media ${devices.tablet} {
    display: none;
  }
`

export { CalendarSection, CalendarFrameLarge, CalendarFrameSmall, HexShape }
