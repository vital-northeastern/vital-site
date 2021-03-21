import React from "react"
import Img from "gatsby-image"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{blurb.industryBackgroundBlurb}</p>
      <Img className="featured" fluid={image.fluid} alt={imageAlt} />
    </div>
  )
}

export default IndustryBG
