import React from "react"
import { AdvisorCard, AdvisorImage } from "./advisor-member-styles"
import { MemberName, ConnectLink, MemberInfo } from "../team-shared-styles"
import Img from "gatsby-image"

export default ({ name, photo, position, linkedinUrl }) => (
  console.log(photo),
  (
    <AdvisorCard>
      {/* <AdvisorImage
      photoUrl={photo.fluid.src}
      alt={photo.description}
    ></AdvisorImage> */}
      <Img fluid={photo.fluid} alt={photo.description} />
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
