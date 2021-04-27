import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import History from "../components/what-we-do/history/history"
import IndustryBG from "../components/what-we-do/industry-bg/industry-bg"
import ProgrammingCard from "../components/what-we-do/programming-cards/programming-card"
import Platforms from "../components/what-we-do/platforms/platforms"
import { CardsContainer } from "../page-styles/what-we-do-styles"

const WhatWeDo = props => {
  const whatWeDo = get(props, "data.contentfulWhatWeDo")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="What We Do" />
      <Header
        title={whatWeDo.title}
        subheading={whatWeDo.subheadingForTitle}
        imageBool={true}
      />
      <History
        title={whatWeDo.history.title}
        timeline={whatWeDo.timelineSvg}
        mobileTimeline={whatWeDo.mobileTimelineSvg}
      />
      <IndustryBG
        title={whatWeDo.industryBackgroundTitle}
        blurb={whatWeDo.industryBackgroundBlurb}
        image={whatWeDo.industryBackgroundImage}
        mobileImage={whatWeDo.mobileIndustryBackgroundImage}
        imageAlt={whatWeDo.industryBackgroundImage.description}
      />
      <CardsContainer>
        {whatWeDo.programmingCards.map((card, index) => {
          return (
            <ProgrammingCard
              key={card.title}
              title={card.title}
              description={card.shortDescription.shortDescription}
              photo={card.photo}
              photoAlt={card.photo.description}
              link={card.link}
            />
          )
        })}
      </CardsContainer>
      <Platforms
        title={whatWeDo.platforms.title}
        platforms={whatWeDo.platforms.platforms}
      />
    </Layout>
  )
}

export default WhatWeDo

export const pageQuery = graphql`
  query whatWeDoQuery {
    contentfulWhatWeDo {
      title
      subheadingForTitle
      history {
        title
      }
      timelineSvg {
        file {
          url
        }
        description
      }
      mobileTimelineSvg {
        file {
          url
        }
        description
      }
      industryBackgroundTitle
      industryBackgroundBlurb {
        industryBackgroundBlurb
      }
      industryBackgroundImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      mobileIndustryBackgroundImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      programmingCards {
        title
        shortDescription {
          shortDescription
        }
        photo {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
        link
      }
      platforms {
        title
        platforms {
          platformTitle
          blurb
          ctaTitle
          ctaLink
        }
      }
    }
  }
`
