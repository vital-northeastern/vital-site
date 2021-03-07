import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {

  // WILL MAKE COMPONENTS LATER
  // TESTING OUT GRAPHQL FOR NOW
  const homePage = get(props, 'data.contentfulHome')

  return (
  <Layout>
    <SEO title="Home" />
    <h1>{homePage.title}</h1>
    <p>{homePage.subheadingForTitle}</p>
    <p>{homePage.clubBlurb.clubBlurb}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img className="featured" 
      fluid={homePage.featuredImage.fluid} 
      alt={homePage.title}/>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)
}

export default IndexPage

export const pageQuery = graphql`
query homeQuery {
  contentfulHome {
    title
    subheadingForTitle
    clubBlurb {
      clubBlurb
    }
    featuredImage {
      fluid(maxWidth: 750) {
				...GatsbyContentfulFluid
      }
    }
  }
}
`
