import React from "react"
import {
  Container,
  TestimonialsTitle,
  TestimonialsContainer,
} from "./testimonials-styles"
import Accordion from "../../accordion/accordion"

const Testimonials = ({ title, testimonials }) => {
  return (
    <Container>
      <TestimonialsTitle>{title}</TestimonialsTitle>
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => {
          return (
            <Accordion
              title={testimonial.companyTitle}
              content={testimonial.testimonial.testimonial}
            />
          )
        })}
      </TestimonialsContainer>
    </Container>
  )
}

export default Testimonials
