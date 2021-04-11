import React from "react"
import { H2, P } from "../../../constants/typography"
import {
  EboardContainer,
  TextContainer,
  H2Header,
  ButtonContainer,
  ButtonPosition,
  EboardButton,
} from "./eboard-styles"

const Eboard = ({ title, description, ctaLink, ctaTitle }) => {
  return (
    <EboardContainer>
      <TextContainer>
        <H2Header>{title}</H2Header>
        <P>{description}</P>
      </TextContainer>
      <ButtonContainer>
        <ButtonPosition>
          <a href={ctaLink}>
            <EboardButton primary={true}>{ctaTitle}</EboardButton>
          </a>
        </ButtonPosition>
      </ButtonContainer>
    </EboardContainer>
  )
}

export default Eboard
