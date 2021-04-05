import React from "react"
import { Button } from "../../../constants/buttons"
import { H2, HName, P, Connect } from "../../../constants/typography"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <>
      <H2>Our Mission</H2>
      <Connect href="https://scout.camd.northeastern.edu/">CONNECT</Connect>
      <HName>Heenal Marfatia</HName>
      <P>{blurbText.blurbText}</P>
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
