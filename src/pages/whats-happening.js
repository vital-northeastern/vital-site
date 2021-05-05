import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Carousel from "../components/whats-happening/carousel"
import Calendar from "../components/whats-happening/calendar"
import Slack from "../components/whats-happening/slack"
import Header from "../components/header/header"
import MailingList from "../components/whats-happening/mailing-list"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout navbarStyle="gradient">
      <SEO title="What's Happening" />
      <Header
        title={whatsHappening.title}
        mobileTitle={whatsHappening.title}
        subheading={whatsHappening.subheadingForTitle}
        imageBool={true}
      />
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
        blurb={whatsHappening.joinSlackBlurb.joinSlackBlurb}
      />
      <MailingList title={whatsHappening.newsletterCtaTitle} />

      {/* <a href={whatsHappening.newsletterCtaLink}>
        <button type="button">{whatsHappening.newsletterCtaTitle}</button>
      </a> */}
    </Layout>
  )
}

export default WhatsHappening

export const pageQuery = graphql`
  query whatsHappeningQuery {
    contentfulWhatsHappeningPage {
      title
      subheadingForTitle
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
      joinSlackBlurb {
        joinSlackBlurb
      }
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
