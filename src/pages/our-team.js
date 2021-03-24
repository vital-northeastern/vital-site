import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamMember from "../components/teampage/team-member"
import Advisor from "../components/teampage/advisor"

const TeamPage = props => {
  const teamPage = get(props, "data.contentfulTeamPage")

  return (
    <Layout>
      <SEO title="Team Page" />
      <h1>{teamPage.title}</h1>
      <ul className="members">
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
      </ul>
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
