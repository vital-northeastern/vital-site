import React from "react"
import Img from "gatsby-image"

export default ({
  title,
  subheading,
  clubBlurb,
  ctaTitle,
  ctaLink,
  heroImage,
}) => (
  <div>
    <h1>{title}</h1>
    <p>{subheading}</p>
    <p>{clubBlurb}</p>
    <a href={ctaLink}>
      <button>{ctaTitle}</button>
    </a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img className="featured" fluid={heroImage.fluid} alt={title} />
    </div>
  </div>
)
