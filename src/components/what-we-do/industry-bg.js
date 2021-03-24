import React from "react"
import Img from "gatsby-image"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{blurb.industryBackgroundBlurb}</p>
      <Img className="featured" fluid={image.fluid} alt={imageAlt} />
    </>
  )
}

export default IndustryBG
