import React from "react"
import {
  ContactCardContainer,
  CardPosition,
  InfoContainer,
  GraidentSquare,
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
    {teamIndex === 0 ? <GraidentSquare></GraidentSquare> : null}
    <ContactCardContainer index={index} teamIndex={teamIndex}>
      <MemberImg>
        <Img fluid={photo.fluid} alt={photo.description} />

        <Overlay>
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
