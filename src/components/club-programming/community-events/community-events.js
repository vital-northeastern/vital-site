import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import Img from "gatsby-image"
import {
  Container,
  TextContainer,
  H2Title,
  ImageContainer,
  Image,
  ButtonContainer,
} from "./community-events-styles"

const CommunityEvents = ({
  title,
  blurb,
  ctaTitle,
  ctaLink,
  featuredImage,
}) => {
  return (
    <Container>
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
      <ImageContainer>
        <Img fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default CommunityEvents
