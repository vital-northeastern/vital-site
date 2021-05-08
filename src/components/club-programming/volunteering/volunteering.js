import React from "react"
import { P } from "../../../constants/typography"
import { Container, TextContainer } from "./volunteering-styles"
import {
  ImageContainer,
  H2Title,
  ButtonContainer,
  ClubProgrammingButton,
} from "../section-styles"
import Img from "gatsby-image"
import { Link } from "gatsby"

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
          <Link to={ctaLink}>
            <ClubProgrammingButton primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </ClubProgrammingButton>
          </Link>
        </ButtonContainer>
      </TextContainer>
    </Container>
  )
}

export default Volunteering
