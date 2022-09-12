import React from "react"
import { Button } from "../../../constants/buttons"
import { P } from "../../../constants/typography"
import { CTACardContainer, CTATitle } from "./cta-styles"

const CTACard = ({ title, blurb, buttonText, buttonLink }) => {
  return (
    <CTACardContainer>
      <CTATitle>{title}</CTATitle>
      <P>{blurb}</P>
      <a href={buttonLink} target="_blank">
        <Button type="button" primary>
          {buttonText}
        </Button>
      </a>
    </CTACardContainer>
  )
}

export default CTACard
