import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import { PrimaryButton } from "../constants/buttons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  // WILL MAKE COMPONENTS LATER
  // TESTING OUT GRAPHQL FOR NOW
  const homePage = get(props, "data.contentfulHome")

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{homePage.smallTitle}</h1>
      <p>{homePage.subheadingForTitle}</p>
      <PrimaryButton>what we do</PrimaryButton>
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
