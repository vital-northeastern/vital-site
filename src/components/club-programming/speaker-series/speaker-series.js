import React from "react"
import { H2, P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import {
  Container,
  TextContainer,
  Text,
  BackgroundGradient,
  Image,
} from "./speaker-series-styles"

const SpeakerSeries = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2>{title}</H2>
          <P>{blurb.blurb}</P>
          <a href={ctaLink}>
            <Button primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </Button>
          </a>
        </Text>
      </TextContainer>
      <BackgroundGradient>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </BackgroundGradient>
    </Container>
  )
}

export default SpeakerSeries
