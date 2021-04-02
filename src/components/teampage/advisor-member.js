import React from "react"

import { AdvisorCard, AdvisorImage, AdvisorName } from "./advisor-member-styles"
import { MemberPosition, Overlay, OverlayText } from "./team-shared-styles"

export default ({ name, photo, position, linkedinUrl }) => (
  <AdvisorCard>
    <AdvisorImage photoUrl={photo.fluid.src}>
      <Overlay>
        <OverlayText>This is a placeholder. Lorem Ipsum baby.</OverlayText>
      </Overlay>
    </AdvisorImage>

    <AdvisorName>{name}</AdvisorName>
    <MemberPosition>{position}</MemberPosition>
  </AdvisorCard>
)
