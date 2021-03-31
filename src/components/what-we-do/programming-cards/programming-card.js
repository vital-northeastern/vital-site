import React from "react"
import Img from "gatsby-image"
import { P } from "../../../constants/typography"

const ProgrammingCard = ({ key, title, description, photo, photoAlt }) => {
  return (
    <>
      <h4>{title}</h4>
      <P>{description.shortDescription}</P>
      <Img className="featured" fluid={photo.fluid} alt={photoAlt} />
    </>
  )
}

export default ProgrammingCard
