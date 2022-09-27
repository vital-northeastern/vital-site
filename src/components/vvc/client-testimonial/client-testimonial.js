import React from "react"
import {
  TestimonialContainer,
  ImageContainer,
  RegularImage,
  MobileImage,
} from "./client-testimonial-styles.js"

const ClientTestimonial = ({ testimonial, mobileTestimonial }) => {
  return (
    <TestimonialContainer>
      <ImageContainer>
        <RegularImage
          src={testimonial.file.url}
          alt={testimonial.description}
        />
        <MobileImage
          src={mobileTestimonial.file.url}
          alt={mobileTestimonial.description}
        />
      </ImageContainer>
    </TestimonialContainer>
  )
}

export default ClientTestimonial
