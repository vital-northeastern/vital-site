import React from "react"
import {
  PositionContainer,
  FlexContainer,
  PositionImg,
  InfoContainer,
  TextContainer,
  PositionName,
  PositionDescription,
} from "../get-involved/position-styles.js"

export default ({
  index,
  title,
  description,
  featuredImage,
  featuredImageAlt,
}) => (
  <PositionContainer index={index}>
    <FlexContainer>
      <PositionImg alt={featuredImageAlt} fluid={featuredImage.fluid} />
    </FlexContainer>
    <InfoContainer>
      <TextContainer>
        <PositionName>{title}</PositionName>
        <PositionDescription>{description.description}</PositionDescription>
      </TextContainer>
    </InfoContainer>
  </PositionContainer>
)
