import React from "react"
import { Button } from "../../../constants/buttons"
import { HLower, PMain } from "../../../constants/typography"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <>
      <HLower>{title}</HLower>
      <PMain>{blurbText.blurbText}</PMain>
      <a href={ctaLink} target="_blank" rel="noreferrer">
        <Button primary={true} aria-label={ctaTitle}>
          {ctaTitle}
        </Button>
        <Button primary={false} aria-label={ctaTitle}>
          {ctaTitle}
        </Button>
      </a>
    </>
  )
}

export default Mission
