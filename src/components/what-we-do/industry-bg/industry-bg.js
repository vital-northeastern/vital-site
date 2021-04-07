import React from "react"
import { H2, P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Text,
  ImageContainer,
  Image,
} from "./industry-bg-styles"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2>{title}</H2>
          <P>{blurb.industryBackgroundBlurb}</P>
        </Text>
      </TextContainer>
      <ImageContainer>
        <Image src={image.fluid.src} alt={imageAlt} />
      </ImageContainer>
    </Container>
  )
}

export default IndustryBG
