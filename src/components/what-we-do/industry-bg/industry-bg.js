import React from "react"
import { H2, P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Text,
  Image,
  MobileImage,
} from "./industry-bg-styles"

const IndustryBG = ({ title, blurb, image, mobileImage, imageAlt }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2>{title}</H2>
          <P>{blurb.industryBackgroundBlurb}</P>
        </Text>
      </TextContainer>
      <Image fluid={image.fluid} alt={imageAlt} />
      <MobileImage fluid={mobileImage.fluid} alt={imageAlt} />
    </Container>
  )
}

export default IndustryBG
