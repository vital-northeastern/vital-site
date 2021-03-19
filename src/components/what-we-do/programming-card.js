import React from "react"
import Img from "gatsby-image"

const ProgrammingCard = ({ title, description, photo }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description.shortDescription}</p>
      <Img className="featured" fluid={photo.fluid} alt={title} />
    </div>
  )
}

export default ProgrammingCard
