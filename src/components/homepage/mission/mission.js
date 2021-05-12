import React from "react"
import { Button } from "../../../constants/buttons"
import { H2 } from "../../../constants/typography"
import { MissionContainer, MissionText } from "./mission-styles"
import { ButtonHolder } from "../shared-styles/homepage-shared-styles"
import { Link } from "gatsby"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <MissionContainer>
      <div>
        <H2>{title}</H2>
        <MissionText>{blurbText.blurbText}</MissionText>
        <ButtonHolder>
          <Link to={ctaLink}>
            <Button type="button" aria-label={ctaTitle} primary>
              {ctaTitle}
            </Button>
          </Link>
        </ButtonHolder>
      </div>
    </MissionContainer>
  )
}

export default Mission
