import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="What's Happening" />
      <Header
        title={whatsHappening.title}
        subheading={whatsHappening.subheadingForTitle}
        imageBool={true}
      />
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default WhatsHappening

export const pageQuery = graphql`
  query whatsHappeningQuery {
    contentfulWhatsHappeningPage {
      title
      subheadingForTitle
    }
  }
`
