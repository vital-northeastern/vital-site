import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout>
      <SEO title="What's Happening" />
      <h1>{whatsHappening.title}</h1>
      <p>Welcome to page2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default WhatsHappening

export const pageQuery = graphql`
  query whatsHappeningQuery {
    contentfulWhatsHappeningPage {
      title
      carouselTitle
      carouselItems {
        title
        subTitle
        link
        featuredImage {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
        }
      }
      calendarTitle
      socialMediaTitle
      instagramHandle
      facebookUrl
      joinSlackTitle
      joinSlackLink
      slackLogo {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      newsletterCtaTitle
      newsletterCtaLink
    }
  }
`
