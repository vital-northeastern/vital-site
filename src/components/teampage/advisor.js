import React from "react"
import Img from "gatsby-image"

export default ({ name, photo, position, linkedinUrl }) => (
  <div>
    <h2>{name}</h2>
    <p className="excerpt">{position}</p>
    <p>{linkedinUrl}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img className="featured" fluid={photo.fluid} alt={name} />
    </div>
  </div>
)
