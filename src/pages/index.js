import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { H1, H2, H3, P } from "../constants/typography"

const IndexPage = props => {
  const homePage = get(props, "data.contentfulHome")

  return (
    <Layout>
      <SEO title="Home" />
      <H1>H1 styled with Futura</H1>
      <H2>H2: Mission Statement</H2>
      <H3>{homePage.smallTitle}</H3>
      <P>{homePage.subheadingForTitle}</P>
      <P>{homePage.homepageSections[0].blurbText.blurbText}</P>
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
