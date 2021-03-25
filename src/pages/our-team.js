import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/nav-bar/nav-bar"

const TeamPage = () => (
  <Layout>
    <NavBar></NavBar>
    <SEO title="Team Page" />
    <h1>Our Team</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeamPage
