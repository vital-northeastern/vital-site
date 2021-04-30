import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import {
  Container,
  TextContainer,
  H2Title,
  BackgroundGradient,
  Image,
} from "./speaker-series-styles"
import { ButtonContainer } from "../section-styles"

const SpeakerSeries = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb.blurb}</P>
        <ButtonContainer>
          <a href={ctaLink}>
            <Button padding="17px 30px" primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </Button>
          </a>
        </ButtonContainer>
      </TextContainer>
      <BackgroundGradient>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </BackgroundGradient>
    </Container>
  )
}

export default SpeakerSeries
