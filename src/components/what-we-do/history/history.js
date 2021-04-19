import React from "react"
import { H2 } from "../../../constants/typography"
import {
  HistoryContainer,
  Title,
  ImageContainer,
  RegularImage,
  MobileImage,
} from "./history-styles"

const History = ({ title, timeline, mobileTimeline }) => {
  return (
    <HistoryContainer>
      <Title>
        <H2>{title}</H2>
      </Title>
      <ImageContainer>
        <RegularImage src={timeline.file.url} alt={timeline.description} />
        <MobileImage src={mobileTimeline.file.url} alt={timeline.description} />
      </ImageContainer>
    </HistoryContainer>
  )
}

export default History
