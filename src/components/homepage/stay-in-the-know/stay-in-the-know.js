import React from "react"
import Img from "gatsby-image"
import { H2, P } from "../../../constants/typography"
import { SmallerHeading } from "../shared-styles/homepage-shared-styles"

import {
  KnowContainer,
  KnowInfoCont,
  KnowInfo,
  KnowImageSection,
  KnowHeader,
  KnowImageHolder,
  KnowImageHeader,
} from "../stay-in-the-know/stay-in-the-know-styles"
import { Button } from "../../../constants/buttons"

const StayInTheKnow = ({
  title,
  blurbText,
  ctaTitle,
  ctaLink,
  upcomingEvent,
}) => {
  return (
    <KnowContainer>
      <KnowImageSection>
        <KnowImageHeader>{upcomingEvent.title}</KnowImageHeader>
        <KnowImageHolder
          src={upcomingEvent.featuredImage.fluid.src}
          photoUrl={upcomingEvent.featuredImage.fluid.src}
        ></KnowImageHolder>
      </KnowImageSection>

      <KnowInfoCont>
        <KnowInfo>
          <H2>{title}</H2>

          <P>{blurbText.blurbText}</P>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <Button primary type="button" aria-label={ctaTitle}>
              {ctaTitle}
            </Button>
          </a>
        </KnowInfo>
      </KnowInfoCont>
    </KnowContainer>
  )
}

export default StayInTheKnow
