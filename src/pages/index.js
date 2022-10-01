import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Carousel from "../components/carousel-shared/carousel"
import Hero from "../components/homepage/hero/hero"
import Mission from "../components/homepage/mission/mission"
import Inclusivity from "../components/homepage/inclusivity/inclusivity"
import StayInTheKnow from "../components/homepage/stay-in-the-know/stay-in-the-know"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { HomepageContentContainer } from "../components/homepage/shared-styles/homepage-shared-styles"

const IndexPage = props => {
  const homePage = get(props, "data.contentfulHome")
  const mission = homePage.homepageSections[0]
  const inclusivity = homePage.homepageSections[1]
  const stayInTheKnow = homePage.homepageSections[2]

  return (
    <Layout navbarstyle="home">
      <SEO title="Home" />
      <HomepageContentContainer>
        <Hero
          smallTitle={homePage.smallTitle}
          bigTitle={homePage.bigTitle}
          subheadingPartOne={homePage.subheadingForTitlePartOne}
          subheadingPartTwo={homePage.subheadingForTitlePartTwo}
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
          minItems={0}
          openInNewTab={false}
          primary={true}
          version2={false}
        />
      </HomepageContentContainer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query homeQuery {
    contentfulHome {
      smallTitle
      bigTitle

      subheadingForTitlePartOne
      subheadingForTitlePartTwo
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
