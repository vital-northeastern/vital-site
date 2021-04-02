import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"

const WhatsHappening = () => (
  <Layout navbarStyle="gradient">
    <SEO title="What's Happening" />
    <Header
      title="What's happening"
      subheading="Keep up to date with all our events and club programs"
      imageBool={true}
    />
    <h1>What's Happening</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WhatsHappening
