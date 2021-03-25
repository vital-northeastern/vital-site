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
  MemberMajor,
  ConnectButton,
  MemberInfoSpacer,
  ConnectLink,
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
  isLast,
}) => (
  <CardPosition index={index} isLast={isLast}>
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
        <MemberInfoSpacer></MemberInfoSpacer>
        <div>
          <MemberName>{name}</MemberName>
          <MemberPosition>{position}</MemberPosition>
          <MemberMajor></MemberMajor>
        </div>
        {linkedinUrl ? (
          <ConnectLink href={linkedinUrl}>
            <ConnectButton>CONNECT</ConnectButton>
          </ConnectLink>
        ) : (
          <MemberInfoSpacer></MemberInfoSpacer>
        )}
      </InfoContainer>
    </ContactCardContainer>
  </CardPosition>
)
