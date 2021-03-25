import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamMember from "../components/teampage/team-member"
import Team from "../components/teampage/teams"
import Advisor from "../components/teampage/advisor"

const TeamPage = props => {
  const teamPage = get(props, "data.contentfulTeamPage")

  console.log(teamPage)

  const listOfTeamsTypes = getTeamTypes(teamPage.teamMembers)
  console.log(listOfTeamsTypes)

  /**
   * creates a list/array of all the team types
   * @param {Object[]} members - Array of members
   * @param {string} members[].type - the team the member is on
   * @returns {string[]} - Array/list of string member types ie ['board', 'marketing']
   */
  function getTeamTypes(members) {
    let listOfTeamsTypes = new Set()

    members.forEach(member => {
      if (!member.team) return
      listOfTeamsTypes.add(member.team)
    })

    listOfTeamsTypes = Array.from(listOfTeamsTypes)
    return listOfTeamsTypes
  }

  return (
    <Layout>
      <SEO title="Team Page" />
      {/* <h1>{teamPage.title}</h1> */}

      {listOfTeamsTypes.map((teamType, index) => {
        const filteredByTeam = teamPage.teamMembers.filter(member => {
          return member.team === teamType
        })

        return (
          <Team
            teamName={teamType}
            members={filteredByTeam}
            index={index}
          ></Team>
        )
      })}

      {/* <Team teamName="Marketing Team" members={teamPage.teamMembers}></Team> */}
      {/* <ul className="members">
        {teamPage.teamMembers.map((member, index) => {
          return (
            <TeamMember
              name={member.name}
              photo={member.photo}
              email={member.email}
              major={member.major}
              position={member.position}
              linkedinUrl={member.linkedinUrl}
              team={member.team}
            />
          )
        })}
      </ul> */}
      <h3>ADVISORS</h3>
      <ul className="advisors">
        {teamPage.advisors.map((advisor, index) => {
          return (
            <Advisor
              name={advisor.name}
              photo={advisor.photo}
              position={advisor.position}
              linkedinUrl={advisor.linkedinUrl}
            />
          )
        })}
      </ul>
    </Layout>
  )
}

export default TeamPage

export const pageQuery = graphql`
  query teamQuery {
    contentfulTeamPage {
      title
      teamMembers {
        name
        photo {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
        }
        email
        major
        position
        linkedinUrl
        team
      }
      advisors {
        name
        photo {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
        }
        position
        linkedinUrl
      }
    }
  }
`
