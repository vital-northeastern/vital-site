import React from "react"
import { H2 } from "../../../constants/typography"
import Img from "gatsby-image"

const History = ({ title, timeline }) => {
  return (
    <>
      <H2>{title}</H2>
      <Img
        className="featured"
        fluid={timeline.fluid}
        alt={timeline.description}
      />
    </>
  )
}

export default History
