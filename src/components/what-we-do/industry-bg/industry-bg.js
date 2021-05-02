import React from "react"
import { H2, P } from "../../../constants/typography"
import { Container, TextContainer, Image } from "./industry-bg-styles"

const IndustryBG = ({ title, blurb, mobileImage, imageAlt }) => {
  return (
    <Container>
      <TextContainer>
        <H2>{title}</H2>
        <P>{blurb.industryBackgroundBlurb}</P>
      </TextContainer>
      <Image fluid={mobileImage.fluid} alt={imageAlt} />
    </Container>
  )
}

export default IndustryBG
