import React from "react"
import Img from "gatsby-image"
import { P } from "../../../constants/typography"
import { SmallerHeading } from "../shared-styles/homepage-shared-styles"

import {
  KnowContainer,
  KnowInfo,
  KnowImageSection,
  KnowHeader,
  KnowButton,
  KnowImageHolder,
  KnowImageHeader,
} from "../stay-in-the-know/stay-in-the-know-styles"

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
          photoUrl={upcomingEvent.featuredImage.fluid.src}
        ></KnowImageHolder>
      </KnowImageSection>
      <KnowInfo>
        <SmallerHeading>{title}</SmallerHeading>

        <P>{blurbText.blurbText}</P>
        <a href={ctaLink} target="_blank" rel="noreferrer">
          <KnowButton type="button" aria-label={ctaTitle}>
            {ctaTitle}
          </KnowButton>
        </a>
      </KnowInfo>
    </KnowContainer>
  )
}

export default StayInTheKnow
