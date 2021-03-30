import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Hero from "../components/homepage/hero/hero"
import Mission from "../components/homepage/mission/mission"
import Inclusivity from "../components/homepage/inclusivity/inclusivity"
import StayInTheKnow from "../components/homepage/stay-in-the-know/stay-in-the-know"
import Carousel from "../components/homepage/carousel/carousel"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const homePage = get(props, "data.contentfulHome")
  const mission = homePage.homepageSections[0]
  const inclusivity = homePage.homepageSections[1]
  const stayInTheKnow = homePage.homepageSections[2]

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
      <Inclusivity
        title={inclusivity.title}
        blurbText={inclusivity.blurbText}
        ctaTitle={inclusivity.ctaTitle}
        ctaLink={inclusivity.ctaLink}
        carousel={homePage.everyoneWelcomeCarousel}
      />
      <StayInTheKnow
        title={stayInTheKnow.title}
        blurbText={stayInTheKnow.blurbText}
        ctaTitle={stayInTheKnow.ctaTitle}
        ctaLink={stayInTheKnow.ctaLink}
        upcomingEvent={homePage.upcomingEvent}
      />
      <Carousel
        title={homePage.carouselTitle}
        carouselItems={homePage.carouselItems}
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
        subTitle
        link
      }
    }
  }
`
