import React from "react"
import {
  CalendarSection,
  CalendarFrameLarge,
  CalendarFrameSmall,
  HexShape,
} from "./calendar-styles"
import { H2 } from "../../constants/typography"
import blue_hex from "../../images/blue_hex.svg"
const Calendar = ({ title, calendarEmbedCode }) => {
  return (
    <CalendarSection>
      <HexShape src={blue_hex} side={"left"}></HexShape>
      <HexShape src={blue_hex} side={"right"}></HexShape>

      <H2>{title}</H2>
      <CalendarFrameLarge
        src={`https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showTabs=0&showCalendars=0&src=${calendarEmbedCode}&ctz=America%2FNew_York`}
        width="100%"
        height="600"
        scrolling="no"
      ></CalendarFrameLarge>
      <CalendarFrameSmall
        src={`https://calendar.google.com/calendar/embed?showTitle=0&mode=AGENDA&showPrint=0&showTabs=0&showCalendars=0&src=${calendarEmbedCode}&ctz=America%2FNew_York`}
        width="100%"
        height="600"
        scrolling="no"
      ></CalendarFrameSmall>
    </CalendarSection>
  )
}

export default Calendar
