import React from "react"
import { H2, P } from "../../../constants/typography"
import { Container, TextContainer, Text, Image } from "./industry-bg-styles"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2>{title}</H2>
          <P>{blurb.industryBackgroundBlurb}</P>
        </Text>
      </TextContainer>
      <Image src={image.fluid.src} alt={imageAlt} />
    </Container>
  )
}

export default IndustryBG
