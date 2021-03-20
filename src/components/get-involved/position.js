import React from "react"
import {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  InfoContainer,
  TextContainer,
  MemberName,
  MemberPosition,
} from "../get-involved/position-styles.js"

export default ({ title, description, featuredImage }) => (
  <ContactCardContainer>
    <FlexContainer>
      <MemberImg alt={title} fluid={featuredImage.fluid} />
    </FlexContainer>
    <InfoContainer>
      <TextContainer>
        <MemberName>{title}</MemberName>
        <MemberPosition>{description.description}</MemberPosition>
      </TextContainer>
    </InfoContainer>
  </ContactCardContainer>
)
