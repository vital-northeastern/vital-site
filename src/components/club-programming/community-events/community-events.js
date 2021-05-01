import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import {
  Container,
  TextContainer,
  H2Title,
  BackgroundGradient,
  Image,
  ImageContainer,
  Gradient,
  Image2,
} from "./community-events-styles"
import { ButtonContainer } from "../section-styles"

const CommunityEvents = ({
  title,
  blurb,
  ctaTitle,
  ctaLink,
  featuredImage,
  backgroundGradient,
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
        <Image2 fluid={featuredImage.fluid} alt={featuredImage.description} />
        <Gradient
          fluid={backgroundGradient.fluid}
          alt={backgroundGradient.description}
        />
      </ImageContainer>
      <BackgroundGradient>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </BackgroundGradient>
    </Container>
  )
}

export default CommunityEvents
