import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout>
      <SEO title="What's Happening" />
      <h1>{whatsHappening.title}</h1>
      <p>{whatsHappening.carouselTitle}</p>
      {whatsHappening.carouselItems.map((item, index) => {
        return (
          <div>
            <h4>{item.title}</h4>
            <p>{item.subTitle}</p>
            <a href={item.link}>Learn More</a>
            <Img
              className="featured"
              fluid={item.featuredImage.fluid}
              alt={item.featuredImage.description}
            />
          </div>
        )
      })}
      <h3>{whatsHappening.calendarTitle}</h3>
      <h3>{whatsHappening.socialMediaTitle}</h3>
      <a href={whatsHappening.joinSlackLink}>
        <button type="button">{whatsHappening.joinSlackTitle}</button>
      </a>
      <Img
        className="featured"
        fluid={whatsHappening.slackLogo.fluid}
        alt={whatsHappening.slackLogo.description}
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
