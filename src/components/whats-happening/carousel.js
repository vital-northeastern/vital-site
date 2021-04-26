import React from "react"
import Img from "gatsby-image"
import TinySlider from "tiny-slider-react"
import { HName } from "../../constants/typography"
import { CarouselTitleContainer } from "./carousel-styles"
import "./carousel.css"

const Carousel = ({ title, carouselItems }) => {
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
  }
  return (
    <>
      <CarouselTitleContainer>
        <HName>{title}</HName>
      </CarouselTitleContainer>

      <TinySlider settings={settings}>
        {carouselItems.map((item, index) => {
          return (
            <div>
              <a href={item.link}>Learn More</a>
              <Img
                className="featured"
                fluid={item.featuredImage.fluid}
                alt={item.featuredImage.description}
              />

              <h4>{item.title}</h4>
              <p>{item.subTitle}</p>
            </div>
          )
        })}
      </TinySlider>
      <div id="customize-nav">
        <button>hi</button>
        <button>hi</button>
        <button>hi</button>
      </div>
    </>
  )
}

export default Carousel
