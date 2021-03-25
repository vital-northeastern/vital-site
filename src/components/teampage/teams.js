import React from "react"
import {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
} from "../teampage/teams-styles"
import TeamMember from "../teampage/team-member"

function isTopRight(numMembers, index) {
  const topRightIndex =
    Math.ceil(numMembers / 2) - (numMembers % 2 === 0 ? 1 : 0)

  return index === topRightIndex
}

export default ({ teamName, members }) => (
  <TeamContainer>
    <TeamTitle>{teamName}</TeamTitle>
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
            isTopRight={isTopRight(members.length, index)}
          />
        )
      })}
    </TeamMembersContainer>
    {/* <TeamMember name="dog"></TeamMember> */}
    <div></div>
  </TeamContainer>
)
