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
  ClubProgrammingButton,
} from "../section-styles"
import { Link } from "gatsby"

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
          <Link to={ctaLink}>
            <ClubProgrammingButton primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </ClubProgrammingButton>
          </Link>
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
