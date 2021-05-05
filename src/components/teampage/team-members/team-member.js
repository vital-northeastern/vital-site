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
  isLast,
}) => (
  <CardPosition index={index} isLast={isLast}>
    {position === "Executive Director" ? (
      <GraidentSquare></GraidentSquare>
    ) : null}
    <ContactCardContainer index={index} position={position}>
      <MemberImg
        fluid={photo.fluid}
        photoUrl={photo.fluid.src}
        alt={"Photo of " + name}
      >
        <Img fluid={photo.fluid} alt={photo.description} />

        <Overlay>
          <OverlayText>{biography}</OverlayText>
        </Overlay>
      </MemberImg>

      <InfoContainer>
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
