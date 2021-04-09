import React from "react"
import { P } from "../../../constants/typography"
import { Container, TextContainer } from "./introduction-styles"

const Introduction = ({ blurb }) => {
  return (
    <Container>
      <TextContainer>
        <P>{blurb}</P>
      </TextContainer>
    </Container>
  )
}

export default Introduction
