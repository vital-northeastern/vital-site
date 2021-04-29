import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Text,
  H2Title,
  ImageContainer,
  Image,
} from "./conferences-styles"

const Conferences = ({ title, blurb, featuredImage }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2Title>{title}</H2Title>
          <P>{blurb}</P>
        </Text>
      </TextContainer>
      <ImageContainer>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
    </Container>
  )
}

export default Conferences
