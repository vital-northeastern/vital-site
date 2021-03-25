import React from "react"
import Img from "gatsby-image"

const Carousel = ({ title, carouselItems }) => {
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
