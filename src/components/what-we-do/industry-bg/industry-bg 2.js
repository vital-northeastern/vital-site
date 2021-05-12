import React from "react"
import { H3, P } from "../../../constants/typography"
import Img from "gatsby-image"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <>
      <H3>{title}</H3>
      <P>{blurb.industryBackgroundBlurb}</P>
      <Img className="featured" fluid={image.fluid} alt={imageAlt} />
    </>
  )
}

export default IndustryBG
