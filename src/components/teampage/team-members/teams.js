import React from "react"
import {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
  TitleHolder,
  TeamPageTitle,
  BgHexImg,
} from "./teams-styles"
import TeamMember from "./team-member"
import blue_hex from "../../../images/blue_hex.svg"

export default ({ teamName, members, index: teamIndex }) => (
  <>
    {teamIndex === 0 ? <TeamPageTitle>EXECUTIVE BOARD</TeamPageTitle> : null}
    <TitleHolder>
      <TeamTitle index={teamIndex}>{teamName}</TeamTitle>

      <BgHexImg
        src={blue_hex}
        index={teamIndex}
        alt={"Blue geometric hexagon shape"}
      ></BgHexImg>
    </TitleHolder>
    <TeamContainer>
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
              biography={member.biography?.biography || ""}
              index={index}
              isLast={members.length - 1 === index}
              key={member.name + index}
              teamIndex={teamIndex}
            />
          )
        })}
      </TeamMembersContainer>
    </TeamContainer>
  </>
)
