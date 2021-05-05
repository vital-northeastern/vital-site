import styled from "styled-components"
import { devices } from "../../constants/devices"

const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
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

export { CalendarSection, CalendarFrameLarge, CalendarFrameSmall }
