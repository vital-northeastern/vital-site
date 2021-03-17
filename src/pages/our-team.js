import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const TeamPage = props => {
  const teamPage = get(props, "data.contentfulTeamPage")

  return (
    <Layout>
      <SEO title="Team Page" />
      <h1>{teamPage.title}</h1>
      <ul className="members">
        {teamPage.teamMembers.map((member, index) => {
          return (
            <li className="member">
              <h2>{member.name}</h2>
              <p className="excerpt">{member.email}</p>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Img
                  className="featured"
                  fluid={member.photo.fluid}
                  alt={member.name}
                />
              </div>
            </li>
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
    }
  }
`
