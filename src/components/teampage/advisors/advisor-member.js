import React from "react"
import { AdvisorCard, AdvisorImage } from "./advisor-member-styles"
import { MemberName, ConnectLink, MemberInfo } from "../team-shared-styles"

export default ({ name, photo, position, linkedinUrl }) => (
  <AdvisorCard>
    <AdvisorImage
      photoUrl={photo.fluid.src}
      alt={"Photo of " + name}
    ></AdvisorImage>
    <MemberName>{name}</MemberName>
    <MemberInfo>{position}</MemberInfo>
    {linkedinUrl ? <ConnectLink href={linkedinUrl}>CONNECT</ConnectLink> : null}
  </AdvisorCard>
)
