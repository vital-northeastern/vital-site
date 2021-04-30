import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import {
  Container,
  TextContainer,
  H2Title,
  ButtonContainer,
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
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          <a href={ctaLink}>
            <Button padding="17px 30px" primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </Button>
          </a>
        </ButtonContainer>
      </TextContainer>
    </Container>
  )
}

export default Volunteering
