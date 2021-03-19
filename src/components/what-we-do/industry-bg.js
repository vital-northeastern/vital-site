import React from "react"
import Img from "gatsby-image"

const IndustryBG = ({ title, blurb, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{blurb.industryBackgroundBlurb}</p>
      <Img className="featured" fluid={image.fluid} alt={title} />
    </div>
  )
}

export default IndustryBG
