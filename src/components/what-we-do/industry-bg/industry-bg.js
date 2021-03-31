import React from "react"
import { H3, P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  ImageContainer,
  Image,
} from "./industry-bg-styles"

const IndustryBG = ({ title, blurb, image, imageAlt }) => {
  return (
    <Container>
      <TextContainer>
        <H3>{title}</H3>
        <P>{blurb.industryBackgroundBlurb}</P>
      </TextContainer>
      <ImageContainer>
        <Image src={image.fluid.src} alt={imageAlt} />
      </ImageContainer>
    </Container>
  )
}

export default IndustryBG
