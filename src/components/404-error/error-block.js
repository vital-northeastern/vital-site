import React from "react"
import {
  ErrorContainer,
  TextContainer,
  H2Header,
  PMessage,
  ImageContainer,
  ErrorImage,
} from "./error-block-styles"
import { Button } from "../../constants/buttons"

const ErrorBlock = ({ title, blurb, featuredImage, ctaLink, ctaTitle }) => {
  return (
    <ErrorContainer>
      <TextContainer>
        <H2Header>{title}</H2Header>
        <PMessage>{blurb}</PMessage>
        <a href={ctaLink}>
          <Button primary={true}>{ctaTitle}</Button>
        </a>
      </TextContainer>
      <ImageContainer>
        <ErrorImage
          alt={featuredImage.description}
          fluid={featuredImage.fluid}
        />
      </ImageContainer>
    </ErrorContainer>
  )
}

export default ErrorBlock
