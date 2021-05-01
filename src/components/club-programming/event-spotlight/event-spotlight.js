import React from "react"
import { PCard } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import {
  Container,
  Event,
  H2EventType,
  H2EventTitle,
  ButtonContainer,
} from "./event-spotlight-styles"
import Img from "gatsby-image"

const EventSpotlight = ({ eventSpotlights }) => {
  return (
    <Container>
      {eventSpotlights.map((eventSpotlight, index) => {
        return (
          <Event key={eventSpotlight.typeOfEvent} index={index}>
            <H2EventType>{eventSpotlight.typeOfEvent}</H2EventType>
            <Img
              fluid={eventSpotlight.featuredImage.fluid}
              alt={eventSpotlight.featuredImage.description}
            />
            <H2EventTitle index={index}>
              {eventSpotlight.eventTitle}
            </H2EventTitle>
            <PCard>{eventSpotlight.blurb.blurb}</PCard>
            {eventSpotlight.ctaTitle && (
              <ButtonContainer>
                <a href={eventSpotlight.ctaLink}>
                  <Button padding="17px 30px" primary={true}>
                    {eventSpotlight.ctaTitle}
                  </Button>
                </a>
              </ButtonContainer>
            )}
          </Event>
        )
      })}
    </Container>
  )
}

export default EventSpotlight
