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
  TextContainer,
  Text,
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
            <Text>{description}</Text>
          </TextContainer>
        </CardContent>
      </CardContentContainer>
    </CardContainer>
  )
}

export default ProgrammingCard
