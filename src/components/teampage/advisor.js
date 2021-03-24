import React from "react"
import {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  TextOverlay,
  PositionContainer,
  EmailText,
  Text,
  Overlay,
  InfoContainer,
  TextContainer,
  MemberName,
  MemberPosition,
} from "./advisor-styles.js"

export default ({ name, photo, position, linkedinUrl }) => (
  <ContactCardContainer>
    <FlexContainer>
      <MemberImg alt={name} fluid={photo.fluid} />
      <Overlay>
        <TextOverlay>
          <PositionContainer>{position}</PositionContainer>
          <EmailText>
            <Text>Reach me at </Text>
          </EmailText>
        </TextOverlay>
      </Overlay>
    </FlexContainer>
    <InfoContainer>
      <TextContainer>
        <MemberName>{name}</MemberName>
        <MemberPosition>{position}</MemberPosition>
        <a href={linkedinUrl}>
          <button type="button">CONNECT</button>
        </a>
      </TextContainer>
    </InfoContainer>
  </ContactCardContainer>
)
