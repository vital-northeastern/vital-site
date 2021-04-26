import React from "react"
import { AdvisorContainer, AdvisorsTitle } from "./advisors-styles.js"
import AdvisorMember from "./advisor-member"

export default ({ advisors }) => (
  <div>
    <AdvisorsTitle>Advisors</AdvisorsTitle>
    <AdvisorContainer>
      {advisors.map((adv, index) => {
        return (
          <AdvisorMember
            name={adv.name}
            photo={adv.photo}
            position={adv.position}
            linkedinUrl={adv.linkedinUrl}
          />
        )
      })}
    </AdvisorContainer>
  </div>
)
