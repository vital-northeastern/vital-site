import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import Img from "gatsby-image"
import {
  Container,
  TextContainer,
  H2Title,
  ButtonContainer,
  ImageContainer,
  Image,
} from "./coffee-chats-styles"

const CoffeeChats = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          <a href={ctaLink}>
            <Button padding="15px 37px" primary={true} aria-label={ctaTitle}>
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

export default CoffeeChats
