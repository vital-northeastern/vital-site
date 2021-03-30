import React from "react"
import Img from "gatsby-image"
import { HLower, P } from "../../../constants/typography"
import {
  CardContainer,
  ImageContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
  CardContentContainer,
} from "./programming-card-styles"

const ProgrammingCard = ({ key, title, description, photo, photoAlt }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Img className="featured" fluid={photo.fluid} alt={photoAlt} />
      </ImageContainer>
      <CardContentContainer>
        <CardContent>
          <CardTitleContainer>
            <CardTitle>{title}</CardTitle>
          </CardTitleContainer>
          <div>
            <P>{description}</P>
          </div>
        </CardContent>
      </CardContentContainer>
    </CardContainer>
  )
}

export default ProgrammingCard
