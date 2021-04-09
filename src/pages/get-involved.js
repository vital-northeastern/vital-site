import React from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Eboard from "../components/get-involved/eboard/eboard"
import Introduction from "../components/get-involved/introduction/introduction"
import Position from "../components/get-involved/position/position"
import ApplicationInfo from "../components/get-involved/application-info/application-info"
import { PositionCardsContainer } from "../page-styles/get-involved-styles"

const GetInvolved = props => {
  const involvedPage = get(props, "data.contentfulGetInvolvedPage")

  return (
    <Layout navbarStyle="gradient">
      <SEO title="Get Involved" />
      <Header
        title={involvedPage.title}
        subheading={involvedPage.subheadingForTitle}
        imageBool={false}
      />
      <Eboard
        title={involvedPage.eboardTitle}
        description={involvedPage.eboardDescription}
        ctaLink={involvedPage.ctaLink}
        ctaTitle={involvedPage.ctaTitle}
      />
      <Introduction
        title={involvedPage.involvementIntroTitle}
        blurb={involvedPage.involvementBlurb}
        disclaimer={involvedPage.disclaimer}
      />
      <PositionCardsContainer>
        {involvedPage.positions.map((position, index) => {
          return (
            <Position
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
        applicationEmail={involvedPage.applicationEmail}
        deadlineForApplication={involvedPage.deadlineForApplication}
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
      applicationEmail
      deadlineForApplication
    }
  }
`
