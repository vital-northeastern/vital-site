import React from "react"
import { H3, P } from "../../../constants/typography"
import { Container, TextContainer, Text, Image } from "./industry-bg-styles"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H3>{title}</H3>
          <P>{blurb.industryBackgroundBlurb}</P>
        </Text>
      </TextContainer>
      <Image src={image.fluid.src} alt={imageAlt} />
    </Container>
  )
}

export default IndustryBG
