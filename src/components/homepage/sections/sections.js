import React from "react"
import Img from "gatsby-image"

export default ({
  title,
  blurbText,
  ctaTitle,
  ctaLink,
  featuredImage,
  featuredWord,
}) => (
  <div>
    <h3>{title}</h3>
    <p className="excerpt">{blurbText.blurbText}</p>
    <a href={ctaLink}>
      <button>{ctaTitle}</button>
    </a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img className="featured" fluid={featuredImage.fluid} alt={title} />
      <h4>{featuredWord}</h4>
    </div>
  </div>
)
