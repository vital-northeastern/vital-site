import React from "react"
import { H2, P } from "../../../constants/typography"
import { Container, TextContainer, Image } from "./industry-bg-styles"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <Container>
      <TextContainer>
        <H2>{title}</H2>
        <P>{blurb.industryBackgroundBlurb}</P>
      </TextContainer>
      <Image fluid={image.fluid} alt={imageAlt} />
    </Container>
  )
}

export default IndustryBG
