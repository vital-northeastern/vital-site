import React from "react"
import {
  ContactCardContainer,
  CardPosition,
  InfoContainer,
  MemberMajor,
  MemberInfoSpacer,
  ConnectLink,
} from "../teampage/team-member-styles"

import {
  MemberName,
  MemberPosition,
  Overlay,
  OverlayText,
  MemberImg,
} from "./team-shared-styles"

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
          <OverlayText>This is a placeholder. Lorem Ipsum baby.</OverlayText>
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
