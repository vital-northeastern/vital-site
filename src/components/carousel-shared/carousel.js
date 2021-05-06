import React from "react"
import Img from "gatsby-image"
import TinySlider from "tiny-slider-react"
import { H2, P, PCard } from "../../constants/typography"
import {
  CarouselTitleContainer,
  CarouselButtonsContainer,
  CarouselNav,
  NavButtons,
  CarouselControls,
  Control,
  CarouselTextContainer,
  EventTitle,
  MoreLink,
  LongRightArrow,
  CarouselImage,
  BackgroundImage,
} from "./carousel-styles"
import "./carousel.css"

import union from "../../images/union-right.svg"
import longRightArrow from "../../images/long-right-arrow.svg"

const placeHolderCarouselItem = {}

const Carousel = ({ title, carouselItems, minItems }) => {
  console.log(carouselItems)

  // if carousel items under 3 fill it with placeholders

  const settings = {
    // nav: false,
    // container: "#customize",
    // gutter: 50,
    // items: 1,
    center: true,
    // edgePadding: 200,
    controlsPosition: "bottom",
    navPosition: "bottom",
    navContainer: "#customize-nav",
    controlsContainer: "#customize-controls",
    mouseDrag: true,
    responsive: {
      0: {
        // fixedWidth: 216,
        // gutter: 15,
        edgePadding: 50,
        // items: 3,
      },
      768: {
        fixedWidth: 800,
        // items: 1,
        edgePadding: 200,

        // gutter: 200,
        // center: true,
      },
    },
  }
  return (
    <>
      <CarouselTitleContainer>
        <H2>{title}</H2>
      </CarouselTitleContainer>

      <TinySlider settings={settings}>
        {carouselItems.map((item, index) => {
          return (
            <div key={item.title + index}>
              <CarouselImage
                role="img"
                aria-label={item.featuredImage.description}
                alt={item.featuredImage.description}
                src={item.featuredImage.fluid.src}
              ></CarouselImage>

              <CarouselTextContainer>
                <div>
                  <EventTitle>{item.title}</EventTitle>
                  <PCard>{item.subTitle}</PCard>
                </div>

                <MoreLink href={item.link}>
                  <P> Learn More</P>
                  <div>
                    <LongRightArrow src={longRightArrow}></LongRightArrow>
                  </div>
                </MoreLink>
              </CarouselTextContainer>
            </div>
          )
        })}
      </TinySlider>

      <CarouselButtonsContainer>
        <CarouselNav id="customize-nav">
          {carouselItems.map((item, index) => {
            return <NavButtons key={item.title + index + "btn"}></NavButtons>
          })}
        </CarouselNav>
        <CarouselControls id="customize-controls">
          <Control
            src={union}
            direction={"left"}
            alt={"left (previous) arrow control"}
            numberOfItems={carouselItems.length}
          ></Control>
          <Control
            src={union}
            alt={"right (next) arrow control"}
            direction={"right"}
            numberOfItems={carouselItems.length}
          ></Control>
        </CarouselControls>
      </CarouselButtonsContainer>
    </>
  )
}

export default Carousel
