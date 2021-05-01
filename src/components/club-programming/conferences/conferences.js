import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  H2Title,
  Gradient,
  Image,
  Background,
} from "./conferences-styles"

const Conferences = ({ title, blurb, featuredImage, backgroundGradient }) => {
  return (
    <Container>
      <TextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
      </TextContainer>
      <Background>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
        <Gradient
          fluid={backgroundGradient.fluid}
          alt={backgroundGradient.description}
        />
      </Background>
    </Container>
  )
}

export default Conferences
