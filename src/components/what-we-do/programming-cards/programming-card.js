import React from "react"
import Img from "gatsby-image"
import { PCard } from "../../../constants/typography"
import {
  CardContainer,
  ImageContainer,
  CardLink,
  CardTitle,
  CardTitleContainer,
  TextContainer,
} from "./programming-card-styles"

const ProgrammingCard = ({ title, description, photo, photoAlt, link }) => {
  function checkExternalLink(link) {
    return link.charAt(0) !== "/"
  }

  return (
    <CardContainer>
      <ImageContainer>
        <Img fluid={photo.fluid} alt={photoAlt} />
      </ImageContainer>
      <CardLink
        href={link}
        target={checkExternalLink(link) ? "_blank" : "_self"}
        rel={checkExternalLink(link) ? "noreferrer" : ""}
      >
        <div>
          <CardTitleContainer>
            <CardTitle>{title}</CardTitle>
          </CardTitleContainer>
          <TextContainer>
            <PCard>{description}</PCard>
          </TextContainer>
        </div>
      </CardLink>
    </CardContainer>
  )
}

export default ProgrammingCard
