import React from "react"
import { Button } from "../../../constants/buttons"
import { H2 } from "../../../constants/typography"
import { MissionContainer, MissionText } from "./mission-styles"
import { ButtonHolder } from "../shared-styles/homepage-shared-styles"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <MissionContainer>
      <div>
        <H2>{title}</H2>
        <MissionText>{blurbText.blurbText}</MissionText>
        <ButtonHolder>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <Button type="button" aria-label={ctaTitle} primary>
              {ctaTitle}
            </Button>
          </a>
        </ButtonHolder>
      </div>
    </MissionContainer>
  )
}

export default Mission
