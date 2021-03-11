import React from "react"
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
    <a href={homePage.ctaLink}>
      <button>{homePage.ctaTitle}</button>
    </a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img className="featured" 
      fluid={homePage.featuredImage.fluid} 
      alt={homePage.title}/>
    </div>
    {homePage.homepageSections.map((section, index) => {
      return (
        <div>
        <h3>
          {section.title}
        </h3>
        <p className="excerpt">
          {section.blurbText.blurbText}
        </p>
        <a href={section.ctaLink}>
        <button>{section.ctaTitle}</button>
        </a>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img className="featured" 
        fluid={section.featuredImage.fluid} 
        alt={section.title}/>
        </div>
        </div>
      )
    })}
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
    ctaTitle
    ctaLink
    featuredImage {
      fluid(maxWidth: 750) {
        ...GatsbyContentfulFluid
      }
    }
    homepageSections {
      title
      featuredImage {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid
        }
      }
      blurbText {
        blurbText
      }
      ctaTitle
      ctaLink
      featuredWord
    }
  }
}
`
