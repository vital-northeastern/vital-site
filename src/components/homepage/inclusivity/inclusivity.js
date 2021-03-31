import React from "react"
import Img from "gatsby-image"

const Inclusivity = ({ title, blurbText, ctaTitle, ctaLink, carousel }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{blurbText.blurbText}</p>
      <a href={ctaLink} target="_blank" rel="noreferrer">
        <button type="button" aria-label={ctaTitle}>
          {ctaTitle}
        </button>
      </a>
      <h2>{carousel.carouselItems[0].title}</h2>
      <Img
        className="featured"
        fluid={carousel.carouselItems[0].featuredImage.fluid}
        alt={carousel.carouselItems[0].featuredImage.description}
      />
    </>
  )
}

export default Inclusivity
