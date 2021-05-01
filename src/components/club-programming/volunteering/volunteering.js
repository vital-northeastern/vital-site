import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { Container, TextContainer } from "./volunteering-styles"
import { ImageContainer, H2Title, ButtonContainer } from "../section-styles"
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
