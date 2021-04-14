import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  ImageContainer,
  MobileImage,
} from "./introduction-styles"
import svg_shape from "../../../images/getinvolved_intro.svg"

const Introduction = ({ blurb }) => {
  return (
    <Container>
      <TextContainer>
        <P>{blurb}</P>
      </TextContainer>
      <ImageContainer>
        <MobileImage src={svg_shape} alt="geometric black and white shape" />
      </ImageContainer>
    </Container>
  )
}

export default Introduction
