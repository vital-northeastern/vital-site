import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Carousel from "../components/carousel-shared/carousel"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Calendar from "../components/whats-happening/calendar"
import Slack from "../components/whats-happening/slack"
import Header from "../components/header/header"
import MailingList from "../components/whats-happening/mailing-list"
import SocialMedia from "../components/whats-happening/social-media/social-media"
import { WhatsHappeningHolder } from "../components/whats-happening/whats-happening-styles"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="What's Happening" />
      <Header
        title={whatsHappening.title}
        subheading={whatsHappening.subheadingForTitle}
        imageBool={true}
      />
      <WhatsHappeningHolder>
        <Carousel
          title={whatsHappening.carouselTitle}
          carouselItems={whatsHappening.carouselItems}
          minItems={3}
          placeholderText={whatsHappening.defaultCarouselPlaceholder}
          placeholderTitle={whatsHappening.defaultCarouselItemTitle}
          placeholderDescription={whatsHappening.defaultCarouselItemDescription}
          openInNewTab={true}
          version={false}
        />
        <Calendar
          title={whatsHappening.calendarTitle}
          calendarEmbedCode={whatsHappening.calendarEmbedCode}
        />
        <SocialMedia
          title={whatsHappening.socialMediaTitle}
          instaPostId={whatsHappening.instagramPostToDisplay}
          facebookPageName={whatsHappening.facebookPageName}
        />
        <Slack
          title={whatsHappening.joinSlackTitle}
          link={whatsHappening.joinSlackLink}
          logo={whatsHappening.slackLogo}
          blurb={whatsHappening.joinSlackBlurb.joinSlackBlurb}
        />
        <MailingList title={whatsHappening.newsletterCtaTitle} />{" "}
      </WhatsHappeningHolder>
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
      defaultCarouselItemTitle
      defaultCarouselItemDescription
      defaultCarouselPlaceholder
      calendarTitle
      calendarEmbedCode
      socialMediaTitle
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
      socialMediaTitle
      instagramPostToDisplay
      facebookPageName
    }
  }
`
