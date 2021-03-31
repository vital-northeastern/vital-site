import React from "react"
import { Button } from "../../../constants/buttons"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{blurbText.blurbText}</p>
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
