import React from "react"
import Img from "gatsby-image"
import {
  CardContainer,
  ImageContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
  CardContentContainer,
  TextContainer,
  PCardText,
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
          <TextContainer>
            <PCardText>{description}</PCardText>
          </TextContainer>
        </CardContent>
      </CardContentContainer>
    </CardContainer>
  )
}

export default ProgrammingCard
