import React from "react"
import {
  ErrorContainer,
  TextContainer,
  H2Header,
  PMessage,
  ButtonContainer,
  ImageContainer,
  ErrorImage,
} from "./error-block-styles"
import { Button } from "../../constants/buttons"
import { Link } from "gatsby"

const ErrorBlock = ({ title, blurb, featuredImage, ctaLink, ctaTitle }) => {
  return (
    <ErrorContainer>
      <TextContainer>
        <H2Header>{title}</H2Header>
        <PMessage>{blurb}</PMessage>
        <ButtonContainer>
          <Link to={ctaLink}>
            <Button primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </Button>
          </Link>
        </ButtonContainer>
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
