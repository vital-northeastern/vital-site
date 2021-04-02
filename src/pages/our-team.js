import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Team from "../components/teampage/teams"
import Advisor from "../components/teampage/advisors"

const TeamPage = props => {
  const teamPage = get(props, "data.contentfulTeamPage")

  const listOfTeamsTypes = getTeamTypes(teamPage.teamMembers)

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
      listOfTeamsTypes.add(member.team.toLowerCase())
    })

    listOfTeamsTypes = Array.from(listOfTeamsTypes)
    return listOfTeamsTypes
  }

  return (
    <Layout>
      <SEO title="Team Page" />
      <h1>{teamPage.title}</h1>

      {listOfTeamsTypes.map((teamType, index) => {
        const filteredByTeam = teamPage.teamMembers.filter(member => {
          return member.team.toLowerCase() === teamType
        })

        return (
          <Team
            teamName={teamType}
            members={filteredByTeam}
            index={index}
          ></Team>
        )
      })}

      <Advisor advisors={teamPage.advisors}></Advisor>
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
