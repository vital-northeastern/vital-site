import React from "react"
import { Button } from "../../../constants/buttons"
import { H2, P } from "../../../constants/typography"
import { Container, TextContainer, Image } from "./about-us-styles"

const AboutUs = ({ title, blurb, image, imageAlt, ctaText, ctaLink }) => {
  return (
    <Container>
      <TextContainer>
        <H2>{title}</H2>
        <P>{blurb.aboutUsBlurb}</P>
        <a href={ctaLink}>
          <Button primary={true} aria-label={ctaText}>
            {ctaText}
          </Button>
        </a>
      </TextContainer>
      <Image fluid={image.fluid} alt={imageAlt} />
    </Container>
  )
}

export default AboutUs
