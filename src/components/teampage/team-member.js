import React from "react"
import {
  ContactCardContainer,
  CardPosition,
  MemberImg,
  InfoContainer,
  MemberName,
  MemberPosition,
  MemberMajor,
  MemberInfoSpacer,
  ConnectLink,
  Overlay,
  OverlayText,
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
      <MemberImg photoUrl={photo.fluid.src}>
        <Overlay>
          <OverlayText>
            hello this is a test to just eep uhdhsajk dhsd jshdjk h jdkh
            jkhdjkshd jkdshjk hdsjkhjshd jshdjsh djkshd jkshdjks hdjksh djksh
            djksh djksh djksh jkd sjkdhs jkdhsjkdhsjkd kjhdsjkhsdjkhsdjkkidu
            iowduiowdu iowudiowu diowudiow iwudioud iowudiwo
          </OverlayText>
        </Overlay>
      </MemberImg>

      <InfoContainer>
        <MemberInfoSpacer></MemberInfoSpacer>
        <div>
          <MemberName>{name}</MemberName>
          <MemberPosition>{position}</MemberPosition>
          <MemberMajor></MemberMajor>
        </div>
        {linkedinUrl ? (
          <ConnectLink href={linkedinUrl}>CONNECT</ConnectLink>
        ) : (
          <MemberInfoSpacer></MemberInfoSpacer>
        )}
      </InfoContainer>
    </ContactCardContainer>
  </CardPosition>
)
