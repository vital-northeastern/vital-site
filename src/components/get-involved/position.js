import React from "react"
import Img from "gatsby-image"

export default ({ title, description, featuredImage }) => (
  <div>
    <h3>{title}</h3>
    <p className="excerpt">{description.description}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img className="featured" fluid={featuredImage.fluid} alt={title} />
    </div>
  </div>
)
