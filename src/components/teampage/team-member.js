import React from "react"
import {
  ContactCardContainer,
  CardPosition,
  // FlexContainer,
  MemberImg,
  TextOverlay,
  PositionContainer,
  EmailText,
  Text,
  Email,
  Overlay,
  InfoContainer,
  MemberName,
  MemberPosition,
  ConnectButton,
} from "../teampage/team-member-styles"

export default ({
  name,
  photo,
  email,
  major,
  position,
  linkedinUrl,
  team,
  index,
}) => (
  <CardPosition>
    <ContactCardContainer index={index}>
      <MemberImg photoUrl={photo.fluid.src}></MemberImg>
      {/* <Overlay>
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
      </Overlay> */}
      <InfoContainer>
        <MemberName>{name}</MemberName>
        <MemberPosition>{position}</MemberPosition>
        <a href={linkedinUrl}>
          <ConnectButton>CONNECT</ConnectButton>
          {/* <button type="button">CONNECT</button> */}
        </a>
      </InfoContainer>
    </ContactCardContainer>
  </CardPosition>
)
