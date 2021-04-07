import React from "react"
import Img from "gatsby-image"
import { PCard } from "../../../constants/typography"
import {
  CardContainer,
  ImageContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
  CardContentContainer,
  TextContainer,
} from "./programming-card-styles"

const ProgrammingCard = ({ key, title, description, photo, photoAlt }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Img fluid={photo.fluid} alt={photoAlt} />
      </ImageContainer>
      <CardContentContainer>
        <CardContent>
          <CardTitleContainer>
            <CardTitle>{title}</CardTitle>
          </CardTitleContainer>
          <TextContainer>
            <PCard>{description}</PCard>
          </TextContainer>
        </CardContent>
      </CardContentContainer>
    </CardContainer>
  )
}

export default ProgrammingCard
