import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Ventures = () => (
  <Layout>
    <SEO title="Ventures" />
    <h1>Ventures Consulting</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Ventures