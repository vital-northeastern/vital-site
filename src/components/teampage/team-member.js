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
  TextContainer,
  MemberName,
  MemberPosition,
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
