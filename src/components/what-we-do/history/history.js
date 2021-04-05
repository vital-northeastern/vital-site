import React from "react"
import { H2 } from "../../../constants/typography"
import { RegularImage, MobileImage } from "./history-styles"

const History = ({ title, timeline, mobileTimeline }) => {
  return (
    <>
      <H2>{title}</H2>
      <RegularImage fluid={timeline.fluid} alt={timeline.description} />
      <MobileImage fluid={mobileTimeline.fluid} alt={timeline.description} />
    </>
  )
}

export default History
