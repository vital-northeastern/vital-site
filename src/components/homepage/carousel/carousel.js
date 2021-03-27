import React from "react"
import Img from "gatsby-image"
import CarouselItem from "./carousel-item"

const Carousel = ({ title, carouselItems }) => {
  return (
    <>
      <p>{title}</p>
      {carouselItems.map((item, index) => {
        return (
          <CarouselItem
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            link={item.link}
            featuredImage={item.featuredImage}
          />
        )
      })}
    </>
  )
}

export default Carousel
