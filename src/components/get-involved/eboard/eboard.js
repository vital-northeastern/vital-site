import React from "react"
import { P } from "../../../constants/typography"
import { GetInvolvedButton } from "../section-styles"
import {
  EboardContainer,
  TextContainer,
  H2Header,
  ButtonContainer,
  ButtonPosition,
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
            <GetInvolvedButton primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </GetInvolvedButton>
          </a>
        </ButtonPosition>
      </ButtonContainer>
    </EboardContainer>
  )
}

export default Eboard
