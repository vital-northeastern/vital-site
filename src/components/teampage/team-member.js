import React from "react"
import {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  TextOverlay,
  PositionContainer,
  EmailText,
  Text,
  Email,
  Overlay,
  InfoContainer,
  LeftContainer,
  MemberName,
  MemberPosition,
  RightContainer,
} from "../teampage/team-member-styles"

export default ({ name, photo, email, major, position, linkedinUrl, team }) => (
  <ContactCardContainer>
    <FlexContainer>
      <MemberImg alt={name} fluid={photo.fluid} />
      <Overlay>
        <TextOverlay>
          <PositionContainer>{position}</PositionContainer>
          {major}
          <EmailText>
            <Text>Reach me at </Text>
            <Email href={`mailto:${email}`} target="_blank">
              {email}
            </Email>
          </EmailText>
        </TextOverlay>
      </Overlay>
    </FlexContainer>
    <InfoContainer>
      <LeftContainer>
        <MemberName>{name}</MemberName>
        <MemberPosition>{position}</MemberPosition>
      </LeftContainer>
      <RightContainer></RightContainer>
    </InfoContainer>
  </ContactCardContainer>
)
