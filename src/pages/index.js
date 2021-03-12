import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Img from "gatsby-image"
import Hero from "../components/homepage/hero/hero"
import HomepageSection from "../components/homepage/sections/sections"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const homePage = get(props, "data.contentfulHome")

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={homePage.title}
        tagline={homePage.subheadingForTitle}
        clubBlurb={homePage.clubBlurb.clubBlurb}
        ctaTitle={homePage.ctaTitle}
        ctaLink={homePage.ctaLink}
        heroImage={homePage.featuredImage}
      />
      {homePage.homepageSections.map((section, index) => {
        return (
          <HomepageSection
            title={section.title}
            blurbText={section.blurbText}
            ctaTitle={section.ctaTitle}
            ctaLink={section.ctaLink}
            featuredImage={section.featuredImage}
            featuredWord={section.featuredWord}
          />
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
