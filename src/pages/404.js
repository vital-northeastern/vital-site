import React from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ErrorBlock from "../components/404-error/error-block"

const NotFoundPage = props => {
  const errorPage = get(props, "data.contentfulErrorPage")
  return (
    <Layout>
      <SEO title="404: Not found" />
      <ErrorBlock
        title={errorPage.errorTitle}
        blurb={errorPage.blurb}
        featuredImage={errorPage.featuredImage}
        ctaTitle={errorPage.ctaTitle}
        ctaLink={errorPage.ctaLink}
      />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query errorQuery {
    contentfulErrorPage {
      errorTitle
      blurb
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      ctaTitle
      ctaLink
    }
  }
`
