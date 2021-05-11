import React from "react"
import { P } from "../../../constants/typography"
import { Container, TextContainer } from "./volunteering-styles"
import {
  ImageContainer,
  H2Title,
  ButtonContainer,
  returnAppropriateLink,
} from "../section-styles"
import Img from "gatsby-image"

const Volunteering = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <ImageContainer width="48%">
        <Img fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
      <TextContainer>
        <H2Title lineheight={true}>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          {returnAppropriateLink(ctaLink, ctaTitle)}
        </ButtonContainer>
      </TextContainer>
    </Container>
  )
}

export default Volunteering
