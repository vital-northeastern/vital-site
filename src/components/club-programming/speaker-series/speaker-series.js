import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { Container, TextContainer, Image } from "./speaker-series-styles"
import { H2Title, ButtonContainer, ImageContainer } from "../section-styles"

const SpeakerSeries = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title first={true}>{title}</H2Title>
        <P>{blurb.blurb}</P>
        <ButtonContainer>
          <a href={ctaLink}>
            <Button padding="17px 30px" primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </Button>
          </a>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer right={true} background={true} width="55%">
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default SpeakerSeries
