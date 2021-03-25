import React from "react"
import {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
} from "../teampage/teams-styles"
import TeamMember from "../teampage/team-member"

export default ({ teamName, members, index }) => (
  <TeamContainer>
    <TeamTitle index={index}>{teamName}</TeamTitle>
    <TeamMembersContainer>
      {members.map((member, index) => {
        return (
          <TeamMember
            name={member.name}
            photo={member.photo}
            email={member.email}
            major={member.major}
            position={member.position}
            linkedinUrl={member.linkedinUrl}
            team={member.team}
            index={index}
            isLast={members.length - 1 === index}
          />
        )
      })}
    </TeamMembersContainer>
    {/* <TeamMember name="dog"></TeamMember> */}
    <div></div>
  </TeamContainer>
)
