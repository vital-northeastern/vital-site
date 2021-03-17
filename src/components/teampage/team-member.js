import React from "react"
import Img from "gatsby-image"

export default ({ name, photo, email, major, position, linkedinUrl, team }) => (
  <div>
    <h2>{name}</h2>
    <p className="excerpt">{email}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img className="featured" fluid={photo.fluid} alt={name} />
    </div>
  </div>
)
