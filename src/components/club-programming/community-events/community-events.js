import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  BackgroundGradient,
  CommunityImage,
  MobileImageContainer,
  MobileGradient,
} from "./community-events-styles"
import {
  H2Title,
  ButtonContainer,
  returnAppropriateLink,
} from "../section-styles"

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
        <H2Title lineheight={true}>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          {returnAppropriateLink(ctaLink, ctaTitle)}
        </ButtonContainer>
      </TextContainer>
      <MobileImageContainer>
        <CommunityImage
          mobile={true}
          fluid={featuredImage.fluid}
          alt={featuredImage.description}
        />
        <MobileGradient
          fluid={backgroundGradient.fluid}
          alt={backgroundGradient.description}
        />
      </MobileImageContainer>
      <BackgroundGradient>
        <CommunityImage
          regular={true}
          fluid={featuredImage.fluid}
          alt={featuredImage.description}
        />
      </BackgroundGradient>
    </Container>
  )
}

export default CommunityEvents
