import React from "react"
import { P } from "../../../constants/typography"
import {
  EboardContainer,
  TextContainer,
  H2Header,
  ButtonContainer,
  ButtonPosition,
} from "./eboard-styles"
import { shadowGray } from "../../../constants/colors"
import { Button } from "../../../constants/buttons"

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
            <Button
              padding="18px 51px"
              boxshadow={`1px 1px 2px ${shadowGray}`}
              primary={true}
            >
              {ctaTitle}
            </Button>
          </a>
        </ButtonPosition>
      </ButtonContainer>
    </EboardContainer>
  )
}

export default Eboard
