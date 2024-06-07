import React from "react"
import {
  ContactCardContainer,
  CardPosition,
  InfoContainer,
} from "./team-member-styles"

import Img from "gatsby-image"

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
  biography,
  team,
  index,
  teamIndex,
  isLast,
}) => (
  <CardPosition index={index} isLast={isLast}>
    <ContactCardContainer index={index} teamIndex={teamIndex}>
      <MemberImg>
        <Img fluid={photo.fluid} alt={photo.description} />

        <Overlay index={index}>
          <OverlayText>{biography}</OverlayText>
        </Overlay>
      </MemberImg>

      <InfoContainer index={index}>
        <MemberName>{name}</MemberName>
        <MemberPosition>{position}</MemberPosition>
        <MemberInfo>{major}</MemberInfo>
        {linkedinUrl ? (
          <ConnectLink href={linkedinUrl} target="_blank">
            CONNECT
          </ConnectLink>
        ) : null}
      </InfoContainer>
    </ContactCardContainer>
  </CardPosition>
)
