import React from "react"
import { H2 } from "../../../constants/typography"
import {
  HistoryContainer,
  Title,
  RegularImage,
  MobileImage,
} from "./history-styles"

const History = ({ title, timeline, mobileTimeline }) => {
  return (
    <HistoryContainer>
      <Title>
        <H2>{title}</H2>
      </Title>
      <RegularImage fluid={timeline.fluid} alt={timeline.description} />
      <MobileImage fluid={mobileTimeline.fluid} alt={timeline.description} />
    </HistoryContainer>
  )
}

export default History
