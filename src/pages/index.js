import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Hero from "../components/homepage/hero/hero"
import Mission from "../components/homepage/mission/mission"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = props => {
  const homePage = get(props, "data.contentfulHome")
  const mission = homePage.homepageSections[0]
  const everyoneWelcome = homePage.homepageSections[1]
  const upToDate = homePage.homepageSections[2]

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        smallTitle={homePage.smallTitle}
        bigTitle={homePage.bigTitle}
        subheading={homePage.subheadingForTitle}
      />
      <Mission
        title={mission.title}
        blurbText={mission.blurbText}
        ctaTitle={mission.ctaTitle}
        ctaLink={mission.ctaLink}
      />
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
        subTitle
        link
      }
    }
  }
`
