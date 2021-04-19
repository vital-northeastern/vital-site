import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Text,
  H2Header,
  DisclaimerContainer,
  PDisclaimer,
} from "./involvement-styles"

const Involvement = ({ title, blurb, disclaimer }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <H2Header>{title}</H2Header>
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
