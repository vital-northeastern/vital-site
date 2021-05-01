import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import Img from "gatsby-image"
import { Container, TextContainer } from "./coffee-chats-styles"
import { H2Title, ButtonContainer, ImageContainer } from "../section-styles"

const CoffeeChats = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title lineheight={true}>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          <a href={ctaLink}>
            <Button padding="15px 37px" primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </Button>
          </a>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer right={true}>
        <Img fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default CoffeeChats
