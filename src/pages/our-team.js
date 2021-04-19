import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"

const TeamPage = props => {
  const teamPage = get(props, "data.contentfulTeamPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="Team Page" />
      <Header
        title={teamPage.title}
        subheading={teamPage.subheadingForTitle}
        imageBool={false}
      />
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default TeamPage

export const pageQuery = graphql`
  query teamQuery {
    contentfulTeamPage {
      title
      subheadingForTitle
    }
  }
`
