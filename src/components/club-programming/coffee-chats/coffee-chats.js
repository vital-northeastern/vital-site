import React from "react"
import { P } from "../../../constants/typography"
import Img from "gatsby-image"
import { Container, TextContainer } from "./coffee-chats-styles"
import {
  H2Title,
  ButtonContainer,
  ClubProgrammingButton,
  ImageContainer,
} from "../section-styles"

const CoffeeChats = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title lineheight={true}>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          <a href={ctaLink}>
            <ClubProgrammingButton
              morePadding={true}
              primary={true}
              aria-label={ctaTitle}
            >
              {ctaTitle}
            </ClubProgrammingButton>
          </a>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer width="45%" right={true} midLaptop={true}>
        <Img fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default CoffeeChats
