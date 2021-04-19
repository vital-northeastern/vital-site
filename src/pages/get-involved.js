import React from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Introduction from "../components/get-involved/introduction/introduction"
import Eboard from "../components/get-involved/eboard/eboard"
import Involvement from "../components/get-involved/involvement/involvement"
import Position from "../components/get-involved/position/position"
import ApplicationInfo from "../components/get-involved/application-info/application-info"
import { PositionCardsContainer } from "../page-styles/get-involved-styles"

const GetInvolved = props => {
  const involvedPage = get(props, "data.contentfulGetInvolvedPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="Get Involved" />
      <Header
        title={involvedPage.title}
        subheading={involvedPage.subheadingForTitle}
        imageBool={false}
      />
      <Introduction blurb={involvedPage.introductionBlurb.introductionBlurb} />
      <Eboard
        title={involvedPage.eboardTitle}
        description={involvedPage.eboardDescription}
        ctaLink={involvedPage.ctaLink}
        ctaTitle={involvedPage.ctaTitle}
      />
      <Involvement
        title={involvedPage.involvementIntroTitle}
        blurb={involvedPage.involvementBlurb}
        disclaimer={involvedPage.disclaimer}
      />
      <PositionCardsContainer>
        {involvedPage.positions.map((position, index) => {
          return (
            <Position
              key={position.positionTitle}
              index={index}
              title={position.positionTitle}
              description={position.description}
              featuredImage={position.featuredImage}
              featuredImageAlt={position.featuredImage.description}
            />
          )
        })}
      </PositionCardsContainer>
      <ApplicationInfo
        subheading={involvedPage.applySubheading}
        applicationEmail={involvedPage.applicationEmail}
        ctaLink={involvedPage.emailCtaLink}
        ctaTitle={involvedPage.emailCtaText}
      />
    </Layout>
  )
}

export default GetInvolved

export const pageQuery = graphql`
  query involvedQuery {
    contentfulGetInvolvedPage {
      title
      subheadingForTitle
      introductionBlurb {
        introductionBlurb
      }
      involvementIntroTitle
      involvementBlurb
      disclaimer
      eboardTitle
      eboardDescription
      ctaTitle
      ctaLink
      positions {
        positionTitle
        description {
          description
        }
        featuredImage {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      applySubheading
      applicationEmail
      emailCtaLink
      emailCtaText
    }
  }
`
