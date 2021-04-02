import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"

const TeamPage = () => (
  <Layout navbarStyle="gradient">
    <SEO title="Team Page" />
    <Header
      title="Meet the team"
      subheading="Learn a little about ViTAL key members"
      imageBool={false}
    />
    <h1>Our Team</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeamPage
