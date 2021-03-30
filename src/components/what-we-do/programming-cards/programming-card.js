import React from "react"
import Img from "gatsby-image"
import { HLower, P } from "../../../constants/typography"
import { CardContainer, ImageContainer } from "./programming-card-styles"

const ProgrammingCard = ({ key, title, description, photo, photoAlt }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Img className="featured" fluid={photo.fluid} alt={photoAlt} />
      </ImageContainer>
      <div>
        <HLower>{title}</HLower>
      </div>
      <div>
        <P>{description}</P>
      </div>
    </CardContainer>
  )
}

export default ProgrammingCard
