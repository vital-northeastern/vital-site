import React, { useState } from "react"

import {
  IncContainer,
  HexShape,
  InfoContainer,
  ImageSection,
  Selectors,
  ImageHeader,
  RotatingImage,
  Selector,
} from "../inclusivity/inclusivity-styles"
import { Button } from "../../../constants/buttons"
import { H2, P } from "../../../constants/typography"

import homepageMidHex from "../../../images/homepage-mid-hex.svg"
import { ButtonHolder } from "../shared-styles/homepage-shared-styles"

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
      <HexShape src={homepageMidHex}></HexShape>
      <InfoContainer>
        <H2>{title}</H2>
        <P>{blurbText.blurbText}</P>
        <div>
          <ButtonHolder>
            <a href={ctaLink} target="_blank" rel="noreferrer">
              <Button type="button" aria-label={ctaTitle} primary>
                {ctaTitle}
              </Button>
            </a>
          </ButtonHolder>
        </div>
      </InfoContainer>

      <ImageSection>
        <ImageHeader>{carouselItem.title}</ImageHeader>

        <RotatingImage
          src={carouselItem.fluid.src}
          alt={carouselItem.alt}
          aria-label={carouselItem.alt}
        />

        <Selectors>
          {carouselItems.map((item, index) => {
            return (
              <Selector
                key={"key" + index}
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
