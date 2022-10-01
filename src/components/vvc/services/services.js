import React from "react"
import {
  ServiceCardContainer,
  ServiceTitle,
  ServiceBlurb,
} from "./services-styles"

const ServiceCard = ({ title, blurb }) => {
  return (
    <ServiceCardContainer>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceBlurb>{blurb}</ServiceBlurb>
    </ServiceCardContainer>
  )
}

export default ServiceCard
