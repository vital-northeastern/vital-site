import React from "react"
import { H2, P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Text,
  DisclaimerContainer,
  PDisclaimer,
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
        <PDisclaimer>{disclaimer}</PDisclaimer>
      </DisclaimerContainer>
    </Container>
  )
}

export default Involvement
