import React from "react"
import {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
  BackgroundHex,
  TitleHolder,
} from "../teampage/teams-styles"
import TeamMember from "../teampage/team-member"

export default ({ teamName, members, index }) => (
  <TeamContainer>
    <TitleHolder>
      <TeamTitle index={index}>{teamName}</TeamTitle>
      <BackgroundHex index={index}></BackgroundHex>
    </TitleHolder>
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
    <div></div>
  </TeamContainer>
)
