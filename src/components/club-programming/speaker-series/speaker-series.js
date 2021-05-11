import React from "react"
import { P } from "../../../constants/typography"
import { Container, TextContainer, Image } from "./speaker-series-styles"
import {
  H2Title,
  ButtonContainer,
  ImageContainer,
  returnAppropriateLink,
} from "../section-styles"

const SpeakerSeries = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title first={true}>{title}</H2Title>
        <P>{blurb.blurb}</P>
        <ButtonContainer>
          {returnAppropriateLink(ctaLink, ctaTitle)}
        </ButtonContainer>
      </TextContainer>
      <ImageContainer right={true} background={true} width="55%">
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default SpeakerSeries
