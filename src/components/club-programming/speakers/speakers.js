import React from "react"
import { H2 } from "../../../constants/typography"
import {
  Container,
  SpeakersContainer,
  SpeakerContainer,
  PCaption,
} from "./speakers-styles"
import Img from "gatsby-image"

const Speakers = ({ title, speakers }) => {
  return (
    <Container>
      <H2>{title}</H2>
      <SpeakersContainer>
        {speakers.map((speaker, index) => {
          return (
            <SpeakerContainer key={speaker.name}>
              <Img
                fluid={speaker.featuredImage.fluid}
                alt={speaker.featuredImage.description}
              />
              <PCaption>{speaker.caption}</PCaption>
            </SpeakerContainer>
          )
        })}
      </SpeakersContainer>
    </Container>
  )
}

export default Speakers
