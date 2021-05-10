import React from "react"
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
  PlaceholderBox,
  PlaceholderText,
} from "./carousel-styles"
import "./carousel.css"

import union from "../../images/union-right.svg"
import longRightArrow from "../../images/long-right-arrow.svg"
import carouselPlaceholder from "../../images/carousel-placeholder.png"

const Carousel = ({
  title,
  carouselItems,
  minItems,
  placeholderText,
  placeholderTitle,
  placeholderDescription,
  openInNewTab,
}) => {
  while (carouselItems.length < minItems) {
    carouselItems.push({
      featuredImage: { fluid: { src: carouselPlaceholder } },
      title: placeholderTitle,
      subTitle: placeholderDescription,
      placeholder: true,
    })
  }

  const settings = {
    center: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    navContainer: "#customize-nav",
    controlsContainer: "#customize-controls",
    mouseDrag: true,
    responsive: {
      0: {
        edgePadding: 50,
      },
      768: {
        fixedWidth: 800,
        edgePadding: 200,
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
                  <MoreLink href={item.link} target={openInNewTab && "_blank"}>
                    <P> Learn More</P>
                    <div>
                      <LongRightArrow src={longRightArrow}></LongRightArrow>
                    </div>
                  </MoreLink>
                )}
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
