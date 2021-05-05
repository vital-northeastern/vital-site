import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Team from "../components/teampage/team-members/teams"
import Advisor from "../components/teampage/advisors/advisors"
import Header from "../components/header/header"

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
    <Layout navbarstyle="gradient">
      <SEO title="Team Page" />
      <Header
        title={teamPage.title}
        subheading={teamPage.subheadingForTitle}
        imageBool={false}
      />

      {listOfTeamsTypes.map((teamType, index) => {
        const filteredByTeam = teamPage.teamMembers.filter(member => {
          return member.team.toLowerCase() === teamType
        })

        return (
          <Team
            teamName={teamType}
            members={filteredByTeam}
            index={index}
            key={teamType + index}
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
          description
        }
        email
        major
        position
        linkedinUrl
        team
        biography {
          biography
        }
      }
      advisors {
        name
        photo {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
        position
        linkedinUrl
      }
      subheadingForTitle
    }
  }
`
