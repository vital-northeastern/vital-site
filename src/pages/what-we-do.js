import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import History from "../components/what-we-do/history/history"
import IndustryBG from "../components/what-we-do/industry-bg/industry-bg"
import ProgrammingCard from "../components/what-we-do/programming-cards/programming-card"

const WhatWeDo = props => {
  const whatWeDo = get(props, "data.contentfulWhatWeDo")

  return (
    <Layout navbarStyle="gradient">
      <SEO title="What We Do" />
      <Header
        title={whatWeDo.title}
        subheading={whatWeDo.subheadingForTitle}
        imageBool={true}
      />
      <h1>{whatWeDo.title}</h1>
      <History title={whatWeDo.history.title} timeline={whatWeDo.timeline} />
      <IndustryBG
        title={whatWeDo.industryBackgroundTitle}
        blurb={whatWeDo.industryBackgroundBlurb}
        image={whatWeDo.industryBackgroundImage}
        imageAlt={whatWeDo.industryBackgroundImage.description}
      />
      {whatWeDo.programmingCards.map((card, index) => {
        return (
          <ProgrammingCard
            key={index}
            title={card.title}
            description={card.shortDescription}
            photo={card.photo}
            photoAlt={card.photo.description}
          />
        )
      })}
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
        historyMilestones {
          title
          milestoneDescription {
            milestoneDescription
          }
        }
      }
      timeline {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
        description
      }
      industryBackgroundTitle
      industryBackgroundBlurb {
        industryBackgroundBlurb
      }
      industryBackgroundImage {
        fluid(maxWidth: 750) {
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
      }
      platforms {
        platformTitle
        blurb
        ctaTitle
        ctaLink
      }
    }
  }
`
