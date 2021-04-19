import React from "react"
import Img from "gatsby-image"
import { tns } from "../../../node_modules/tiny-slider"

const Carousel = ({ title, carouselItems }) => {
  var slider = tns({
    container: ".my-slider",
    items: 3,
    slideBy: "page",
    autoplay: true,
  })
  return (
    <>
      <p>{title}</p>
      {carouselItems.map((item, index) => {
        return (
          <div>
            <h4>{item.title}</h4>
            <p>{item.subTitle}</p>
            <a href={item.link}>Learn More</a>
            <Img
              className="featured"
              fluid={item.featuredImage.fluid}
              alt={item.featuredImage.description}
            />
          </div>
        )
      })}
    </>
  )
}

export default Carousel
