import React from "react"
import {
  ContactCardContainer,
  CardPosition,
  InfoContainer,
} from "./team-member-styles"

import {
  MemberName,
  MemberPosition,
  Overlay,
  OverlayText,
  MemberImg,
  ConnectLink,
  MemberInfo,
} from "../team-shared-styles"

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
      <MemberImg
        fluid={photo.fluid}
        photoUrl={photo.fluid.src}
        alt={"Photo of " + name}
      >
        <Overlay>
          <OverlayText>This is a placeholder. Lorem Ipsum baby.</OverlayText>
        </Overlay>
      </MemberImg>

      <InfoContainer>
        <MemberName>{name}</MemberName>
        <MemberPosition>{position}</MemberPosition>
        <MemberInfo>{major}</MemberInfo>
        {linkedinUrl ? (
          <ConnectLink href={linkedinUrl}>CONNECT</ConnectLink>
        ) : null}
      </InfoContainer>
    </ContactCardContainer>
  </CardPosition>
)
