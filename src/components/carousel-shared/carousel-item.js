import React from "react"

import { P, PCard } from "../../constants/typography"
import {
  CarItemHolder,
  CarouselTextContainer,
  EventTitle,
  MoreLink,
  LongRightArrow,
  CarouselImage,
  PlaceholderBox,
  PlaceholderText,
} from "./carousel-styles"

import longRightArrow from "../../images/long-right-arrow.svg"

export const CarItem = ({ item, openInNewTab, placeholderText }) => {
  return (
    <CarItemHolder>
      <CarouselImage
        role="img"
        aria-label={item.featuredImage.description}
        alt={item.featuredImage.description}
        src={item.featuredImage.fluid.src}
      >
        {item.placeholder && (
          <PlaceholderBox>
            <PlaceholderText>{placeholderText}</PlaceholderText>
          </PlaceholderBox>
        )}
      </CarouselImage>

      <CarouselTextContainer>
        <div>
          <EventTitle>{item.title}</EventTitle>
          <PCard>{item.subTitle}</PCard>
        </div>

        {item.link && (
          <MoreLink href={item.link} target={openInNewTab ? "_blank" : ""}>
            <P> Learn More</P>
            <div>
              <LongRightArrow src={longRightArrow}></LongRightArrow>
            </div>
          </MoreLink>
        )}
      </CarouselTextContainer>
    </CarItemHolder>
  )
}
