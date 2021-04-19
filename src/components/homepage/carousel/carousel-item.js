import React from "react"
import Img from "gatsby-image"

const CarouselItem = ({ title, subTitle, link, featuredImage }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{subTitle}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Learn More
      </a>
      <Img
        className="featured"
        fluid={featuredImage.fluid}
        alt={featuredImage.description}
      />
    </>
  )
}

export default CarouselItem
