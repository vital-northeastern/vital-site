import React from "react"
import { H2, P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Text,
  DisclaimerContainer,
} from "./introduction-styles"

const Introduction = ({ title, blurb, disclaimer }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2>{title}</H2>
          <P>{blurb}</P>
        </Text>
      </TextContainer>
      <DisclaimerContainer>
        <P>{disclaimer}</P>
      </DisclaimerContainer>
    </Container>
  )
}

export default Introduction
