import React from "react"
import { H3 } from "../../../constants/typography"
import Img from "gatsby-image"

const History = ({ title, timeline }) => {
  return (
    <>
      <H3>{title}</H3>
      <Img
        className="featured"
        fluid={timeline.fluid}
        alt={timeline.description}
      />
    </>
  )
}

export default History
