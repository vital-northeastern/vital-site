import React from "react"
import {
  CTAContainer,
  BackgroundContainer,
  CTAText,
} from "./application-info-styles"

const ApplicationInfo = ({ applicationEmail }) => {
  return (
    <BackgroundContainer>
      <CTAContainer>
        <CTAText>{applicationEmail}</CTAText>
      </CTAContainer>
    </BackgroundContainer>
  )
}

export default ApplicationInfo
