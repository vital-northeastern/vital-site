import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Position from "../components/get-involved/position"

const GetInvolved = props => {
  const involvedPage = get(props, "data.contentfulGetInvolvedPage")

  return (
    <Layout>
      <SEO title="Get Involved" />
      <h1>{involvedPage.title}</h1>
      <p>{involvedPage.subheadingForTitle}</p>
      <h4>{involvedPage.involvementIntroTitle}</h4>
      <p>{involvedPage.involvementBlurb}</p>
      <p>{involvedPage.disclaimer}</p>
      <h4>{involvedPage.eboardTitle}</h4>
      <p>{involvedPage.eboardDescription}</p>
      <a href={involvedPage.ctaLink}>
        <button type="button">{involvedPage.ctaTitle}</button>
      </a>
      <div>
        {involvedPage.positions.map((position, index) => {
          return (
            <Position
              title={position.positionTitle}
              description={position.description}
              featuredImage={position.featuredImage}
            />
          )
        })}
      </div>
      <h4>{involvedPage.applicationEmail}</h4>
      <p>{involvedPage.deadlineForApplication}</p>
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
