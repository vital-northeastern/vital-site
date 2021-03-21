import React from "react"
import Img from "gatsby-image"

const ProgrammingCard = ({ title, description, photo, photoAlt }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{description.shortDescription}</p>
      <Img className="featured" fluid={photo.fluid} alt={photoAlt} />
    </>
  )
}

export default ProgrammingCard
