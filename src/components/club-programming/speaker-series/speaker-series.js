import React from "react"
import { P } from "../../../constants/typography"
import { Container, TextContainer, Image } from "./speaker-series-styles"
import {
  H2Title,
  ButtonContainer,
  ClubProgrammingButton,
  ImageContainer,
} from "../section-styles"
import { Link } from "gatsby"

const SpeakerSeries = ({ title, blurb, ctaTitle, ctaLink, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title first={true}>{title}</H2Title>
        <P>{blurb.blurb}</P>
        <ButtonContainer>
          <Link to={ctaLink}>
            <ClubProgrammingButton primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </ClubProgrammingButton>
          </Link>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer right={true} background={true} width="55%">
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default SpeakerSeries
