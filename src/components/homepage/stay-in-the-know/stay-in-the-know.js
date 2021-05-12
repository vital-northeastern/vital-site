import React from "react"
import { H2, P } from "../../../constants/typography"
import { ButtonHolder } from "../shared-styles/homepage-shared-styles"

import {
  KnowContainer,
  KnowInfoCont,
  KnowInfo,
  KnowImageSection,
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
          alt={upcomingEvent.featuredImage.description}
        ></KnowImageHolder>
      </KnowImageSection>
      <KnowInfoCont>
        <KnowInfo>
          <H2>{title}</H2>
          <P>{blurbText.blurbText}</P>
          <ButtonHolder>
            <a href={ctaLink} target="_blank" rel="noreferrer">
              <Button primary type="button" aria-label={ctaTitle}>
                {ctaTitle}
              </Button>
            </a>
          </ButtonHolder>
        </KnowInfo>
      </KnowInfoCont>
    </KnowContainer>
  )
}

export default StayInTheKnow
