import React from "react"
import {
  CarouselButtonsContainer,
  CarouselNav,
  NavButtons,
  CarouselControls,
  Control,
} from "./carousel-styles"
import union from "../../images/union-right.svg"

export const ButtonGroup = ({
  carouselItems,
  next,
  previous,
  goToSlide,
  ...rest
}) => {
  const {
    carouselState: { currentSlide },
  } = rest

  return (
    <CarouselButtonsContainer>
      <CarouselNav id="customize-nav">
        {carouselItems.map((item, index) => {
          return (
            <NavButtons
              onClick={() => goToSlide(index + 2)}
              active={
                currentSlide === index + 2 ||
                // The or statements below are to prevent a bug in the rendering of
                // the buttons caused by the infinite={true} option
                (currentSlide === 1 && index + 1 === carouselItems.length) ||
                (currentSlide === 0 && index + 1 === carouselItems.length - 1)
              }
              key={item.title + index + "btn"}
            ></NavButtons>
          )
        })}
      </CarouselNav>
      <CarouselControls id="customize-controls">
        <Control
          onClick={() => previous()}
          src={union}
          direction={"left"}
          alt={"left (previous) arrow control"}
          numberOfItems={carouselItems.length}
        ></Control>
        <Control
          onClick={() => next()}
          src={union}
          alt={"right (next) arrow control"}
          direction={"right"}
          numberOfItems={carouselItems.length}
        ></Control>
      </CarouselControls>
    </CarouselButtonsContainer>
  )
}
