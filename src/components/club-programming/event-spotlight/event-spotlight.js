import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  Event,
  H2EventType,
  H2EventTitle,
  ButtonContainer,
} from "./event-spotlight-styles"
import { returnAppropriateLink } from "../section-styles"
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
            <P>{eventSpotlight.blurb.blurb}</P>
            {eventSpotlight.ctaTitle && (
              <ButtonContainer>
                {returnAppropriateLink(
                  eventSpotlight.ctaLink,
                  eventSpotlight.ctaTitle
                )}
              </ButtonContainer>
            )}
          </Event>
        )
      })}
    </Container>
  )
}

export default EventSpotlight
