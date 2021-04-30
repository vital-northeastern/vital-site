import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  H2Title,
  BackgroundGradient,
  Image,
} from "./conferences-styles"

const Conferences = ({ title, blurb, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
      </TextContainer>
      <BackgroundGradient>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </BackgroundGradient>
    </Container>
  )
}

export default Conferences
