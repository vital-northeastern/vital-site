import React from "react"
import { AdvisorCard, AdvisorImg } from "./advisor-member-styles"
import { MemberName, ConnectLink, MemberInfo } from "../team-shared-styles"

export default ({ name, photo, position, linkedinUrl }) => (
  <AdvisorCard>
    <AdvisorImg src={photo.fluid.src} alt={photo.description} />
    <div>
      <MemberName>{name}</MemberName>

      <MemberInfo>{position}</MemberInfo>

      {linkedinUrl && (
        <ConnectLink href={linkedinUrl} target="_blank">
          CONNECT
        </ConnectLink>
      )}
    </div>
  </AdvisorCard>
)
