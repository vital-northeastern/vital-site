import React from "react"
import { H2, PCard } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { Container, Event, H2Event } from "./event-spotlight-styles"
import Img from "gatsby-image"

const EventSpotlight = ({ eventSpotlights }) => {
  return (
    <Container>
      {eventSpotlights.map((eventSpotlight, index) => {
        return (
          <Event key={eventSpotlight.typeOfEvent} index={index}>
            <H2>{eventSpotlight.typeOfEvent}</H2>
            <Img
              fluid={eventSpotlight.featuredImage.fluid}
              alt={eventSpotlight.featuredImage.description}
            />
            <H2Event>{eventSpotlight.eventTitle}</H2Event>
            <PCard>{eventSpotlight.blurb.blurb}</PCard>
            {eventSpotlight.ctaTitle && (
              <a href={eventSpotlight.ctaLink}>
                <Button primary={true}>{eventSpotlight.ctaTitle}</Button>
              </a>
            )}
          </Event>
        )
      })}
    </Container>
  )
}

export default EventSpotlight
