import React from "react"
import {
  MissionContainer,
  MissionHeader,
  MissionText,
  MissionButton,
  MissionLowerHalf,
} from "./mission-styles"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <MissionContainer>
      <div>
        <MissionHeader>{title}</MissionHeader>
        <MissionLowerHalf>
          <MissionText>{blurbText.blurbText}</MissionText>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <MissionButton type="button" aria-label={ctaTitle}>
              {" "}
              {ctaTitle}
            </MissionButton>
          </a>
        </MissionLowerHalf>
      </div>
    </MissionContainer>
  )
}

export default Mission
