import React from "react"
import {
  CalendarSection,
  CalendarFrameLarge,
  CalendarFrameSmall,
} from "./calendar-styles"
import { HName } from "../../constants/typography"

const Calendar = ({ title, embedCode }) => {
  return (
    <CalendarSection>
      <HName>{title}</HName>
      <CalendarFrameLarge
        src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showTabs=0&showCalendars=0&src=so2vs35e6ch68vl4map499fsm0@group.calendar.google.com&ctz=America%2FNew_York"
        width="100%"
        height="600"
        scrolling="no"
      ></CalendarFrameLarge>
      <CalendarFrameSmall
        src="https://calendar.google.com/calendar/embed?showTitle=0&mode=AGENDA&showPrint=0&showTabs=0&showCalendars=0&src=so2vs35e6ch68vl4map499fsm0@group.calendar.google.com&ctz=America%2FNew_York"
        width="100%"
        height="600"
        scrolling="no"
      ></CalendarFrameSmall>
    </CalendarSection>
  )
}

export default Calendar
