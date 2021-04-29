import React from "react"
import { P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import {
  Container,
  TextContainer,
  Text,
  H2Title,
  ImageContainer,
  Image,
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
        <Text>
          <H2Title>{title}</H2Title>
          <P>{blurb}</P>
        </Text>
        <a href={ctaLink}>
          <Button primary={true} aria-label={ctaTitle}>
            {ctaTitle}
          </Button>
        </a>
      </TextContainer>
      <ImageContainer>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default CommunityEvents
