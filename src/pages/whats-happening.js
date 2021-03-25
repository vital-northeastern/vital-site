import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/whats-happening/carousel"
import Calendar from "../components/whats-happening/calendar"
import Slack from "../components/whats-happening/slack"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout>
      <SEO title="What's Happening" />
      <h1>{whatsHappening.title}</h1>
      <Carousel
        title={whatsHappening.carouselTitle}
        carouselItems={whatsHappening.carouselItems}
      />
      <Calendar title={whatsHappening.calendarTitle} />
      <h3>{whatsHappening.socialMediaTitle}</h3>
      <Slack
        title={whatsHappening.joinSlackTitle}
        link={whatsHappening.joinSlackLink}
        logo={whatsHappening.slackLogo}
      />
      <a href={whatsHappening.newsletterCtaLink}>
        <button type="button">{whatsHappening.newsletterCtaTitle}</button>
      </a>
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
          description
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
        description
      }
      newsletterCtaTitle
      newsletterCtaLink
    }
  }
`
