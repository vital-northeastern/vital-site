import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const homePage = get(props, "data.contentfulHome")

  return (
    <Layout>
      <SEO title="Home" />
      <h3>{homePage.smallTitle}</h3>
      <h1>{homePage.bigTitle}</h1>
      <p>{homePage.subheadingForTitle}</p>
      <p>{homePage.homepageSections[0].blurbText.blurbText}</p>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query homeQuery {
    contentfulHome {
      smallTitle
      bigTitle
      subheadingForTitle
      homepageSections {
        title
        blurbText {
          blurbText
        }
        ctaTitle
        ctaLink
      }
      everyoneWelcomeCarousel {
        title
        carouselItems {
          title
          featuredImage {
            fluid(maxWidth: 450) {
              ...GatsbyContentfulFluid
            }
            description
          }
        }
      }
      upcomingEvent {
        title
        featuredImage {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      carouselTitle
      carouselItems {
        title
        featuredImage {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
    }
  }
`
