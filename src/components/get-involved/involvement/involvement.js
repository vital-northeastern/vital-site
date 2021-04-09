import React from "react"
import { H2, P, PCard } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Text,
  DisclaimerContainer,
} from "./involvement-styles"

const Involvement = ({ title, blurb, disclaimer }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2>{title}</H2>
          <P>{blurb}</P>
        </Text>
      </TextContainer>
      <DisclaimerContainer>
        <PCard>{disclaimer}</PCard>
      </DisclaimerContainer>
    </Container>
  )
}

export default Involvement
