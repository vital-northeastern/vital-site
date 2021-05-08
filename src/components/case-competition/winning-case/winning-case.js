import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Image,
  H2Title,
  ButtonContainer,
  ClubProgrammingButton,
  ImageContainer,
  PCaption,
  PCaptionMobile,
} from "./winning-case-styles"

const WinningCase = ({
  title,
  blurb,
  ctaTitle,
  ctaLink,
  featuredImage,
  imageCaption,
}) => {
  return (
    <Container>
      <TextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <ClubProgrammingButton primary={false} aria-label={ctaTitle}>
              {ctaTitle}
            </ClubProgrammingButton>
          </a>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer background={true}>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
        <PCaption>{imageCaption}</PCaption>
      </ImageContainer>
      <PCaptionMobile>{imageCaption}</PCaptionMobile>
    </Container>
  )
}

export default WinningCase
