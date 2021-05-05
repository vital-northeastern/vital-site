import React from "react"
import { AdvisorCard, AdvisorImg } from "./advisor-member-styles"
import { MemberName, ConnectLink, MemberInfo } from "../team-shared-styles"
import Img from "gatsby-image"

export default ({ name, photo, position, linkedinUrl }) => (
  console.log(photo),
  (
    <AdvisorCard>
      <AdvisorImg fluid={photo.fluid} alt={photo.description} />
      <div>
        <MemberName>{name}</MemberName>

        <MemberInfo>{position}</MemberInfo>
        {linkedinUrl ? (
          <ConnectLink href={linkedinUrl} target="_blank">
            CONNECT
          </ConnectLink>
        ) : null}
      </div>
    </AdvisorCard>
  )
)
