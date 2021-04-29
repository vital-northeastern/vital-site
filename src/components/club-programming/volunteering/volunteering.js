import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import {
  Container,
  TextContainer,
  Text,
  H2Title,
  ImageContainer,
  Image,
} from "./volunteering-styles"

const Volunteering = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <ImageContainer>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
      <TextContainer>
        <Text>
          <H2Title>{title}</H2Title>
          <P>{blurb}</P>
        </Text>
        <a href={ctaLink}>
          <Button primary={true} aria-label={ctaTitle}>
            {ctaTitle}
          </Button>
        </a>
      </TextContainer>
    </Container>
  )
}

export default Volunteering
