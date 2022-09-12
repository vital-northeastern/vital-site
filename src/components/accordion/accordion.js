import React, { useState } from "react"
import {
  AccordionItem,
  AccordionTitle,
  Title,
  Expander,
  AccordionContent,
  AccordionBlurb,
} from "./accordion-styles"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <AccordionItem className="accordion-item">
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <Title>{title}</Title>
        <Expander>{isActive ? "-" : "+"}</Expander>
      </AccordionTitle>
      {isActive && (
        <AccordionContent>
          <AccordionBlurb>{content}</AccordionBlurb>
        </AccordionContent>
      )}
    </AccordionItem>
  )
}

export default Accordion
