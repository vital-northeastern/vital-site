import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel-shared/carousel"
import Calendar from "../components/whats-happening/calendar"
import Slack from "../components/whats-happening/slack"
import Header from "../components/header/header"
import MailingList from "../components/whats-happening/mailing-list"
import SocialMedia from "../components/whats-happening/social-media/social-media"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  console.log(whatsHappening)

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
        minItems={5}
        placeholderText={whatsHappening.defaultCarouselPlaceholder}
        placeholderTitle={whatsHappening.defaultCarouselItemTitle}
        placeholderDescription={whatsHappening.defaultCarouselItemDescription}
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
      <SocialMedia
        instaLink={whatsHappening.instagramPostToDisplay}
        facebookPage={whatsHappening.facebookUrl}
      />
    </Layout>
  )
}

export default WhatsHappening

export const pageQuery = graphql`
  query whatsHappeningQuery {
    contentfulWhatsHappeningPage {
      title
      subheadingForTitle
<<<<<<< HEAD
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
=======
      socialMediaTitle
      instagramPostToDisplay
      facebookUrl
>>>>>>> origin/social-media
    }
  }
`
