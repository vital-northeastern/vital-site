import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import SocialMedia from "../components/whats-happening/social-media/social-media"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="What's Happening" />
      <Header
        title={whatsHappening.title}
        mobileTitle={whatsHappening.title}
        subheading={whatsHappening.subheadingForTitle}
        imageBool={true}
      />
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
      socialMediaTitle
      instagramPostToDisplay
      facebookUrl
    }
  }
`
