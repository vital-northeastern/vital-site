import React from "react"
import {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
  BackgroundHex,
  TitleHolder,
} from "../teampage/teams-styles"
import TeamMember from "../teampage/team-member"
import hex from "../../images/gatsby-icon.png"

export default ({ teamName, members, index }) => (
  <TeamContainer>
    {/* <img src={hex} /> */}
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
    {/* <TeamMember name="dog"></TeamMember> */}
    <div></div>
  </TeamContainer>
)
