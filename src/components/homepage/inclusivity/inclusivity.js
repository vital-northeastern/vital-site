import React, { useState } from "react"
import Img from "gatsby-image"

import { SmallerHeading } from "../shared-styles/homepage-shared-styles"

import {
  IncContainer,
  InfoContainer,
  ImageSection,
  IncButton,
  Selectors,
  ImageHeader,
  RotatingImage,
  Selector,
} from "../inclusivity/inclusivity-styles"

const Inclusivity = ({ title, blurbText, ctaTitle, ctaLink, carousel }) => {
  const [carouselItem, setCarouselItem] = useState({
    index: 0,
    fluid: carousel.carouselItems[0].featuredImage.fluid,
    alt: carousel.carouselItems[0].featuredImage.description,
    title: carousel.carouselItems[0].title,
  })

  function setIndex(index) {
    const carouselObj = {
      index,
      fluid: carousel.carouselItems[index].featuredImage.fluid,
      alt: carousel.carouselItems[index].featuredImage.description,
      title: carousel.carouselItems[index].title,
    }
    setCarouselItem(carouselObj)
  }

  const carouselItems = carousel.carouselItems

  return (
    <IncContainer>
      <InfoContainer>
        <SmallerHeading>{title}</SmallerHeading>
        <p>{blurbText.blurbText}</p>
        <div>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <IncButton type="button" aria-label={ctaTitle}>
              {ctaTitle}
            </IncButton>
          </a>
        </div>
      </InfoContainer>

      <ImageSection>
        <ImageHeader>{carouselItem.title}</ImageHeader>

        <RotatingImage>
          <Img fluid={carouselItem.fluid} alt={carouselItem.alt} />
        </RotatingImage>

        <Selectors>
          {carouselItems.map((item, index) => {
            return (
              <Selector
                index={index}
                currentDisplayedIndex={carouselItem.index}
                onClick={() => {
                  setIndex(index)
                }}
              ></Selector>
            )
          })}
        </Selectors>
      </ImageSection>
    </IncContainer>
  )
}

export default Inclusivity
