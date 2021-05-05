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
} from "./carousel-styles"
import "./carousel.css"

import union from "../../images/union-right.svg"
import longRightArrow from "../../images/long-right-arrow.svg"

const placeHolderCarouselItem = {}

const Carousel = ({ title, carouselItems }) => {
  console.log(carouselItems)

  // if carousel items under 3 fill it with placeholders

  const settings = {
    // nav: false,
    container: "#customize",

    gutter: 50,
    // items: 1,
    center: true,
    edgePadding: 200,
    controlsPosition: "bottom",
    navPosition: "bottom",
    navContainer: "#customize-nav",
    controlsContainer: "#customize-controls",
  }
  return (
    <>
      <CarouselTitleContainer>
        <H2>{title}</H2>
      </CarouselTitleContainer>

      <TinySlider settings={settings}>
        {carouselItems.map((item, index) => {
          return (
            <div>
              <Img
                className="featured"
                fluid={item.featuredImage.fluid}
                alt={item.featuredImage.description}
              />

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
          <NavButtons></NavButtons>
          <NavButtons></NavButtons>
          <NavButtons></NavButtons>
        </CarouselNav>
        <CarouselControls id="customize-controls">
          <Control src={union} direction={"left"} numberOfItems={3}></Control>
          <Control src={union} direction={"right"} numberOfItems={3}></Control>
        </CarouselControls>
      </CarouselButtonsContainer>
    </>
  )
}

export default Carousel
