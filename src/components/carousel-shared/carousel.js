import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { H2 } from "../../constants/typography"
import {
  CarouselTitleContainer,
  CarouselBig,
  CarouselSmall,
} from "./carousel-styles"
import carouselPlaceholder from "../../images/carousel-placeholder.png"
import { ButtonGroup } from "./button-group"
import { CarItem } from "./carousel-item"
import { CarItemV2 } from "./carousel-item-v2"

const CarouselHolder = ({
  title,
  carouselItems,
  minItems,
  placeholderText,
  placeholderTitle,
  placeholderDescription,
  openInNewTab,
  primary,
  version2,
}) => {
  while (carouselItems.length < minItems) {
    carouselItems.push({
      featuredImage: { fluid: { src: carouselPlaceholder } },
      title: placeholderTitle,
      subTitle: placeholderDescription,
      placeholder: true,
    })
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 100,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  }

  return (
    <>
      <CarouselTitleContainer>
        <H2>{title}</H2>
      </CarouselTitleContainer>

      <CarouselBig>
        <Carousel
          ssr
          centerMode={true}
          responsive={responsive}
          showDots={false}
          arrows={false}
          infinite={true}
          renderButtonGroupOutside
          customButtonGroup={
            <ButtonGroup carouselItems={carouselItems} primary={primary} />
          }
        >
          {carouselItems.map((item, index) => {
            return (
              <>
                {version2 ? (
                  <CarItemV2 key={item.title + index} item={item}></CarItemV2>
                ) : (
                  <CarItem
                    key={item.title + index}
                    item={item}
                    placeholderText={placeholderText}
                    openInNewTab={openInNewTab}
                  ></CarItem>
                )}
              </>
            )
          })}
        </Carousel>
      </CarouselBig>
      <CarouselSmall>
        <Carousel
          ssr
          centerMode={false}
          responsive={responsive}
          showDots={false}
          arrows={false}
          infinite={true}
          renderButtonGroupOutside
          customButtonGroup={
            <ButtonGroup carouselItems={carouselItems} primary={primary} />
          }
          partialVisible={true}
        >
          {carouselItems.map((item, index) => {
            return (
              <>
                {version2 ? (
                  <CarItemV2 key={item.title + index} item={item}></CarItemV2>
                ) : (
                  <CarItem
                    key={item.title + index}
                    item={item}
                    placeholderText={placeholderText}
                    openInNewTab={openInNewTab}
                  ></CarItem>
                )}
              </>
            )
          })}
        </Carousel>
      </CarouselSmall>
    </>
  )
}

export default CarouselHolder
