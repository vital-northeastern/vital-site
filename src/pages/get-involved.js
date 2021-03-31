import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Introduction from "../components/get-involved/introduction"
import Eboard from "../components/get-involved/eboard"
import Position from "../components/get-involved/position"
import ApplicationInfo from "../components/get-involved/application-info"

const GetInvolved = props => {
  const involvedPage = get(props, "data.contentfulGetInvolvedPage")

  return (
    <Layout>
      <SEO title="Get Involved" />
      <Introduction
        title={involvedPage.title}
        subheadingForTitle={involvedPage.subheadingForTitle}
        involvementIntroTitle={involvedPage.involvementIntroTitle}
        involvementBlurb={involvedPage.involvementBlurb}
        disclaimer={involvedPage.disclaimer}
      />
      <Eboard
        title={involvedPage.eboardTitle}
        description={involvedPage.eboardDescription}
        ctaLink={involvedPage.ctaLink}
        ctaTitle={involvedPage.ctaTitle}
      />
      <div>
        {involvedPage.positions.map(position => {
          return (
            <Position
              title={position.positionTitle}
              description={position.description}
              featuredImage={position.featuredImage}
              featuredImageAlt={position.featuredImage.description}
            />
          )
        })}
      </div>
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
